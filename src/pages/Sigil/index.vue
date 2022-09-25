<template>
  <div class="editor-container">
    <div class="editor">

      <details>
        <summary> Display Port </summary>

        <label>OffsetX:  {{offsetX}}</label> <button @click="_offsetX">reset</button> <br>
        <input type="range"  min="-1" max="1" step="0.005" v-model="offsetX">

        <label>OffsetY:  {{offsetY}}</label> <button @click="_offsetY">reset</button> <br>
        <input type="range"  min="-10" max="0" step="0.005" v-model="offsetY">

        <label>Opacity:  {{opacity}}</label> <button @click="_opacity">reset</button> <br>
        <input type="range"  min="0" max="1" step="0.05" v-model="opacity">
      </details>


      <circle_1_Editor>
        <circle_1a_Editor/>
      </circle_1_Editor>
      

      <circle_2_Editor/>

      <circle_3_Editor/>

    </div>

    <div class="display-port"  ref="svg">
      <img class="refImg" draggable="false" :src="refImg">

      <div class="svg-out">
        <jsxNode />

        <svg viewBox="-500 -500 1000 1000">
          <circle_1/>
          <circle_1a/>

          <circle_2/>

          <circle_3 class="dashed"/>
        </svg>

      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
  import refImg from './PSO.png'
  import memRef from '@/use/memRef'
  import genCircle from './circle'

  import {reactive, computed} from 'vue'

  let [offsetX, _offsetX] = memRef(0.155)
  let [offsetY, _offsetY] = memRef(-5.25)
  let [opacity, _opacity] = memRef(.6)

  
  

  let [circle_1, circle_1_Editor, circle_1_val] = genCircle('circle_1', {r: 14.155,  s: 1.81})

  let [circle_1a, circle_1a_Editor] = genCircle('circle_1a', {x: circle_1_val.r, y: circle_1_val.r, r: 14.155,  s: 1.81}, {x:[-50,50], y:[-50,50]})


  let [circle_2, circle_2_Editor] = genCircle('circle_2', {r: 34.325,  s: 0.93})
  let [circle_3, circle_3_Editor, circle_3_val] = genCircle('circle_3', {x: 35.425, y: -20.485, r: 10.895,  s: 1.475}, {x:[-50,50], y:[-50,50]})
  let test = circle_3_val.r



  const jsxNode = () => <div style="color: orange">+</div>
</script>

<!-- Sigil Style-->
<style scoped lang="scss">
  svg {
    stroke: red;
    fill: none;

    overflow: visible;
    height: 100%;  //calc(100% + v-bind("(-1*offsetY)+'%'"));
    width: auto;
    opacity: v-bind(opacity)
  }

  .dashed {
    //stroke-dasharray: 92 22 35 22; // r = 10.895
    // stroke-dashoffset: 103;
    stroke-dasharray: v-bind("`${8.44*test} ${2.02*test} ${3.21*test} ${2.02 * test}`");
    stroke-dashoffset: v-bind("9.45*test")
  }
</style>

<!-- Layout Style-->
<style scoped lang="scss">
  .editor-container {
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: row;
  }
  .editor {
    height: 100%;
    width: 20%;
    background-color: grey;
    border-right: 2px solid black;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: start;
    //justify-content: center;
  }

  details {
    margin-bottom: 10px !important;
    width: 80%;
    &> label {
      display: inline-block;
      margin-top: 10px !important;
    }
    &> *:not(summary) {
      margin-left: 25px;
    }

    &> button {
      margin-left: auto;
      float: right
    }
  }

  .display-port {
    width: 80%;
    height: 100%;
    display: grid;
    background-color: black;
    overflow: visible;

    &> * {
      grid-area: 1 / 1;
      align-self: center;
      justify-self: center;
      height: 100vh;
      overflow: visible;
      //width: auto
    }
  }

  .refImg {
    opacity: .5;
    z-index: 0;
  }

  .svg-out {
    display: grid;
    z-index: 3;
    overflow: visible;
    transform: translate( v-bind("offsetX+'%'") , v-bind("offsetY+'%'"));

    &> * {
      grid-area: 1 / 1;
      align-self: center;
      justify-self: center;
    }
  }
</style>
