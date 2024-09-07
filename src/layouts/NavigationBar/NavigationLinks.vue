<script setup lang="ts">
import { ref } from 'vue';

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

<template>
  <div class="flex items-center gap-8">
    <ul v-for="link in links" :key="link.title">
      <router-link
        :to="link.url"
        class="pb-2 font-roboto text-sm font-medium text-main-white hover:border-b-4 hover:border-b-main-blue"
        >{{ link.title }}</router-link
      >
    </ul>
    <q-btn
      unelevated
      class="h-[42px] w-[105px] bg-white/20 normal-case text-main-white"
      >Contact</q-btn
    >
  </div>
</template>

<style lang="scss" scoped>
.router-link-active {
  @apply border-b-4 border-b-main-blue;
}
</style>
