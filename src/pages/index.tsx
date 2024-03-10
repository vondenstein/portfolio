import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Section from "../components/Section"
import ContentLink from "../components/ContentLink"
import ContentGrid from "../components/ContentGrid"
import Block from "../components/Block"
import Button from "../components/Button"
import SEO from "../components/SEO"

import { useLatestPost } from "../hooks/use-latest-post"
import { useGitHubProfile } from "../hooks/use-github-profile"
import { useRecentPhotos } from "../hooks/use-recent-photos"
import HomepageHero from "../components/HomepageHero"

const IndexPage: React.FC<PageProps> = () => {
  const latestPost = useLatestPost()
  const githubProfile = useGitHubProfile()
  const recentPhotos: Queries.RecentPhotosQuery = useRecentPhotos()

  return (
    <Layout>
      <HomepageHero>
        <h1>Hi, I'm Stephen!</h1>
        <p>
          Software Engineer from New Orleans, LA.
          <br />
          I'm passionate about creating things, sharing them and learning as I
          go.
        </p>
        <p>
          I'm currently building impactful systems at{" "}
          <a
            href="https://www.lockheedmartin.com"
            style={{
              color: "#fdf9f2",
            }}
            title="Lockheed Martin website"
          >
            Lockheed Martin
          </a>
        </p>
      </HomepageHero>
      <Section title="Latest Post">
        <ContentLink
          id={latestPost.id}
          title={latestPost.frontmatter.title}
          description={latestPost.excerpt}
          date={latestPost.frontmatter.date}
          readingTime={latestPost.fields.timeToRead.minutes}
          image={latestPost.frontmatter.hero_image}
          imageAlt={latestPost.frontmatter.hero_image_alt}
          link={`/${latestPost.fields.contentType}/${latestPost.frontmatter.slug}`}
          linkTitle={latestPost.frontmatter.title}
        />
      </Section>
      <Section title="Recent Photos">
        <ContentGrid>
          {recentPhotos.allMdx.nodes.map(node => (
            <ContentLink
              direction="vertical"
              id={node.id}
              title={node.frontmatter?.title!}
              date={node.frontmatter?.date!}
              image={node.frontmatter?.hero_image?.childImageSharp!}
              imageAlt={node.frontmatter?.hero_image_alt!}
              link={`/${node.fields?.contentType}/${node.frontmatter?.slug}`}
              linkTitle={node.frontmatter?.title!}
            />
          ))}
        </ContentGrid>
      </Section>
      <Block>
        <h2>Software Projects</h2>
        <p style={{ maxWidth: "500px", margin: "0 auto 25px" }}>
          I love to tinker and follow ideas to their logical end. Take a look at
          a few projects that I wanted to share, or head over to my{" "}
          <a
            href={githubProfile.url}
            style={{
              color: "#fdf9f2",
            }}
            title="Vondenstein on GitHub"
          >
            GitHub
          </a>
          .
        </p>
        <Button to="/code" title="Link to Projects Page">
          View projects
        </Button>
      </Block>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
