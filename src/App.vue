<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { RouteMeta } from './types/routes';
import AjaxBarLoading from './components/UI/AjaxBarLoading.vue';

const isAppLoading = ref(true);
const route = useRoute();
const router = useRouter();

onMounted(() => {
  router.beforeEach((to, from, next) => {
    isAppLoading.value = true;
    next();
  });

  router.afterEach(() => {
    isAppLoading.value = false;
  });
});

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
    <AjaxBarLoading v-if="isAppLoading" />
    <router-view v-else />
  </div>
</template>
