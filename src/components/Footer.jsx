import React, { useEffect } from 'react';

import { observeHiddenElements } from './intersectionObserver';

const Footer = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hiddenElem');
    observeHiddenElements(hiddenElements);
  });

  return (
    <section className="flexCenter flex-col" id="contact">
      <div className="flexCenter flex-col pb-52 xl:flex-row">
        <div className="flex flex-col gap-5 xl:w-6/12 xl:pl-80">
          <div className="hiddenElem pl-2 md:pl-0">
            <h2 className="font-inter text-2xl font-bold xl:text-4xl">
              @kerbethecoder
            </h2>
            <p className="-mt-1 pl-8 font-inter text-xs font-bold text-[#10100e80] xl:text-base">
              Average UI / UX Designer, Computer Engineer, and Web Developer.
            </p>
          </div>
          <div className="hiddenElem mx-auto flex items-center gap-5 md:ml-20">
            <a
              href="https://webcv-kerbethecoder.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn__resume rounded-lg border border-secondaryBg bg-secondaryBg px-5 py-2.5 text-xs font-bold text-primaryBg shadow-xl transition hover:border-dimBlack hover:bg-primaryBg hover:text-secondaryBg xl:text-sm">
                View my Résumé 👌
              </button>
            </a>
            <div className="flex items-center gap-1">
              <ion-icon name="mail"></ion-icon>
              <a
                href="mailto:krbycnts@gmail.com"
                className="font-bold hover:underline md:text-sm xl:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                krby.cnts@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 xl:mt-0 xl:w-6/12 xl:pl-40">
          <h6 className="hiddenElem mx-auto px-2 text-center font-inter font-bold md:w-8/12 md:px-0 xl:mx-0 xl:text-left">
            "Want to get in touch? Whether for work or just chatting, don't
            hesitate to contact me through the links on the side. I'll try my
            best to get back to you!"
          </h6>
        </div>
      </div>
      <p className="hiddenElem pFooter pb-32 text-center text-xs text-dimBlack xl:text-sm">
        Designed in{' '}
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </a>
        , coded in{' '}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>
        , built with{' '}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        , styled using{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        , and deployed in{' '}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>{' '}
        by me, of course. ^^
      </p>
    </section>
  );
};

export default Footer;
