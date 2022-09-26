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
        <circle_1b_Editor/>
        <circle_1c_Editor/>
      </circle_1_Editor>
      
      <text_1_Editor/>
      <text_2_Editor/>
      
      <circle_2_Editor>
        <circle_2a_Editor/>
        <circle_2b_Editor/>
        <circle_2c_Editor/>
      </circle_2_Editor>

      <text_3_Editor/>

      <circle_3_Editor/>
      <circle_4_Editor/>

      <circle_n_Editor/>

    </div>

    <div class="display-port"  ref="svg">
      <img class="refImg" draggable="false" :src="refImg">

      <div class="svg-out">
        <jsxNode />

        <svg id="sigil_output" viewBox="-500 -500 1000 1000">
          <circle_1/>
            <circle_1a class="child"/>
            <circle_1b class="child"/>
            <circle_1c class="child"/>
          
          <text_1 class="text-path text1"/>
          <text_2 class="text-path text2"/>
          <g>
            <text class="inner-text circle_text_1">
              <textPath href="#text_1_path" startOffset="0.01%" lengthAdjust="spacingAndGlyphs" textLength="100.82%"> 
                PLEASE PROTECT US BY VIRTUE OF YOUR THE GREAT LIGHT POWER 
              </textPath>
            </text>
            <text class="inner-text circle_text_2">
              <textPath href="#text_2_path" lengthAdjust="spacingAndGlyphs" textLength="123%"> 
                I WISH IT AT AN ALLIANCE FROM SEVERAL YEARS AGO
              </textPath>
            </text>
          </g>

          <circle_2/>
            <circle_2a class="child"/>
            <circle_2b class="child"/>
            <circle_2c class="child"/>
          
          <text_3 class="text-path text3"/>
          <g>
            <text class="outer-text circle_text_3a" style="transform: rotate(51.82deg);">
              <textPath href="#text_3_path" lengthAdjust="spacingAndGlyphs" textLength="21.3%"> 
                farlla
              </textPath>
            </text>
            <text class="outer-text circle_text_3b" style="transform: rotate(94.56deg);">
              <textPath href="#text_3_path" lengthAdjust="spacingAndGlyphs" textLength="21.3%"> 
                estlla
              </textPath>
            </text>
            <text class="outer-text circle_text_3c" style="transform: rotate(-25.26deg)">
              <textPath href="#text_3_path" lengthAdjust="spacingAndGlyphs" textLength="17.72%"> 
                mylla
              </textPath>
            </text>
            <text class="outer-text circle_text_3c2" style="transform: rotate(3.7deg) translateX(.5%); font-size:250%;">
              <textPath href="#text_3_path" lengthAdjust="spacingAndGlyphs" textLength="3.2%"> 
                2
              </textPath>
            </text>
            <text class="outer-text circle_text_3d" style="transform: rotate(-68deg);">
              <textPath href="#text_3_path" lengthAdjust="spacingAndGlyphs" textLength="21.3%"> 
                leilla
              </textPath>
            </text>
            <text class="outer-text circle_text_3e" style="transform: rotate(176deg);">
              <textPath href="#text_3_path" lengthAdjust="spacingAndGlyphs" textLength="17.75%"> 
                golla
              </textPath>
            </text>
            <text class="outer-text circle_text_3f" style="transform: rotate(217.27deg);">
              <textPath href="#text_3_path" lengthAdjust="spacingAndGlyphs" textLength="17.78%"> 
                pilla
              </textPath>
            </text>
          </g>

          <circle_3/>
          <circle_4/>

          <circle_n class="dashed"/>
        </svg>

      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
  import refImg from './PSO.png'
  import memRef from '@/use/memRef'
  import genCircle from './circle'
  import genText from './text'

  import {computed} from 'vue'

  let [offsetX, _offsetX] = memRef(0.155)
  let [offsetY, _offsetY] = memRef(-5.25)
  let [opacity, _opacity] = memRef(.6)

  const toRad = (angle:number) => angle * (Math.PI / 180)
  const cos = (angle:number) => Math.cos(toRad(angle))
  const sin = (angle:number) => Math.sin(toRad(angle))


  let [circle_1, circle_1_Editor, circle_1_val] = genCircle('circle_1', {r: 14.155,  s: 1.81})
    let [circle_1a, circle_1a_Editor] = genCircle('circle_1a', {
      x: computed(()=>cos(-30)*circle_1_val.r.value), 
      y: computed(()=>sin(-30)*circle_1_val.r.value),
      r: 1.43,  s: 0.5}, {x:[-50,50], y:[-50,50]
    })
    let [circle_1b, circle_1b_Editor] = genCircle('circle_1b', {
      x: computed(()=>cos(90)*circle_1_val.r.value), 
      y: computed(()=>sin(90)*circle_1_val.r.value),
      r: 1.43,  s: 0.5}, {x:[-50,50], y:[-50,50]
    })
    let [circle_1c, circle_1c_Editor] = genCircle('circle_1c', {
      x: computed(()=>cos(-150)*circle_1_val.r.value), 
      y: computed(()=>sin(-150)*circle_1_val.r.value),
      r: 1.43,  s: 0.5}, {x:[-50,50], y:[-50,50]
    })


  let [circle_2, circle_2_Editor, circle_2_val] = genCircle('circle_2', {r: 34.325,  s: 0.93})
    let [circle_2a, circle_2a_Editor] = genCircle('circle_2a', {
      x: computed(()=>cos(-90)*circle_2_val.r.value), 
      y: computed(()=>sin(-90)*circle_2_val.r.value),
      r: 1.94,  s: 0.61}, {x:[-50,50], y:[-50,50]
    })
    let [circle_2b, circle_2b_Editor] = genCircle('circle_2b', {
      x: computed(()=>cos(30)*circle_2_val.r.value), 
      y: computed(()=>sin(30)*circle_2_val.r.value),
      r: 1.94,  s: 0.61}, {x:[-50,50], y:[-50,50]
    })
    let [circle_2c, circle_2c_Editor] = genCircle('circle_2c', {
      x: computed(()=>cos(150)*circle_2_val.r.value), 
      y: computed(()=>sin(150)*circle_2_val.r.value),
      r: 1.94,  s: 0.61}, {x:[-50,50], y:[-50,50]
    })

  let [circle_3, circle_3_Editor, circle_3_val] = genCircle('circle_3', {r: 41.53,  s: 0.62})
  let [circle_4, circle_4_Editor, circle_4_val] = genCircle('circle_4', {r: 43.85,  s: 1.14})

  let [text_1, text_1_Editor, text_1_val] = genText('text_1', {r: 166.26,  s: 0})
  let [text_2, text_2_Editor, text_2_val] = genText('text_2', {r: 205.16,  s: 0})
  let [text_3, text_3_Editor, text_3_val] = genText('text_3', {r: 369.62 , s: 0})


  let [circle_n, circle_n_Editor, circle_n_val] = genCircle('circle_n', {x: 35.425, y: -20.485, r: 10.895,  s: 1.475}, {x:[-50,50], y:[-50,50]})
  let test = circle_n_val.r



  const jsxNode = () => <div style="color: orange">+</div>
</script>

<!-- Sigil Style-->
<style lang="scss">
  @font-face {
    font-family: "PSO2";
    src: url(@/assets/pso_font/psoRGcast.TTF) format("truetype")
  }

  svg {
    stroke: rgb(80, 255, 249);
    fill: none;

    overflow: visible;
    height: 100%;  //calc(100% + v-bind("(-1*offsetY)+'%'"));
    width: auto;
    opacity: v-bind(opacity)
  }

  .child {
    stroke: rgb(90, 90, 255);
  }

  .text-path {
    //stroke: none;
    stroke: lime;
  }

  .inner-text {
    stroke: none;
    font-family: PSO;
    fill: red !important;
  }
  .circle_text_1 {
    font-size: 166%;
    transform: rotate(-83.47deg);
  }
  .circle_text_2 {
    font-size: 245%;
    transform: rotate(98.34deg);
  }

  .outer-text {
    stroke: none;
    font-family: PSO2;
    fill: red !important;
    font-size: 321%;
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
