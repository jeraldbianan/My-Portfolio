<template>
  <div
    v-for="(project, index) in slicedProjects"
    :key="project.id"
    :class="['flex justify-between', { 'flex-row-reverse': index % 2 === 1 }]"
  >
    <q-img
      :src="`src/assets/images/projects/${project.image}`"
      class="shadow-bigShadow h-[315px] w-[565px] rounded"
    />
    <div class="flex w-full max-w-[464px] flex-col justify-center">
      <h3 class="font-poppins text-[35px] text-dark-blue dark:text-main-white">
        {{ project.title }}
      </h3>
      <p
        class="mt-5 line-clamp-3 font-roboto text-xl text-main-grey dark:text-main-white"
      >
        {{ project.description }}
      </p>
      <div
        class="group mt-[52px] flex cursor-pointer items-center gap-3 transition-all"
      >
        <p class="font-roboto text-base font-bold text-main-blue">
          View Project
        </p>
        <q-icon
          name="img:src/assets/icons/actions/arrow-right.svg"
          class="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from 'src/data/projects';

const slicedProjects = projects.slice(0, 2);
</script>

<style scoped></style>
