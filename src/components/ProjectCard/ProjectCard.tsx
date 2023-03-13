import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
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
  const projectImage = withArtDirection(desktopImage!, [
    {
      media: "(max-width: 1024px)",
      image: mobileImage!,
    },
  ])
  const primaryLink = links?.[0]

  function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <div className={styles.card} style={{ background: color ?? "#fdf9f2" }}>
      <div className={styles.left}>
        <div className={styles.heading}>
          <img
            src={`/icons/${icon}.svg`}
            alt={capitalize(icon) + " logo"}
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
              <img
                src={`/icons/${link?.icon}.svg`}
                alt={capitalize(link?.icon!) + " icon"}
                className={styles.linkIcon}
              />
              {link?.text}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <GatsbyImage
          className={styles.image}
          image={projectImage!}
          alt={title!}
          imgClassName={styles.img}
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
