import { useStaticQuery, graphql } from "gatsby"

export const useProjects = () => {
  const data = useStaticQuery(
    graphql`
      {
        allProjectsJson {
          edges {
            node {
              id
              title
              description
              color
              icon
              links {
                type
                text
                icon
                url
              }
            }
          }
        }
      }
    `
  )
  return data.allProjectsJson
}
