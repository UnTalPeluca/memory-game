<template>
  <div class="flex">
    <MenuSelectionButton class="py-2" @click="$emit('update:state', index)" v-for="(option, index) in options" :key="index"
      :selected="state === index">
      {{ option }}
    </MenuSelectionButton>
  </div>
</template>

<script setup>
import MenuSelectionButton from '../buttons/MenuSelection.vue';

const props = defineProps({
  options: {
    type: Object,
    required: true
  },
  state: {
    type: Number,
    required: true
  }
})

</script>