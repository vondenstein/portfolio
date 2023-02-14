import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./PostCard.module.css"

const PostCard = ({ id, excerpt, frontmatter }: Queries.Mdx) => {
  const image = getImage(frontmatter.hero_image)

  return (
    <article key={id} style={{ marginBottom: "2rem" }}>
      <Link to={`/blog/posts/${frontmatter.slug}`} className={styles.link}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <GatsbyImage
              width={550}
              height={220}
              placeholder="blurred"
              image={image}
              alt={frontmatter.hero_image_alt}
              className={styles.image}
            />
          </div>
          <div style={{ margin: "1rem 2rem 0", width: "480px" }}>
            <h2 style={{ marginBottom: ".5rem" }}>{frontmatter.title}</h2>
            <p style={{ marginBottom: ".5rem" }}>{excerpt}</p>
            <p style={{ marginBottom: "0" }}>
              {frontmatter.date} · 5 minute read
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default PostCard
