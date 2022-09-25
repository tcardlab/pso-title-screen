<template>
  <div class="editor-container">
    <div class="editor">
      <input type="range" >
    </div>

    <div class="display-port">
      <img class="refImg" :src="refImg">

      <div class="svg-out">
        <jsxNode />
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
  import refImg from './PSO.png'

  const jsxNode = () => <div style="color: orange">+</div>
</script>

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
    align-items: start;
    justify-content: center;
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
    grid-area: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &> * {
      margin-top: -10%;
    }
  }
</style>
