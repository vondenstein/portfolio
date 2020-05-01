import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Code" pathname="/code/" />
    <h1>Elegant solutions to complex problems.</h1>
    <p>
      These are what keep me up at night - challenging projects that help me
      grow as a developer and problem-solver. Below are some that I found
      interesting and wanted to share.
    </p>
    <h2>Featured projects</h2>
    <p>Feature projects go here.</p>
    <h2>Repositories</h2>
    <p>Repositories go here</p>
    <h3>But wait, there's more!</h3>
    <p>
      The projects shown above are some of my favorite that I've worked on, but
      I'm always cooking up new ideas. If you'd like to see what else I've been
      up to, click here.
    </p>
  </Layout>
)
