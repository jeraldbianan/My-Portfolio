<template>
  <div class="tablet:max-w-full w-full max-w-[475px]">
    <h3
      class="mobile:text-xl font-poppins text-3xl font-normal text-dark-blue dark:text-main-white"
    >
      Technologies
    </h3>
    <h4
      class="mobile:text-base mt-5 font-poppins text-lg font-light text-main-grey dark:text-main-white"
    >
      Front-end
    </h4>
    <div
      class="mobile: mobile:gap-x-6 mt-[18px] flex gap-x-[30px] gap-y-[18px]"
    >
      <div v-for="technology in frontendTechnologies" :key="technology.id">
        <a :href="technology.url" target="_blank">
          <q-img
            :src="`icons/technologies/${technology.image}`"
            :alt="technology.name"
            class="mobile:h-10 mobile:w-10 h-[70px] w-[70px] transition hover:scale-110"
          />
        </a>
      </div>
    </div>
    <h4
      class="mobile:text-base mt-5 font-poppins text-lg font-light text-main-grey dark:text-main-white"
    >
      Back-end
    </h4>
    <div
      class="mobile: mobile:gap-x-6 mt-[18px] flex gap-x-[30px] gap-y-[18px]"
    >
      <div v-for="technology in backendTechnologies" :key="technology.id">
        <a :href="technology.url" target="_blank">
          <q-img
            :src="`icons/technologies/${technology.image}`"
            :alt="technology.name"
            class="mobile:h-10 mobile:w-10 h-[70px] w-[70px] transition hover:scale-110"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  backendTechnologies,
  frontendTechnologies,
} from 'src/data/technologies';
</script>

<style scoped></style>
