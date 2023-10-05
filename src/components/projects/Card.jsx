import React from "react"

const Card = ({
  imgSrc,
  github,
  openSite,
  projTitle,
  projDescription,
  children,
}) => {
  return (
    <div className="card flex justify-center items-stretch rounded mt-5">
      <div className="flexCenter w-2/3">
        <div className="w-full h-3/4 ml-5">
          <img
            src={imgSrc}
            alt={projTitle}
            className="object-cover w-full h-full rounded"
          />
        </div>
      </div>
      <div className="flexCenter flex-col w-full">
        <div className="h-5/6 pl-6">
          <div className="flex justify-end h-1/6 gap-2 pr-3">
            {github}
            {openSite}
          </div>
          <div className="h-4/6">
            <h6 className="font-bold text-xl">{projTitle}</h6>
            <p className="text-sm pr-2">{projDescription}</p>
          </div>
          <div className="flex gap-2 w-fit">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
