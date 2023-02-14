import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/Button"

const pageStyles = {
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <StaticImage
          src={"../images/404.svg"}
          alt={"A cartoon astronaut floating away from his ship."}
          loading={"eager"}
          width={500}
          style={{ marginTop: "-50px", marginBottom: "2rem" }}
          placeholder="none"
        />
        <h1 style={{ marginBottom: "0.75rem" }}>Uh-oh!</h1>
        <p style={{ marginBottom: "2rem" }}>
          Looks like you got lost in space.
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button dark>Go home</Button>
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <SEO title="404 - Not Found" />
