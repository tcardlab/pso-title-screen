<script setup lang="ts">
  import useCount from '@/use/count'
  const count = useCount()
  // let count = $ref(0)

  defineProps<{ msg: string }>()  
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is {{ count }}</button>
</template>

<style scoped>

</style>
