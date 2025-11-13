<script setup lang="ts">
import { useCounterStore } from './stores/counter'
const store = useCounterStore()
</script>

<template>
  <h1>{{ store.count }} x 2 = {{ store.times2 }}</h1>
  <button @click="store.increment(1)">Increment</button>
</template>

<style scoped></style>
