<template>
  <div class="editor-container">
    <div class="editor">

      <details>
        <summary> Display Port </summary>

        <label>Offset:  {{offset.value}}</label> <button @click="offset.reset()">reset</button><br>
        <input type="range"  min="-20" max="0" step="0.5" v-model="offset.value">
      </details>

      <details>
        <summary> Sigil </summary>

        <label>Offset:  {{offset}}</label> <br>
        <input type="range"  min="-20" max="0" step="0.5" v-model="offset">
      </details>
     
    </div>

    <div class="display-port">
      <img class="refImg" :src="refImg">

      <div class="svg-out">
        <jsxNode />
        <svg viewBox="-394.5 -394.5 789 789">
          <circle r="10px" x="50%" y="50%"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
  import refImg from './PSO.png'
  import memRef from '@/use/memRef'

  let offset = $(memRef(-10))

  const jsxNode = () => <div style="color: orange">+</div>
</script>

<!-- Sigil Style-->
<style scoped lang="scss">
  svg {
    stroke: red;
    stroke-width: 10px;
    fill: none;

    height: calc(100% + v-bind("(-1*offset)+'%'"));
    width: 100%
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
    &> label {
      display: inline-block;
      margin-top: 10px !important;
    }
    &> *:not(summary) {
      margin-left: 25px;
    }

    &> button {
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
      width: auto
    }
  }

  .refImg {
    opacity: .5
  }

  .svg-out {
    width: 100%;
    display: grid;

    &> * {
      grid-area: 1 / 1;
      align-self: center;
      justify-self: center;
      margin-top: v-bind("offset+'%'");
    }
  }
</style>
