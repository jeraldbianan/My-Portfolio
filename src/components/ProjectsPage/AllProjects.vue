<template>
  <div
    ref="allProjects"
    class="flex justify-center bg-main-white pb-[90px] pt-[88px] dark:bg-dark-blue"
  >
    <div class="flex w-full max-w-container flex-col items-center">
      <h2
        class="mt-[77px] font-poppins text-[45px] font-normal text-dark-blue dark:text-main-white"
      >
        My Projects
      </h2>
      <div class="projects mt-10 grid grid-cols-3 gap-[30px]">
        <div v-for="project in reversedProjects" :key="project.id">
          <q-card
            class="!shadow-bigShadow cursor-pointer transition-all hover:scale-105"
            @click="viewDetails(project.id)"
          >
            <img :src="`src/assets/images/projects/${project.image}`" />

            <q-card-section class="!p-5">
              <h3 class="font-poppins text-2xl font-medium text-dark-blue">
                {{ project.title }}
              </h3>
              <p
                class="mt-2 line-clamp-3 font-roboto text-base font-light text-main-grey"
              >
                {{ project.description }}
              </p>
            </q-card-section>

            <div class="mt-3 flex gap-2 px-5 pb-5">
              <q-icon
                v-for="technology in project.technologies"
                :key="technology"
                :name="`img:src/assets/icons/technologies/${technology}.svg`"
                class="h-[35px] w-[35px]"
              />
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { projects } from 'src/data/projects';
import { useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger);

const router = useRouter();

const allProjectsRef = ref(null);

onMounted(() => {
  gsap.fromTo(
    '.projects',
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
        trigger: allProjectsRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    },
  );
});

const reversedProjects = [...projects].reverse();

const viewDetails = (id: number) => {
  router.push({ name: 'Project', params: { id } });
};
</script>

<style scoped></style>
