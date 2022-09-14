<template>
  <render />
  <jsxNode />
</template>

<script lang="tsx" setup>
  import { h } from 'vue';

  const render = () => h('div', {innerHTML: 'hello' });

  const jsxNode = () => <div>text</div>;
</script>

<style scoped>
  div {
    color: red
  }
</style>
