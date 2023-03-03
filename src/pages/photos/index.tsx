import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Block from "../../components/Block"

import * as styles from "../styles/BioPage.module.css"
import SEO from "../../components/SEO"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import PostCard from "../../components/PostCard"

const PhotosPage: React.FC<PageProps> = ({ data }) => {
  const { author } = useSiteMetadata()

  return (
    <Layout>
      <h1>Photos</h1>
      <p>Documenting my adventures and favorite moments.</p>
      {data.allMdx.nodes.map(node => (
        <PostCard
          id={node.id}
          frontmatter={node.frontmatter}
          excerpt={node.excerpt}
          internal={node.internal}
          children={node.children}
          parent={node.parent}
          fields={node.fields}
        />
      ))}
    </Layout>
  )
}

export default PhotosPage

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { contentType: { eq: "photos" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          title
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 570
                outputPixelDensities: [0.65, 1.0, 1.3, 2.0]
              )
            }
          }
        }
        fields {
          timeToRead {
            minutes
          }
          contentType
        }
        id
        excerpt
      }
    }
  }
`

export const Head: HeadFC = () => {
  return (
    <SEO
      title="Photos"
      description="Hi, I'm Stephen. Software engineer, tinkerer, and occasional photographer."
      imgType="page"
      imgTitle="Photos"
    />
  )
}
