import React, { useContext, useEffect } from "react"
import MenuContext from "../MenuContext"

import * as styles from "./PageContainer.module.css"

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOpen } = useContext(MenuContext)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.height = "100vh"
      document.body.style.position = "sticky"
    } else {
      document.body.style.cssText = ""
    }
  }, [isOpen])

  return <div className={isOpen ? styles.open : styles.closed}>{children}</div>
}

export default PageContainer
