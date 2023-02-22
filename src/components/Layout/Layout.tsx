import React from "react"

import * as styles from "./Layout.module.css"
import NavBar from "../NavBar"
import "../../styles/global.css"
import Footer from "../Footer"
import PageContainer from "../PageContainer"
import NavDrawer from "../NavDrawer"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
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
