<template lang="pug">

div(class="container")
  - var i = 0
  while i <= 250
    div(class='circle num-' + i)
    - i++

  - var j = 0
  //while j <= 15
    div(class='circle fake-' + j)
    - j++

  - var k = 0
  while k <= 20
    div(class='circle static-' + k)
    - k++

</template>

<style scoped lang="sass">
@use "sass:math"

//<!-- Shared -->
.container
  height: 100vh
  width: 100vw
  display: flex
  align-items: center
  justify-content: center
  filter: blur(.3vw)
  &> div  
    mix-blend-mode: screen
  
.circle
  position: absolute
  border-radius: 50%
  background-color: white


@function random1()
  @return calc(random(1000) / 1000)



//<!-- num-i  -->
$minR: .2vw
@for $i from 0 through 250
  $min: 15
  $maxSize: 4
  $r: math.max((random1() * $maxSize), 3)
  .num-#{$i}
    transform: translateY( (if( random1()>0.5, 1, -1) * random1() * $r * 0.2) + vw ) translateX( (if( random1()>0.5, 1, -1) * random1()*8) + vw )
    animation-name: if($i%2==0, even, odd)
    animation-iteration-count: infinite
    animation-duration: math.max(random1()*30, $min)+s
    animation-delay: (random1()*$min - 2)+s
    height: $r+vw
    width: $r+vw
    background-color: hsl(206, 100% , calc(100% * $r / $maxSize))



@keyframes even
  0%
    background-color: hsl(206, 100% , 100%)
  17%
    background-color: hsl(206, 100% , 80%)
  100%
    // over shoot so you don't see them bunch up at the end
    transform: translate(55vw) scale(.1)
    background-color: hsl(206, 100% , 40%)
    
@keyframes odd
  0%
    background-color: hsl(206, 100% , 100%)
  10%
    background-color: hsl(206, 100% , 80%)
  100%
    // over shoot so you don't see them bunch up at the end
    transform: translate(-55vw) scale(.1)
    background-color: hsl(206, 100% , 40%) 



//<!-- fake-j  -->
// Contained particles to fill center (just bounce back and forth)
@for $i from 0 through 20
  $minT: 5
  $maxSize: 3.2
  .fake-#{$i}
    margin-top: (if( random1()>0.5, 1, -1) * random1() * $maxSize * 0.4) + vw
    animation-name: if($i%2==0, fill-even, fill-odd)
    animation-iteration-count: infinite
    animation-duration: math.max(random1()*8, $minT)+s
    animation-delay: (random1()*6 - 2)+s
    animation-timing-function: linear
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
    transform: translateX(7vw)
  50%
    transform: translateX(-14vw)
  100%
    transform: translateX(7vw)



//<!-- static-k  -->
// Contained particles to fill center (just bounce back and forth)
@for $i from 0 through 20
  $minT: 5
  $maxSize: 3.3
  .static-#{$i}
    margin-top: (if( random1()>0.5, 1, -1) * random1() * $maxSize * 0.3) + vw
    transform: translateX( (if( random1()>0.5, 1, -1) * random1()*16) + vw )
    height: $maxSize + vw
    width: $maxSize + vw
    background-color: hsl(206, 100%, 100%)
</style>