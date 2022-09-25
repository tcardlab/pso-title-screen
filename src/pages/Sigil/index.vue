<template>
  <div class="editor-container">
    <div class="editor">

      <details>
        <summary> Display Port </summary>

        <label>Offset:  {{offset}}</label> <button @click="_offset">reset</button> <br>
        <input type="range"  min="-20" max="0" step="0.5" v-model="offset">
      </details>

      <details>
        <summary> Sigil </summary>

        <label>Offset:  {{offset}}</label> <br>
        <input type="range"  min="-20" max="0" step="0.5" v-model="offset">
      </details>
     
      {{viewBox}}
    </div>

    <div class="display-port"  ref="svg">
      <img class="refImg" draggable="false" :src="refImg">

      <div class="svg-out">
        <jsxNode />
        <svg :viewBox="viewBox">
          <circle r="125px" x="50%" y="50%"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
  import refImg from './PSO.png'
  import memRef from '@/use/memRef'
  

  import { useElementSize } from '@vueuse/core'

  let [offset, _offset] = memRef(-9.5)

  let svg = $ref(null)
  let { width: svgW, height: svgH } = $( $$(useElementSize(svg)) )
  let viewBox = $computed(()=> {
    return "-500 -500 1000 1000";
    if (!svgH) return "-500 -500 1000 1000";
    return `${-svgH/2} ${-svgH/2} ${svgH} ${svgH}`
  })

  const jsxNode = () => <div style="color: orange">+</div>
</script>

<!-- Sigil Style-->
<style scoped lang="scss">
  svg {
    stroke: red;
    stroke-width: 10px;
    fill: none;

    overflow: visible;
    height: calc(100% + v-bind("(-1*offset)+'%'"));
    width: auto
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

    &> * {
      grid-area: 1 / 1;
      align-self: center;
      justify-self: center;
      height: 100vh;
      //width: auto
    }
  }

  .refImg {
    opacity: .5;
    z-index: 0;
  }

  .svg-out {
    //height: 100%;
    //width: 1000px;
    display: grid;
    z-index: 1;
    overflow: visible;

    &> * {
      grid-area: 1 / 1;
      align-self: center;
      justify-self: center;
      margin-top: v-bind("offset+'%'");
    }
  }
</style>
