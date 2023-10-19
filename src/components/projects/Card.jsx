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
    <div className="card flex flex-col items-center rounded mt-5 py-5 w-5/6">
      <div className="hiddenElem card__img h-52 w-4/5 mb-3 lg:w-3/5 lg:mb-0">
        <img
          src={imgSrc}
          alt={projTitle}
          className="object-cover h-full rounded"
        />
      </div>

      <div className="hiddenElem flex gap-3 px-4 flex-col md:w-full">
        <div className="flex flex-col-reverse lg:flex-row md:justify-between md:items-center md:gap-2">
          <h6 className="text-base font-bold lg:text-xl">{projTitle}</h6>
          <div className="flex gap-2">
            {github}
            {openSite}
          </div>
        </div>
        <p className="text-sm lg:text-base lg:pr-2">{projDescription}</p>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Card
