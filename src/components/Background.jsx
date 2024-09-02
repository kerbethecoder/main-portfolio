import React, { useEffect } from 'react';

import { observeHiddenElements } from './intersectionObserver';
import { avatar } from '../images';

const Background = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hiddenElem');
    observeHiddenElements(hiddenElements);
  });

  return (
    <section className="flexCenter mb-60 flex-col gap-3 lg:mb-96 lg:flex-row lg:gap-10">
      <div className="flex justify-end lg:w-4/12">
        <img src={avatar} alt="" className="hiddenElem" />
      </div>
      <div className="w-11/12 lg:w-6/12">
        <h2 className="hiddenElem font-secondaryFont font-bold md:text-base lg:text-xl">
          About Me
        </h2>
        <div className="hiddenElem my-2 w-28 border-t-2 border-solid border-[#464a4e]" />
        <p className="hiddenElem text-sm lg:w-9/12 lg:text-base">
          I studied engineering for four years at{' '}
          <strong>Divine Word College of Calapan</strong> in the{' '}
          <strong>Philippines</strong>, where I earned{' '}
          <strong>Bachelor of Science in Computer Engineering</strong>. On my
          freshman year, I had my first experience with programming and learned
          how to use Python and C#. But it was in my third year that I first
          developed an interest in web development. I found what the developers
          were doing to be intriguing, so I began my journey in the hope that
          one day I would be able to do it too.
        </p>
      </div>
    </section>
  );
};

export default Background;
