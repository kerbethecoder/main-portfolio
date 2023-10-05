import React from "react"

import {
  Hero,
  Background,
  Technologies,
  Timeline,
  Projects,
  Footer,
  Layout,
  SEO,
} from "../components"

const index = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Background />
      <Technologies />
      <Timeline />
      <Projects />
      <Footer />
    </Layout>
  )
}

export default index
