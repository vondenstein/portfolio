import React from "react"
import { Link } from "gatsby"

import * as styles from "./Footer.module.css"
import { useNavigationLinks } from "../../hooks/use-navigation-links"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

import Logo from "../Logo"

const Footer = () => {
  const navLinks = useNavigationLinks()
  const { author } = useSiteMetadata()

  return (
    <footer className={styles.container}>
      <div className={styles.left}>
        <Link className={styles.logoLink} to={"/"}>
          <Logo />
        </Link>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} {author.name}.
        </div>
      </div>
      <div className={styles.right}>
        {navLinks.edges.map(({ node }: Queries.NavigationJsonEdge) => {
          return (
            <Link
              className={styles.link}
              key={node.url ?? ""}
              to={node.url ?? ""}
              data-a11y="false"
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
    </footer>
  )
}

export default Footer
