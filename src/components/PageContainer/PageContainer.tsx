import React, { useContext } from "react"
import MenuContext from "../MenuContext"

import * as styles from "./PageContainer.module.css"

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOpen } = useContext(MenuContext)

  return <div className={isOpen ? styles.open : styles.closed}>{children}</div>
}

export default PageContainer
