import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import favicon from "../images/favicon.png"

const NotFoundPage = () => {
  return (
    <div className="flexCenter flex-col h-screen gap-5">
      <Helmet>
        <html lang="en" />
        <title>Page Not Found</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <h1 className="font-secondaryFont font-bold text-4xl">404: Not Found</h1>
      <p className="text-lg text-center">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link to="/">
        <button className="btn px-5 py-2.5 rounded-lg font-bold">
          Let's go back home, bud.
        </button>
      </Link>
    </div>
  )
}

export default NotFoundPage
