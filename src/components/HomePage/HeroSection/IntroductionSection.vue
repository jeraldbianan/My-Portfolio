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
        class="mobile:text-center mobile:text-[14vw] mobile:leading-[120%] font-poppins text-[65px] font-black leading-[67.5%] text-main-white"
      >
        I’m <span class="text-main-blue">Jerald Bianan</span>
      </h1>

      <p
        :key="2"
        class="mobile:text-center mobile:max-w-full mobile:text-sm mt-5 max-w-[350px] font-roboto text-[26px] font-normal leading-[150%]"
      >
        Fullstack Web Developer
      </p>
      <div class="mobile:flex mobile:justify-center">
        <q-btn
          :key="3"
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
