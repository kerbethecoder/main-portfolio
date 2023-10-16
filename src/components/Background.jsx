import React, { useEffect } from "react"

import { observeHiddenElements } from "./intersectionObserver"

const Background = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hiddenElem")
    observeHiddenElements(hiddenElements)
  })

  return (
    <section className="flexCenter flex-col mb-60 lg:mb-80">
      <div className="hiddenElem">
        <ion-icon name="person-circle" size="large"></ion-icon>
      </div>

      <div className="flexCenter flex-col lg:w-6/12">
        <h2 className="hiddenElem font-secondaryFont font-bold md:text-base lg:text-lg">
          Background
        </h2>
        <p className="hiddenElem bg__content text-center text-sm mt-2 px-6">
          I studied engineering for four years at{" "}
          <strong>Divine Word College of Calapan</strong> in the{" "}
          <strong>Philippines</strong>, where I earned a{" "}
          <strong>Bachelor of Science in Computer Engineering</strong>. When I
          was a student, I had my first experience with programming and learned
          how to use Python and C#. But it was in my third year that I first
          developed an interest in web programming. I found what the developers
          were doing to be intriguing, so I began my journey in the hope that
          one day I would be able to do it too.
        </p>
      </div>
    </section>
  )
}

export default Background
