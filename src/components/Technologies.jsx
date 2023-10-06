import React from "react"

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
  <div className="flex mt-2 gap-2 md:gap-10">
    {technologies.map((item, index) => (
      <div className="flexCenter" key={index}>
        <img src={item.src} alt={item.title} className="h-10" />
        <p className="font-bold text-sm md:text-base">{item.title}</p>
      </div>
    ))}
  </div>
)

const Technologies = () => {
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
    <section className="flexCenter flex-col mb-60 lg:mb-80">
      <ion-icon name="bug" size="large"></ion-icon>
      <h2 className="font-secondaryFont font-bold md:text-base lg:text-lg">
        Technologies
      </h2>
      <p className="text-sm mt-2 md:mb-4 lg:text-base">
        I frequently work with the following technologies:
      </p>

      <TechnologyLine technologies={firstLine} />
      <TechnologyLine technologies={secondLine} />
      <TechnologyLine technologies={thirdLine} />
    </section>
  )
}

export default Technologies
