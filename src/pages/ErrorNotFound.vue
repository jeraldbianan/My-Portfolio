<template>
  <q-layout view="hhh lpR fFf">
    <div class="bg-main-white dark:bg-dark-blue">
      <NavigationBar />

      <q-page-container class="h-[80vh] !p-0">
        <div class="mobile:pt-28 flex w-full flex-col items-center pt-32">
          <p
            class="mobile:text-3xl font-poppins text-6xl font-black leading-[100%] text-main-blue"
          >
            404
          </p>
          <p
            class="mobile:text-sm font-roboto text-lg font-black uppercase text-dark-blue"
          >
            Page not found
          </p>
          <q-btn
            unelevated
            label="Home"
            class="mobile:mt-6 mt-10 bg-dark-blue/20 font-roboto normal-case"
            to="/"
          />
        </div>
      </q-page-container>

      <FooterSection />
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import FooterSection from 'src/layouts/FooterSection.vue';
import NavigationBar from 'src/layouts/NavigationBar.vue';

defineOptions({
  name: 'ErrorNotFound',
});
</script>
