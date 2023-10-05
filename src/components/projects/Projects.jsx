import React from "react"

import Frameworks from "./Frameworks"
import Card from "./Card"
import { rpsGame, mockNetflix } from "../../images"

const Projects = () => {
  const projects = {
    firstProj: {
      src: rpsGame,
      title: "Rock, Paper, Scissors Game",
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
      title: "Mock Netflix Landing Page",
      description: `Experience the world of streaming entertainment with my "Mock Netflix
      Landing Page" project. Developed with React and styled using Tailwind CSS, this project
      captures the essence of Netflix's user interface for an engaging user
      experience.`,
      github: "https://github.com/kerbethecoder/netflix-react",
      siteUrl: "https://mock-netflix-react.vercel.app/",
      frameworks: {
        one: "React",
        two: "TailwindCSS",
      },
    },
  }

  return (
    <section className="flexCenter flex-col mt-80">
      <ion-icon name="folder-open" size="large"></ion-icon>
      <h2 className="font-secondaryFont text-lg font-bold">Projects</h2>

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
            <div className="black flex gap-2 w-fit">
              {Object.values(projects[key].frameworks).map((framework, i) => (
                <Frameworks key={i} item={framework} />
              ))}
            </div>
          }
        />
      ))}
    </section>
  )
}

export default Projects