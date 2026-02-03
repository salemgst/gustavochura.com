import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getProjects } from '~/helpers/projects';

export const useProjects = routeLoader$(async () => {
  const projects = await getProjects();
  return projects;
});

export default component$(() => {
  const projects = useProjects();
  return (
    <section class="flex flex-col px-4 sm:px-[32px] md:px-[104px] lg:px-[248px] py-8 sm:py-[24px]">
      <header class="pb-6 sm:pb-8">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold">Projects</h2>
      </header>
      <section class="flex flex-shrink-0 flex-col gap-y-6 sm:gap-y-[24px]">
        {projects.value.map((project) => {
          return (
            <article 
              class="flex flex-col sm:flex-row bg-white dark:bg-gray-800 p-4 sm:p-6 gap-4 sm:gap-6 lg:gap-8 rounded-lg shadow-sm hover:shadow-md transition-shadow" 
              key={project.id}
            >
              <a
                target="_blank"
                href={project.url}
                class="w-full sm:w-auto sm:flex-shrink-0"
              >
                <figure class="sm:w-64 lg:w-80">
                  <img
                    src={project.img}
                    alt={project.title}
                    width={512}
                    class="w-full h-auto object-cover rounded"
                  />
                </figure>
              </a>
              <section class="flex flex-shrink-0 flex-col justify-center gap-y-2 sm:gap-y-[10px] flex-1">
                <header>
                  <h2 class="text-xl sm:text-2xl font-bold uppercase dark:text-white">{project.title}</h2>
                </header>
                <p class="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">{project.description}</p>
                <p class="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 break-all">
                  Link:{' '}
                  <a
                    target="_blank"
                    href={
                      project.url ===
                      'https://gif-app.vercel.app/?title=christopher+robin'
                        ? 'https://gif-app.vercel.app/'
                        : project.url
                    }
                    class="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {project.url ===
                    'https://gif-app.vercel.app/?title=christopher+robin'
                      ? 'https://gif-app.vercel.app/'
                      : project.url}
                  </a>
                </p>
                <div class="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span class="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400" key={tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </section>
            </article>
          );
        })}
      </section>
    </section>
  );
});
