
<template>
  <div class="star-stream" ref="starStream"> 

  </div>
</template>

<script setup lang="ts">
  // @ts-nocheck
  import {onMounted} from "vue"
  import Two from "two.js";

  let starStream = $ref(null)

  var two = new Two({
    type: Two.Types.canvas,
    fullscreen: true,
    autostart: true
  })

  two.renderer.ctx.globalCompositeOperation = 'screen';
  two.scene.translation.set(two.width / 2, (two.height / 2) - (two.height/19));
  two.bind('resize', function() {
    two.scene.translation.set(two.width / 2, two.height / 2);
  })

  onMounted(() => {
    two.appendTo(starStream);
  });


  let speed = 2
  let maxSize = 16
  let amount = 250

  function genParticle() {
    let size = Math.max(maxSize * Math.random(), 9)
    let p = {
      x: 0, 
      y: (maxSize/2) * (Math.random()-0.5),
      color: calcColor(size),
      vx: genV(),
      size
    }
    return p
  }

  function calcColor (size) {
    return `hsl(206, 100%, ${Math.max(100 * size / maxSize, 40)}%)`
  }

  function genV() {
    //return (Math.max(Math.random(), 0.05) - 0.5) * speed
    // return Math.round( (Math.random() - 0.5) * speed)
    return (Math.random() > 0.5? 1 : -1) * Math.max(Math.random() * speed, 0.5)
  }

  onMounted(() => {
    two.bind('update', function(frameCount) {
      if(two.scene.children.length < amount && frameCount % 40) {
        var { x, y, size, color, vx } = genParticle()
      
        var circle = two.makeCircle(x, y, size, 100);
        circle.vx = vx

        circle.fill = color
        circle.noStroke()
      }
      
      if ( frameCount === 130 ) {
        let ell = two.makeEllipse(0, 0, two.width/16, two.width/100)
        ell.fill = 'rgba(225, 225, 225, 1)'
      }

      for (var i = 0; i < two.scene.children.length; i++) {
        var circle = two.scene.children[i];
        
        if (circle.position.x < -two.width / 3 || circle.position.x > two.width / 3) {
          var { y, size, color, vx } = genParticle()
          circle.position.x = 0
          circle.position.y = y
          circle.vx = vx
          circle.radius = size
          circle.fill = color
        } else {
          circle.position.x += circle.vx
        }
        
        if (circle.radius > 2 && Math.abs(circle.position.x) >= two.width/20 ) {
          circle.radius -= (circle.radius / maxSize) * 0.07
          circle.fill = calcColor(circle.radius)
        }
        
        
        if (Math.abs(circle.position.x) > two.width/16 ) {
          circle.position.y += (0 - circle.position.y) * 0.01;
        }
      }
    })
  })
</script>

<style scoped>
  .star-stream {
    filter: blur(.2rem) !important
  }
</style>