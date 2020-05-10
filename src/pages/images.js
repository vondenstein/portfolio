import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import PageHero from "../components/page-hero"

export default () => (
  <Layout>
    <SEO title="Images" pathname="/images/" />
    <PageHero heading="Everyone has a camera in their pocket, but not every experience can be best captured by a phone. If you think some things just deserve more pixels, these are for you." />
    <Section>
      <h2>Recent</h2>
      <p>Recent photos</p>
      <h2>Curated Collections</h2>
      <p>Photo collections</p>
    </Section>
  </Layout>
)
