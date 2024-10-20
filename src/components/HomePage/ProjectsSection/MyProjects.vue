<template>
  <section
    ref="projectsSection"
    class="flex w-full max-w-full flex-col gap-y-[90px] mobile:gap-y-[60px]"
  >
    <div
      v-for="(project, index) in slicedProjects"
      :key="project.id"
      :class="[
        'flex flex-nowrap items-center justify-between tablet:flex-col',
        { 'flex-row-reverse': index % 2 === 1 },
      ]"
    >
      <q-img
        :src="`images/projects/${project.image}`"
        class="!h-[315px] max-w-[565px] rounded shadow-bigShadow tablet:!h-full tablet:max-h-[600px] tablet:max-w-full mobile:!min-h-0"
        :class="[index % 2 === 1 ? 'slide-to-left' : 'slide-to-right']"
      />
      <div
        class="flex w-full max-w-[464px] flex-col justify-center tablet:max-w-full"
        :class="[index % 2 === 1 ? 'slide-to-right' : 'slide-to-left']"
      >
        <h3
          class="font-poppins text-[35px] text-dark-blue dark:text-main-white tablet:mt-10 mobile:w-full mobile:text-3xl"
        >
          {{ project.title }}
        </h3>
        <p
          v-html="DOMPurify.sanitize(project.description)"
          class="mt-5 line-clamp-3 font-roboto text-xl text-main-grey dark:text-main-white mobile:text-sm"
        ></p>
        <router-link
          :to="{ name: 'Project', params: { id: project.id } }"
          class="group mt-[52px] flex cursor-pointer items-center gap-3 transition-all mobile:mt-10"
        >
          <p
            class="font-roboto text-base font-bold text-main-blue mobile:text-sm"
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
import DOMPurify from 'dompurify';

gsap.registerPlugin(ScrollTrigger);

const projectsSection = ref<HTMLElement | null>(null);
const slicedProjects = [...projects].reverse().slice(0, 2);

onMounted(() => {
  const elements = gsap.utils.toArray(
    '.slide-to-right, .slide-to-left',
  ) as HTMLElement[];

  elements.forEach((el: HTMLElement) => {
    const direction = el.classList.contains('slide-to-right') ? -100 : 100;

    gsap.fromTo(
      el,
      { x: direction, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: projectsSection.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    );
  });
});
</script>

<style scoped></style>
