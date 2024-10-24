<template>
  <div
    class="flex justify-center bg-white py-[90px] dark:!bg-dark-blue mobile:py-[60px]"
  >
    <div
      class="mx-[60px] flex w-full max-w-container flex-col items-center mobile:mx-[30px]"
    >
      <h2
        class="font-poppins text-[45px] font-normal text-dark-blue dark:text-main-white mobile:text-3xl"
      >
        About Me
      </h2>

      <div
        ref="aboutMe"
        class="mt-[90px] flex w-full justify-between tablet:mt-[60px] tablet:flex-col tablet:items-center mobile:mt-[30px]"
      >
        <div
          class="intro flex w-full max-w-[567px] flex-col gap-8 font-roboto text-2xl font-normal leading-[145.8%] text-main-grey dark:text-main-white tablet:max-w-full mobile:text-lg"
        >
          <p>
            In front-end web development I have 2+ years of experience, I
            primarily use VueJS, Quasar, and Tailwind CSS to build responsive
            and dynamic front-end experiences.
          </p>
          <p>
            In the backend, I use PHP and Laravel to build robust and scalable
            applications. I am proficient in designing RESTful APIs and managing
            database interactions using Eloquent ORM. My expertise in Laravel
            allows me to implement clean architecture, follow best coding
            practices, and ensure the application is secure, efficient, and
            maintainable.
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

const aboutMe = ref<HTMLElement | null>(null);

onMounted(() => {
  const elements = gsap.utils.toArray([
    '.intro',
    '.techonologies',
  ]) as HTMLElement[];

  elements.forEach((el: HTMLElement) => {
    const xOffset = el.classList.contains('intro') ? -100 : 100;

    gsap.fromTo(
      el,
      { x: xOffset, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: aboutMe.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    );
  });
});
</script>

<style scoped></style>
