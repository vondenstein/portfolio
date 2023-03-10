import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import * as styles from "./ProjectCard.module.css"

type ProjectCardProps = {
  title: string
  description: string
  icon: string
  color: string
  links?: readonly Queries.Maybe<Queries.ProjectsJsonLinks>[]
  largeImage: Queries.File
  smallImage: Queries.File
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  color,
  links,
  largeImage,
  smallImage,
}) => {
  const desktopImage = getImage(largeImage?.childImageSharp?.gatsbyImageData!)
  const mobileImage = getImage(smallImage?.childImageSharp?.gatsbyImageData!)
  const primaryLink = links?.[0]

  return (
    <div className={styles.card} style={{ background: color ?? "#fdf9f2" }}>
      <div className={styles.left}>
        <div className={styles.heading}>
          <object
            type="image/svg+xml"
            data={`icons/${icon}.svg`}
            className={styles.icon}
          />
          {title}
        </div>
        <div className={styles.description}>{description}</div>
        <hr className={styles.hr} />
        <div className={styles.links}>
          {links?.map(link => (
            <a
              className={styles.link}
              href={link?.url ?? "/"}
              title={link?.text!}
            >
              <object type="image/svg+xml" data={`icons/${link?.icon}.svg`} />
              {link?.text}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <GatsbyImage
          className={styles.image}
          image={desktopImage!}
          alt={title!}
          imgStyle={{ objectPosition: "0 0" }}
        />
      </div>
      <a
        className={`${styles.link} ${styles.mobileLink}`}
        href={primaryLink?.url ?? "/"}
        title={primaryLink?.text!}
      >
        {primaryLink?.text}
      </a>
    </div>
  )
}

export default ProjectCard
