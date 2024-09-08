import { ref, Ref } from 'vue';

interface Components {
  myProjects: Ref<HTMLElement | null>;
  callToAction: Ref<HTMLElement | null>;
}

const components: Components = {
  myProjects: ref(null),
  callToAction: ref(null),
};

const scrollToSection = (section: keyof Components) => {
  const element = components[section]?.value;

  if (element) {
    const position = element.offsetTop;
    window.scrollTo({ top: position, behavior: 'smooth' });
  }
};

export const useScrollToSection = () => {
  return {
    components,
    scrollToSection,
  };
};
