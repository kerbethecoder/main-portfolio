import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div className="flexCenter flex-col h-screen gap-5">
      <h1 className="font-secondaryFont font-bold text-4xl">404: Not Found</h1>
      <p className="text-lg text-center">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link to="/">
        <button className="btn px-2 py-4 rounded-lg font-bold">
          Let's go back home, bud.
        </button>
      </Link>
    </div>
  )
}

export default NotFoundPage
