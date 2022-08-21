<template>
  <button v-bind="$attrs" class="bg-primary-idle hover:bg-primary-hover text-white font-bold py-2.5 rounded-4xl">
    <slot />
  </button>
</template>