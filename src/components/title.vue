<template>
  <div class='wrapper'>
    <div class='blurred-wrapper'>
      <h1 class='blurred'>
        PHANTASY STAR <br> ONLINE 
        <!-- PHA &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp TAR -->
      </h1>
    </div>
    <slot></slot>
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

    //filter: drop-shadow(0px 0px 2px rgba(0, 0, 235, 0.643))
    //filter: drop-shadow(0px 0px 20px rgb(26, 165, 246))
    //filter: drop-shadow(0px 0px 20px rgb(0, 123, 255)) drop-shadow(0px 0px 20px rgba(0, 162, 255, 0.179))
    //mix-blend-mode:hard-light
  }

  .blurred-wrapper {
    position: absolute;
    filter: blur(1.5vw);
    transform: scale( var(--blur), 0.001 );
  }

  .blurred {
    color: transparent;
    display: flex;
    transform: scale( calc( 1/var(--blur) ), calc(1000 + 30));

    background: linear-gradient(to right, rgba(0, 149, 255, 1), rgba(0, 149, 255, 0.5), rgba(0, 149, 255, 1));
    -webkit-background-clip: text;
    background-clip: text;
  }


  .still{
    color:black;
    z-index: 6 !important;
    opacity: 0.9
  }

  .still {
    position: relative;
    
    font-family: "Times New Roman", Times, serif;
    font-weight: lighter;
    color: rgb(37, 37, 37);
    -webkit-text-stroke: .1vw rgba(255, 255, 255, 0.271);
    text-shadow: 0px 0px .3vw #fff;
    
    filter: drop-shadow(0px 0px .14vw rgba(250, 250, 255, 1))
            drop-shadow(0px 0px .14vw rgba(250, 250, 255, 0.8))
            drop-shadow(0px 0px .14vw rgba(250, 250, 255, 0.8))
  }
</style>