<template>
  <div class="mobile:max-w-full max-w-[600px]">
    <transition-group
      appear
      tag="div"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <h1
        :key="1"
        class="mobile:text-center mobile:text-[50px] mobile:leading-[120%] font-poppins text-[65px] font-black leading-[67.5%] text-main-white"
      >
        I’m <span class="text-main-blue">Jerald Bianan</span>
      </h1>

      <p
        :key="2"
        class="mobile:text-center mobile:max-w-full mobile:text-base mt-5 max-w-[350px] font-roboto text-[26px] font-normal leading-[150%]"
      >
        Fullstack Web Developer
      </p>
      <div :key="3" class="mobile:flex mobile:justify-center">
        <q-btn
          unelevated
          class="mobile:mt-10 mobile:h-12 mobile:text-sm mobile:max-w-[200px] mt-20 h-16 w-full max-w-[270px] bg-main-blue font-roboto text-lg font-medium normal-case transition hover:bg-main-blue/80"
          @click="scrollToSection('myProjects')"
        >
          View Latest Projects
        </q-btn>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { useScrollToSection } from 'src/composables/useScrollToSection';

const { scrollToSection } = useScrollToSection();

const beforeEnter = (el: Element) => {
  gsap.set(el, {
    x: -60,
    opacity: 0,
  });
};

const enter = (el: Element) => {
  gsap.to(el, {
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
