<template>
  <div class="flip-box">
    <div class="flip-box-inner transition-all duration-500" :class="selected || solved ? ['flip'] : ['cursor-pointer']">
      <div class="flip-box-front bg-dark-active hover:bg-dark-hover" />
      <div class="flip-box-back select-none " :class="selected ? ['bg-primary-idle'] : ['bg-dark-idle']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
  solved: {
    type: Boolean,
    default: false
  }
})
</script>

<style>
.flip-box {
  background-color: transparent;
  perspective: 1000px;
  aspect-ratio: 1 / 1;
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
}

.flip {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}

/* Style the back side */
.flip-box-back {
  color: white;
  transform: rotateY(180deg);
}
</style>