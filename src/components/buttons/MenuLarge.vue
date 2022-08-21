<template>
  <button v-bind="$attrs" class="bg-primary-idle hover:bg-primary-hover text-white text-lg font-bold rounded-4xl">
    <slot />
  </button>
</template>