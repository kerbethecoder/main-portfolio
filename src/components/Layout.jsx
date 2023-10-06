import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import { cornerLine } from "../images"
import Socials from "./socials/Socials"

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-primaryBg w-5 h-5 absolute" id="hero" />
      <div className="bookmark bg-secondaryBg h-12 w-12 sticky ml-80" />
      <img
        src={cornerLine}
        alt="corner-line"
        className="corner-line hidden sticky"
      />
      <div className="socials hidden sticky w-fit">
        <Socials />
      </div>
      <p className="copyright hidden w-fit sticky font-bold text-xs">
        © {new Date().getFullYear()} &middot; Kerby Cantos
      </p>
      <button
        className="hidden lg:block sticky top-[94%] left-[97%]"
        onClick={() => scrollTo("#hero")}
      >
        <ion-icon name="caret-up-circle" size="large"></ion-icon>
      </button>
      <main>{children}</main>

      <div className="flexCenter mb-3 lg:hidden ">
        <Socials />
      </div>
      <p className="font-bold text-xs text-center mb-2 lg:hidden">
        © {new Date().getFullYear()} &middot; Kerby Cantos
      </p>
    </>
  )
}

export default Layout
