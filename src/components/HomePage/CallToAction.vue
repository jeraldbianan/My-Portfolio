<template>
  <div
    ref="callToAction"
    class="slide-up flex justify-center bg-white pb-[90px] dark:!bg-dark-blue"
  >
    <div class="flex w-full max-w-container flex-col items-center">
      <div class="h-[1px] w-[565px] bg-main-grey"></div>
      <div class="slide-left flex flex-col items-center">
        <h1
          class="mt-12 font-poppins text-[75px] font-bold text-main-grey dark:text-main-white"
        >
          Say hi to
          <span class="text-main-blue"
            >J<span class="text-dark-blue dark:text-main-white">erald</span
            >.</span
          >
        </h1>
        <p class="mt-5 font-roboto text-xl text-main-grey dark:text-main-white">
          If you need a front-end developer for your project contact me in the
          platforms below
        </p>
        <div class="mt-[70px] flex items-center justify-center gap-[30px]">
          <q-icon
            name="img:src/assets/icons/contact/gmail.svg"
            class="h-[69px] w-[69px] cursor-pointer transition-all hover:scale-110"
            @click="sendEmail"
          />
          <div v-for="contact in filteredContacts" :key="contact.id">
            <a :href="contact.url" target="_blank">
              <q-icon
                :name="`img:src/assets/icons/contact/${contact.iconSrc}`"
                class="h-[69px] w-[69px] transition-all hover:scale-110"
              />
            </a>
          </div>
        </div>
        <p
          class="mt-[60px] font-roboto text-[13px] text-dark-blue/40 dark:text-main-white"
        >
          © Copyright - Jerald Bianan
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useDarkMode } from 'src/composables/useDarkMode';

import { callToActionContacts } from 'src/data/callToActionContacts';

import { useScrollToSection } from 'src/composables/useScrollToSection';

const { components } = useScrollToSection();
const { callToAction } = components;

gsap.registerPlugin(ScrollTrigger);

const { darkMode } = useDarkMode();
const filteredContacts = ref();

onMounted(() => {
  gsap.fromTo(
    '.slide-left',
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0,
      scrollTrigger: {
        trigger: callToAction.value,
        start: 'top 100%',
        toggleActions: 'play none none none',
      },
    },
  );

  filterContacts();
});

const filterContacts = () => {
  filteredContacts.value = callToActionContacts.filter((contact) => {
    return darkMode.value
      ? contact.name !== 'Github Dark'
      : contact.name !== 'Github Light';
  });
  return filteredContacts.value;
};

const sendEmail = () => {
  const email = 'jeraldbianan.com';
  window.location.href = `mailto:${email}`;
};

watch(darkMode, () => {
  filterContacts();
});
</script>

<style scoped></style>
