<template>
  <div class='wrapper'>
    <div class='blurred-wrapper'>
      <h1 class='blurred'>
        PHANTASY STAR <br> ONLINE 
        <!-- PHA &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp TAR -->
      </h1>
    </div>
    <h1 class='still'> PHANTASY STAR<br>ONLINE </h1>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped lang="scss">
  .wrapper {
    --blur: 1;
    font-size: 3vw;
    transform: scale(1.4,1);
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
    color: rgba(0, 149, 255, 0.9);
    display: flex;
    transform: scale( calc( 1/var(--blur) ), calc(1000 + 40));
  }


  .still{
    color:black;
    z-index: 6 !important;
  }

  .still {
    position: relative;
    
    font-family: "Times New Roman", Times, serif;
    font-weight: lighter;
    color: black;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.388);
    text-shadow: 0px 0px 3px #fff;
    
    filter: drop-shadow(0px 0px 2px rgba(250, 250, 255, 0.643))
            drop-shadow(0px 0px 3px rgba(250, 250, 255, 0.545))
            drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.521))
  }
</style>