<template>
  <button
    @click="toggleDarkMode"
    class="h-12 w-12 rounded-full bg-dark-blue transition-all hover:scale-110 dark:bg-main-yellow"
  >
    <i v-if="!darkMode" class="fa-regular fa-moon fa-xl pr-[1px] pt-[1px]"></i>
    <i v-if="darkMode" class="fa-regular fa-sun fa-xl pr-[1px] pt-[1px]"></i>
  </button>
</template>

<script setup lang="ts">
import { useDarkMode } from 'src/composables/useDarkMode';

const { toggleDarkMode, darkMode } = useDarkMode();
</script>
