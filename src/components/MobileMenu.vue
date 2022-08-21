<template>
  <div class="z-10 bg-black/25 fixed flex top-0 left-0 min-w-full min-h-full flex-col items-center justify-center">
    <div class="bg-white w-11/12 max-w-xs p-6 flex flex-col gap-4 rounded-xl">
      <BtnPrimary @click="restart">Restart</BtnPrimary>
      <BtnSecondary @click="newGame">New Game</BtnSecondary>
      <BtnSecondary @click="resumeGame">Resume Game</BtnSecondary>
    </div>
  </div>
</template>
<script setup>
import BtnPrimary from './buttons/Primary.vue';
import BtnSecondary from './buttons/Secondary.vue';
import { useStore } from '../stores/store';
const store = useStore()
const restart = () => {
  store.restartGame()
  store.mobileMenu = false
}
const newGame = () => {
  store.newGame()
  store.mobileMenu = false
}
const resumeGame = () => {
  store.mobileMenu = false
}
</script>