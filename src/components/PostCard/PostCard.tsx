import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./PostCard.module.css"

const PostCard = ({ id, excerpt, frontmatter, fields }: Queries.Mdx) => {
  const image = getImage(frontmatter?.hero_image!)

  return (
    <article key={id} className={styles.article} title={frontmatter?.title!}>
      <Link
        to={`/blog/posts/${frontmatter?.slug}`}
        className={styles.link}
        title={frontmatter?.title!}
      >
        <div className={styles.container}>
          <div>
            <GatsbyImage
              image={image!}
              alt={frontmatter?.hero_image_alt!}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h2 className={styles.title}>{frontmatter?.title}</h2>
            <p className={styles.excerpt}>{excerpt}</p>
            <p className={styles.metadata}>
              {frontmatter?.date} · {Math.round(fields?.timeToRead?.minutes!)}{" "}
              minute read
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default PostCard
