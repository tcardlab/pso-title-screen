<template>
  <div class="page vignette">
 
    <Hex class="hex1" width="140vw" stroke-width="75"/>

    <Text class="bg-text"/>

    <Hex2 class="hex2" width="140vw" />

    <Sigil class="sigil" width="120vw"/>

    <Orbs class="orbs" />

    <PSOTitle class="pso-title" />

    <!-- <Twinkle class="twinkle"/> -->
    <StarStreamF class="starStream" />

    <div class="action-text">
      <p>PRESS ENTER KEY</p>
    </div>

    <img class="scan-lines" src="@/assets/928ae6bbbd636c4d41c5681db4c85368c4dd6833.png">
    
  </div>
</template>

<script setup lang="ts">
  import Sigil from '@/components/sigil.vue'
  import Hex from '@/components/hexgrid.vue'
  import Hex2 from '@/components/hexgrid2.vue'
  import Orbs from '@/components/orbs.vue'
  import PSOTitle from '@/components/title.vue'

  import Text from './bgTextF.vue'
  import StarStreamF from './starStreamF.vue'
  //import Twinkle from './twinkle.vue'

  /* import { Howl } from 'howler'
  var sound = new Howl({
    src: ['src/assets/a_song_for_eternal_story.mp3'],
    // src: ['src/assets/my_song_for_eternal_story.wav'],
    loop: true
  });
  sound.play() */
</script>

<!-- Page & Cover styles  -->
<style scoped lang="scss">

  .page {
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: red;
    background-image: linear-gradient(148deg, rgb(0, 12, 56) 0%, rgb(0, 0, 0) 83%, rgb(0, 0, 0) 100%); //url(https://github.com/HelloKitty/Booma.PSOBB.Client/blob/master/Assets/Content/UI/Titlescreen/BackgroundPSO.png?raw=true);
    background-repeat: no-repeat;
    background-size: cover;

    margin: 0;

    align-items: center;
    justify-content: center;
    position: relative;

    //filter: blur(0.06rem)
    filter: blur(0.045rem);
    // whish this wasn't laggy either
  }

  .vignette {
    box-shadow: 0 0 12vw rgb(0, 0, 0) inset, 
                0 0 12vw rgba(0, 5, 87, 0.8) inset
  }

  .scan-lines {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    //opacity: 35%;
    

    // prevent scan-lines from squishing into oblivion
    min-width: 940px !important;
    min-height: 600px !important;


    opacity: 50%;
    mix-blend-mode: overlay;

    //opacity: 30%;
    //mix-blend-mode: color-burn;

    //opacity: 30%;
    //mix-blend-mode: luminosity;
  }
</style>


<!-- Sigil styles  -->
<style scoped lang="scss">
  * {
    --sigil-default: rgba(183, 224, 255, 0.95);
    // #6bc0e7;
    //rgba(139, 194, 214, 0.942);
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
      opacity: .7
    }
    2%{
      fill: rgba(255, 255, 218, 0.76);
    }
    6%{
      fill: rgb(255, 255, 255);
      //mix-blend-mode: luminosity;
    }
    10%{
      //mix-blend-mode: normal;
      fill: var(--sigil-default);
      opacity: .7
    }
    100%{
      fill: var(--sigil-default)
    }
  }
</style>


<!-- Hex styles  -->
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

  .bg-text {
    position: absolute;
    //filter: blur(.15rem);
    stroke: rgba(255, 255, 255, 0.5) !important;
    z-index: 1;
    opacity: 45%
  }
</style>


<!-- Title & Text Effect styles  -->
<style scoped lang="scss">
  .pso-title{
    z-index: 4;
    //opacity: 0.95
  }

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

  .orbs {
    position: absolute;
    z-index: 2 !important;
    //width: 90vw;
  }

  .action-text {
    position: absolute;
    z-index: 8;
    transform: translateY(20vw);
    opacity: 85%;
    animation: blink 4s infinite; // adds a lot of lag
  }

  .action-text > p {
    color:black;
    font-family: Sans-Serif;
    font-weight:bold;
    //-webkit-text-stroke: .7px rgb(255, 255, 255);
    text-shadow: 0px 0px .2vw #fff, 0px 0px .2vw #fff, 0px 0px .2vw #fff;
    filter: drop-shadow(0px 0px .1vw rgb(255, 255, 255))
            drop-shadow(0px 0px .1vw rgb(255, 255, 255))
            drop-shadow(0px 0px .1vw rgb(255, 255, 255));
    font-size: 2vw
  }

  @keyframes blink {
    0% {
      opacity: 0%
    }
    50%{
      opacity: 85%
    }
    100%{
      opacity: 0%
    }
  }
</style>
