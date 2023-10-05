import React from "react"
import { Helmet } from "react-helmet"

import favicon from "../images/favicon.png"

const SEO = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
    </div>
  )
}

export default SEO
