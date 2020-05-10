import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Section from "../components/section"
import ColorModeToggle from "./colormode-toggle"
import HorizontalRule from "./horizontal-rule"

import Logo from "../assets/logo-dark-small.svg"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: `1.5rem` }}>
    <Section>
      <Navigation>
        <HomeLink to="/" title="Home">
          <svg
            width="auto"
            height="23px"
            viewBox="0 0 38 23"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1,0,0,1,-22.713,-4045.39)">
              <g
                id="Dark--Small-"
                transform="matrix(0.0112237,0,0,0.00934928,23.9671,4044)"
              >
                <rect
                  x="-111.738"
                  y="148.378"
                  width="3323.09"
                  height="2460.08"
                  style={{ fill: "none" }}
                />
                <clipPath id="_clip1">
                  <rect
                    x="-111.738"
                    y="148.378"
                    width="3323.09"
                    height="2460.08"
                  />
                </clipPath>
                <g clip-path="url(#_clip1)">
                  <g transform="matrix(1.34224,0,0,1.61135,-274.802,-1176.86)">
                    <g transform="matrix(1,0,0,1,-58.633,50.4241)">
                      <g transform="matrix(1,0,0,1,-206.068,-108.011)">
                        <g transform="matrix(-0.7071,0.707113,-0.707113,-0.7071,3360.32,2404.66)">
                          <path d="M1985.53,2220.66L692.093,2220.66L1083.67,1829.09L1593.95,1829.09L1985.53,2220.66Z" />
                        </g>
                        <g transform="matrix(0.707107,-0.707107,0.707107,0.707107,-1346.7,718.63)">
                          <path d="M1985.53,2220.66L692.093,2220.66L1083.67,1829.09L1593.95,1829.09L1985.53,2220.66Z" />
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,-12.2995,13.7489)">
                        <g transform="matrix(-0.542485,-1.19713,0.81587,-0.369716,1441.36,5019.22)">
                          <path d="M2920.45,2045.96L1790.62,2045.96L1917.42,1644.24L2813.9,1644.24L2920.45,2045.96Z" />
                        </g>
                        <g transform="matrix(0.392563,-1.19322,0.880541,0.289694,-279.736,3656.36)">
                          <path d="M2920.45,2045.96L1790.62,2045.96L2109.2,1644.24L2822.77,1644.24L2920.45,2045.96Z" />
                        </g>
                      </g>
                    </g>
                    <g transform="matrix(0.936736,0,0,0.84967,5.13958,338.545)">
                      <rect
                        x="127.414"
                        y="2252.01"
                        width="2193.14"
                        height="108.625"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </HomeLink>
        <NavLinks>
          <ul>
            <ListLink to="/code/">{"{Code}"}</ListLink>
            <ListLink to="/images/">Images</ListLink>
            <ListLink to="/words/">Words</ListLink>
            <ListLink to="/sounds/">Sounds</ListLink>
            <ListLink to="/meet/">Meet</ListLink>
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
