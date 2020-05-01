import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import AppearanceToggle from "../components/appearance-toggle"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: `1.5rem` }}>
    <div>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{siteTitle}</h3>
      </Link>
      <AppearanceToggle style={{ float: `right ` }} />
    </div>
    <div>
      <ul style={{ listStyle: `none`, float: `left` }}>
        <ListLink to="/code/">{"{Code}"}</ListLink>
        <ListLink to="/images/">Images</ListLink>
        <ListLink to="/words/">Words</ListLink>
        <ListLink to="/sounds/">Sounds</ListLink>
      </ul>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/meet/">Meet</ListLink>
        <ListLink to="/connect/">Connect</ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
