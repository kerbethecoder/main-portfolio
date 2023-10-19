import React, { useEffect } from "react"

import { observeHiddenElements } from "./intersectionObserver"

const Footer = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hiddenElem")
    observeHiddenElements(hiddenElements)
  })

  return (
    <section className="flexCenter flex-col" id="contact">
      <div className="flexCenter flex-col pb-52 lg:flex-row">
        <div className="flex flex-col gap-5 lg:w-6/12 lg:pl-80">
          <div className="hiddenElem pl-2 md:pl-0">
            <h2 className="font-inter font-bold text-2xl lg:text-4xl">
              @kerbethecoder
            </h2>
            <p className="text-[#10100e80] text-xs font-bold font-inter pl-8 -mt-1 lg:text-base">
              Average UI / UX Designer, Computer Engineer, and Web Developer.
            </p>
          </div>
          <div className="hiddenElem flex items-center gap-5 mx-auto md:ml-20">
            <a
              href="https://webcv-kerbethecoder.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn__resume">View my Résumé 👌</button>
            </a>
            <div className="flex items-center gap-1">
              <ion-icon name="mail"></ion-icon>
              <a
                href="mailto:krbycnts@gmail.com"
                className="font-bold hover:underline md:text-sm lg:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                krby.cnts@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-0 lg:w-6/12 lg:pl-40 ">
          <h6 className="hiddenElem font-bold font-inter mx-auto px-2 text-center md:w-8/12 lg:mx-0 md:px-0 lg:text-left">
            "Want to get in touch? Whether for work or just chatting, don't
            hesitate to contact me through the links on the side. I'll try my
            best to get back to you!"
          </h6>
        </div>
      </div>
      <p className="hiddenElem text-xs text-dimBlack pFooter pb-32 text-center lg:text-sm">
        Designed in{" "}
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </a>
        , coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>
        , built with{" "}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        , styled using{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        , and deployed in{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>{" "}
        by me, of course. ^^
      </p>
    </section>
  )
}

export default Footer
