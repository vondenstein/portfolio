import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageHero from "../components/page-hero"

import CodeRepositories from "../sections/code/Code.Repositories"
import CodeProjects from "../sections/code/Code.Projects"
import ExternalLink from "../sections/code/Code.ExternalLink"

export default () => {
  return (
    <Layout>
      <SEO title="Code" pathname="/code/" />
      <PageHero
        heading="Elegant solutions to complex problems. These are what keep me up at night - they help me
        grow as a developer and problem-solver. Take a look at the ones that I found
        interesting."
      />
      {/* <CodeProjects /> */}
      <CodeRepositories />
      {/* <ExternalLink /> */}
    </Layout>
  )
}
