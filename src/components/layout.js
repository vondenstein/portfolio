import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div style={{ margin: `3rem auto`, maxWidth: 950, padding: `0 1rem` }}>
            <Header siteTitle={data.site.siteMetadata.title}/>
            {children}
            <Footer/>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default Layout