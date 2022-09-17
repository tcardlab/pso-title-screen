<template>
  <div class="container">

    <div class='blurred-wrapper'>
      <h1> PHANTASY STAR<br>ONLINE </h1>
    </div>
    <!-- <Sigil/> -->

    
    

  </div>
</template>

<script setup lang="ts">
  import Sigil from './sigil.vue'

</script>

<style scoped lang="scss">

.container {
  background-color: black;
  height: 100vh;
  width: 100vw;
}

h1 {
  position: relative;
  font-size: 100px;
  font-family: "Times New Roman", Times, serif;
  font-weight: lighter;
  color: black;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.599);
  text-shadow: 0px 0px 6px #fff;
  transform: scale(1.5,1) ;
  //box-shadow: -4px -3px 45px 21px blue;
  filter: drop-shadow(0px 0px 3px rgb(185, 185, 240))
          //drop-shadow(0px 0px 4px rgb(178, 178, 255))
}


/* h1::before {
  content:'PHANTASY STAR';
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: -1;

  color: rgba(0, 145, 255, 0.155);
  -webkit-text-stroke: transparent;
  
  text-shadow: 0px 0px 10px rgba(24, 112, 235, 0.383);
  
  filter: drop-shadow(0px 0px 20px rgb(91, 210, 218));
  transform: scale(1.04,1.07) translateY(-2px)
} */


h1::before {
  content:'PHANTASY STAR';
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: -1;

  color: rgba(0, 145, 255, 0.853);
  -webkit-text-stroke: transparent;
  
  //text-shadow: 0px 0px 10px rgba(24, 112, 235, 0.383);
  
  /* filter: drop-shadow(30px 0px 60px rgb(91, 210, 218))
          drop-shadow(-30px 0px 60px rgb(91, 210, 218)); */

  //transform: scale( calc( 1/var(--blur) ), 1000 );
  //filter: blur(.2rem);

  transform: scale( -1.07, 1);
  filter: blur(1rem);
}

/* .blurred-wrapper {
  font-size: 5rem;
  --blur: 5;
  transform: scale( 1.5, 1  )
} */

</style>