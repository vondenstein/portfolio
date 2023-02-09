import React from "react"

import * as styles from "./Layout.module.css"
import NavBar from "../NavBar"
import "../../styles/global.css"
import Footer from "../Footer"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout