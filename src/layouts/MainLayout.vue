<script setup lang="ts">
import HeroSection from 'src/components/HomePage/HeroSection.vue';
import NavigationBar from './NavigationBar.vue';
</script>

<template>
  <q-layout view="hhh lpR ffr">
    <NavigationBar />
    <HeroSection />

    <q-page-container class="!p-0">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
