import { onMounted, Ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations(refValue: Ref<Element | null>) {
  onMounted(() => {
    gsap.fromTo(
      '.slide-right',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0,
        scrollTrigger: {
          trigger: refValue.value,
          start: 'center 50%',
          toggleActions: 'play none none none',
        },
      },
    );
    gsap.fromTo(
      '.slide-left',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0,
        scrollTrigger: {
          trigger: refValue.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    );
    gsap.fromTo(
      '.slide-up',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0,
        scrollTrigger: {
          trigger: refValue.value,
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
      },
    );
    gsap.fromTo(
      '.slide-down',
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0,
        scrollTrigger: {
          trigger: refValue.value,
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
      },
    );
  });
}
