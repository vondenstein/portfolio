import React from "react"
import PropTypes from "prop-types"
import { Global, ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"

import Header from "./Header"
import Footer from "./Footer"

import { globalStyles, theme } from "../styles"

const Layout = ({ children, showFooter }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Global styles={globalStyles} />
          <Header />
          {children}
          {showFooter && <Footer />}
        </Container>
      </ThemeProvider>
    </>
  )
}

const Container = styled.div`
  // margin: 3rem auto;
  // maxWidth: 950;
  // padding: 0 1rem;
`

// const Container = styled.div`
//   position: relative;
//   background: ${p => p.theme.colors.background};
//   transition: ${p => p.theme.colorModeTransition};
//   min-height: 100vh;
// `;

Layout.defaultProps = {
  showFooter: true,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
}

export default Layout
