<template>
  <div class="flex flex-col gap-20">
    <div class="grid gap-3 w-full mx-auto max-w-xs" :class="store.getGridSize === 4 ? size4Grid : size6Grid"
      :style="[`gridTemplateColumns: repeat(${store.getGridSize}, 1fr)`]">
      <Card @click="selectCard(index)" :selected="store.gameInstance?.selectedPair?.includes(index)" class="font-bold"
        :solved="store.gameInstance?.solved?.includes(index)" v-for="(item, index) in store.gameInstance.grid"
        :key="index">
        <p v-if="store.gameConfig.theme === 0" :class="store.restarting ? 'hidden' : ''">
          {{ item }}
        </p>
        <i v-else class="fa-solid" :class="[store.restarting ? 'hidden' : '', icons[item]]"></i>
      </Card>
    </div>
    <Multiplayer v-if="store.isMultiplayer" />
    <SinglePlayer v-else />
    <GameOver v-if="store.isGameOver" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/game/Card.vue';
import { useStore } from '@/stores/store';
import SinglePlayer from './game/SinglePlayer.vue';
import Multiplayer from './game/MultiPlayer.vue';
import GameOver from './GameOver.vue';

const store = useStore()
const size4Grid = ['gap-3', 'text-4xl', 'sm:max-w-[532px]', 'sm:gap-4', 'sm:text-7xl']
const size6Grid = ['gap-2', 'text-2xl', 'sm:max-w-[572px]', 'sm:text-5xl']

const canInteract = ref(true)
const prevSelected = ref(null)
const icons = [
  '',
  'fa-archway',
  'fa-anchor',
  'fa-apple-whole',
  'fa-award',
  'fa-bahai',
  'fa-briefcase-medical',
  'fa-burger',
  'fa-camera-retro',
  'fa-car'
]
const selectCard = (i) => {
  if (store.gameInstance?.solved?.includes(i) || prevSelected.value === i) {
    return
  }
  if (canInteract.value) {
    canInteract.value = false
    store.gameInstance.selectedPair.push(i)
    prevSelected.value = i
    if (store.gameInstance.selectedPair.length === 2) {
      if (checkIfPair()) {
        console.log("Es par")
        setTimeout(onPair, 1000)
      } else {
        console.log("No es par")
        setTimeout(onNotPair, 1000)
      }
    } else {
      canInteract.value = true
    }
  }
}
const checkIfPair = () => {
  return store.gameInstance.grid[store.gameInstance.selectedPair[0]] === store.gameInstance.grid[store.gameInstance.selectedPair[1]]
}
const onPair = () => {
  store.markAsSolved(store.gameInstance.selectedPair)
  cleanSelected()
}
const onNotPair = () => {
  store.nextTurn()
  cleanSelected()
}
const cleanSelected = () => {
  store.gameInstance.selectedPair = []
  canInteract.value = true
}
</script>
<style>
</style>