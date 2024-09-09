<template>
  <div class="flex items-center gap-8">
    <ul v-for="link in links" :key="link.title">
      <router-link
        :to="link.url"
        class="pb-2 font-roboto text-sm font-medium text-main-white hover:border-b-4 hover:border-b-main-blue"
        :class="{
          '!text-dark-blue dark:!text-main-white': route.name !== 'HomePage',
        }"
        >{{ link.title }}</router-link
      >
    </ul>
    <q-btn
      v-if="route.name === 'HomePage'"
      unelevated
      class="h-[42px] w-[105px] bg-white/20 normal-case text-main-white"
      @click="scrollToSection('callToAction')"
    >
      Contact
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { useScrollToSection } from 'src/composables/useScrollToSection';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const { scrollToSection } = useScrollToSection();

const route = useRoute();

const links = ref([
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
]);
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply border-b-4 border-b-main-blue;
}
</style>
