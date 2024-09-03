<template>
  <button
    @click="toggleDarkMode"
    class="hover:bg-dark-blue dark:hover:bg-main-yellow bg-main-grey h-12 w-12 rounded-full"
  >
    <i v-if="!darkMode" class="fa-regular fa-moon fa-xl pr-[1px] pt-[1px]"></i>
    <i v-if="darkMode" class="fa-regular fa-sun fa-xl pr-[1px] pt-[1px]"></i>
  </button>
</template>

<script setup lang="ts">
import { useDarkMode } from 'src/composables/useDarkMode';

const { toggleDarkMode, darkMode } = useDarkMode();
</script>
