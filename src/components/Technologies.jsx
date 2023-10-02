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
} from "../images"

const Technologies = () => {
  return (
    <section className="flexCenter flex-col mt-80">
      <ion-icon name="bug" size="large"></ion-icon>
      <h2 className="font-secondaryFont text-lg font-bold">Technologies</h2>
      <h2 className="mt-2">
        I frequently work with the following technologies:
      </h2>
      <div className="techIcons">
        <div className="flex">
          <img src={htmlIcon} alt="" />
          <img src={cssIcon} alt="" />
          <img src={jsIcon} alt="" />
          <img src={reactIcon} alt="" />
        </div>
        <div className="flex">
          <img src={vueIcon} alt="" />
          <img src={tailwindIcon} alt="" />
          <img src={figmaIcon} alt="" />
          <img src={gitIcon} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={ubuntuIcon} alt="" />
          <img src={vsIcon} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Technologies
