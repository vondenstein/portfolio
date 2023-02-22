import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"

import Layout from "../components/Layout"
import PostCard from "../components/PostCard"
import { useLatestPost } from "../hooks/use-latest-post"
import { useGitHubProfile } from "../hooks/use-github-profile"
import Button from "../components/Button"
import Block from "../components/Block"
import SEO from "../components/SEO"

const IndexPage: React.FC<PageProps> = () => {
  const latestPost = useLatestPost()
  const githubProfile = useGitHubProfile()

  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          marginBottom: "40vh",
          marginTop: "10vh",
          maxWidth: "500px",
          margin: "10vh auto 40vh",
        }}
      >
        <h1>Hi, I'm Stephen!</h1>
        <p>
          Software Engineer from New Orleans, LA.
          <br />
          I'm passionate about creating things, sharing them and learning as I
          go.
        </p>
        <p>
          I'm currently building new products at{" "}
          <a
            href="https://spglobal.com"
            style={{
              color: "#fdf9f2",
              fontWeight: "bold",
              textDecoration: "underline",
              textDecorationStyle: "dashed",
            }}
            title="S&P Global website"
          >
            S&P Global
          </a>
        </p>
      </div>
      <h2 style={{ marginBottom: "60px" }}>Latest Post</h2>
      <PostCard
        id={latestPost.id}
        frontmatter={latestPost.frontmatter}
        excerpt={latestPost.excerpt}
        internal={latestPost.internal}
        children={latestPost.children}
        parent={latestPost.parent}
      />
      <div style={{ height: "100px" }} />
      <Block>
        <h2>Software Projects</h2>
        <p style={{ maxWidth: "500px", margin: "0 auto 25px" }}>
          I love to tinker and follow ideas to their logical end. Take a look at
          a few projects that I wanted to share, or head over to my{" "}
          <a
            href={githubProfile.url}
            style={{
              color: "#fdf9f2",
              fontWeight: "bold",
              textDecoration: "underline",
              textDecorationStyle: "dashed",
            }}
            title="Vondenstein on GitHub"
          >
            GitHub
          </a>
          .
        </p>
        <Link
          to={"/code"}
          style={{ textDecoration: "none" }}
          title="Link to Projects Page"
        >
          <Button>View projects</Button>
        </Link>
      </Block>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
