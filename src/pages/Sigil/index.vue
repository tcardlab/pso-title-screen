<template>
  <div class="editor-container">
    <div class="editor">

      <details>
        <summary> Display Port </summary>

        <label>OffsetX:  {{offsetX}}</label> <button @click="_offsetX">reset</button> <br>
        <input type="range"  min="-1" max="1" step="0.005" v-model="offsetX">

        <label>OffsetY:  {{offsetY}}</label> <button @click="_offsetY">reset</button> <br>
        <input type="range"  min="-10" max="0" step="0.005" v-model="offsetY">

        <label>SVG Opacity:  {{opacity}}</label> <button @click="_opacity">reset</button> <br>
        <input type="range"  min="0" max="1" step="0.05" v-model="opacity">

        <label>Image Opacity:  {{imgOpacity}}</label> <button @click="_imgOpacity">reset</button> <br>
        <input type="range"  min="0" max="1" step="0.05" v-model="imgOpacity">

        <label>spin: {{isSpin}}</label>
        <input type="checkbox" step="0.05" v-model="isSpin">
      </details>


      <br>


      <circle_1_Editor>
        <label>Child Radius: {{Math.round(100*c1CR)/100}}</label> <button onClick="_c1CR">reset</button> <br/>
        <input type="range" min="0" max="50" step="0.005" v-model="c1CR"/> <br/>

        <label>Child S: {{Math.round(100*c1CS)/100}}</label> <button onClick="_c1CS">reset</button> <br/>
        <input type="range" min="0" max="50" step="0.005" v-model="c1CS"/> <br/>

        <circle_1a_Editor>
        </circle_1a_Editor>
        <circle_1b_Editor/>
        <circle_1c_Editor/>
      </circle_1_Editor>

      <details>
        <summary> Inner Text Ring </summary>

        <text_1_Editor/>
        <text_2_Editor/>
      </details>

      <circle_2_Editor>
        <circle_2a_Editor/>
        <circle_2b_Editor/>
        <circle_2c_Editor/>

        <c2_line_a_Editor/>
        <c2_line_b_Editor/>
        <c2_line_c_Editor/>
      </circle_2_Editor>

      <text_3_Editor/>

      <circle_3_Editor/>
      <circle_4_Editor/>

      <triangle_Editor>
        <line_t1_Editor/> <line_t2_Editor/> <line_t3_Editor/>
      </triangle_Editor>

      <circle_tri_Editor> 
        <details>
          <summary> Circle 1 </summary>
          <circle_tri_1a_Editor/>
          <circle_tri_1b_Editor/>
          <circle_tri_1c_Editor/>
          <line_1_Editor/>
        </details>
        <details>
          <summary> Circle 2 </summary>
          <circle_tri_2a_Editor/>
          <circle_tri_2b_Editor/>
          <circle_tri_2c_Editor/>
          <line_2_Editor/>
        </details>
        <details>
          <summary> Circle 3 </summary>
          <circle_tri_3a_Editor/>
          <circle_tri_3b_Editor/>
          <circle_tri_3c_Editor/>
          <line_3_Editor/>
        </details>
       
      </circle_tri_Editor> 

      <p>Use dev tools inspector to edit styles then and update code when satisfied</p>

      <button @click="download"> Download </button>

    </div>

    <div class="display-port"  ref="svg">
      <img class="refImg" draggable="false" :src="refImg">

      <div class="svg-out">
        <jsxNode />

        <svg id="sigil_output" ref="sigilOut" viewBox="-500 -500 1000 1000">
          <mask id="circle_mask">
            <!-- may in fact be easier to have 1 rule and rotate 3 instances of the same element -->
            <rect x="-50%" y="-50%" width="100%" height="100%" fill="white"/>
            <circle_1a style="stroke:black; fill:black" />
            <circle_1b style="stroke:black; fill:black" />
            <circle_1c style="stroke:black; fill:black" />

            <circle_2a style="stroke: white; fill: black" />
            <circle_2b style="stroke: white; fill: black"/>
            <circle_2c style="stroke: white; fill: black"/>

            <circle_tri_1a style="stroke: black; fill: black"/> 
            <circle_tri_2a style="stroke: black; fill: black"/> 
            <circle_tri_3a style="stroke: black; fill: black"/> 
          </mask >

          <g class="main-frame">
            
            <g class="inner-circle circle-1" style="stroke:none; fill:blue">
              <circle_1 style="mask:url(#circle_mask); stroke:blue; fill: none"/>
              <circle_1a />
              <circle_1b />
              <circle_1c />
            </g>

            <g class="outer-circle circle-2"  >
              <circle_2 style="mask:url(#circle_mask)"/>
              <circle_2a />
              <circle_2b />
              <circle_2c />
              
              <g style="mask:url(#circle_mask);"> <!--seems you can apply mask to 1D el? must be grouped-->
                <c2_line_a /> <!-- style="stroke-dasharray: 92 251; stroke-dashoffset: 92;" -->
                <c2_line_b />
                <c2_line_c />
              </g>
            </g>

            <g class="outer-text-ring">
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
            </g>

            <circle_3 class="outer-circle circle-3" style="mask:url(#circle_mask);"/>
            <circle_4 class="outer-circle circle-4" style="mask:url(#circle_mask);"/>

            <g class="triangle">
              <triangle style="stroke:lime"/>
              <g style="stroke:lime; mask:url(#circle_mask);">
                <line_t1/> <line_t2/> <line_t3/>
              </g>
              <g>
                <g class="outer-text" style="transform: rotate(180deg)">
                  <text x="-7.35%" y="31.1%" style="font-size: 139%;" textLength="4.55%" lengthAdjust="spacingAndGlyphs">
                      e
                  </text>
                  <text x="3.4%" y="31.1%" style="font-size: 139%;" textLength="4.55%" lengthAdjust="spacingAndGlyphs">
                      f
                  </text>
                </g>
                <g class="outer-text" style="transform: rotate(60deg)">
                  <text x="-8.1%" y="30.85%" style="font-size:139%;" textLength="4.55%" lengthAdjust="spacingAndGlyphs">
                      m 
                  </text>
                  <text x="2.7%" y="30.85%" style="font-size:139%;" textLength="4.55%" lengthAdjust="spacingAndGlyphs">
                    l 
                  </text>
                </g>
                <g class="outer-text" style="transform: rotate(-60deg)">
                  <text x="-7.55%" y="30.4%" style="font-size:139%;" textLength="4.55%" lengthAdjust="spacingAndGlyphs">
                    p 
                  </text>
                  <text x="3.25%" y="30.4%" style="font-size:139%;" textLength="4.55%" lengthAdjust="spacingAndGlyphs">
                    g 
                  </text>
                </g>
              </g>
            </g>

            <g class="three-circles">
              <circle_tri style="stroke:lime"/>
              <g>
                <circle_tri_1a/> 
                <circle_tri_1b class="dashed spins" :style="{strokeDashoffset: -6.2385 * cTri1, strokeDasharray: `${8.44*cTri1} ${2.02*cTri1} ${3.21*cTri1} ${2.02 * cTri1}`}" /> 
                <circle_tri_1c/>
                <line_1 style="stroke-dasharray: 25 253; stroke-dashoffset: 25;"/>
              </g>
              <g>
                <circle_tri_2a/> 
                <circle_tri_2b class="dashed spins" :style="{strokeDashoffset: 4.128 * cTri2, strokeDasharray: `${8.44*cTri2} ${2.02*cTri2} ${3.21*cTri2} ${2.02 * cTri2}`}" />
                <circle_tri_2c/>
                <line_2 style="stroke-dasharray: 25 253; stroke-dashoffset: 25;"/>
              </g>
              <g>
                <circle_tri_3a/> 
                <circle_tri_3b class="dashed spins" :style="{strokeDashoffset: -1.009 * cTri3, strokeDasharray: `${8.44*cTri3} ${2.02*cTri3} ${3.21*cTri3} ${2.02 * cTri3}`}" /> 
                <circle_tri_3c/>
                <line_3 style="stroke-dasharray: 25 253; stroke-dashoffset: 25;"/>
              </g>
            </g>
          </g>
          
          <g class="inner-text-ring">
            <text_1 class="text-path text1"/>
            <text class="inner-text circle_text_1">
              <textPath href="#text_1_path" startOffset="0.01%" lengthAdjust="spacingAndGlyphs" :textLength="`${text_1_val.r.value*0.6064}%`" >
                PLEASE PROTECT US BY VIRTUE OF YOUR THE GREAT LIGHT POWER 
              </textPath>
            </text>

            <text_2 class="text-path text2"/>
            <text class="inner-text circle_text_2">
              <textPath href="#text_2_path" lengthAdjust="spacingAndGlyphs" :textLength="text_2_val.r.value*0.5995 + '%'"> 
                I WISH IT AT AN ALLIANCE FROM SEVERAL YEARS AGO
              </textPath>
            </text>
          </g>
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
  import genLine from './line'

  import {computed} from 'vue'


  let sigilOut = $ref(null)
  function download() {
    // var svgRoot = document.getElementById('htmlsvg')
    var svgSource = sigilOut.outerHTML
    var svgDataUri = 'data:image/svg+xml;base64,' + btoa(svgSource)

    const a = document.createElement('a')
    a.href = svgDataUri
    a.download = 'sigil.svg'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }


  let [offsetX, _offsetX] = memRef(0.155)
  let [offsetY, _offsetY] = memRef(-5.25)
  let [opacity, _opacity] = memRef(.6)
  let [imgOpacity, _imgOpacity] = memRef(0.5)

  let isSpin = $ref(false)

  const toRad = (angle:number) => angle * (Math.PI / 180)
  const cos = (angle:number) => Math.cos(toRad(angle))
  const sin = (angle:number) => Math.sin(toRad(angle))


  let [circle_1, circle_1_Editor, circle_1_val] = genCircle('circle_1', {r: 14.155,  s: 1.81})
    let [c1CR, _c1CR] = memRef(1.18)
    let [c1CS, _c1CS] = memRef(0.9)
    let [circle_1a, circle_1a_Editor] = genCircle('circle_1a', {
      x: computed(()=>cos(-30)*circle_1_val.r.value), 
      y: computed(()=>sin(-30)*circle_1_val.r.value),
      r: $$(c1CR),  s: $$(c1CS)}, {x:[-50,50], y:[-50,50],
    })
    let [circle_1b, circle_1b_Editor] = genCircle('circle_1b', {
      x: computed(()=>cos(90)*circle_1_val.r.value), 
      y: computed(()=>sin(90)*circle_1_val.r.value),
      r: $$(c1CR),  s: $$(c1CS)}, {x:[-50,50], y:[-50,50]
    })
    let [circle_1c, circle_1c_Editor] = genCircle('circle_1c', {
      x: computed(()=>cos(-150)*circle_1_val.r.value), 
      y: computed(()=>sin(-150)*circle_1_val.r.value),
      r: $$(c1CR),  s: $$(c1CS)}, {x:[-50,50], y:[-50,50]
    })

  
  let [circle_2, circle_2_Editor, circle_2_val] = genCircle('circle_2', {r: 34.325,  s: 0.93})
    let c2a = [computed(()=>cos(-90)*circle_2_val.r.value), computed(()=>sin(-90)*circle_2_val.r.value)]
    let c2b = [computed(()=>cos(30)*circle_2_val.r.value), computed(()=>sin(30)*circle_2_val.r.value)]
    let c2c = [computed(()=>cos(150)*circle_2_val.r.value), computed(()=>sin(150)*circle_2_val.r.value)]
    let [circle_2a, circle_2a_Editor] = genCircle('circle_2a', {
      x: c2a[0], y: c2a[1],
      r: 1.94,  s: 0.61}, {x:[-50,50], y:[-50,50]
    })
    let [circle_2b, circle_2b_Editor] = genCircle('circle_2b', {
      x: c2b[0], y: c2b[1],
      r: 1.94,  s: 0.61}, {x:[-50,50], y:[-50,50]
    })
    let [circle_2c, circle_2c_Editor] = genCircle('circle_2c', {
      x: c2c[0], y: c2c[1],
      r: 1.94,  s: 0.61}, {x:[-50,50], y:[-50,50]
    })


  let [circle_3, circle_3_Editor, circle_3_val] = genCircle('circle_3', {r: 41.53,  s: 0.62})
  let [circle_4, circle_4_Editor, circle_4_val] = genCircle('circle_4', {r: 43.85,  s: 1.14})
 
  
  let [text_1, text_1_Editor, text_1_val] = genText('text_1', {r: 166.26,  s: 0})
  let [text_2, text_2_Editor, text_2_val] = genText('text_2', {r: 205.16,  s: 0})
  let [text_3, text_3_Editor, text_3_val] = genText('text_3', {r: 369.62 , s: 0})



  let [circle_tri, circle_tri_Editor, circle_tri_val] = genCircle('circle_tri', {x: 0, y: 0, r: 40.9,  s: 0}, {x:[-50,50], y:[-50,50]})
    let cTriR = $(circle_tri_val.r)
    let ct1 = [computed(()=>cos(-30)*cTriR), computed(()=>sin(-30)*cTriR)]
    let ct2 = [computed(()=>cos(90)*cTriR), computed(()=>sin(90)*cTriR)] 
    let ct3 = [computed(()=>cos(-150)*cTriR), computed(()=>sin(-150)*cTriR)]

    let [line_1, line_1_Editor, line_1_val] = genLine('line_1',  {x2: ct1[0], y2: ct1[1], s: 2.19}, {x1:false, y1:false})
    let [line_2, line_2_Editor, line_2_val] = genLine('line_2',  {x2: ct2[0], y2: ct2[1], s: 2.19}, {x1:false, y1:false})
    let [line_3, line_3_Editor, line_3_val] = genLine('line_3',  {x2: ct3[0], y2: ct3[1], s: 2.19}, {x1:false, y1:false})

    let [circle_tri_1a, circle_tri_1a_Editor, circle_tri_1a_val] = genCircle('circle_tri_1a', {x: ct1[0], y: ct1[1], r: 13.05,  s: 1.01}, {x:[-50,50], y:[-50,50]})
    let [circle_tri_1b, circle_tri_1b_Editor, circle_tri_1b_val] = genCircle('circle_tri_1b', {x: ct1[0], y: ct1[1], r: 10.895,  s: 1.475}, {x:[-50,50], y:[-50,50]})
    let [circle_tri_1c, circle_tri_1c_Editor, circle_tri_1c_val] = genCircle('circle_tri_1c', {x: ct1[0], y: ct1[1], r: 8.9,  s: 0.39}, {x:[-50,50], y:[-50,50]})
    let cTri1 = circle_tri_1b_val.r


    let [circle_tri_2a, circle_tri_2a_Editor, circle_tri_2a_val] = genCircle('circle_tri_2a', {x: ct2[0], y: ct2[1], r: 13.05,  s: 1.01}, {x:[-50,50], y:[-50,50]})
    let [circle_tri_2b, circle_tri_2b_Editor, circle_tri_2b_val] = genCircle('circle_tri_2b', {x: ct2[0], y: ct2[1], r: 10.895,  s: 1.475}, {x:[-50,50], y:[-50,50]})
    let [circle_tri_2c, circle_tri_2c_Editor, circle_tri_2c_val] = genCircle('circle_tri_2c', {x: ct2[0], y: ct2[1], r: 8.9,  s: 0.39}, {x:[-50,50], y:[-50,50]})
    let cTri2 = circle_tri_2b_val.r


    let [circle_tri_3a, circle_tri_3a_Editor, circle_tri_3a_val] = genCircle('circle_tri_3a', {x: ct3[0], y: ct3[1], r: 13.05,  s: 1.01}, {x:[-50,50], y:[-50,50]})
    let [circle_tri_3b, circle_tri_3b_Editor, circle_tri_3b_val] = genCircle('circle_tri_3b', {x: ct3[0], y: ct3[1], r: 10.895,  s: 1.475}, {x:[-50,50], y:[-50,50]})
    let [circle_tri_3c, circle_tri_3c_Editor, circle_tri_3c_val] = genCircle('circle_tri_3c', {x: ct3[0], y: ct3[1], r: 8.9,  s: 0.39}, {x:[-50,50], y:[-50,50]})
    let cTri3 = circle_tri_3b_val.r



  let [triangle, triangle_Editor, triangle_val] = genCircle('triangle', {x: 0, y: 0, r: 49.84,  s: 0}, {x:[-50,50], y:[-50,50]})
    let triangleR = $(triangle_val.r)
    let t1 = [computed(()=>cos(-30)*triangleR), computed(()=>sin(-30)*triangleR)]
    let t2 = [computed(()=>cos(90)*triangleR), computed(()=>sin(90)*triangleR)] 
    let t3 = [computed(()=>cos(-150)*triangleR), computed(()=>sin(-150)*triangleR)]

    let [line_t1, line_t1_Editor, line_t1_val] = genLine('line_t1',  {x1: t1[0], y1: t1[1], s: 1, x2: t2[0], y2: t2[1], s: .7})
    let [line_t2, line_t2_Editor, line_t2_val] = genLine('line_t2',  {x1: t2[0], y1: t2[1], s: 1, x2: t3[0], y2: t3[1], s: .7})
    let [line_t3, line_t3_Editor, line_t3_val] = genLine('line_t3',  {x1: t3[0], y1: t3[1], s: 1, x2: t1[0], y2: t1[1], s: .7})
  

  let p1 = [computed(()=>cos(30) * triangleR/2), computed(()=>sin(30) * triangleR/2)]
  let p2 = [computed(()=>-1 * cos(30) * triangleR/2), computed(()=>sin(30) * triangleR/2)]
  let [c2_line_a, c2_line_a_Editor, c2_line_a_val] = genLine('c2_line_a',  {x1: 0, y1: computed(()=>-triangleR/2), x2: c2a[0], y2: c2a[1], s: 3.28}, {x1:false, y1:false, s: [0, 4]})
  let [c2_line_b, c2_line_b_Editor, c2_line_b_val] = genLine('c2_line_b',  {x1: p1[0],  y1: p1[1], x2: c2b[0], y2: c2b[1], s: 3.28}, {x1:false, y1:false, s: [0, 4]})
  let [c2_line_c, c2_line_c_Editor, c2_line_c_val] = genLine('c2_line_c',  {x1: p2[0],  y1: p2[1], x2: c2c[0], y2: c2c[1], s: 3.28}, {x1:false, y1:false, s: [0, 4]})



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
    opacity: v-bind(opacity);
  }

  .main-frame {
    animation: v-bind("isSpin ? 'spin 40s linear infinite':'none'");
  }

  .inner-text-ring {
    animation: v-bind("isSpin ? 'spin 40s linear infinite reverse':'none'");
  }

  .spins {
    transform-origin: center; transform-box: fill-box;
    animation: v-bind("isSpin ? 'spin 40s linear infinite':'none'");
  }

  @keyframes spin {
    to {
      transform: rotate(-360deg);
    }
  }

  /* .child {
    stroke: rgb(90, 90, 255);
  } */

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
    stroke-dasharray: v-bind("`${8.44 * cTri1} ${2.02 * cTri1} ${3.21 * cTri1} ${2.02 * cTri1}`");
    //stroke-dashoffset: v-bind("9.45*cTri1")
  }


  details > details {
    margin-left: 10px;
    opacity: 50%; 
  }
</style>

<!-- Layout Style-->
<style lang="scss">
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
    //margin-bottom: 10px !important;
    width: 80%;
    &> label {
      display: inline-block;
      margin-top: 10px !important;
    }
    &> *:not(summary) {
      margin-left: 15px;
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
    opacity: v-bind(imgOpacity);
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
