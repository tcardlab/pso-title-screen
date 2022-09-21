<template>
  <div class="twinkle" ref="twinkle"> 
  </div>
</template>


<script setup lang="ts">
  // @ts-nocheck
  import useTwo from './useTwo'
  import Two from 'two.js'

  let twinkle = $ref(null)
  let two = useTwo($$(twinkle))


  import { onMounted } from "vue"
  onMounted(()=>{
    var amount = 30;
    for (var j = 0; j < amount; j++) {

      var x = 0, y = 0;
      var length = Math.round (two.width / 7);
      var resolution = 4;
      var points = [];
      var vx = (Math.max(Math.random(), 0.2) - 0.5) * length;
      var vy = (Math.max(Math.random(), 0.2) - 0.5) * length;

      for (var i = 0; i < resolution; i++) {
        points.push(new Two.Anchor(x, y));
        x += vx;
        y += vy;
      }

      var sparkline = two.makeCurve(points, true);
      sparkline.noFill();
      sparkline.linewidth = 2 * Math.random();
      sparkline.cap = 'round';
      sparkline.stroke = 'rgba(225, 225, 225, 0.6)';
      two.add(sparkline);
    }


    two.bind('update', function(frameCount) {
      var frames = 100;
      var thickness = 0.7;

      for (var i = 0; i < two.scene.children.length; i++) {
        var child = two.scene.children[i];
        var pct = i / two.scene.children.length;
        var offset = frames * pct;
        var ending = ((offset + frameCount) / frames) % 1
        child.ending = ending;
        child.beginning = Math.max(ending - thickness * pct + thickness, 0);
        child.opacity = 1 - child.ending;
      }

    });
  })

</script>


<style scoped lang="scss">
  .twinkle {
   // filter: blur(0.05rem) !important
   transform: translateY(-1vw);
  }
</style>