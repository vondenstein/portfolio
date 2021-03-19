import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { useNavigationLinks } from "../hooks/use-navigation-links"

import Section from "./Section"
import Logo from "./Logo"

function Header() {
  const navLinks = useNavigationLinks()

  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <NavFixedContainer>
        <Section>
          <Navigation>
            <LogoMask>
              <LogoContainer to="/">
                <Logo />
              </LogoContainer>
            </LogoMask>
            <Right>
              <Nav>
                {navLinks.edges.map(edge => {
                  return (
                    <HeaderLink
                      key={edge.node.url}
                      color={"#fff"}
                      to={edge.node.url}
                      data-a11y="false"
                      getProps={({ isPartiallyCurrent, isCurrent }) =>
                        isPartiallyCurrent && isCurrent
                          ? { ["data-active"]: "true" }
                          : null
                      }
                    >
                      {edge.node.title}
                    </HeaderLink>
                  )
                })}
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
    /* border: 2px solid ${p => p.theme.colors.purple}; */
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

const HeaderLink = styled(Link)`
  position: relative;
  font-weight: 600;
  font-size: 18px;
  color: ${p => p.color};
  transition: opacity 0.3s cubic-bezier(0.3, 0.46, 0.45, 0.9);

  /* ${media.desktop_small_up`
    ${p => p.mobileOnly && `display: none;`}
  `} */

  &[data-active="true"] {
    &::after {
      content: "";
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 1px;
      width: 20px;
      background: ${p => p.color};
    }
  }

  &:hover {
    opacity: 0.6;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -10%;
    top: -5%;
    width: 120%;
    height: 120%;
    border: 2px solid ${p => p.theme.colors.purple};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  &:not(:last-child) {
    margin-right: 60px;
  }

  /* ${media.desktop`
    &:not(:last-child) {
      margin-right: 35px;
    }
  `};

  ${media.tablet`
    font-weight: 400;
    opacity: 1;
    font-size: 22px;

    &:hover {
      opacity: 1;
    }

    &:not(:last-child) {
      margin: 0 auto 35px;
    }
  `} */
`

export default Header
