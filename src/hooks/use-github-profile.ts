import { useStaticQuery, graphql } from "gatsby"

export const useGitHubProfile = () => {
  const data = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            id
            url
          }
        }
      }
    `
  )
  return data.github.viewer
}
