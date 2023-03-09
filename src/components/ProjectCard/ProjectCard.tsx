import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import * as styles from "./ProjectCard.module.css"

const ProjectCard: React.FC<Queries.ProjectsJson> = ({
  title,
  description,
  icon,
  color,
  links,
  image,
}) => {
  const projectImage = getImage(image?.childImageSharp?.gatsbyImageData!)

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
          image={projectImage!}
          alt={title!}
        />
      </div>
    </div>
  )
}

export default ProjectCard
