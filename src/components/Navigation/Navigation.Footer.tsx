import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../Section"

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            sourceRepo
          }
        }
      }
    `
  )

  return (
    <Section narrow>
      <Frame>
        <Left>
          {/* <LogoContainer>
            <Logo />
          </LogoContainer> */}
          &copy; {new Date().getFullYear()} {site.siteMetadata.author}. All
          rights reserved.
        </Left>
        <Right>
          <a href={site.siteMetadata.sourceRepo}>Source Code</a>
        </Right>
      </Frame>
    </Section>
  )
}

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
