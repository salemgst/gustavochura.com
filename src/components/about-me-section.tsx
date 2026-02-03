import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="grid grid-cols-1 gap-y-[38px] xl:grid-cols-7 px-6 lg:px-[120px] py-[96px] gap-x-[120px]">
      <section class="col-span-1 mx-auto flex items-center xl:col-span-3">
        <figure class="w-full transition duration-200">
          <img
            width={412}
            height={412}
            class={`vov fade-in-right w-full rounded-xl transition duration-200	`}
            src="/crazy8.png"
            alt="gustavoca image"
          />
        </figure>
      </section>
      <section class="col-span-1 mx-auto text-left xl:col-span-4 space-y-4">
        <h2 class="text-2xl lg:text-4xl  font-semibold leading-snug">
          Hola, soy Gustavo. Me gusta ayudar a las personas a traves del
          software.
        </h2>

        <h3 class="text-2xl lg:text-4xl text-gray-600 dark:text-gray-300 leading-snug">
          Soy un un gran apasiado a los deportes extremos. No salgo mucho con mi
          familia, suelo estar leyendo libros, y editando videos, me gusta mucho aprender cosas nuevas cuando
          estoy aburrido.
        </h3>
      </section>
    </section>
  );
});
