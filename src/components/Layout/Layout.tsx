import React from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/react"
import styled from "@emotion/styled"
// import { useColorMode } from 'theme-ui';

import Header from "../Navigation/Navigation.Header"
import Footer from "../Navigation/Navigation.Footer"

import { globalStyles } from "../../styles/global"

const Layout = ({ children, showFooter }) => {
  // const [colorMode] = useColorMode();

  // useEffect(() => {
  //   parent.postMessage({ theme: colorMode }, '*');
  // }, [colorMode]);

  return (
    <Container>
      <Global styles={globalStyles} />
      <Header />
      {children}
      {showFooter && <Footer />}
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

Layout.defaultProps = {
  showFooter: true,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
}

export default Layout
