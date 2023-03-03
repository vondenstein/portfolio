import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql, PageProps, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../styles/PhotosetTemplate.module.css"
import Layout from "../components/Layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import SEO from "../components/SEO"
import ContentHeading from "../components/ContentHeading"

const Photoset = ({ data, children }: PageProps) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout>
      <ContentHeading
        title={data.mdx.frontmatter.title}
        date={data.mdx.frontmatter.date}
      />
      <GatsbyImage
        loading="eager"
        image={heroImage!}
        alt={data.mdx.frontmatter.hero_image_alt}
        className={styles.heroImage}
      />
      <div className={styles.content}>{children}</div>
    </Layout>
  )
}

export default Photoset

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              outputPixelDensities: [0.4, 0.65, 0.8, 1.0, 1.3, 2.0]
            )
          }
        }
      }
      fields {
        timeToRead {
          minutes
        }
      }
      excerpt
    }
  }
`

export const Head: HeadFC = ({ data }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <SEO
      title={data.mdx.frontmatter.title}
      description={data.mdx.excerpt}
      imgType="post"
      image={`${siteUrl}${data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData.images.fallback.src}`}
    />
  )
}
