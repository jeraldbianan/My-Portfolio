<script setup lang="ts">
// import LoadingSpinner from './components/UI/LoadingSpinner.vue';

defineOptions({
  name: 'App',
});

// const isLoading = ref(true);

// onMounted(() => {
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 1000);
// });
</script>

<template>
  <div>
    <!-- <LoadingSpinner v-if="isLoading" /> -->
    <router-view />
  </div>
</template>
