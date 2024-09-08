<template>
  <section
    ref="projectsSection"
    class="projects-section flex w-full max-w-full flex-col gap-y-[90px]"
  >
    <div
      v-for="(project, index) in slicedProjects"
      :key="project.id"
      :class="['flex justify-between', { 'flex-row-reverse': index % 2 === 1 }]"
    >
      <q-img
        :src="`src/assets/images/projects/${project.image}`"
        class="shadow-bigShadow h-[315px] w-[565px] rounded"
        :class="{
          'slide-to-left': index % 2 === 1,
          'slide-to-right': index % 2 === 0,
        }"
      />
      <div
        class="flex w-full max-w-[464px] flex-col justify-center"
        :class="{
          'slide-to-right': index % 2 === 1,
          'slide-to-left': index % 2 === 0,
        }"
      >
        <h3
          class="font-poppins text-[35px] text-dark-blue dark:text-main-white"
        >
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
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { projects } from 'src/data/projects';

gsap.registerPlugin(ScrollTrigger);

const projectsSection = ref(null);

const slicedProjects = projects.reverse().slice(0, 2);

onMounted(() => {
  gsap.fromTo(
    '.slide-to-right',
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: projectsSection.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    },
  );

  gsap.fromTo(
    '.slide-to-left',
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: projectsSection.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    },
  );
});
</script>

<style scoped></style>
