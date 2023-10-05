import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import { cornerLine } from "../images"

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-primaryBg w-5 h-5 absolute" id="hero"></div>
      <div className="square bg-secondaryBg sticky top-0" />
      <img src={cornerLine} alt="" className="cornerLine sticky" />
      <p className="copyright sticky font-bold text-sm w-fit">
        © {new Date().getFullYear()} &middot; Kerby Cantos
      </p>
      <button
        className="w-fit sticky top-[94%] left-[97%]"
        onClick={() => scrollTo("#hero")}
      >
        <ion-icon name="caret-up-circle" size="large"></ion-icon>
      </button>
      <ul className="socials sticky flex flex-col gap-2 w-fit">
        <li>
          <a
            href="https://www.linkedin.com/in/kerby-cantos-0b0738240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-linkedin" size="large"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kerbethecoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-github" size="large"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/kerbe.cantos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-facebook" size="large"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/krby.cnts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-instagram" size="large"></ion-icon>
          </a>
        </li>
      </ul>
      <main>{children}</main>
    </>
  )
}

export default Layout
