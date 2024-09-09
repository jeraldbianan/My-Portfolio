<template>
  <q-header
    class="mx-auto mt-5 flex max-w-container justify-between bg-transparent"
  >
    <div class="flex">
      <router-link to="/">
        <q-img
          :src="
            route.name !== 'HomePage' && !darkMode
              ? 'images/JB-logo-dark.svg'
              : 'images/JB-logo.svg'
          "
          fit="none"
          class="h-[68px] w-[165px]"
        />
      </router-link>
    </div>
    <div class="flex items-center gap-8">
      <DarkModeToggle />
      <NavigationLinks />
    </div>
  </q-header>
</template>

<script setup lang="ts">
import DarkModeToggle from 'src/components/UI/DarkModeToggle.vue';
import NavigationLinks from './NavigationBar/NavigationLinks.vue';
import { useRoute } from 'vue-router';
import { useDarkMode } from 'src/composables/useDarkMode';

const route = useRoute();

const { darkMode } = useDarkMode();
</script>

<style lang="scss" scoped></style>
