import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../Section"
import CardGroup from "../Card/Card.Group"
import RepoCard from "../Card/Card.Repo"

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
    <Section>
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
  )
}
