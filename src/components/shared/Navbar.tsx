import { component$, useSignal } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import Hamburger from 'hamburger-qwik';

const routes = [
  { name: 'Home', path: '/', icon: '🏡' },
  { name: 'Blog', path: '/blog/', icon: '📖' },
  { name: 'Projects', path: '/projects/', icon: '🚀' },
  { name: 'About me', path: '/about/', icon: '👦' },
];

export const Navbar = component$(() => {
  const isOpen = useSignal(false);
  const loc = useLocation();
  return (
    <>
      <header
        class={`absolute h-auto w-full ${isOpen.value && 'bg-[#F7F6F3]'} top-0`}
      >
        <nav class="relative z-50 flex flex-col items-center justify-center px-[16px] font-semibold sm:flex-row py-4">
          {/* <header class="flex text-[18px] lg:text-[24px] my-[34px] uppercase text-center text-white hover:text-[#81ECEC] transition">
            <h1>CA Gustavo</h1>
          </header> */}
          <div class="flex w-full justify-end pt-[16px] sm:hidden ">
            <Hamburger toggle={isOpen} />
          </div>
          <ul
            class={`${
              isOpen.value ? 'flex' : 'hidden'
            } w-full flex-col  gap-[36px] py-[18px] text-center text-[18px] uppercase sm:my-[34px] sm:flex  sm:w-auto sm:flex-row sm:gap-[45px] sm:py-[0px] lg:gap-[45px] lg:text-[18px]`}
          >
            {routes.map((route) => (
              <li key={route.name}>
                <Link
                  href={route.path}
                  class={{
                    'text-[#FCD34D]': loc.url.pathname === route.path,
                  }}
                >
                  {route.name} <span class="font-normal">{route.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div class="h-[92px]"></div>
    </>
  );
});
