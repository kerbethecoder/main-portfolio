import React, { useEffect } from 'react';

import { observeHiddenElements } from './intersectionObserver';

const Projects = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hiddenElem');
    observeHiddenElements(hiddenElements);
  });

  const projects = {
    first: {
      title: 'Rock, Paper, Scissors Game',
      description:
        'Enjoy a fun solo challenge with this interactive hand game!',
      github: 'https://github.com/kerbethecoder/rock-paper-scissors',
      siteUrl: 'https://game-rps.vercel.app/',
      frameworks: {
        one: 'HTML',
        two: 'CSS',
        three: 'JavaScript',
      },
    },
    second: {
      title: 'Mock Landing Page',
      description:
        'To showcase and refine my front-end web development skills, I created a simulated landing page for the popular streaming platform, Netflix.',
      github: 'https://github.com/kerbethecoder/netflix-react',
      siteUrl: 'https://mock-netflix-react.vercel.app/',
      frameworks: {
        one: 'React',
        two: 'Tailwind CSS',
      },
    },
    third: {
      title: 'The NotePad.',
      description:
        'A website serving as a repository for essential web development tools, including font pairings, color combinations, and more.',
      github: 'https://github.com/kerbethecoder/the-notepad',
      siteUrl: 'https://the-notepad-by-kerbe.vercel.app/',
      frameworks: {
        one: 'NextJS',
        two: 'Tailwind CSS',
      },
    },
    fourth: {
      title: 'DevToolBox',
      description:
        'A website with a curated collection of essential resources and tools to inspire and assist developers with their projects.',
      github: 'https://github.com/kerbethecoder/devtoolbox',
      siteUrl: 'https://kerbethecoder.github.io/devtoolbox/',
      frameworks: {
        one: 'Vue',
        two: 'Tailwind CSS',
      },
    },
    fifth: {
      title: 'ColorPicker',
      description:
        'A tool to help you choose the perfect colors for your website.',
      github: 'https://github.com/kerbethecoder/color-picker',
      siteUrl: 'https://kerbethecoder.github.io/color-picker/',
      frameworks: {
        one: 'HTML',
        two: 'CSS',
        three: 'JavaScript',
      },
    },
  };

  return (
    <section className="flexCenter mb-20 flex-col lg:mb-96">
      <div className="px-5 lg:w-6/12 lg:px-0">
        <h2 className="hiddenElem font-secondaryFont text-lg font-bold lg:text-2xl">
          Projects
        </h2>
        <p>Some of the projects on the internet I made so far:</p>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
          {Object.keys(projects).map((key, index) => (
            <div
              key={index}
              className="hiddenElem flex flex-col justify-between gap-3 rounded border border-secondaryBg/30 p-5 font-inter hover:-translate-y-1"
            >
              <div className="flex flex-col space-y-3">
                <div className="ml-auto space-x-3">
                  <a
                    href={projects[key].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-secondaryBg/80 transition hover:text-secondaryBg/60"
                  >
                    <i class="fa-brands fa-github fa-lg"></i>
                  </a>
                  <a
                    href={projects[key].siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-secondaryBg/80 duration-300 hover:text-secondaryBg/55"
                  >
                    <i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
                  </a>
                </div>
                <span className="text-xl font-bold leading-none tracking-tight">
                  {projects[key].title}
                </span>
                <p className="text-sm text-secondaryBg/80">
                  {projects[key].description}
                </p>
              </div>
              <div className="mt-5 space-x-2">
                {Object.values(projects[key].frameworks).map(
                  (framework, index) => (
                    <span
                      className="text-xs font-bold text-secondaryBg/50"
                      key={index}
                    >
                      {framework}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
