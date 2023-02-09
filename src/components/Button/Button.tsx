import React from "react"

import * as styles from "./Button.module.css"

const Button: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.button}>{children}</div>
}

export default Button
