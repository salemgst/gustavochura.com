import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { CardBlog } from '~/components/card-blog';

export default component$(() => {
  return (
    <main class="px-[45px] lg:px-[112px] ">
      <div class="lg:py-24 lg:px-32 space-y-8">
        <h3 class="text-4xl font-bold">Blog</h3>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-18">
          <CardBlog />
          <CardBlog />

          <CardBlog />
          <CardBlog />

          <CardBlog />
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Blog',
};
