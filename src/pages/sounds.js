import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import PageHero from "../components/page-hero"

export default () => (
  <Layout>
    <SEO title="Sounds" pathname="/sounds/" />
    <PageHero heading="Music isn't just a sound you hear, it's a place you go to. Welcome to my place." />
    <Section>
      <h2>Releases</h2>
      <p>Releases go here</p>
      <h2>SoundCloud</h2>
      <p>SoundCloud stuff goes here</p>
    </Section>
  </Layout>
)
