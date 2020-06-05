import React from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
// import { useColorMode } from 'theme-ui';

import Header from "./Header"
import Footer from "./footer"

import { globalStyles } from "../styles/global"

const Layout = ({ children }) => {
  // const [colorMode] = useColorMode();

  // useEffect(() => {
  //   parent.postMessage({ theme: colorMode }, '*');
  // }, [colorMode]);

  return (
    <Container>
      <Global styles={globalStyles} />
      <Header />
      {children}
      <Footer />
    </Container>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
