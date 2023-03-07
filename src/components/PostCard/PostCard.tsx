import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"

import * as styles from "./PostCard.module.css"
import ContentMetadata from "../ContentMetadata"

type PostCardProps = {
  id: string
  title: string
  description?: string
  date: string
  readingTime?: number
  image: ImageDataLike
  imageAlt?: string
  link: string
  linkTitle?: string
  direction?: "horizontal" | "vertical"
}

const PostCard = ({
  id,
  title,
  description,
  date,
  readingTime,
  image,
  imageAlt,
  link,
  linkTitle,
  direction = "horizontal",
}: PostCardProps) => {
  const imageData = getImage(image)

  return (
    <article key={id} className={styles.article} title={title}>
      <Link to={link} className={styles.link} title={linkTitle}>
        <div
          className={
            direction === "horizontal"
              ? styles.horizontalContainer
              : styles.verticalContainer
          }
        >
          <div>
            <GatsbyImage
              image={imageData!}
              alt={imageAlt!}
              className={styles.image}
            />
          </div>
          <div
            className={
              direction === "horizontal"
                ? styles.horizontalText
                : styles.verticalText
            }
          >
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.excerpt}>{description}</p>}
            <ContentMetadata date={date} readingTime={readingTime} dark />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default PostCard
