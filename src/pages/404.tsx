import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/Button"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin:
            "max(calc(calc(100vh - 32rem) / 2), 4rem) 0 max(calc(calc(100vh - 32rem) / 2), 6rem)",
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
        <Link to="/" style={{ textDecoration: "none" }} title="Home">
          <Button dark>Phone home</Button>
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <SEO
    title="404 - Not Found"
    description="Sorry, there is nothing at this URL."
  />
)
