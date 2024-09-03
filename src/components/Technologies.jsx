import React, { useEffect } from 'react';

import { observeHiddenElements } from './intersectionObserver';
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  vueIcon,
  tailwindIcon,
  figmaIcon,
  gitIcon,
  vsIcon,
  gatsbyIcon,
  nextIcon,
} from '../images';

const Technologies = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hiddenElem');
    observeHiddenElements(hiddenElements);
  });

  return (
    <section className="flexCenter mb-60 flex-col lg:mb-96 lg:flex-row lg:gap-10">
      <div className="space-y-2">
        <p className="hiddenElem">
          I frequently work with the following technologies:
        </p>
        <div className="hiddenElem grid grid-cols-2 gap-4 lg:grid-cols-3">
          {[
            [htmlIcon, 'HTML'],
            [cssIcon, 'CSS'],
            [jsIcon, 'JavaScript'],
            [gatsbyIcon, 'Gatsby'],
            [reactIcon, 'React'],
            [vueIcon, 'Vue'],
            [nextIcon, 'Next'],
            [tailwindIcon, 'Tailwind CSS'],
            [gitIcon, 'Git'],
            [figmaIcon, 'Figma'],
            [vsIcon, 'VS Code'],
          ].map(([icon, label]) => (
            <div className="flex items-center rounded-sm border-dimBlack/10 px-2 transition hover:bg-black/10">
              <img src={icon} alt="test" className="h-10" />
              <span className="pr-2 font-bold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
