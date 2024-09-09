<template>
  <div
    :key="routeId"
    ref="projectDetailsRef"
    class="flex justify-center bg-main-white pb-[90px] pt-[88px] dark:bg-dark-blue"
  >
    <div class="flex w-full max-w-container flex-col items-center">
      <h2
        class="mt-[77px] font-poppins text-[45px] font-normal text-dark-blue dark:text-main-white"
      >
        {{ projectDetails?.title }}
      </h2>
      <div
        class="slide-to-left relative mt-10 h-[580px] w-full overflow-hidden rounded"
      >
        <img
          :src="`images/projects/${projectDetails?.image}`"
          class="object-contain"
        />
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-black/30"></div>
        <img
          v-if="projectDetails?.mobileImg"
          :src="`images/projects/${projectDetails?.mobileImg}`"
          class="absolute right-[8.75%] top-[6.27%] h-[503px] w-[255.76] transition-all hover:-translate-x-3 hover:-translate-y-3"
        />
      </div>

      <div class="mt-[60px] w-[764px]">
        <p
          class="slide-to-left font-roboto text-lg leading-[145.8%] text-dark-blue dark:text-main-white"
        >
          {{ projectDetails?.description }}
        </p>

        <div class="slide-technology mt-[60px] flex flex-col items-start">
          <h3
            class="text mb-8 self-start font-poppins text-[30px] text-dark-blue dark:text-main-white"
          >
            Technologies I used
          </h3>
          <div class="mt-8 flex gap-[30px]">
            <q-icon
              v-for="techonology in projectDetails?.technologies"
              :key="techonology"
              :name="`img:icons/technologies/${techonology}.svg`"
              class="h-[70px] w-[70px]"
            />
          </div>
          <div class="group mt-16 transition-all">
            <a
              :href="projectDetails?.url"
              target="_blank"
              class="flex items-center gap-3"
            >
              <p class="font-roboto text-base font-bold text-main-blue">
                Go to website
              </p>
              <q-icon
                name="img:icons/actions/arrow-right.svg"
                class="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeMount, onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { projects } from 'src/data/projects';

import { Projects } from 'src/types/Projects';

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const routeId = ref(Number(route.params.id));
const mounted = ref(false);
const projectsCopy = reactive([...projects]);
const projectDetails = ref<Projects | null>(null);

const projectDetailsRef = ref(null);

onBeforeMount(() => {
  fetchData(routeId.value, projectsCopy);
});

onMounted(() => {
  nextTick(() => {
    mounted.value = true;
    setupAnimations();
  });
});

const fetchData = (id: number, projects: Projects[]) => {
  projectDetails.value =
    projects.find((project) =>
      id ? project.id === id : project.id === routeId.value,
    ) || null;
};

const setupAnimations = () => {
  gsap.fromTo(
    '.slide-technology',
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
        trigger: projectDetailsRef.value,
        start: 'center 50%',
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
        trigger: projectDetailsRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    },
  );
};

watch(route, (newRoute) => {
  const newRouteId = Number(newRoute.params.id);
  routeId.value = newRouteId;
  const newArray = [...projects];

  mounted.value = false;

  nextTick(() => {
    fetchData(newRouteId, newArray);
    mounted.value = true;

    nextTick(() => {
      setupAnimations();
    });
  });
});
</script>

<style scoped></style>
