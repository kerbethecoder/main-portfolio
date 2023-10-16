import React, { useEffect } from "react"

import { observeHiddenElements } from "../intersectionObserver"

const Card = ({
  imgSrc,
  github,
  openSite,
  projTitle,
  projDescription,
  children,
}) => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hiddenElem")
    observeHiddenElements(hiddenElements)
  })

  return (
    <div className="card flex flex-col items-center rounded mt-4 mb-10 py-5 ">
      <div className="hiddenElem card__img w-2/3 mb-3 lg:mb-0">
        <img
          src={imgSrc}
          alt={projTitle}
          className="object-cover w-full h-full rounded"
        />
      </div>

      <div className="hiddenElem flex gap-3 px-4 flex-col md:w-full">
        <div className="md:pl-6">
          <div className="flex md:justify-end md:gap-2">
            {github}
            {openSite}
          </div>
        </div>
        <div className="h-3/5">
          <h6 className="text-base font-bold lg:text-xl">{projTitle}</h6>
          <p className="text-sm lg:text-base lg:pr-2">{projDescription}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Card
