import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import PageHero from "../components/page-hero"

export default () => (
  <Layout>
    <SEO title="Sounds" pathname="/sounds/" />
    <PageHero heading="Music isn't just a sound you hear, it's a place you go to. Welcome to my place." />
    <Section>
      <h2>Sounds</h2>
      <p>SoundCloud stuff goes here</p>
      <h2>Playlists</h2>
      <p>Playlists go here</p>
    </Section>
  </Layout>
)
