import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql, PageProps, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../../../styles/PostsPage.module.css"
import Layout from "../../../components/Layout"
import { useSiteMetadata } from "../../../hooks/use-site-metadata"

const BlogPost = ({ data, children }: PageProps) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image)
  const { author } = useSiteMetadata()

  return (
    <Layout>
      <div className={styles.header}>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>
          By{" "}
          <Link to="/bio" className={styles.authorLink}>
            {author}
          </Link>
          , {data.mdx.frontmatter.date} · 5 minute read
        </p>
      </div>
      <GatsbyImage
        placeholder={"blurred"}
        image={heroImage}
        alt={data.mdx.frontmatter.hero_image_alt}
        className={styles.heroImage}
      />
      {children}
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>Blog Post</title>
