  

<template>
  
  <svg class="hex2" viewBox="0 0 8465 8477">
    <mask id="myMask">
      <circle id="circle-mask" cx="50%" cy="50%" r="30%" stroke-width="8%" stroke="white" fill="black" />
    </mask>

    <Hex class="hex" width="100%" stroke="red" fill="white" mask="url(#myMask)"/>
  </svg>
</template>

<script setup lang="ts">
  import Hex from './hexgrid.vue'
</script>

<style scoped lang="scss">
  .hex2 {
    position: absolute;
    //filter: blur(.2rem);
    //stroke: rgba(255, 255, 255, 0.256) !important;
    stroke: white;
    z-index: 2;
  }

  #circle-mask {
    animation: expand-mask 13.3s linear infinite;
  }

  @keyframes expand-mask {
    0%{
      r: 0%;
    }
    2%{
      r: 20%;
    }
    3%{
      r: 30%;
    }
    6%{
      r: 50%;
    }
    9%{
      r: 100%;
    }
    100%{
      r: 100%;
    }
  }
</style>