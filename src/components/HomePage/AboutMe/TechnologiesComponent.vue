<template>
  <div class="w-full max-w-[475px]">
    <h3
      class="font-poppins text-3xl font-normal text-dark-blue dark:text-main-white"
    >
      Technologies
    </h3>
    <h4
      class="mt-5 font-poppins text-lg font-light text-main-grey dark:text-main-white"
    >
      Front-end
    </h4>
    <div class="mt-[18px] flex gap-x-[30px] gap-y-[18px]">
      <div v-for="technology in technologies" :key="technology.id">
        <a :href="technology.url" target="_blank">
          <q-img
            :src="`icons/technologies/${technology.image}`"
            :alt="technology.name"
            class="h-[70px] w-[70px] transition hover:scale-110"
          />
        </a>
      </div>
    </div>
    <!-- Todo -->
    <!-- <h4
      class="mt-5 font-poppins text-lg font-light text-main-grey dark:text-main-white"
    >
      Back-end
    </h4> -->
  </div>
</template>

<script setup lang="ts">
import { technologies } from 'src/data/technologies';
</script>

<style scoped></style>
