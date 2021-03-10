import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import HomeHero from "../sections/home/Home.Hero"

const HomePage = () => (
  <Layout showFooter={false}>
    <SEO title="Intro" />
    <HomeHero />
  </Layout>
)

export default HomePage
