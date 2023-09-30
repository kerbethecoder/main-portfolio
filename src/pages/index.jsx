import React from "react"

import {
  Hero,
  Background,
  Technologies,
  Timeline,
  Projects,
  Footer,
  Layout,
} from "../components"

const index = () => {
  return (
    <Layout>
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
