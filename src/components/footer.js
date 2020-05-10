import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import Section from "./section"
import HorizontalRule from "./horizontal-rule"

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
    <footer>
      {/* <FooterGradient /> */}
      <Section narrow>
        <HorizontalRule />
        <FooterContainer>
          <div>
            &copy; {new Date().getFullYear()} {site.siteMetadata.author}. All
            rights reserved.
          </div>
          <div>
            <a href={site.siteMetadata.sourceRepo}>Source Code</a>
          </div>
        </FooterContainer>
      </Section>
    </footer>
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
