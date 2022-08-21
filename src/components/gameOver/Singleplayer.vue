<template>
  <div class="flex flex-col gap-6
  sm:gap-10">
    <div class="text-center ">
      <h2 class="text-body-bg font-bold text-2xl
      sm:text-6xl">You did it!</h2>
      <p class="text-title font-bold text-sm
      sm:text-lg">Game over! Here’s how you got on...</p>
    </div>
    <div class="flex flex-col gap-2 
    sm:gap-4">
      <div class="rounded-md font-bold px-4 py-3 flex justify-between items-center bg-secondary-idle
      sm:px-8">
        <p class="text-xs text-title
        sm:text-lg">Time Elapsed</p>
        <p class="text-xl text-dark-active
        sm:text-3xl">{{ minutes }}:{{ seconds }}</p>
      </div>
      <div class="rounded-md font-bold px-4 py-3 flex justify-between items-center bg-secondary-idle
      sm:px-8">
        <p class="text-xs text-title
        sm:text-lg">Moves Taken</p>
        <p class="text-xl text-dark-active
        sm:text-3xl">{{ store.gameInstance.turn }} Moves</p>
      </div>
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