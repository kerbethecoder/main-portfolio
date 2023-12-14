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
    <div className="hiddenElem card rounded mt-5 py-3 px-3 w-10/12 md:w-7/12 lg:w-5/12 transition duration-300 ease-in-out hover:scale-105">
      <div className="h-2/5 hiddenElem flex justify-between">
        <div className="h-28 w-6/12">
          <img
            src={imgSrc}
            alt={projTitle}
            className="object-cover w-full h-full rounded"
          />
        </div>
        <div className="flex gap-2">
          {github}
          {openSite}
        </div>
      </div>
      <div className="h-2/5 hiddenElem">
        <h6 className="text-base font-bold lg:text-xl">{projTitle}</h6>
        <p className="text-sm lg:text-base">{projDescription}</p>
      </div>
      <div className="h-1/5 hiddenElem flex items-end">{children}</div>
    </div>
  )
}

export default Card
