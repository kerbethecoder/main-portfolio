import React from "react"

import {
  Hero,
  Background,
  Technologies,
  Timeline,
  Projects,
  Footer,
  Layout,
  Seo,
} from "../components"

const index = () => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <Background />
      <Technologies />
      <Timeline />
      <Projects />
      <div className="flexCenter mb-20 lg:mb-40">
        <a href="/resume.pdf" target="__blank" rel="noopener noreferrer">
          <button className="btn__resume">View my Résumé 👌</button>
        </a>
      </div>
      <Footer />
    </Layout>
  )
}

export default index
