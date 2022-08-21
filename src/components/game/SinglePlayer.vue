<template>
  <div class="flex justify-center gap-6">
    <div class="text-center  bg-secondary-idle rounded py-3 w-full sm:w-64 sm:flex sm:items-center sm:justify-between sm:px-6">
      <p class="text-title font-bold sm:text-lg">Time</p>
      <p class="text-dark-active text-2xl font-bold sm:text-3xl">{{ minutes }}:{{ seconds }}</p>
    </div>
    <div class="text-center  bg-secondary-idle rounded py-3 w-full sm:w-64 sm:flex sm:items-center sm:justify-between sm:px-6">
      <p class="text-title font-bold sm:text-lg">Moves</p>
      <p class="text-dark-active text-2xl font-bold sm:text-3xl">{{ store.gameInstance.turn }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/stores/store';
const store = useStore()

const seconds = computed(() => {
  return (store.gameInstance.time % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
})
const minutes = computed(() => {
  return Math.floor(store.gameInstance.time / 60)
})
</script>