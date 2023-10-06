import React from "react"

const Socials = () => {
  return (
    <ul className="flex gap-2 lg:flex-col">
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
  )
}

export default Socials
