import { ref } from 'vue';

const darkMode = ref<boolean>(localStorage.getItem('darkMode') === 'true');

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', darkMode.value.toString());
  document.documentElement.classList.toggle('dark', darkMode.value);
}

if (darkMode.value) {
  document.documentElement.classList.add('dark');
}

export function useDarkMode() {
  return {
    darkMode,
    toggleDarkMode,
  };
}
