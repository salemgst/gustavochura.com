import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link, routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import AboutMeSection from '~/components/about-me-section';
// import Typed, { type TypedOptions } from 'typed.js';
import { Button } from '~/components/ui/button';
import { getGifs } from '~/helpers/gifs';

export const useGifLoader = routeLoader$(async () => {
  const gifs = await getGifs();

  return gifs;
});

export default component$(() => {
  const gifLoader = useGifLoader();
  const image = useSignal('');

  // const el = useSignal<HTMLSpanElement>();

  // i create a function a generate a random gif
  const randomGif = $(() => {
    const randomNum = Math.round(Math.random() * (gifLoader.value.length - 1));
    const randomGif = gifLoader.value.map((gif) => gif.gif);

    return randomGif[randomNum];
  });

  // this only run once when the component is mounted
  useVisibleTask$(async () => {
    const actualGif =
      localStorage.getItem('current-gif') ?? (await randomGif());

    image.value = actualGif;
  });

  useVisibleTask$(async ({ track, cleanup }) => {
    track(() => [image.value]);

    const sub = setInterval(async () => {
      image.value = await randomGif();
      console.log(await randomGif());
    }, 7000);

    cleanup(() => {
      clearInterval(sub);
    });
  });

  useVisibleTask$(({ track }) => {
    track(() => [image.value]);
    localStorage.setItem('current-gif', image.value);
  });

  // useVisibleTask$(({ cleanup }) => {
  //   const options: TypedOptions = {
  //     strings: [
  //       "<i class='text-[#FF7675] not-italic'>Bienvenido</i>",
  //       "<i class='text-[#A29BFE] not-italic'>Bienvenida</i>",
  //     ],
  //     // stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
  //     typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  //     startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  //     backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  //     smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  //     shuffle: false, // Alterar el orden en el que escribe las palabras.
  //     // backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra. // error
  //     loop: true, // Repetir el array de strings
  //     showCursor: true, // Mostrar cursor palpitanto
  //     cursorChar: '|', // Caracter para el cursor
  //     contentType: 'html', // 'html' o 'null' para texto sin formato
  //   };
  //   const typed = new Typed(el.value, options);

  //   cleanup(() => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   });
  // });
  return (
    <main class="px-4 sm:px-8 lg:px-[112px] space-y-12 sm:space-y-20 lg:space-y-32">
      <section class="grid grid-cols-1 gap-y-6 sm:gap-y-12 xl:grid-cols-7 px-0 sm:px-6 lg:px-[120px] py-8 sm:py-16 lg:py-24 items-center">
        <section class="col-span-1 text-3xl sm:text-3xl lg:text-[42px] text-left xl:col-span-4 space-y-6 sm:space-y-8 order-2 xl:order-1">
          <h2 class="font-semibold leading-tight sm:leading-snug">
            <span class="dark:text-[#FF7675]">Construyendo</span> un{' '}
            <span class="dark:text-[#74B9FF]">futuro</span>{' '}
            <span class="dark:text-[#7BED9F]">mejor</span> a través de la{' '}
            <span
              class="dark:text-[#A29BFE] cursor-pointer"
              // ref={el}
            >
              tecnología
            </span>
            .
          </h2>

          <div class="space-y-3 flex flex-col items-start">
             <Link href="/about">
               <Button class="block w-36" size="md">
                Sobre mi
              </Button>
            </Link>

            <Button class="block w-36" look="outline" size="md">
              CV
            </Button>
          </div>
        </section>
        <section class="col-span-1 flex items-center justify-start xl:justify-center xl:col-span-3 order-1 xl:order-2 w-full">
          <figure class="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-md xl:max-w-full transition duration-200">
            <img
              width={412}
              height={412}
              class={`vov fade-in-right w-full rounded-xl transition duration-200 shadow-lg`}
              src="https://media.licdn.com/dms/image/v2/D4D03AQEYc29pHlTjlA/profile-displayphoto-crop_800_800/B4DZwlDd4nKAAI-/0/1770148192425?e=1771459200&v=beta&t=K7pJ9UUFsW4YooF9r7MjYFbYrj1NbqDELzG_API_Ggs"
              alt="gustavoca image"
            />
          </figure>
        </section>
      </section>

      <AboutMeSection />
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'This is the website of gustavocadev, here you can see a little bit more about me and my projects :D I hope you like it!',
    },
  ],
};
