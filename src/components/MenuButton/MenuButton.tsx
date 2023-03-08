import React, { MouseEventHandler } from "react"

import * as styles from "./MenuButton.module.css"

type MenuButtonProps = {
  onClick?: MouseEventHandler
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.menuButton} onClick={onClick}>
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </div>
  )
}

export default MenuButton
