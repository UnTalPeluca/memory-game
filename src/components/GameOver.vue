<template>
  <div class="z-10 bg-black/25 fixed flex top-0 left-0 min-w-full min-h-full flex-col items-center justify-center">
    <div class="bg-white w-11/12 max-w-xs p-6 pt-8 flex flex-col gap-6 rounded-xl
    sm:max-w-sm sm:p-14 sm:pb-16 sm:gap-10">
      <MultiplayerScore v-if="store.isMultiplayer" />
      <Singleplayer v-else />
      <div class="flex flex-col gap-4 text-lg sm:flex-row">
        <BtnPrimary class="w-full
        sm:py-3" @click="restart">Restart</BtnPrimary>
        <BtnSecondary class="w-full
        sm:py-3" @click="newGame">Setup New Game</BtnSecondary>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/store';
import { onMounted } from 'vue';
import BtnPrimary from './buttons/Primary.vue';
import BtnSecondary from './buttons/Secondary.vue';
import MultiplayerScore from './gameOver/MultiplayerScore.vue';
import Singleplayer from './gameOver/Singleplayer.vue';
const store = useStore()

const restart = () => {
  store.restartGame()
}
const newGame = () => {
  store.newGame()
}
onMounted(() => {
  store.pauseGame()
})
</script>