
<template>
  <div class="star-stream" ref="starStream"> 

  </div>
</template>

<script setup lang="ts">
  // @ts-nocheck
  import useTwo from './useTwo'

  import { onMounted } from "vue"

  let starStream = $ref(null)
  let two = useTwo($$(starStream))

  let speed = Math.round(two.width / 375)
  let maxSize = Math.round(two.width / 60) + 1 
  let amount = 300

  function genParticle() {
    // Generate particle attributes
    let size = Math.max(maxSize * Math.random(), Math.round(two.width / 80) )
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
    // Generate particle color
    return `hsl(206, 100%, ${Math.max(100 * size / maxSize, 40)}%)`
  }

  function genV() {
    // Generate particle velocity
    //return (Math.max(Math.random(), 0.05) - 0.5) * speed
    // return Math.round( (Math.random() - 0.5) * speed)
    return (Math.random() > 0.5? 1 : -1) * Math.max(Math.random() * speed, 0.5)
  }

  onMounted(() => {
    let circleArr = []

    two.bind('update', function(frameCount) {
      // draw loop

      if(two.scene.children.length < amount && frameCount % 40) {
        // add particles to scene
        var { x, y, size, color, vx } = genParticle()
      
        var circle = two.makeCircle(x, y, size, 100);
        circle.vx = vx

        circle.fill = color
        circle.noStroke()

        circleArr.push(circle)
      }
      
      if ( frameCount === 130 ) {
        // add white ellipse to center to make it look more full
        // Should prob just init with a bunch of particles that only bounce in the center
        let ell = two.makeEllipse(0, 0, two.width/16, two.width/100)
        ell.fill = 'rgba(225, 225, 225, 1)'
      }

      for (var circle of circleArr) {   
        // update all circles 
        
        if (circle.position.x < -two.width / 2 || circle.position.x > two.width / 2) {
          // regenerate circle in center once it leaves specified range
          var { y, size, color, vx } = genParticle()
          circle.position.x = 0
          circle.position.y = y
          circle.vx = vx
          circle.radius = size
          circle.fill = color
        } else {
          // if not regenerated, update position
          circle.position.x += circle.vx
        }
        
        if (circle.radius > 2 && Math.abs(circle.position.x) >= two.width/16 ) {
          // outside center area, shrink size and update color
          circle.radius -= (circle.radius / maxSize) * 0.1
          circle.fill = calcColor(circle.radius)
        }
        
        
        if (Math.abs(circle.position.x) > two.width/16 ) {
          // navigate vertical displacement toward center over time
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