<template>
  <footer class="flex justify-center bg-dark-grey py-10 dark:bg-main-white">
    <div class="flex w-full max-w-container justify-between">
      <div class="flex w-[165px] flex-col">
        <q-img :src="logoSrc" />
        <p class="mt-4 font-roboto text-sm text-main-white dark:text-dark-blue">
          Front-end Web Developer
        </p>
        <p
          class="mt-[144px] font-roboto text-[13px] text-main-white/50 dark:text-dark-blue/50"
        >
          © Copyright - Jerald Bianan
        </p>
      </div>

      <div class="flex gap-[30px]">
        <div class="w-[168px]">
          <h3
            class="font-poppins text-lg font-medium text-main-white dark:text-dark-blue"
          >
            Projects
          </h3>
          <div class="mb-[10px] mt-5 flex flex-col gap-[10px]">
            <p
              v-for="project in slicedProjects"
              :key="project.id"
              class="cursor-pointer text-main-white hover:text-main-blue dark:text-dark-blue dark:hover:text-main-blue"
            >
              {{ project.title }}
            </p>
          </div>
          <router-link
            to=""
            class="text-main-white hover:text-main-blue dark:text-dark-blue dark:hover:text-main-blue"
            >View More...</router-link
          >
        </div>
        <div class="w-[168px]">
          <h3
            class="font-poppins text-lg font-medium text-main-white dark:text-dark-blue"
          >
            Contact
          </h3>
          <p
            class="mt-5 cursor-pointer text-main-white hover:text-main-blue dark:text-dark-blue dark:hover:text-main-blue"
          >
            {{ email }}
          </p>
        </div>
        <div class="w-[168px]">
          <h3
            class="font-poppins text-lg font-medium text-main-white dark:text-dark-blue"
          >
            Other Links
          </h3>
          <div class="mt-5 flex gap-2">
            <div v-for="contact in filteredContacts" :key="contact.id">
              <a :href="contact.url" target="_blank">
                <q-icon
                  :name="`img:src/assets/icons/contact/${contact.iconSrc}`"
                  class="h-10 w-10 transition-all hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

import { useDarkMode } from 'src/composables/useDarkMode';

import { projects } from 'src/data/projects';
import { callToActionContacts } from 'src/data/callToActionContacts';

const { darkMode } = useDarkMode();

const logoSrc = ref('');
const email = ref('jeraldbianan@gmail.com');
const filteredContacts = ref();

onMounted(() => {
  renderLogo();
  filterContacts();
});

const slicedProjects = computed(() => {
  return [...projects].reverse().slice(0, 2);
});

const renderLogo = () => {
  return (logoSrc.value = darkMode.value
    ? 'src/assets/images/JB-logo-dark.svg'
    : 'src/assets/images/JB-logo.svg');
};

const filterContacts = () => {
  filteredContacts.value = callToActionContacts.filter((contact) => {
    return darkMode.value
      ? contact.name !== 'Github Light'
      : contact.name !== 'Github Dark';
  });
  return filteredContacts.value;
};

watch(darkMode, () => {
  renderLogo();
  filterContacts();
});
</script>

<style scoped></style>
