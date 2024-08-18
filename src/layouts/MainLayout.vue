<script setup lang="ts"></script>

<template>
  <q-layout view="hHh lpR ffr">
    <!-- Navigation -->

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <!-- Footer -->
  </q-layout>
</template>

<style scoped></style>
