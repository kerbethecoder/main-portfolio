import React from "react"

import { cornerLine } from "../images"

const Layout = ({ children }) => {
  return (
    <>
      <div className="square bg-secondaryBg sticky top-0" />
      <img src={cornerLine} alt="" className="cornerLine sticky" />
      <p className="copyright sticky font-bold text-sm">
        © {new Date().getFullYear()} &middot; Kerby Cantos
      </p>
      <div className="socials sticky flex flex-col gap-2">
        <ion-icon name="logo-linkedin" size="large"></ion-icon>
        <ion-icon name="logo-github" size="large"></ion-icon>
        <ion-icon name="logo-facebook" size="large"></ion-icon>
        <ion-icon name="logo-instagram" size="large"></ion-icon>
      </div>
      <main>{children}</main>
    </>
  )
}

export default Layout
