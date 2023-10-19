import React, { useEffect } from "react"

import { observeHiddenElements } from "./intersectionObserver"

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  vueIcon,
  tailwindIcon,
  figmaIcon,
  gitIcon,
  ubuntuIcon,
  vsIcon,
  gatsbyIcon,
} from "../images"

const TechnologyLine = ({ technologies }) => (
  <div className="hiddenElem flex mt-2 gap-2 md:gap-10">
    {technologies.map((item, index) => (
      <div className="flexCenter" key={index}>
        <img src={item.src} alt={item.title} className="h-10" />
        <p className="font-bold text-sm md:text-base">{item.title}</p>
      </div>
    ))}
  </div>
)

const Technologies = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hiddenElem")
    observeHiddenElements(hiddenElements)
  })

  const firstLine = [
    {
      src: htmlIcon,
      title: "HTML",
    },
    {
      src: cssIcon,
      title: "CSS",
    },
    {
      src: jsIcon,
      title: "JavaScript",
    },
    {
      src: reactIcon,
      title: "React",
    },
  ]

  const secondLine = [
    {
      src: vueIcon,
      title: "Vue.js",
    },
    {
      src: tailwindIcon,
      title: "TailwindCSS",
    },
    {
      src: gatsbyIcon,
      title: "Gatsby",
    },
    {
      src: gitIcon,
      title: "Git",
    },
  ]

  const thirdLine = [
    {
      src: ubuntuIcon,
      title: "Ubuntu",
    },
    {
      src: vsIcon,
      title: "Visual Studio Code",
    },
    {
      src: figmaIcon,
      title: "Figma",
    },
  ]

  return (
    <section className="flexCenter flex-col mb-60 lg:gap-10 lg:flex-row lg:mb-96">
      <p className="hiddenElem text-sm lg:text-base">
        I frequently work with the following technologies:
      </p>
      <div className="flex flex-col items-center">
        <TechnologyLine technologies={firstLine} />
        <TechnologyLine technologies={secondLine} />
        <TechnologyLine technologies={thirdLine} />
      </div>
    </section>
  )
}

export default Technologies
