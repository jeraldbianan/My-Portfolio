<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface ProgressBar {
  start: () => void;
  stop: () => void;
}

const bar = ref<ProgressBar | null>(null);

onMounted(() => {
  trigger();
});

function trigger() {
  const barRef = bar.value;

  if (barRef) {
    barRef.start();
  }

  setTimeout(
    () => {
      const barRef = bar.value;
      if (barRef) {
        barRef.stop();
      }
    },
    Math.random() * 3000 + 1000,
  );
}
</script>

<template>
  <div class="q-pa-md">
    <q-ajax-bar
      ref="bar"
      position="top"
      color="accent"
      size="10px"
      skip-hijack
    />
  </div>
</template>

<style scoped></style>
