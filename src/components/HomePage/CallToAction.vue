<template>
  <div
    ref="callToAction"
    class="flex justify-center bg-white pb-[90px] dark:!bg-dark-blue"
  >
    <div class="mx-[60px] flex w-full max-w-container flex-col items-center">
      <div class="h-[1px] w-full max-w-[565px] bg-main-grey"></div>
      <div class="slide-up flex flex-col items-center">
        <h1
          class="mt-12 text-center font-poppins text-[75px] font-bold !leading-[140%] text-main-grey dark:text-main-white mobile:text-5xl"
        >
          Say hi to
          <span class="text-main-blue"
            >J<span class="text-dark-blue dark:text-main-white">erald</span
            >.</span
          >
        </h1>
        <p
          class="mt-5 text-center font-roboto text-xl text-main-grey dark:text-main-white mobile:text-base"
        >
          If you need a fullstack developer for your project contact me in the
          platforms below
        </p>
        <div
          class="mt-[70px] flex items-center justify-center gap-[30px] mobile:mt-10 mobile:gap-3"
        >
          <q-icon
            name="img:icons/contact/gmail.svg"
            class="h-[69px] w-[69px] cursor-pointer transition-all hover:scale-110 mobile:h-[30px] mobile:w-[30px]"
            @click="sendEmail"
          />
          <div v-for="contact in filteredContacts" :key="contact.id">
            <a
              :href="contact.url"
              target="_blank"
              :aria-label="`${contact.name} icon`"
            >
              <q-icon
                :name="`img:icons/contact/${contact.iconSrc}`"
                class="h-[69px] w-[69px] transition-all hover:scale-110 mobile:h-[30px] mobile:w-[30px]"
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
const email = ref('jeraldbianan@gmail.com');

onMounted(() => {
  gsap.fromTo(
    '.slide-up',
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
  window.location.href = `mailto:${email.value}`;
};

watch(darkMode, () => {
  filterContacts();
});
</script>

<style scoped></style>
