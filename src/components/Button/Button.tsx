import React from "react"

import * as styles from "./Button.module.css"

const Button: React.FC<React.PropsWithChildren & { dark?: boolean }> = ({
  children,
  dark,
}) => {
  return (
    <div className={dark ? styles.darkButton : styles.button}>{children}</div>
  )
}

export default Button
