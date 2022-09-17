<template>
  <div class="page">
 

    <div class='wrapper'>
      <div class='blurred-wrapper'>
        <h1 class='blurred'>
          PHANTASY STAR <!-- <br>ONLINE  -->
        </h1>
      </div>
      <h1 class='still'> PHANTASY STAR<br>ONLINE </h1>
    </div>


    <Sigil class="sigil"/>
    
    
  </div>
</template>

<script setup lang="ts">
  import Sigil from './sigil.vue'

</script>

<style scoped lang="scss">

.page {
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: black;
  margin: 0;

  align-items: center;
  justify-content: center;
  position: relative;
}

.wrapper {
  --blur: 1;
  font-size: 3vw;
  transform: scale(1.5,1);
  text-align: center;


  position:relative;
  display:flex;
  justify-content:center;
  margin-top: -6vw;
  //align-items: center;

  width: 100%;

  z-index: 2;
}

.blurred-wrapper {
  position: absolute;
  filter: blur(1rem);
  transform: scale( var(--blur), 0.001 );
}

.blurred {
  color: rgba(0, 149, 255, 0.849);
  display: flex;
  transform: scale( calc( 1/var(--blur) ), 1000);
}


.still{
  color:black;
  z-index: 1;
}

.still {
  position: relative;
  
  font-family: "Times New Roman", Times, serif;
  font-weight: lighter;
  color: black;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.318);
  text-shadow: 0px 0px 2px #fff;
  
  filter: drop-shadow(0px 0px 2px rgba(250, 250, 255, 0.434))
          drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.521))
}
</style>


<style scoped lang="scss">
  .sigil {
    position: absolute;
    z-index: 0;
  }
</style>