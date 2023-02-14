import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout"
import PostCard from "../../components/PostCard"
import SEO from "../../components/SEO"

const BlogPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <h1>Posts</h1>
      {data.allMdx.nodes.map(node => (
        <PostCard
          id={node.id}
          frontmatter={node.frontmatter}
          excerpt={node.excerpt}
          internal={node.internal}
          children={node.children}
          parent={node.parent}
        />
      ))}
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          title
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`

export const Head: HeadFC = () => (
  <SEO
    title="Posts"
    description="A collection of posts about software engineering, electronics and photography with the occasional post about life and travels."
  />
)
