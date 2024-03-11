import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./ProfileImage.module.css"

const ProfileImage: React.FC = () => {
  return (
    <StaticImage
      className={styles.image}
      src="../../images/profile.jpg"
      alt="My profile photo."
      layout="fixed"
      loading="eager"
      height={180}
      width={180}
    />
  )
}

export default ProfileImage
