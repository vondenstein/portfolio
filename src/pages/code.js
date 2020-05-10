import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/page-hero"
import Section from "../components/section"
import CardGroup from "../components/cards/card-group"
import RepoCard from "../components/cards/repo-card"
import ActionPrompt from "../components/action-prompt"

export default () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
              privacy: PUBLIC
            ) {
              edges {
                node {
                  id
                  nameWithOwner
                  url
                  description
                  primaryLanguage {
                    name
                    color
                  }
                  stargazers {
                    totalCount
                  }
                  repositoryTopics(first: 5) {
                    edges {
                      node {
                        topic {
                          name
                        }
                        url
                      }
                    }
                  }
                  forkCount
                  isArchived
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Code" pathname="/code/" />
      <PageHero
        heading="Elegant solutions to complex problems. These are what keep me up at night - they help me
        grow as a developer and problem-solver. Take a look at the ones that I found
        interesting enough to share."
      />
      <Section>
        <h2>Featured projects</h2>
        <p>Feature projects go here.</p>
        <h2>Repositories</h2>
        <CardGroup>
          {edges.map(({ node }) => (
            <RepoCard
              key={node.id}
              name={node.nameWithOwner}
              description={node.description}
              url={node.url}
              stars={node.stargazers.totalCount}
              forks={node.forkCount}
              language={node.primaryLanguage}
              topics={node.repositoryTopics}
              isArchived={node.isArchived}
            />
          ))}
        </CardGroup>
      </Section>
      <ActionPrompt
        heading="But wait, there's more!"
        text="The projects shown above are some of my favorite that I've worked on,
          but I'm always cooking up new ideas. If you'd like to see what else I've
          been up to, click here."
        actionLink="https://github.com/vondenstein"
      />
    </Layout>
  )
}
