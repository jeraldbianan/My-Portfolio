import { Notify } from 'quasar';
import { ref } from 'vue';

const darkMode = ref<boolean>(localStorage.getItem('darkMode') === 'true');

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', darkMode.value.toString());
  document.documentElement.classList.toggle('dark', darkMode.value);
  Notify.create({
    message: darkMode.value ? 'Dark Mode Enabled.' : 'Light Mode Enabled.',
    position: 'bottom',
    timeout: 500,
    classes: 'notify',
  });
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
