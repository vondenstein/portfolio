import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Section from "./section"
import ColorModeToggle from "./colormode-toggle"
import HorizontalRule from "./horizontal-rule"

import Logo from "./Logo"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

function Header() {
  const {
    prismic: {
      allNavigators: {
        edges: [{ node }],
      },
    },
  } = useStaticQuery(
    graphql`
      {
        prismic {
          allNavigators {
            edges {
              node {
                logo
                title
                links {
                  label
                  path {
                    ... on Prismic__Document {
                      _meta {
                        uid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <Section>
        <Navigation>
          <HomeLink to="/" title="Home">
            <Logo />
          </HomeLink>
          <NavLinks>
            <ul>
              {node.links.map(link => (
                <ListLink
                  key={`navlink-${link.label}`}
                  to={`/${link.path._meta.uid}`}
                >
                  {link.label}
                </ListLink>
              ))}
              <ListLink to="/bio">Bio</ListLink>
              <li style={{ display: `inline-block`, marginRight: `1rem` }}>
                <ColorModeToggle />
              </li>
            </ul>
          </NavLinks>
        </Navigation>
        <HorizontalRule offset="80px" />
      </Section>
    </header>
  )
}

const Navigation = styled.div`
  position: relative;
  z-index: 100;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
`

const HomeLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  fill: ${p => p.theme.colors.text};
`

const NavLinks = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
