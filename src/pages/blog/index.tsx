import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, Link } from "gatsby"

import * as styles from "../../styles/Page.module.css"
import Layout from "../../components/Layout"
import PostCard from "../../components/PostCard"

const BlogPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <main className={styles.main}>
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
      </main>
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

export const Head: HeadFC = () => <title>Blog Page</title>
