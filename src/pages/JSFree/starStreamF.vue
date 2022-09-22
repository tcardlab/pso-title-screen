<template lang="pug">

div(class="container")
  - var i = 0
  while i <= 200
    div(class='circle num-' + i)
    - i++
  - var j = 0
  while j <= 15
    div(class='circle fake-' + j)
    - j++

</template>

<style scoped lang="sass">
  @use "sass:math"

  html, body
    padding: 0
    margin: 0

  .container
    height: 100vh
    width: 100vw
    display: flex
    align-items: center
    justify-content: center
    filter: blur(.3em)
    &> div  
      mix-blend-mode: screen
    
  .circle
    position: absolute
    border-radius: 50%
    background-color: white


  @function random1()
    @return random(1000) / 1000
    

  $minR: .2vw
  @for $i from 0 through 200
    $min: 5
    $maxSize: 4
    $r: math.max((random1() * $maxSize), 2.5)
    .num-#{$i}
      transform: translateY( (if( random1()>0.5, 1, -1) * random1() * $r * 0.2) + vw ) translateX( (if( random1()>0.5, 1, -1) * random1()*8) + vw )
      animation-name: if($i%2==0, even, odd)
      animation-iteration-count: infinite
      animation-duration: math.max(random1()*8, $min)+s
      animation-delay: (random1()*$min - 2)+s
      height: $r+vw
      width: $r+vw
      background-color: hsl(206, 100% , 100% * $r / $maxSize)



  @keyframes even
    0%
      background-color: hsl(206, 100% , 100%)
    10%
      background-color: hsl(206, 100% , 80%)
    100%
      transform: translate(50vw) scale(.1)
      background-color: hsl(206, 100% , 40%)
      
  @keyframes odd
    0%
      background-color: hsl(206, 100% , 100%)
    10%
      background-color: hsl(206, 100% , 80%)
    100%
      transform: translate(-50vw) scale(.1)
      background-color: hsl(206, 100% , 40%)

    
  @for $i from 0 through 15
    $min: 5
    $maxSize: 3.5
    .fake-#{$i}
      margin-top: (if( random1()>0.5, 1, -1) * random1() * $maxSize * 0.4) + vw 
      animation-name: if($i%2==0, fill-even, fill-odd)
      animation-iteration-count: infinite
      animation-duration: math.max(random1()*8, $min)+s
      animation-delay: (random1()*$min - 2)+s
      //animation-direction: alternate
      height: $maxSize + vw
      width: $maxSize + vw
      background-color: hsl(206, 100%, 100%)
    
  @keyframes fill-even
    0%
      transform: translateX(-6vw)
    50%
      transform: translateX(12vw)
    100%
      transform: translateX(-6vw)
    
  @keyframes fill-odd
    0%
      transform: translateX(4vw)
    50%
      transform: translateX(-8vw)
    100%
      transform: translateX(4vw)
</style>