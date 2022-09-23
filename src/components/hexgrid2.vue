  

<template>
  <svg class="hex2" viewBox="0 0 8465 8477">
    <mask id="myMask">
      <circle id="circle-mask" cx="50%" cy="50%" r="30%" stroke-width="8%" stroke="white" fill="black" />
    </mask>

    <Hex class="hex" stroke-width="72" width="100%" mask="url(#myMask)"/>
  </svg>
</template>

<script setup lang="ts">
  import Hex from './hexgrid.vue'
</script>

<style scoped lang="scss">
  svg {
    overflow: visible;
    transform: scale(0.5)
  }
  .hex2 {
    position: absolute;
    //filter: blur(.2rem);
    //stroke: rgba(255, 255, 255, 0.256) !important;
    stroke: white;
    z-index: 2;
    //animation: dim-grid 13.3s linear infinite;  // too laggy
  }

  #circle-mask {
    animation: expand-mask 13.3s linear infinite;
  }

  @keyframes expand-mask {
    0%{
      r: 0%;
      opacity: 100%;
    }
    2%{
      r: 20%;
    }
    3%{
      r: 30%;
    }
    6%{
      r: 50%;
      opacity: 35%
    }
    9%{
      r: 100%;
      opacity: 0%
    }
    100%{
      r: 100%;
      opacity: 0%
    }
  }

  /* @keyframes dim-grid {
    // using two animations adds more lag 
    0%{
      opacity: 100%;
    }
    6%{
      opacity: 50%;
    }
    9%{
      opacity: 0%;
    }
    100%{
      opacity: 0%;
    }
  } */
</style>