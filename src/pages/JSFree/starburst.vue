<template lang="pug">
div(class="container")
  - var i = 0
  - var amount = 35
  while i <= 35
    div(class="ray-" + i style="--rot:"+ i/35)
    - i++
</template>

<style scoped lang="sass">
@use 'sass:math'

html, body 
  padding:0
  margin:0
  background-color: black

.container
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  color: white
  filter: blur(.12vw)
  //opacity: .90
  
@function random1()
  @return calc(math.random(1000) / 1000)
  
$amount: 35
$length: 40vw
@for $i from 0 through $amount
  $duration: 3s
  $duration2: math.random(4) * $duration
  $delay1: (random1()*3)
  .ray-#{$i}
    position: absolute
    transform: rotate(calc(360deg * var(--rot))) translateY(calc($length / -2) - (random1()*3vw))
    height: math.max(random1() * $length, 13vw)
    width: .7vw
    background-color: hsl(190 + random1()*65, 100% , 82%)
    clip-path: polygon(41% 68%, 45% 90%, 51% 100%, 57% 90%, 61% 68%, 62% 55%, 51% 0, 40% 56%)
    opacity: 0
    animation-name: move, sparkle, hide
    animation-iteration-count: infinite
    animation-duration: $duration, $duration, $duration2
    animation-delay: $delay1+s, $delay1+s, ($delay1 + ($duration * math.random(3)))
    
@keyframes sparkle
   0%
     opacity: 0%
   20%
     opacity: 100%
   60%
     opacity: 0%
  
@keyframes move
  from
    transform: rotate(calc(360deg * var(--rot))) translateY(calc($length / -3))
    
    
@keyframes hide
  from 
    visibility: hidden
  50%
    visibility: hidden 
  to
    visibility: visible
</style>