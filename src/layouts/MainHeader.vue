<script setup lang="ts">
import NavigationLinks from './MainHeader/NavigationLinks.vue';
</script>

<template>
  <div class="flex justify-center border border-b">
    <div class="flex w-[1200px] items-center justify-between py-2">
      <q-img src="src/assets/JB-logo.png" class="h-28 w-28" />
      <div class="flex gap-5">
        <NavigationLinks />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
