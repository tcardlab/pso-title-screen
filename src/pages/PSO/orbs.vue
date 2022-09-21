<template>
  <div class="orb-container">
    <svg width="282.52mm" height="209.17mm" viewBox="0 0 282.52 209.17">
      <filter id="white-glow">
        <feFlood result="flood" flood-color="#ffffff" flood-opacity="0.3"></feFlood>
        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
        <feMorphology in="mask" result="dilated" operator="dilate" radius="1"></feMorphology>
        <feGaussianBlur in="dilated" result="blurred" stdDeviation="1"></feGaussianBlur>
        <feMerge>
            <feMergeNode in="blurred"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
      <filter id="glow">
        <feFlood result="flood" flood-color="#00bfff" flood-opacity=".8"></feFlood>
        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
        <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
        <feGaussianBlur in="dilated" result="blurred" stdDeviation="3"></feGaussianBlur>
        <feMerge>
            <feMergeNode in="blurred"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>

    <g class="all">
      <g class="ring" transform="translate(-183.56 -13.695)">
        <path 
          d="m329.96 201.78c35.485 14.238 85.11 27.413 112.95 14.471 8.0037-3.7209 16.322-9.2985 19.38-18.003 8.0205-22.833-7.8063-51.181-33.114-78.591-15.545-16.836-34.846-31.459-51.34-42.518-21.801-14.618-54.455-33.024-97.059-44.867-28.784-8.0013-64.325-10.884-83.793 3.682-10.988 8.2211-14.064 21.096-10.988 35.84 4.5766 21.94 20.038 41.91 39.838 61.966 33.747 34.185 83.16 59.146 104.13 68.019z" 
          fill="none" 
          stroke="#f0f1f7" 
          stroke-width="2.6458"
        />
      </g>
      <g class="orbs" transform="translate(-183.56 -13.695)" fill="#f0f1f7" stroke="none">
        <circle cx="209.69" cy="29.452" r="15.757"/>
        <circle cx="314.31" cy="194.63" r="15.757"/>
        <circle cx="450.31" cy="145.75" r="15.757"/>
      </g>
    </g>
    </svg>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .orb-container {
    width: 45vw;
    transform: translate(1vw, -3.75vw);
    &> svg {
      width: 100%;
      overflow: visible
    }
  } 

  //.orbs, .ring {
  .all{
    filter: url(#white-glow) url(#glow) // order does matter it seems
  }
</style>