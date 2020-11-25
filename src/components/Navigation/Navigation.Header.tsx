/** @jsx jsx */
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { jsx } from "theme-ui"

import Section from "../section"
import ColorModeToggle from "../colormode-toggle"

import Logo from "../Logo"

const navLinks = [
  { to: "/code/", text: "{Code}" },
  { to: "/blog/", text: "Words" },
  { to: "/bio/", text: "Bio" },
]

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

function Header() {
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <NavFixedContainer>
        <Section>
          <Navigation>
            <LogoMask>
              <LogoContainer>
                <Logo />
              </LogoContainer>
            </LogoMask>
            <Right>
              <Nav>
                <DesktopNavList>
                  {/* <NavItems /> */}
                  <NavLinks>
                    <ul>
                      {/* <ListLink to="/code/">{"{Code}"}</ListLink> */}
                      {/* <ListLink to="/images/">Images</ListLink> */}
                      {/* <ListLink to="/blog/">Words</ListLink> */}
                      {/* <ListLink to="/sounds/">Sounds</ListLink> */}
                      <ListLink to="/bio/">Bio</ListLink>
                      <li
                        style={{ display: `inline-block`, marginRight: `1rem` }}
                      >
                        <ColorModeToggle />
                      </li>
                    </ul>
                  </NavLinks>
                </DesktopNavList>
              </Nav>
            </Right>
          </Navigation>
        </Section>
      </NavFixedContainer>
    </header>
  )
}

const NavFixedContainer = styled.div`
  position: absolute;
  height: 90px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;

  /* ${media.tablet`
    position: ${p => (p.navFixed ? "fixed" : "absolute")};
  `} */
`

const Navigation = styled.div`
  /* position: relative;
  z-index: 100;
  padding-top: 100px;
  display: flex;
  justify-content: space-between; */
  position: relative;
  z-index: 100;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;

  /* ${media.desktop_medium`
    padding-top: 50px;
  `}; */

  @media screen and (max-height: 800px) {
    padding-top: 60px;
  }
`

const HomeLink = styled(Link)`
  /* position: relative;
  display: flex;
  align-items: center;
  fill: ${p => p.theme.colors.text}; */
`

const NavLinks = styled.div`
  /* position: relative;
  display: flex;
  align-items: center; */
`

const LogoContainer = styled(Link)`
  position: relative;
  transition: opacity 0.3s var(--ease-out-quad);
  max-width: 114px;

  &:hover {
    opacity: 0.6;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -10%;
    top: -42%;
    width: 120%;
    height: 200%;
    border: 2px solid ${p => p.theme.colors.purple};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`

const LogoMask = styled.div`
  display: inline-block;
  max-width: 114px;

  /* ${media.tablet`
    overflow: hidden;
  `} */
`

const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`

const DesktopNavList = styled.ul`
  list-style: none;

  /* ${media.tablet`
    display: none;
  `}; */
`

const Nav = styled.nav``

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
