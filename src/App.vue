<template>
  <div :class="store.gameStarted ? ['bg-white'] : ['bg-body-bg']">
    <div
      class="min-h-screen flex flex-col gap-20 mx-auto w-11/12 max-w-xs py-6 sm:max-w-md lg:max-w-lg sm:py-11 lg:py-16">
      <HeaderVue v-if="store.gameStarted" />
      <main>
        <div>
          <MainMenu v-if="!store.gameStarted" />
          <MemoryGame v-else />
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import HeaderVue from '@/components/Header.vue'
import MainMenu from './components/MainMenu.vue';
import { useStore } from '@/stores/store';
import MemoryGame from './components/MemoryGame.vue';

const store = useStore()
store.startGame()
store.pauseGame()
</script>

<style scoped>
</style>
