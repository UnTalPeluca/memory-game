<template>
  <div class="bg-white p-6 rounded-xl w-full flex flex-col gap-4 sm:p-14">
    <div class="pb-4 flex flex-col gap-5 sm:gap-7">
      <div>
        <h2 class="text-title font-bold pb-2 sm:text-xl sm:pb-4">Select Theme</h2>
        <Selection class="gap-2.5 sm:gap-8 sm:text-2xl" :options="config.theme.options" :state="gameConfig.theme" @update:state="updateTheme" />
      </div>
      <div>
        <h2 class="text-title font-bold pb-2 sm:text-xl sm:pb-4">Numbers of Players</h2>
        <Selection class="gap-2.5 sm:gap-5 sm:text-2xl" :options="config.players.options" :state="gameConfig.players" @update:state="updatePlayers" />
      </div>
      <div>
        <h2 class="text-title font-bold pb-2 sm:text-xl sm:pb-4">Grid Size</h2>
        <Selection class="gap-2.5 sm:gap-8 sm:text-2xl" :options="config.size.options" :state="gameConfig.size" @update:state="updateSize" />
      </div>
    </div>
    <MenuLarge class="p-2.5 sm:text-2xl" @click="startGame">Start Game</MenuLarge>
  </div>
</template>

<script setup>

import { useStore } from '@/stores/store';
import Selection from './Selection.vue';
import MenuLarge from '../buttons/MenuLarge.vue';

const store = useStore()
const config = store.config
const gameConfig = store.gameConfig

const updateTheme = (index) => {
  gameConfig.theme = index
}
const updatePlayers = (index) => {
  gameConfig.players = index
}
const updateSize = (index) => {
  gameConfig.size = index
}

const startGame = () => {
  store.startGame()
}
</script>