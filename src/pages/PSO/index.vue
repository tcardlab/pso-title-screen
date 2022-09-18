<template>
  <div class="page">
 
    <Hex class="hex1" width="140vw" />

    <Hex2 class="hex2" width="140vw" />

    <div class='wrapper'>
      <div class='blurred-wrapper'>
        <h1 class='blurred'>
          PHANTASY STAR <!-- <br>ONLINE  -->
        </h1>
      </div>
      <h1 class='still'> PHANTASY STAR<br>ONLINE </h1>
    </div>

    <Sigil class="sigil" width="120vw"/>

    <Twinkle class="twinkle"/>
    <StarStream class="starStream" />
    
  </div>
</template>

<script setup lang="ts">
  import Sigil from './sigil.vue'
  import Hex from './hexgrid.vue'
  import Hex2 from './hexgrid2.vue'

  import StarStream from './starStream.vue'
  import Twinkle from './twinkle.vue'
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

  filter: blur(0.06rem)
  // whish this wasn't laggy either
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
  transform: scale( calc( 1/var(--blur) ), calc(1000 + 100));
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
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.318);
  text-shadow: 0px 0px 2px #fff;
  
  filter: drop-shadow(0px 0px 2px rgba(250, 250, 255, 0.434))
          drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.521))
}
</style>


<style scoped lang="scss">
  * {
    --sigil-default: rgba(137, 235, 255, 0.809)
  }
  
  .sigil {
    position: absolute;
    z-index: 1;
    //filter: blur(0.1rem);

    animation: light-up 13.3s linear infinite;
    opacity: .7
  }


  @keyframes light-up {
    0%{
      fill: var(--sigil-default);
    }
    2%{
      fill: rgba(255, 255, 255, 0.634);
    }
    3%{
      fill: rgba(254, 254, 223, 0.634);
    }
    6%{
      fill: rgba(255, 255, 255, 0.634);
    }
    9%{
      fill: rgba(255, 255, 255, 0.807);
    }
    15%{
      fill:  var(--sigil-default);
    }
    100%{
      fill: var(--sigil-default)
    }
  }
</style>

<style scoped lang="scss">
  .hex1 {
    position: absolute;
    filter: blur(.35rem); //blur(8px);
    opacity: 75%;
    translate: -6vw;
    z-index: 1;
  }

  .hex2 {
    position: absolute;
    //filter: blur(.15rem);
    stroke: rgba(255, 255, 255, 0.5) !important;
    z-index: 2;
  }
</style>


<style scoped lang="scss">
  .starStream, .twinkle {
    position: absolute;
    height: 100vh;
    width: 100vw;
    margin-top: -6vw !important;
  }

  .starStream, .twinkle {
    z-index: 3;
  }

  .twinkle {
    z-index: 1;
  }
</style>