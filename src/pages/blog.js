import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import PageHero from "../components/page-hero"

import BlogHero from "../sections/blog/Blog.Hero"
import BlogPosts from "../sections/blog/Blog.Posts"

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
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
      <PageHero heading="Sometimes sharing means more than a tweet or Instagram post. This is my place for thoughts that deserve more." />
      <Section>
        <BlogPosts posts={props.data} />
      </Section>
    </Layout>
  )
}
