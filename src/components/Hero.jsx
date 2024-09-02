import React, { useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { displayPicture, centerLine, greetings } from '../images';
import { observeHiddenElements } from './intersectionObserver';

const Hero = () => {
  useEffect(() => {
    const sectionHeadChildren = document.getElementById('sectionHead').children;

    const childrenArray = Array.from(sectionHeadChildren);
    childrenArray.forEach((elemnt) => {
      elemnt.classList.add('hiddenElem');
    });

    const hiddenElements = document.querySelectorAll('.hiddenElem');
    observeHiddenElements(hiddenElements);
  });

  return (
    <section
      id="sectionHead"
      className="flexCenter mb-60 flex-col bg-primaryBg lg:mb-0 lg:h-screen"
    >
      <img
        src={greetings}
        alt="greetings"
        className="hidden lg:absolute lg:left-[35.5%] lg:top-[52%] lg:block"
      />
      <img
        src={displayPicture}
        alt="display picture"
        className="mt-20 h-[400px] shadow-xl lg:absolute lg:left-[37.8%] lg:top-[22%] lg:mt-0"
      />
      <img
        src={centerLine}
        alt="center-line"
        className="hidden lg:absolute lg:top-[51%] lg:block"
      />
      <div className="mt-2 flex lg:absolute lg:left-[50.5%] lg:top-[48.5%]">
        <p className="text-lg lg:text-2xl">I'm&nbsp;</p>
        <ul className="dynamicNames text-lg font-bold lg:text-2xl">
          <li className="username">@kerbethecoder 🖥️</li>
          <li className="username">Kerby Cantos 🤙</li>
        </ul>
      </div>
      <div className="mt-5 px-7 text-center text-sm lg:absolute lg:left-[50.5%] lg:top-[50.5%] lg:px-0 lg:text-left lg:text-base lg:leading-4">
        <p>
          A web developer with a passion for both front-end and <br /> back-end
          development since year 2022.
        </p>
        <button
          className="mt-3 rounded-lg border border-solid border-secondaryBg px-5 py-2.5 text-xs font-bold shadow-xl transition hover:scale-105 lg:ml-10 lg:text-sm"
          onClick={() => scrollTo('#contact')}
        >
          Let's Work Together!
        </button>
      </div>
      <p className="mt-20 tracking-wide text-[#10100e57] lg:absolute lg:top-[70%]">
        SCROLL ↡
      </p>
    </section>
  );
};

export default Hero;
