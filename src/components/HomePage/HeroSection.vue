<script setup lang="ts">
import IntroductionSection from './HeroSection/IntroductionSection.vue';
</script>

<template>
  <div>
    <q-img
      src="images/hero-background.jpg"
      alt="Hero Background"
      class="mobile:w-full mobile:min-h-[600px] relative min-h-[800px]"
    >
      <div
        class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center !bg-black/50"
      >
        <div class="mobile:mx-[30px] mx-[60px] w-full max-w-container">
          <IntroductionSection />
        </div>
      </div>
    </q-img>
  </div>
</template>

<style scoped>
:deep(.q-img__content > div) {
  @apply p-0;
}
</style>
