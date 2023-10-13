import React from "react"
import { Helmet } from "react-helmet"

import resume from "../images/resume.pdf"
import favicon from "../images/favicon.png"

const Resume = () => {
  return (
    <div>
      <Helmet>
        <title>Resume</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <iframe
        src={resume}
        width="100%"
        className="h-screen"
        title="resume"
      ></iframe>
    </div>
  )
}

export default Resume
