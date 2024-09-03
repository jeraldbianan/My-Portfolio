<template>
  <q-header
    class="mx-auto mt-5 flex max-w-container justify-between bg-transparent"
  >
    <div class="flex">
      <q-img
        src="src/assets/images/JB-logo.svg"
        fit="none"
        class="h-[68px] w-[165px]"
      />
    </div>
    <div class="flex items-center gap-8">
      <DarkModeToggle />
      <NavigationLinks />
    </div>
  </q-header>
</template>

<script setup lang="ts">
import DarkModeToggle from 'src/components/UI/DarkModeToggle.vue';
import NavigationLinks from './MainHeader/NavigationLinks.vue';
</script>

<style lang="scss" scoped></style>
