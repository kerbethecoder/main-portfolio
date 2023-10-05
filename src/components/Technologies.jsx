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
  <div className="flex mt-2 gap-10">
    {technologies.map((item, index) => (
      <div className="flexCenter" key={index}>
        <img src={item.src} alt={item.title} className="h-10" />
        <p className="font-bold">{item.title}</p>
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
    <section className="flexCenter flex-col mt-80">
      <ion-icon name="bug" size="large"></ion-icon>
      <h2 className="font-secondaryFont text-lg font-bold">Technologies</h2>
      <h2 className="mt-1 mb-6">
        I frequently work with the following technologies:
      </h2>

      <TechnologyLine technologies={firstLine} />
      <TechnologyLine technologies={secondLine} />
      <TechnologyLine technologies={thirdLine} />
    </section>
  )
}

export default Technologies
