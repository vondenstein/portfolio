import React, { useEffect, useContext } from "react"

import * as styles from "./Layout.module.css"
import NavBar from "../NavBar"
import "../../styles/global.css"
import Footer from "../Footer"
import PageContainer from "../PageContainer"
import NavDrawer from "../NavDrawer"
import MenuContext from "../MenuContext"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOpen, setOpen } = useContext(MenuContext)

  const handleResize = (e: MediaQueryListEvent) => {
    if (isOpen) setOpen(e.matches)
  }

  useEffect(() => {
    const media = window.matchMedia("(max-width: 520px)")
    media.addEventListener("change", handleResize)

    return () => {
      media.removeEventListener("change", handleResize)
    }
  })

  return (
    <>
      <NavDrawer />
      <PageContainer>
        <NavBar />
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
        <Footer />
      </PageContainer>
    </>
  )
}

export default Layout
