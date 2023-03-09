import React, { useContext } from "react"
import { Link, navigate } from "gatsby"

import * as styles from "./NavBar.module.css"
import { useNavigationLinks } from "../../hooks/use-navigation-links"
import MenuContext from "../MenuContext"

import Logo from "../Logo"
import MenuButton from "../MenuButton"

const NavBar: React.FC = () => {
  const navLinks = useNavigationLinks()
  const { isOpen, setOpen } = useContext(MenuContext)

  const toggleNav = () => {
    setOpen(isOpen => !isOpen)
  }

  /* This is pretty bad. TODO: remove duplicate code
  maybe pass these functions down from layout? */
  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault()
    setOpen(isOpen => !isOpen)

    setTimeout(() => {
      navigate(path)
    }, 700)
  }

  return (
    <nav className={styles.container}>
      <Link
        className={styles.logoLink}
        to="/"
        title="Home"
        onClick={isOpen ? e => handleNav(e, "/") : undefined}
      >
        <Logo />
      </Link>
      <div className={styles.right}>
        <MenuButton onClick={toggleNav} />
        {navLinks.edges.map(({ node }: Queries.NavigationJsonEdge) => {
          return (
            <Link
              className={styles.link}
              key={node.url ?? ""}
              to={node.url ?? ""}
              activeClassName={styles.activeLink}
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
