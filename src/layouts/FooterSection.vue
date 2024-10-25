<template>
  <footer
    class="flex flex-col items-center bg-dark-grey px-[60px] py-10 dark:bg-main-white mobile:justify-center mobile:px-[30px]"
  >
    <div class="flex w-full max-w-container flex-col mobile:items-center">
      <div
        class="flex w-full justify-between tablet:flex-wrap mobile:flex-col mobile:items-center"
      >
        <div class="flex w-[165px] flex-col">
          <router-link to="/" class="mb-6" aria-label="Go to homepage">
            <q-img :src="logoSrc" alt="JBianan Logo" />
          </router-link>
          <p class="font-roboto text-sm text-main-white dark:text-dark-blue">
            Front-end Web Developer
          </p>
        </div>

        <div
          class="flex gap-[30px] tablet:max-w-[368px] mobile:mt-10 mobile:max-w-full mobile:justify-center mobile:gap-10"
        >
          <div
            class="w-[168px] mobile:flex mobile:flex-col mobile:items-center"
          >
            <h3
              class="font-poppins text-lg font-medium text-main-white dark:text-dark-blue"
            >
              Projects
            </h3>
            <div class="mb-[10px] mt-5 flex flex-col gap-[10px] mobile:mt-3">
              <router-link
                v-for="project in slicedProjects"
                :key="project.id"
                :to="{ name: 'Project', params: { id: project.id } }"
                class="cursor-pointer text-main-white hover:text-main-blue dark:text-dark-blue dark:hover:text-main-blue"
              >
                {{ project.title }}
              </router-link>
            </div>
            <router-link
              to="/projects"
              class="text-main-white hover:text-main-blue dark:text-dark-blue dark:hover:text-main-blue"
              >View More...</router-link
            >
          </div>
          <div
            class="w-[168px] mobile:flex mobile:flex-col mobile:items-center"
          >
            <h3
              class="font-poppins text-lg font-medium text-main-white dark:text-dark-blue"
            >
              Contact
            </h3>
            <p
              class="mt-5 cursor-pointer text-main-white hover:text-main-blue dark:text-dark-blue dark:hover:text-main-blue mobile:mt-3"
              @click="sendEmail"
            >
              {{ email }}
            </p>
          </div>
          <div
            class="w-[168px] mobile:flex mobile:flex-col mobile:items-center"
          >
            <h3
              class="font-poppins text-lg font-medium text-main-white dark:text-dark-blue"
            >
              Other Links
            </h3>
            <div class="mt-5 flex gap-2 mobile:mt-4">
              <div v-for="contact in filteredContacts" :key="contact.id">
                <a
                  :href="contact.url"
                  target="_blank"
                  :aria-label="`${contact.name} icon`"
                >
                  <q-icon
                    :name="`img:icons/contact/${contact.iconSrc}`"
                    class="h-10 w-10 transition-all hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        class="mt-[144px] font-roboto text-[13px] text-main-white/50 dark:text-dark-blue/50 mobile:mt-20"
      >
        © Copyright - Jerald Bianan
      </p>
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
    ? 'images/JB-logo-dark.svg'
    : 'images/JB-logo.svg');
};

const filterContacts = () => {
  filteredContacts.value = callToActionContacts.filter((contact) => {
    return darkMode.value
      ? contact.name !== 'Github Light'
      : contact.name !== 'Github Dark';
  });
  return filteredContacts.value;
};

const sendEmail = () => {
  window.location.href = `mailto:${email.value}`;
};

watch(darkMode, () => {
  renderLogo();
  filterContacts();
});
</script>

<style scoped></style>
