import React, { useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import { displayPicture, centerLine, greetings } from "../images"
import { observeHiddenElements } from "./intersectionObserver"

const Hero = () => {
  useEffect(() => {
    const sectionHeadChildren = document.getElementById("sectionHead").children
    const childrenArray = Array.from(sectionHeadChildren)
    childrenArray.forEach(el => {
      el.classList.add("hiddenElem")
    })

    const hiddenElements = document.querySelectorAll(".hiddenElem")
    observeHiddenElements(hiddenElements)
  })

  return (
    <section
      id="sectionHead"
      className="bg-primaryBg flexCenter flex-col mb-60 lg:mb-0 lg:h-screen"
    >
      <img src={greetings} alt="greetings" className="greetings hidden" />
      <img
        src={displayPicture}
        alt="a man standing holding his phone"
        className="hero-img h-[400px] mt-20 lg:mt-0"
      />
      <img src={centerLine} alt="center-line" className="center-line hidden" />
      <div className="introduction flex mt-2">
        <p className="text-lg lg:text-2xl">I'm&nbsp;</p>
        <ul className="dynamicNames font-bold text-lg lg:text-2xl">
          <li className="username">@kerbethecoder 🖥️</li>
          <li className="username">Kerby Cantos 🤙</li>
        </ul>
      </div>
      <div className="description mt-5 px-7 text-center text-sm">
        <p>
          A web developer with a passion for both front-end and <br /> back-end
          development since year 2022.
        </p>
        <button
          className="btn mt-3 px-5 py-2.5 rounded-lg font-bold text-xs"
          onClick={() => scrollTo("#contact")}
        >
          Let's Work Together!
        </button>
      </div>
      <p className="text-[#10100e57] tracking-wide mt-20 lg:absolute lg:top-[70%]">
        SCROLL ↡
      </p>
    </section>
  )
}

export default Hero
