<template>
  <div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12 max-w-xs 
  sm:max-w-sm">
    <h1 class="font-bold text-center text-white text-3xl pb-12">memory</h1>
    <StartGame />
  </div>
</template>
<script setup>
import StartGame from "./mainMenu/StartGame.vue";

import { useStore } from '@/stores/store';
import { onMounted } from "vue";
const store = useStore()

onMounted(() => {
  store.$reset
})
</script>