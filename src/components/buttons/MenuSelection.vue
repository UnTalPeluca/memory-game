<template>
  <button class="bg-dark-idle hover:bg-dark-hover rounded-4xl text-white font-bold text-md w-full" :class="selected ? 'bg-dark-active' : ''">
    <slot />
  </button>
</template>

<script setup>

const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  }
})
</script>