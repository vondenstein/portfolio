import React, { useContext, useEffect } from "react"
import MenuContext from "../MenuContext"
// import {
//   disableBodyScroll,
//   enableBodyScroll,
//   clearAllBodyScrollLocks,
// } from "body-scroll-lock"

import * as styles from "./PageContainer.module.css"

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOpen } = useContext(MenuContext)

  useEffect(() => {
    if (isOpen) {
      // disableBodyScroll(document.body)
      document.body.style.overflow = "hidden"
      document.body.style.height = "100%"
      document.body.style.position = "sticky"
    } else {
      // enableBodyScroll(document.body)
      document.body.style.cssText = ""
    }
  }, [isOpen])

  return <div className={isOpen ? styles.open : styles.closed}>{children}</div>
}

export default PageContainer
