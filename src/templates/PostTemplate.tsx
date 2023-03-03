import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql, PageProps, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../styles/PostTemplate.module.css"
import Layout from "../components/Layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import SEO from "../components/SEO"

const BlogPost = ({ data, children }: PageProps) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image)
  const { author } = useSiteMetadata()

  return (
    <Layout>
      <div className={styles.header}>
        <h1 className={styles.title}>{data.mdx.frontmatter.title}</h1>
        <p className={styles.subtitle}>
          By{" "}
          <Link
            to="/bio"
            className={styles.authorLink}
            title={`${author.name}'s Bio`}
          >
            {author.name}
          </Link>
          , {data.mdx.frontmatter.date} ·{" "}
          {Math.round(data.mdx.fields.timeToRead.minutes)} minute read
        </p>
      </div>
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

export default BlogPost

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
