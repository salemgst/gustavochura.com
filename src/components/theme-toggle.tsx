import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { LuSun, LuMoon } from '@qwikest/icons/lucide';

export const ThemeToggle = component$(() => {
  const isDark = useSignal(false);

  // Inicializar el tema desde localStorage o preferencia del sistema
  useVisibleTask$(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      isDark.value = true;
      document.documentElement.classList.add('dark');
    } else {
      isDark.value = false;
      document.documentElement.classList.remove('dark');
    }
  });

  const toggleTheme = $(() => {
    isDark.value = !isDark.value;
    
    // Función para aplicar el cambio de tema
    const applyTheme = () => {
      if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
    
    // Usar View Transitions API si está disponible para transición ultra suave
    if ('startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        applyTheme();
      });
    } else {
      applyTheme();
    }
  });

  return (
    <button
      onClick$={toggleTheme}
      class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer focus:outline-none active:scale-95"
      aria-label="Toggle theme"
      type="button"
    >
      {isDark.value ? (
        <LuSun class="w-5 h-5 text-yellow-400 transition-all duration-500 animate-in fade-in zoom-in" />
      ) : (
        <LuMoon class="w-5 h-5 text-gray-700 transition-all duration-500 animate-in fade-in zoom-in" />
      )}
    </button>
  );
});
