<template>
  <div class="container">
    <div class="prop-box"> 
      Spin: <input type="checkbox" v-model="isSpin">
      <br> <br>
      <button @click="download"> Download </button>
    </div>
    <div class="main-view">
      <MySigil ref="downloadRef" v-bind="isSpin?{spin:true}:{}"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import MySigil from '@/components/mySigil.vue'

let isSpin = $ref(true)

let downloadRef = $ref(null)
function download() {
  var svgSource = downloadRef.$el.outerHTML
  var svgDataUri = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgSource)))

  const a = document.createElement('a')
  a.href = svgDataUri
  a.download = 'sigil.svg'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<style scoped lang="scss">
  .container {
    width: 100vw;
    height: 100vh;
    background-color: red;
  }

  .prop-box {
    width: 20%;
    background-color: darkgrey;
    padding: 20px;

    position: absolute;
    z-index: 10;
  }

  .main-view {
    width: 100vw;
    height: 100vh;
    background-color: rgb(47, 47, 47);

    display: flex;
    justify-content: center;
    justify-items: center;
  }

  .main-view > svg {
    transform: scale(0.8);
    overflow: visible;
  } 
</style>