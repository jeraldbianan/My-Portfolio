<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LoadingIndicator from './components/UI/LoadingIndicator.vue';

defineOptions({
  name: 'App',
});

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
  <div>
    <LoadingIndicator v-if="isLoading" />
    <router-view v-else />
  </div>
</template>
