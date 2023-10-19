import React, { useEffect } from "react"

import { observeHiddenElements } from "../intersectionObserver"
import Frameworks from "./Frameworks"
import Card from "./Card"
import { rpsGame, mockNetflix } from "../../images"

const Projects = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hiddenElem")
    observeHiddenElements(hiddenElements)
  })

  const projects = {
    firstProj: {
      src: rpsGame,
      title: "ROCK, PAPER, SCISSORS GAME",
      description: `Challenge your friends to a classic showdown with our Rock, Paper,
      Scissors game! This interactive web game brings the timeless hand
      game to life on your screen.`,
      github: "https://github.com/kerbethecoder/rock-paper-scissors",
      siteUrl: "https://game-rps.vercel.app/",
      frameworks: {
        one: "HTML",
        two: "CSS",
        three: "JavaScript",
      },
    },
    secondProj: {
      src: mockNetflix,
      title: "MOCK NETFLIX LANDING PAGE",
      description: `In order to demonstrate and refine my front-end web development proficiency, 
      I have crafted a simulated landing page for the renowned streaming platform, "Netflix".`,
      github: "https://github.com/kerbethecoder/netflix-react",
      siteUrl: "https://mock-netflix-react.vercel.app/",
      frameworks: {
        one: "React",
        two: "TailwindCSS",
      },
    },
  }

  return (
    <section className="flexCenter flex-col mb-20 lg:mb-96">
      <div className="px-5 lg:px-0 lg:w-6/12">
        <h2 className="hiddenElem font-secondaryFont font-bold text-lg lg:text-2xl">
          Projects
        </h2>
        <p>Some of the projects on the internet I made so far:</p>

        <div className="hiddenElem flexCenter flex-col">
          {Object.keys(projects).map((key, i) => (
            <Card
              key={i}
              imgSrc={projects[key].src}
              projTitle={projects[key].title}
              projDescription={projects[key].description}
              openSite={
                projects[key].siteUrl && (
                  <a
                    href={projects[key].siteUrl}
                    className="cardIcon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon name="open" size="large"></ion-icon>
                  </a>
                )
              }
              github={
                projects[key].github && (
                  <a
                    href={projects[key].github}
                    className="cardIcon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon name="logo-github" size="large"></ion-icon>
                  </a>
                )
              }
              children={
                <div className="flex gap-2 w-fit">
                  {Object.values(projects[key].frameworks).map(
                    (framework, i) => (
                      <Frameworks key={i} item={framework} />
                    )
                  )}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
