import React from "react"

import Block from "../Block"
import * as styles from "./HomepageHero.module.css"
import ProfileImage from "../ProfileImage"

const HomepageHero: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Block>
      <ProfileImage />
      <div className={styles.container}>{children}</div>
    </Block>
  )
}

export default HomepageHero
