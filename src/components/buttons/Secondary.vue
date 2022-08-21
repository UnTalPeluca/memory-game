<template>
  <button v-bind="$attrs" class="bg-secondary-idle hover:bg-secondary-hover text-dark-active hover:text-white font-bold py-2.5 rounded-4xl
  ">
    <slot />
  </button>
</template>