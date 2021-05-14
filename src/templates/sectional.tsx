import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Sections/Hero"
import Showcase from "../components/Sections/Showcase"
import GitHub from "../components/Sections/GitHub"

export default function SectionalTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, fields } = markdownRemark
  return (
    <Layout showFooter={fields.slug === "/" ? false : true}>
      <SEO title={frontmatter.title} pathname={fields.slug} />
      {frontmatter.sections.map(section => {
        switch (section.component) {
          case "Hero":
            return <Hero section={section} />
          case "Showcase":
            return <Showcase section={section} />
          case "GitHub":
            return <GitHub section={section} />
          default:
            return ""
        }
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query SectionPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        sections {
          component
          title
          subtitle
          description
          color
          image
          icon
          links {
            type
            text
            icon
            url
          }
        }
      }
    }
  }
`
