import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import HomeHero from "../sections/home/Home.Hero"
import Contact from "../components/contact"

export default () => (
  <Layout showFooter={false}>
    <SEO title="Intro" />
    <HomeHero />
    <Contact />
  </Layout>
)
