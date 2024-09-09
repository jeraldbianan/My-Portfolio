<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import LoadingSpinner from './components/UI/LoadingSpinner.vue';
import { useRoute } from 'vue-router';
import { RouteMeta } from './types/routes';

defineOptions({
  name: 'App',
});

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

const route = useRoute();

watch(route, () => {
  const meta = route.meta as RouteMeta;
  const { title, description } = meta;

  if (title) {
    document.title = title;
  }

  if (description) {
    let descriptionMetaTag = document.querySelector('meta[name="description"]');
    if (!descriptionMetaTag) {
      descriptionMetaTag = document.createElement('meta');
      descriptionMetaTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionMetaTag);
    }
    descriptionMetaTag.setAttribute('content', description);
  }
});
</script>

<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <router-view v-else />
  </div>
</template>
