import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

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
    </footer>
  )
}

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Footer
