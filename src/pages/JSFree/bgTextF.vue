<template lang="pug">

div(class="text-container")
  - var i = 0
  div(class="textBox alignLeft")
    while i <= 50
      p(class='bg-word-' + i)
      - i++

  div(class="textBox alignRight")
    while i <= 100 && i > 50
      p(class='bg-word-' + i)
      - i++
</template>

<style lang="scss">
  @use "sass:math";
  @use "sass:list";

  @font-face {
    font-family: "PSO";
    src: url(@/assets/pso_font/pso_font.TTF) format("truetype")
  }

  @function random1() {
    @return calc(random(1000) / 1000)
  }

  $chars: ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ';

  @for $i from 0 through 100 {  // for all text elements <p>
    $min: 15;
    .bg-word-#{$i}::before {
      $word: '';
      @for $j from 0 through math.max(math.random(25), 5) { // choose random word length > 5 &  < 25
        $word: $word + list.nth($chars, math.random(38))   // with random characters from $chars
      }
      content: $word
    }
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