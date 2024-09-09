<script setup lang="ts">
import IntroductionSection from './HeroSection/IntroductionSection.vue';
</script>

<template>
  <div>
    <q-img
      src="images/hero-background.jpg"
      alt="Hero Background"
      class="relative min-h-[800px]"
    >
      <div
        class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center !bg-black/50"
      >
        <div class="w-full max-w-container">
          <IntroductionSection />
        </div>
      </div>
    </q-img>
  </div>
</template>

<style scoped></style>
