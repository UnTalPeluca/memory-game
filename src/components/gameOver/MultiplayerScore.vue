<template>
  <div class="flex flex-col gap-6
  sm:gap-10">
    <div class="text-center ">
      <h2 class="text-body-bg font-bold text-2xl flex justify-center items-center
      sm:text-6xl">
        {{ isTie.length === 1 ? `Player ${playerScores[0].player} Wins!` : "It's a tie!" }}
      </h2>
      <p class="text-title font-bold text-sm
      sm:text-lg">Game over! Here are the results...</p>
    </div>
    <div class="flex flex-col gap-2
    sm:gap-4">
      <div v-for="({ player, score }, index) in playerScores" :key="index" class="rounded-lg font-bold px-4 py-3 flex justify-between items-center
        sm:px-8"
        :class="score === highestScore ? ['bg-body-bg', 'text-white'] : ['bg-secondary-idle', '[&>p:first-child]:text-title', '[&>p:last-child]:text-dark-active']">
        <p class="text-xs
        sm:text-lg">Player {{ player }} <span v-if="score === highestScore">(Winner!)</span></p>
        <p class="text-xl
        sm:text-3xl">{{ score }} Pairs</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/store';
import { computed } from 'vue';
const store = useStore()

const playerScores = computed(() => {
  const scores = store.gameInstance.scores.map((score, index) => {
    return { player: index + 1, score: score }
  })
  return scores.sort((a, b) => a.score - b.score).reverse()
})
const highestScore = computed(() => {
  return Math.max(...store.gameInstance.scores)
})
const isTie = computed(() => {
  return store.gameInstance.scores.filter(e => e === highestScore.value)
})
</script>