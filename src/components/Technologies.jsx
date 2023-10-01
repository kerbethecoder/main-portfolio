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
      <h2 className="font-bold text-lg font-secondaryFont">
        Some technologies I work with most of the time:
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
