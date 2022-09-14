<template>
  <HelloWorld msg="Vite + Vue" />

  <p> platform: {{$store.platform}} </p>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'

  import useStore from '@/stores/store'
  const $store = useStore()
</script>

<style scoped>
  
</style>
