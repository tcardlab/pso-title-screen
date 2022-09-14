<script setup lang="ts">
  import useCount from '@/use/count'
  const count = useCount()
  // let count = $ref(0)

  defineProps<{ msg: string }>()  

  //class="bg-green-400 hover:bg-green-500"
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++"
   class="test"
  >count is {{ count }}</button>
</template>

<style scoped lang="scss">
  .test {
    @apply bg-green-400 hover:bg-green-500;
    @apply: "px-4 py-2 text-white border border-green-200 rounded";
  }
</style>
