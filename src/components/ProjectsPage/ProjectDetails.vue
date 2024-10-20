<template>
  <div
    :key="routeId"
    ref="projectDetailsRef"
    class="flex justify-center bg-main-white pb-[90px] pt-[88px] dark:bg-dark-blue mobile:pt-10"
  >
    <div
      class="mx-[60px] flex w-full max-w-container flex-col items-center mobile:mx-[30px]"
    >
      <h2
        class="mt-[77px] font-poppins text-[45px] font-normal text-dark-blue dark:text-main-white mobile:text-3xl"
      >
        {{ projectDetails?.title }}
      </h2>
      <div
        class="slide-to-left relative mt-10 w-full max-w-container overflow-hidden rounded"
      >
        <img
          :src="`images/projects/${projectDetails?.image}`"
          class="w-full max-w-[1160px] object-contain"
        />
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-black/10"></div>
        <img
          v-if="projectDetails?.mobileImg"
          :src="`images/projects/${projectDetails?.mobileImg}`"
          class="absolute right-[8.75%] top-[6.27%] h-[83.14%] w-[22.04%] transition-all hover:-translate-x-3 hover:-translate-y-3"
        />
      </div>

      <div class="mt-[60px] w-full max-w-[764px] mobile:mt-10">
        <p
          class="slide-to-left font-roboto text-lg leading-[145.8%] text-dark-blue dark:text-main-white mobile:text-base"
          v-html="cleanDescription"
        ></p>

        <div
          class="slide-technology mt-[60px] flex flex-col items-start mobile:mt-10"
        >
          <h3
            class="mb-4 self-start font-poppins text-[30px] text-dark-blue dark:text-main-white mobile:mb-0 mobile:text-lg"
          >
            Technologies I used
          </h3>
          <div class="flex gap-[30px] mobile:gap-3">
            <a
              v-for="techonology in projectDetails?.technologies"
              :key="techonology.name"
              :href="techonology.url"
              class="hover:scale-105"
              target="_blank"
            >
              <q-icon
                :name="`img:icons/technologies/${techonology.name}.svg`"
                class="h-[70px] w-[70px] mobile:h-8 mobile:w-8"
              />
            </a>
          </div>
          <div class="group mt-16 transition-all mobile:mt-10">
            <a
              :href="projectDetails?.url"
              target="_blank"
              class="flex items-center gap-3"
            >
              <p
                class="font-roboto text-base font-bold text-main-blue mobile:text-sm"
              >
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
import { nextTick, onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from 'src/data/projects';
import { Projects } from 'src/types/Projects';
import DOMPurify from 'dompurify';

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const router = useRouter();
const routeId = ref(Number(route.params.id));
const mounted = ref(false);
const projectsCopy = ref([...projects]);
const projectDetails = ref<Projects | null>(null);

const projectDetailsRef = ref(null);
const cleanDescription = ref('');

onBeforeMount(() => {
  fetchData(routeId.value, projectsCopy.value);
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

  if (projectDetails.value) {
    cleanDescription.value = DOMPurify.sanitize(
      projectDetails.value.description,
    );
    return {
      projectDetails,
      cleanDescription,
    };
  } else {
    router.push({ name: 'Projects' });
  }
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
