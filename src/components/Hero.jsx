import React from "react"

import { displayPicture, centerLine, greetings } from "../images"

const Hero = () => {
  return (
    <section className="bg-primaryBg h-screen flexCenter">
      <img src={greetings} alt="" className="greeting" />
      <img src={displayPicture} alt="" className="h-[400px] hero-img " />
      <img src={centerLine} alt="" className="centerLine" />
      <div class="introduction">
        <div class="text-container">
          <p class="staticName text-2xl">I'm&nbsp;</p>
          <ul class="altNames text-2xl font-bold">
            <li class="username">@kerbethecoder 🖥️</li>
            <li class="username">
              Kerby Cantos <span className="text-lg">🤙</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="description">
        A web developer with a passion for both front-end and <br /> back-end
        development since year 2022.
      </p>
      <button className="btn px-5 py-2.5 rounded-lg font-bold text-sm">
        Let's Work Together!
      </button>
      <p className="scrollTxt tracking-wide">SCROLL ↡ </p>
    </section>
  )
}

export default Hero
