<template>
  <div
    ref="myProjects"
    class="mobile:pb-[60px] flex justify-center bg-white pb-[90px] dark:!bg-dark-blue"
  >
    <div
      class="mobile:mx-[30px] mx-[60px] flex w-full max-w-container flex-col items-center"
    >
      <h2
        class="mobile:text-3xl mobile:mb-[60px] mb-[90px] font-poppins text-[45px] font-normal text-dark-blue dark:text-main-white"
      >
        My Projects
      </h2>

      <MyProjects />

      <q-btn
        unelevated
        class="mobile:mt-14 mobile:h-12 mobile:text-sm mt-[90px] h-16 w-[168px] bg-dark-blue/20 font-roboto text-lg font-medium normal-case text-dark-blue dark:bg-main-blue dark:text-main-white"
        label="All Projects"
        :to="{ name: 'Projects' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyProjects from './ProjectsSection/MyProjects.vue';

import { useScrollToSection } from 'src/composables/useScrollToSection';

const { components } = useScrollToSection();
const { myProjects } = components;
</script>

<style scoped></style>
