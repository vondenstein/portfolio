import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Section from "../../components/Section"

import Hero from "../../components/Sections/Hero"
import BlogPosts from "../../components/Blog.Posts"

const section = {
  title: "Elegant solutions to complex problems.",
  subtitle:
    "These are what keep me up at night - they help me grow as a developer and problem-solver. Take a look at the ones that I found interesting.",
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            summary
          }
        }
      }
    }
  }
`

export default ({ ...props }) => {
  return (
    <Layout>
      <SEO title="Words" pathname="/words/" />
      <Hero section={section} />
      {/* <Section>
        <BlogPosts posts={props.data} />
      </Section> */}
    </Layout>
  )
}
