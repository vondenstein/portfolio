import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../../../styles/Page.module.css"
import Layout from "../../../components/Layout"

const BlogPost = ({ data, children }: PageProps) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout>
      <main className={styles.main}>
        <div style={{ width: "600px", margin: "0 auto 100px" }}>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>
            By Stephen Vondenstein, {data.mdx.frontmatter.date} · 5 minute read
          </p>
        </div>
        <GatsbyImage
          placeholder={"blurred"}
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
          style={{ marginBottom: "100px", maxHeight: "480px" }}
        />
        {children}
      </main>
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
