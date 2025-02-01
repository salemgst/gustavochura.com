import { component$ } from '@builder.io/qwik';

export const CardBlog = component$(() => {
  return (
    <div class="bg-white">
      <figure>
        <img src="https://placehold.co/312x212" alt="" class="w-full" />
      </figure>
      <div class="space-y-2 p-4">
        <h6 class="font-bold text-2xl">POST 1</h6>
        <p>Descripción de la applicacion que hace y las tecnologias</p>
        <p>#tags</p>
      </div>
    </div>
  );
});
