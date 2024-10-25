<template>
  <nav class="navbar flex items-center gap-8 mobile:!gap-0">
    <ul v-for="link in links" :key="link.title">
      <li>
        <router-link
          :to="link.url"
          class="pb-2 font-roboto text-sm font-medium text-main-white hover:border-b-4 hover:border-b-main-blue mobile:!hidden"
          :class="{
            '!text-dark-blue dark:!text-main-white': route.name !== 'HomePage',
          }"
          >{{ link.title }}</router-link
        >
      </li>
    </ul>
    <q-btn
      v-if="route.name === 'HomePage'"
      unelevated
      class="h-[42px] w-[105px] bg-white/20 normal-case text-main-white mobile:!hidden"
      @click="scrollToSection('callToAction')"
    >
      Contact
    </q-btn>
  </nav>

  <q-btn
    v-if="route.name === 'HomePage'"
    dense
    flat
    round
    size="16px"
    icon="menu"
    @click="toggleRightDrawer"
    color="white"
    class="hidden mobile:!block"
  />
  <q-btn
    v-else
    dense
    flat
    round
    size="16px"
    icon="menu"
    @click="toggleRightDrawer"
    class="hidden text-black dark:!text-white mobile:!block"
  />
  <q-drawer
    v-model="rightDrawerOpen"
    side="right"
    class="flex flex-col px-4 pt-4 dark:bg-dark-blue"
  >
    <div class="mb-3 flex items-center gap-2" aria-label="Dark Mode Icon">
      <p
        @click="toggleDarkMode"
        class="font-roboto text-lg font-medium text-dark-blue dark:text-main-white"
      >
        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
      </p>
      <DarkModeToggle />
    </div>
    <ul v-for="link in links" :key="link.title" class="flex w-full flex-col">
      <router-link
        :to="link.url"
        class="mb-4 font-roboto text-base font-medium text-dark-blue dark:text-main-white"
        >{{ link.title }}</router-link
      >
    </ul>
    <p
      v-if="route.name === 'HomePage'"
      @click="scrollToSectionMobile"
      class="font-roboto text-base font-medium text-dark-blue dark:text-main-white"
    >
      Contact
    </p>
  </q-drawer>
</template>

<script setup lang="ts">
import DarkModeToggle from 'src/components/UI/DarkModeToggle.vue';
import { useDarkMode } from 'src/composables/useDarkMode';
import { useScrollToSection } from 'src/composables/useScrollToSection';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useRoute } from 'vue-router';

const { scrollToSection } = useScrollToSection();
const route = useRoute();

const links = ref([
  { title: 'Home', url: '/' },
  { title: 'Projects', url: '/projects' },
]);

const { darkMode, toggleDarkMode } = useDarkMode();
const rightDrawerOpen = ref(false);
const isMobile = ref(false);

// Set up viewport check and event listener
onMounted(() => {
  checkViewport(); // Initial check
  window.addEventListener('resize', debouncedCheckViewport);
  rightDrawerOpen.value = false;
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

// Function to check viewport size
const checkViewport = () => {
  isMobile.value = window.matchMedia('(max-width: 760px)').matches;
  if (!isMobile.value) {
    rightDrawerOpen.value = false;
  }
};

// Debounced version of the checkViewport function for the resize event
const debouncedCheckViewport = debounce(checkViewport, 100);

// Toggle drawer state
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

// scroll to section in mobile
const scrollToSectionMobile = () => {
  rightDrawerOpen.value = false;
  setTimeout(() => {
    scrollToSection('callToAction');
  }, 500);
};
</script>

<style scoped>
.navbar > ul > .router-link-exact-active {
  @apply border-b-4 border-b-main-blue;
}
</style>
