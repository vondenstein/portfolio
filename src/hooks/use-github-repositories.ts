import { useStaticQuery, graphql } from "gatsby"

export const useGitHubRepos = () => {
  const data = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    owner {
                      id
                    }
                    nameWithOwner
                    description
                    homepageUrl
                    url
                    stargazerCount
                    primaryLanguage {
                      color
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return data.github.viewer.pinnedItems.edges
}
