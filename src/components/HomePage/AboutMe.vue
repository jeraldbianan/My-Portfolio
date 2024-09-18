<template>
  <div
    class="mobile:py-[60px] flex justify-center bg-white py-[90px] dark:!bg-dark-blue"
  >
    <div
      class="mobile:mx-[30px] mx-[60px] flex w-full max-w-container flex-col items-center"
    >
      <h2
        class="mobile:text-3xl font-poppins text-[45px] font-normal text-dark-blue dark:text-main-white"
      >
        About Me
      </h2>

      <div
        ref="aboutMe"
        class="tablet:mt-[60px] mobile:mt-[30px] tablet:flex-col tablet:items-center mt-[90px] flex w-full justify-between"
      >
        <div
          class="intro tablet:max-w-full mobile:text-lg flex w-full max-w-[567px] flex-col gap-8 font-roboto text-2xl font-normal leading-[145.8%] text-main-grey dark:text-main-white"
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
        <TechnologiesComponent class="techonologies tablet:mt-[60px]" />
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
    '.techonologies',
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
        trigger: aboutMe.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    },
  );
  gsap.fromTo(
    '.intro',
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
        trigger: aboutMe.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    },
  );
});
</script>

<style scoped></style>
