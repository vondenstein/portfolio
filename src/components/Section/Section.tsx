import React from "react"

import * as styles from "./Section.module.css"

type SectionProps = {
  title: string
  subtitle?: string
  first?: boolean
}

const Section: React.FC<React.PropsWithChildren & SectionProps> = ({
  title,
  subtitle,
  first = false,
  children,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>
        {first ? (
          <h1 className={styles.title}>{title}</h1>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Section
