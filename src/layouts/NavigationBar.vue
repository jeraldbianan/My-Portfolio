<template>
  <q-header class="mx-auto mt-5 flex justify-center bg-transparent">
    <div
      class="mobile:mx-5 mx-[60px] flex w-full max-w-container justify-between"
    >
      <div class="flex">
        <router-link to="/">
          <q-img
            v-if="isMobile"
            :src="
              !darkMode
                ? 'images/mobile-logo.svg'
                : 'images/mobile-logo-light.svg'
            "
            height="48px"
            width="48px"
          />
          <q-img
            v-else
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
      <div class="mobile:!gap-3 flex items-center gap-8">
        <DarkModeToggle class="mobile:hidden" />
        <NavigationLinks />
      </div>
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

import DarkModeToggle from 'src/components/UI/DarkModeToggle.vue';
import NavigationLinks from './NavigationBar/NavigationLinks.vue';
import { useRoute } from 'vue-router';
import { useDarkMode } from 'src/composables/useDarkMode';

const route = useRoute();

const { darkMode } = useDarkMode();
const isMobile = ref(false);

// Set up viewport check and event listener
onMounted(() => {
  checkViewport(); // Initial check
  window.addEventListener('resize', debouncedCheckViewport);
});

// Clean up the event listener on component unmount
onBeforeUnmount(() => {
  window.removeEventListener('resize', debouncedCheckViewport);
});

// Debounce function to prevent excessive execution during window resize
const debounce = <T extends (...args: string[]) => void>(
  func: T,
  wait: number,
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const checkViewport = () => {
  isMobile.value = window.matchMedia('(max-width: 640px)').matches;
};

// Debounced version of the checkViewport function for the resize event
const debouncedCheckViewport = debounce(checkViewport, 50);
</script>

<style lang="scss" scoped></style>
