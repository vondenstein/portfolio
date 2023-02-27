import React, { useContext } from "react"
import { useNavigationLinks } from "../../hooks/use-navigation-links"
import { Link } from "gatsby"

import * as styles from "./NavDrawer.module.css"
import MenuContext from "../MenuContext"

const NavDrawer = () => {
  const navLinks = useNavigationLinks()
  const { isOpen, setOpen } = useContext(MenuContext)

  const toggleNav = () => {
    setOpen(isOpen => !isOpen)
  }

  return (
    <div className={styles.drawer}>
      <div className={styles.links}>
        {navLinks.edges.map(({ node }: Queries.NavigationJsonEdge) => {
          return (
            <Link
              onClick={toggleNav}
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
    </div>
  )
}

export default NavDrawer
