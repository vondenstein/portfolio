import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Section from "../../components/Section"
import PostCard from "../../components/PostCard"
import SEO from "../../components/SEO"

const PhotosPage: React.FC<PageProps<Queries.PhotosetsQuery>> = ({ data }) => {
  return (
    <Layout>
      <Section
        title="Photos"
        subtitle="Documenting my adventures and favorite moments."
        first
      >
        {data.allMdx.nodes.map(node => (
          <PostCard
            id={node.id}
            title={node.frontmatter?.title!}
            date={node.frontmatter?.date!}
            image={node.frontmatter?.hero_image?.childImageSharp!}
            imageAlt={node.frontmatter?.hero_image_alt!}
            link={`/${node.fields?.contentType}/${node.frontmatter?.slug}`}
            linkTitle={node.frontmatter?.title!}
          />
        ))}
      </Section>
    </Layout>
  )
}

export default PhotosPage

export const query = graphql`
  query Photosets {
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
      description="A collection of photos taken by Stephen Vondenstein over the years that he wanted to share."
      imgType="page"
      imgTitle="Photos"
    />
  )
}
