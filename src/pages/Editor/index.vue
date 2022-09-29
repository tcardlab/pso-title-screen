<template>
  <div class="editor-container">
    <div class="editor">
      <div style="overflow:scroll; height: 100%; width: 100%">

        <details>
          <summary> Display Port </summary>

          <label>OffsetX:  {{offsetX}}</label> <button @click="_offsetX">reset</button> <br>
          <input type="range"  min="-1" max="1" step="0.005" v-model="offsetX">

          <label>OffsetY:  {{offsetY}}</label> <button @click="_offsetY">reset</button> <br>
          <input type="range"  min="-10" max="0" step="0.005" v-model="offsetY">

          <label>SVG Opacity:  {{opacity}}</label> <button @click="_opacity">reset</button> <br>
          <input type="range"  min="0" max="1" step="0.05" v-model="opacity">

          <label>Image Opacity:  {{imgOpacity}}</label> <button @click="_imgOpacity">reset</button> <br>
          <input type="range"  min="0" max="1" step="0.05" v-model="imgOpacity"> <br>

          <label>spin: </label> <br>
          <input type="checkbox" step="0.05" v-model="isSpin"> <span>{{isSpin}}</span><br>

          <label>masking: <br> (may cause lag, but scales better)</label> <br>
          <input type="checkbox" step="0.05" v-model="isMask"> <span>{{isMask}}</span><br>
          
        </details>


        <br>


        <circle_1_Editor>
          <label>Child Radius: {{Math.round(100*c1CR)/100}}</label> <button @click="_c1CR">reset</button> <br/>
          <input type="range" min="0" max="50" step="0.005" v-model="c1CR"/> <br/>

          <label>Child S: {{Math.round(100*c1CS)/100}}</label> <button @click="_c1CS">reset</button> <br/>
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
      </div>

      <div style="margin-top: auto">
        <p>Use dev tools inspector to edit styles then and update code when satisfied</p>

        <button @click="download"> Download </button>
      </div>
    </div>

    <div class="display-port"  ref="svg">
      <img class="refImg" draggable="false" :src="refImg">

      <div class="svg-out">
        <jsxNode />

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          id="sigil_output" ref="sigilOut" viewBox="-500 -500 1000 1000" 
          style="
            --sigilColor: rgb(80, 255, 249);
            stroke: var(--sigilColor);
            fill: none;
            overflow: visible;
            width: auto;
            height: 100%
        "> <!-- :style="{height: `calc(100% + ${offsetY}%`}" -->
          <v-style type="text/css">
            @font-face {
              font-family: "PSO";
              src: url("data:application/font-woff;base64,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") format("woff");
            }
            @font-face {
              font-family: "PSO2";
              src: url("data:application/font-woff;base64,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") format("woff");
            }

            .inner-text {
              stroke: none;
              font-family: PSO;
              fill: var(--sigilColor);
            }

            .outer-text {
              stroke: none;
              font-family: PSO2;
              font-size: 321%;
              fill: var(--sigilColor);
            }

            {{dashArrStyles}}
          </v-style>

          <defs>
            <mask id="circle_1_mask" v-if="!isMask">
              <rect x="-50%" y="-50%" width="100%" height="100%" fill="white"/>
              <circle_1a style="stroke:black; fill:black" />
              <circle_1b style="stroke:black; fill:black" />
              <circle_1c style="stroke:black; fill:black" />
            </mask>

            <mask id="circle_2_mask" v-if="!isMask">
              <rect x="-50%" y="-50%" width="100%" height="100%" fill="white"/>
              <circle_2a style="stroke: white; fill: black" />
              <circle_2b style="stroke: white; fill: black"/>
              <circle_2c style="stroke: white; fill: black"/>
            </mask >

            <mask id="circle_mask" v-if="isMask"> <!-- masks all -->
              <!-- Has a pretty big performance hit... 45fps –> 25fps -->
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
          </defs>

          <g class="main-frame">
            
            <g class="inner-circle circle-1" style="stroke:none; fill: var(--sigilColor);">
              <circle_1 :style="{ mask: `url(${isMask ? '#circle_mask' : '#circle_1_mask'})`}" style="stroke: var(--sigilColor); fill: none"/>
              <circle_1a />
              <circle_1b />
              <circle_1c />
            </g>

            <g class="outer-circle circle-2"  >
              <circle_2 style="mask:url(#circle_mask)"/>
              <circle_2a />
              <circle_2b />
              <circle_2c />
              
              <g :style="{ mask: `url(${isMask ? '#circle_mask' : '#circle_2_mask'})`}"> <!--seems you can apply mask to 1D el? must be grouped-->
                <c2_line_a />
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
              <g style="stroke:var(--sigilColor); mask:url(#circle_mask);">
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
            <text class="inner-text circle_text_1" style="font-size: 166%; transform: rotate(-83.47deg);">
              <textPath href="#text_1_path" startOffset="0.01%" lengthAdjust="spacingAndGlyphs" :textLength="`${text_1_val.r.value*0.6064}%`" >
                PLEASE PROTECT US BY VIRTUE OF YOUR THE GREAT LIGHT POWER 
              </textPath>
            </text>

            <text_2 class="text-path text2"/>
            <text class="inner-text circle_text_2" style="font-size: 245%; transform: rotate(98.34deg);">
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
    var svgSource = sigilOut.outerHTML
    var svgDataUri = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgSource)))

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
  let isMask = $ref(false)

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

  let mapDashArr = (arr:Array<number>, scale:number) => arr.map( (v:number) => v * scale).join(' ')
  let dashArrStyles = $computed(()=>{
    if (isMask) return ''
    return `
      #circle_2 { stroke-dasharray: ${mapDashArr([6.8755, 6.0888, 6.8755, 1.0779], circle_2_val.r.value)}; stroke-dashoffset: ${-5.8267 * circle_2_val.r.value}; }
      #circle_3 { stroke-dasharray: ${mapDashArr([14.5317, 6.4170], circle_3_val.r.value)}; stroke-dashoffset: ${2.0226 * circle_3_val.r.value}; }
      #circle_4 { stroke-dasharray: ${mapDashArr([14.8803, 6.0547], circle_4_val.r.value)}; stroke-dashoffset: ${2.2121 * circle_4_val.r.value}; }
      #line_t1, #line_t2, #line_t3 { stroke-dasharray: ${9.2697 * triangleR}; stroke-dashoffset: ${-4.0128 * triangleR}; }
    `
  })
</script>

<!-- Sigil Style-->
<style lang="scss">
  #sigil_output {
    opacity: v-bind(opacity);

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

    .text-path {
      stroke: lime;
    }

    .outer-text, .inner-text {
      fill: red !important;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(-360deg);
    }
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
    height: calc(100% - 20px);
    width: 20%;
    background-color: grey;
    border-right: 2px solid black;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: start;
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

<!-- Unscoped Style-->
<style lang="scss">
  .editor-container{
    details {
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

    details > details {
      margin-left: 10px;
      //opacity: 50%; 
    }
  }
</style>
