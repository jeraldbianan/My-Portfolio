<template>
  <div class="max-w-[600px]">
    <transition-group
      appear
      tag="div"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <h1
        :key="1"
        class="font-poppins text-[65px] font-black leading-[67.5%] text-main-white"
      >
        I’m <span class="text-main-blue">Jerald Bianan</span>
      </h1>

      <p
        :key="2"
        class="mt-5 max-w-[350px] font-roboto text-[26px] font-normal leading-[150%]"
      >
        A Front-end Web Developer
      </p>
      <q-btn
        :key="3"
        unelevated
        class="mt-20 h-16 w-full max-w-[270px] bg-main-blue font-roboto text-lg font-medium normal-case transition hover:bg-main-blue/80"
        @click="scrollToSection('myProjects')"
      >
        View Latest Projects
      </q-btn>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { useScrollToSection } from 'src/composables/useScrollToSection';

const { scrollToSection } = useScrollToSection();

const beforeEnter = (el: Element) => {
  const element = el as HTMLElement;
  element.style.transform = 'translateX(-60px)';
  element.style.opacity = '0';
};

const enter = (el: Element) => {
  const element = el as HTMLElement;
  gsap.to(element, {
    duration: 0.5,
    x: 0,
    opacity: 1,
  });
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
