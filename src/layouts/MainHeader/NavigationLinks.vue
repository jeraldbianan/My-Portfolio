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
  {
    title: 'Contact',
    url: '/contact',
  },
  {
    title: 'About me',
    url: '/aboutme',
  },
]);
</script>

<template>
  <ul v-for="link in links" :key="link.title">
    <router-link
      :to="link.url"
      class="font-bebas-neue rounded-lg p-4 text-lg"
      >{{ link.title }}</router-link
    >
  </ul>
</template>

<style lang="scss" scoped>
.router-link-active {
  @apply bg-red-500 text-white;
}
</style>
