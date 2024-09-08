<template>
  <div
    ref="aboutMe"
    class="flex justify-center bg-white py-[90px] dark:!bg-dark-blue"
  >
    <div class="flex w-full max-w-container flex-col items-center">
      <h2
        class="font-poppins text-[45px] font-normal text-dark-blue dark:text-main-white"
      >
        About Me
      </h2>

      <div class="about-me mt-[90px] flex w-full justify-between">
        <div
          class="flex w-full max-w-[567px] flex-col gap-8 font-roboto text-2xl font-normal leading-[145.8%] text-main-grey dark:text-main-white"
        >
          <p>
            In front-end web development I have 2+ years of experience, I
            primarily use VueJS, Quasar, and Tailwind CSS to build responsive
            and dynamic front-end experiences.
          </p>
          <p>
            In the field of UI/UX design, I work with Figma and Webflow to
            create intuitive and engaging user interfaces.
          </p>
        </div>
        <TechnologiesComponent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TechnologiesComponent from './AboutMe/TechnologiesComponent.vue';

gsap.registerPlugin(ScrollTrigger);

const aboutMe = ref(null);

onMounted(() => {
  gsap.fromTo(
    '.about-me',
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: aboutMe.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    },
  );
});
</script>

<style scoped></style>
