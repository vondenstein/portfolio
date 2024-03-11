import React from "react"

import Block from "../Block"
import * as styles from "./HomepageHero.module.css"
import ProfileImage from "../ProfileImage"

type HomepageHeroProps = {
  greeting: string
  occupation: string
  birthplace: string
  blurb: string
  workplace: string
  workplaceDescription: string
  workplaceLink: string
}

const HomepageHero: React.FC<HomepageHeroProps> = ({
  greeting,
  occupation,
  birthplace,
  blurb,
  workplace,
  workplaceDescription,
  workplaceLink,
}) => {
  return (
    <Block>
      <ProfileImage />
      <div className={styles.container}>
        <h1 className={styles.heading}>{greeting}</h1>
        <p className={styles.description}>
          {occupation} from {birthplace}.
          <span className={styles.blurb}>
            <br />
            <span className={styles.spacer}> </span>
            {blurb}
          </span>
        </p>
        <p className={styles.career}>
          I'm currently {workplaceDescription} at{" "}
          <a
            className={styles.link}
            href={workplaceLink}
            style={{
              color: "#fdf9f2",
            }}
            title="{workplace} website"
          >
            {workplace}
          </a>
        </p>
      </div>
    </Block>
  )
}

export default HomepageHero
