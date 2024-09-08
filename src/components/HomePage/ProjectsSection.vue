<template>
  <div class="flex justify-center bg-white py-[90px] dark:!bg-dark-blue">
    <div class="flex w-full max-w-container flex-col items-center">
      <h2
        class="mb-[90px] font-poppins text-[45px] font-normal text-dark-blue dark:text-main-white"
      >
        My Projects
      </h2>

      <MyProjects />

      <q-btn
        unelevated
        class="mt-[90px] h-16 w-[168px] bg-dark-blue/20 font-roboto text-lg font-medium normal-case text-dark-blue dark:bg-main-blue dark:text-main-white"
        label="All Projects"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyProjects from './ProjectsSection/MyProjects.vue';
</script>

<style scoped></style>
