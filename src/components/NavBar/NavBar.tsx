import React, { useContext } from "react"
import { Link } from "gatsby"

import * as styles from "./NavBar.module.css"
import { useNavigationLinks } from "../../hooks/use-navigation-links"
import MenuContext from "../MenuContext"

import Logo from "../Logo"

const NavBar = () => {
  const navLinks = useNavigationLinks()
  const { isOpen, setOpen } = useContext(MenuContext)

  const toggleNav = () => {
    setOpen(isOpen => !isOpen)
  }

  return (
    <nav className={styles.container}>
      <Link className={styles.logoLink} to="/" title="Home">
        <Logo />
      </Link>
      <div className={styles.right}>
        <div className={styles.menuButton} onClick={toggleNav}>
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </div>
        {navLinks.edges.map(({ node }: Queries.NavigationJsonEdge) => {
          return (
            <Link
              className={styles.link}
              key={node.url ?? ""}
              to={node.url ?? ""}
              getProps={({ isPartiallyCurrent, isCurrent }) =>
                isPartiallyCurrent && isCurrent
                  ? { ["data-active"]: "true" }
                  : null
              }
              title={node.title!}
            >
              {node.title}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBar
