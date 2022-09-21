<script setup>
  import { ref } from 'vue'
  
  const docState = ref('saved')

  const psoVals = ' abcdefghijklmnopqrstuvwxyz0123456789 '.split('')
  const maxLen = 30
  const minVal = 5

  let genWord = () => {
    let len = Math.max( (Math.random() * maxLen ) | 0, minVal)

    let word = []
    for(let i = 0; i <= len; i++) {
      word.push(psoVals[ (Math.random() * psoVals.length ) | 0 ])
    }

    return word.join('')   
  }
</script>
  

<template>
  <div class="text-container">
    <div class="textBox alignLeft">
      <p v-for="i in 50" :key="i">{{genWord()}}</p>
    </div>

    <div class="textBox alignRight">
      <p v-for="i in 50" :key="i">{{genWord()}}</p>
    </div>
  </div>
</template>


<style>
  /*.slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.25s ease-out;
  }
  
  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }
  
  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }*/
</style>

<style lang="scss">
  @font-face {
    font-family: "PSO";
    src: url(@/assets/pso_font/pso_font.TTF) format("truetype")
  }

  .text-container {
    font-family: PSO;
    //background-color: black;
    height: 100vh;
    width: 100vw;
    
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-rows: 100vh;
  }

  .textBox {
    font-family: PSO;
    padding: 0 1vw;
    font-size: 1.3vw;
    color: white;
  }

  .alignLeft {
    text-align: left
  }

  .alignRight {
    text-align: right
  }
</style>
