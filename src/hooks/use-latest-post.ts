import { useStaticQuery, graphql } from "gatsby"

export const useLatestPost = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMdx(sort: { frontmatter: { date: DESC } }, limit: 1) {
          nodes {
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              title
              slug
              hero_image_alt
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            fields {
              timeToRead {
                minutes
              }
            }
            id
            excerpt
          }
        }
      }
    `
  )
  return data.allMdx.nodes[0]
}
