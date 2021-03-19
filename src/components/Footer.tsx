import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useNavigationLinks } from "../hooks/use-navigation-links"

import Section from "./Section"
import Logo from "./Logo"

function Footer() {
  const { author } = useSiteMetadata()
  const navLinks = useNavigationLinks()

  return (
    <Section narrow>
      <Frame>
        <Left>
          <LogoContainer to="/">
            <Logo />
          </LogoContainer>
          <SocialIconsFooter>
            {/* <SocialLinks fill={transparentColor} /> */}
          </SocialIconsFooter>
          &copy; {new Date().getFullYear()} {author}.
        </Left>
        <Right>
          {navLinks.edges.map(edge => {
            return (
              <FooterLink
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
              </FooterLink>
            )
          })}
        </Right>
      </Frame>
    </Section>
  )
}

const SocialIconsFooter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  /* ${media.desktop`
    margin-left: 35px;
  `};

  ${media.tablet`
    margin: 0 auto;
  `} */
`

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
`

// const FooterGradient = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 590px;
//   z-index: 0;
//   pointer-events: none;
//   background: ${p => p.theme.colors.gradient};
//   transition: ${p => p.theme.colorModeTransition};
// `;

export default Footer

const Frame = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 200px 0 80px;
  z-index: 10;

  /* ${media.tablet`
    justify-content: center;
    flex-direction: column-reverse;
    padding: 80px 0;
    margin-top: 65px;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${p => p.color};
      opacity: 0.3;
    }
  `}; */
`

const Left = styled.div`
  display: flex;

  /* ${media.tablet`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 60px;
    opacity: 1;
  `}; */

  svg path {
    transition: fill 0.3s cubic-bezier(0.3, 0.46, 0.45, 0.9);
  }

  a:hover svg path {
    fill: ${p => p.color};
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;

  /* ${media.tablet`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 60px;
  `};

  ${media.phablet`
    width: 100%;
  `} */
`
const LogoContainer = styled(Link)`
  position: relative;
  opacity: 0.3;
  transition: opacity 0.3s cubic-bezier(0.3, 0.46, 0.45, 0.9);

  &:hover {
    opacity: 1;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -50%;
    top: -10%;
    width: 200%;
    height: 120%;
    border: 2px solid ${p => p.theme.colors.purple};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`

const FooterLink = styled(Link)`
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
