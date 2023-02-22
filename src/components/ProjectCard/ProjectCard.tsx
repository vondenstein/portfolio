import React from "react"

import * as styles from "./ProjectCard.module.css"

const ProjectCard = ({
  title,
  description,
  icon,
  color,
  links,
}: Queries.ProjectsJson) => {
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
            <a className={styles.link} href={link?.url ?? "/"}>
              <object type="image/svg+xml" data={`icons/${link?.icon}.svg`} />
              {link?.text}
            </a>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ProjectCard
