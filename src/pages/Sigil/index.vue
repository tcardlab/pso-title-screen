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

      <details>
        <summary> circle-1: </summary>

        <label>r:  {{circle_1_r}}</label> <button @click="_circle_1_r">reset</button> <br>
        <input type="range"  min="0" max="15" step="0.005" v-model="circle_1_r"><br>

        <label>s:  {{circle_1_s}}</label> <button @click="_circle_1_s">reset</button> <br>
        <input type="range"  min="0" max="2" step="0.005" v-model="circle_1_s">
      </details>


      <details>
        <summary> circle-2: </summary>

        <label>r:  {{circle_2_r}}</label> <button @click="_circle_2_r">reset</button> <br>
        <input type="range"  min="0" max="40" step="0.005" v-model="circle_2_r"><br>

        <label>s:  {{circle_2_s}}</label> <button @click="_circle_2_s">reset</button> <br>
        <input type="range"  min="0" max="2" step="0.005" v-model="circle_2_s">
      </details>


      <circle_3_Editor/>

    </div>

    <div class="display-port"  ref="svg">
      <img class="refImg" draggable="false" :src="refImg">

      <div class="svg-out">
        <jsxNode />

        <svg viewBox="-500 -500 1000 1000">
          <circle id="circle_1" :r="circle_1_r+'%'" :stroke-width="circle_1_s+'%'" x="50%" y="50%"/>

          <circle id="circle_2" :r="circle_2_r+'%'" :stroke-width="circle_2_s+'%'" x="50%" y="50%"/>

          <circle_3/>
        </svg>

      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
  import refImg from './PSO.png'
  import memRef from '@/use/memRef'
  import genCircle from './circle'

  let [offsetX, _offsetX] = memRef(0.155)
  let [offsetY, _offsetY] = memRef(-5.25)
  let [opacity, _opacity] = memRef(.6)
  


  let [circle_1_r, _circle_1_r] = memRef(14.155)
  let [circle_1_s, _circle_1_s] = memRef(1.81)


  let [circle_2_r, _circle_2_r] = memRef(34.325)
  let [circle_2_s, _circle_2_s] = memRef(0.93)


  let [circle_3, circle_3_Editor] = genCircle('circle_3')
  

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
