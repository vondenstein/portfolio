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
              image {
                large {
                  childImageSharp {
                    gatsbyImageData(height: 386, placeholder: NONE)
                  }
                }
                small {
                  childImageSharp {
                    gatsbyImageData(height: 386, placeholder: NONE)
                  }
                }
              }
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
