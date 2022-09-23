<template lang="pug">
div(class="container")
  - var i = 0
  - var amount = 60 
  - function ease (i, amount, pow)
      - const angle = 90;
      - const half = amount / 2;
      - const isSmol = i < (amount / 2) ? -1 : 1;
      - return -angle + ((isSmol * angle) / Math.pow(half,pow)) * Math.pow(isSmol*(i - half), pow)
  while i <= amount
    - var cssVars = `--index:${i}; --seed:${Math.random()}; --rot:${ease(i, amount, 2)}`
    div(class="ray-" + i style='' + cssVars)
    - i++
</template>

<style scoped lang="sass">
@use 'sass:math'

html, body 
  padding: 0
  margin: 0
  background-color: black

.container
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  color: white
  filter: blur(.1vw)
  
@function random1()
  @return calc(random(1000) / 1000)
  
@function ease($i, $amount, $pow:3)
  $angle: 90
  $half: calc($amount / 2)
  $isSmol: if($i < calc($amount / 2), -1, 1)
  @return -$angle + calc(($isSmol * $angle) / math.pow($half,$pow)) * math.pow($isSmol*($i - $half), $pow)
  
$amount: 60
@for $i from 0 through $amount
  .ray-#{$i}
    position: absolute
    //transform: rotate(90 + ease($i, $amount, 0.5) + deg)
    //transform: rotate(ease($i, $amount, 2) + deg) rotate(random1()*4 + deg)
    transform: rotate(calc(var(--rot) * 1deg)) rotate(calc(var(--seed) * 4deg))
    height: math.max(random1() * 60, 30 ) + vw
    width: 1.4vw
    background: hsl(206, 100% , 47%) // rgb(0, 136, 240)
    $mid1: 50% - random1() * 50 //25
    $mid2: 50% + random1() * 50 //25
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.6) $mid1, rgba(255,255,255,.6) $mid2, rgba(255,255,255,0) 100%)
    clip-path: polygon(50% 0,    65% 35%, 65% 65%,   50% 100%,    35% 65%, 35% 35%)
    
    $speed: 1
    $sync: .5  // to 0 means more sync
    opacity: 0
    animation-delay: $sync * random1() * calc($amount / $speed)  + s //$i / $speed + s
    animation-name: combined //sparkle //, grow, move
    animation-iteration-count: infinite
    animation-duration: $sync * calc($amount / $speed)  + s
    animation-timing-function: linear
    

@keyframes combined 
  0%
    opacity: 0%
  6%
    opacity: 100%
    transform: rotate(calc(var(--rot) * 1deg)) rotate(calc(var(--seed) * 4deg)) 
  10%
    opacity: 0%
    transform: rotate(calc(var(--rot) * 1deg)) rotate(calc(var(--seed) * 4deg)) translateY( calc(2 * (var(--seed) - 0.5) * 20vw) ) //scale(1, 1.5)
  100%
    opacity: 0%
    

@keyframes sparkle 
  0%
    opacity: 0%
  6%
    opacity: 100%
  10%
    opacity: 0%
  100%
    opacity: 0%
  
@keyframes grow
  6%
    transform: rotate(calc(var(--rot) * 1deg)) rotate(calc(var(--seed) * 4deg)) 
  10%
    transform: rotate(calc(var(--rot) * 1deg)) rotate(calc(var(--seed) * 4deg)) scale(1, 2)
  
@keyframes rot
  10%
    transform: rotate(calc(var(--rot) * 1deg)) rotate(calc(var(--seed) * 4deg)) rotate(5deg)
  
  
@keyframes move
  //6%
    transform: rotate(calc(var(--rot) * 1deg)) rotate(calc(var(--seed) * 4deg)) 
  10%
    transform: rotate(calc(var(--rot) * 1deg)) rotate(calc(var(--seed) * 4deg)) translateY( calc(2 * (var(--seed) - 0.5) * 20vw) )
 
  
@keyframes fall
  10%
    transform: rotate(calc(var(--rot) * 1deg)) rotate(calc(var(--seed) * 4deg)) translateX(-1vw)
</style>