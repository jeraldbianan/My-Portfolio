<template>
  <q-layout view="hhh lpR ffr">
    <NavigationBar />
    <HeroSection v-if="route.name === 'HomePage'" />

    <q-page-container class="!p-0">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <FooterSection v-if="route.name !== 'HomePage'" />
  </q-layout>
</template>

<script setup lang="ts">
import HeroSection from 'src/components/HomePage/HeroSection.vue';
import NavigationBar from './NavigationBar.vue';
import FooterSection from './FooterSection.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped></style>
