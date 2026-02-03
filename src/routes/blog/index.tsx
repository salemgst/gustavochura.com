import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { CardBlog } from '~/components/card-blog';

export default component$(() => {
  // Detectar si estamos en producción
  const isProduction = true

  return (
    <main class="px-4 sm:px-[45px] lg:px-[112px]">
      <div class="py-8 sm:py-12 lg:py-24 lg:px-32 space-y-6 sm:space-y-8">
        <h3 class="text-3xl sm:text-4xl font-bold">Blog</h3>
        
        {isProduction ? (
          // Mensaje para producción
          <div class="flex flex-col items-center justify-center py-12 sm:py-24 lg:py-32 space-y-4 sm:space-y-6">
            <div class="text-center space-y-3 sm:space-y-4 max-w-2xl px-4">
              <h4 class="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                <span class="dark:text-[#FF7675]">El blog</span> está{' '}
                <span class="dark:text-[#74B9FF]">en construcción</span> 🚧
              </h4>
              <p class="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                Estoy preparando contenido increíble sobre{' '}
                <span class="dark:text-[#7BED9F] font-semibold">desarrollo web</span>,{' '}
                <span class="dark:text-[#A29BFE] font-semibold">tecnología</span> y más.
              </p>
              <p class="text-sm sm:text-base text-gray-500 dark:text-gray-500 pt-2 sm:pt-4">
                Mientras tanto, puedes explorar mis proyectos ⚡
              </p>
            </div>
          </div>
        ) : (
          // Mock data para desarrollo local
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-18">
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </div>
        )}
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Blog',
};
