import { useStaticQuery, graphql } from "gatsby"

export const useRecentPhotos = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMdx(
          filter: { fields: { contentType: { eq: "photos" } } }
          sort: { frontmatter: { date: DESC } }
          limit: 3
        ) {
          nodes {
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              title
              slug
              hero_image_alt
              hero_image {
                childImageSharp {
                  gatsbyImageData(
                    width: 570
                    outputPixelDensities: [0.65, 1.0, 1.3, 2.0]
                  )
                }
              }
            }
            fields {
              contentType
            }
            id
          }
        }
      }
    `
  )
  return data.allMdx.nodes
}
