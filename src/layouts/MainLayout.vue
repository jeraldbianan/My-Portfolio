<script setup lang="ts">
import MainHeader from './MainHeader.vue';
</script>

<template>
  <q-layout view="hHh lpR fff">
    <MainHeader />

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
