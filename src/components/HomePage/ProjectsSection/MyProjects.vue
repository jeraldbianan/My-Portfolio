<template>
  <section
    ref="projectsSection"
    class="mobile:gap-y-[60px] flex w-full max-w-full flex-col gap-y-[90px]"
  >
    <div
      v-for="(project, index) in slicedProjects"
      :key="project.id"
      :class="[
        'tablet:flex-col flex flex-nowrap items-center justify-between',
        { 'flex-row-reverse': index % 2 === 1 },
      ]"
    >
      <q-img
        :src="`images/projects/${project.image}`"
        class="tablet:max-w-full tablet:max-h-[600px] mobile:!min-h-0 tablet:!h-full !h-[315px] max-w-[565px] rounded shadow-bigShadow"
        :class="{
          'slide-to-left': index % 2 === 1,
          'slide-to-right': index % 2 === 0,
        }"
      />
      <div
        class="tablet:max-w-full flex w-full max-w-[464px] flex-col justify-center"
        :class="{
          'slide-to-right': index % 2 === 1,
          'slide-to-left': index % 2 === 0,
        }"
      >
        <h3
          class="tablet:mt-10 mobile:text-3xl mobile:w-full font-poppins text-[35px] text-dark-blue dark:text-main-white"
        >
          {{ project.title }}
        </h3>
        <p
          class="mobile:text-sm mt-5 line-clamp-3 font-roboto text-xl text-main-grey dark:text-main-white"
        >
          {{ project.description }}
        </p>
        <router-link
          :to="{ name: 'Project', params: { id: project.id } }"
          class="mobile:mt-10 group mt-[52px] flex cursor-pointer items-center gap-3 transition-all"
        >
          <p
            class="mobile:text-sm font-roboto text-base font-bold text-main-blue"
          >
            View Project
          </p>
          <q-icon
            name="img:icons/actions/arrow-right.svg"
            class="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-2"
          />
        </router-link>
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

const slicedProjects = [...projects].reverse().slice(0, 2);

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
      stagger: 0,
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
      stagger: 0,
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
