import { component$ } from '@builder.io/qwik';

export const CardBlog = component$(() => {
  return (
    <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <figure>
        <img src="https://placehold.co/312x212" alt="" class="w-full object-cover" />
      </figure>
      <div class="space-y-2 p-4">
        <h6 class="font-bold text-xl sm:text-2xl dark:text-white">POST 1</h6>
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">Descripción de la applicacion que hace y las tecnologias</p>
        <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">#tags</p>
      </div>
    </div>
  );
});
