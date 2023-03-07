import React from "react"

import * as styles from "./CardGrid.module.css"

const CardGrid: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.cardGrid}>{children}</div>
}

export default CardGrid
