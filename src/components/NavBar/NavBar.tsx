import React from "react"
import { Link } from "gatsby"

import * as styles from "./NavBar.module.css"
import { useNavigationLinks } from "../../hooks/use-navigation-links"

import Logo from "../Logo"

const NavBar = () => {
  const navLinks = useNavigationLinks()

  return (
    <nav className={styles.container}>
      <Link className={styles.logoLink} to={"/"}>
        <Logo />
      </Link>
      <div className={styles.right}>
        <div className={styles.menuButton}>
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
