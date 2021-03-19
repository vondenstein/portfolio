const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash")

function isIndexPage(post) {
  return path.basename(post.node.fileAbsolutePath) === "index.md"
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // add slug field to nodes based on filepath
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // load template options
    const templates = {
      list: require.resolve(`./src/templates/list.tsx`),
      post: require.resolve(`./src/templates/post.tsx`),
      bio: require.resolve(`./src/templates/bio.tsx`),
      sectional: require.resolve(`./src/templates/sectional.tsx`),
      tag: require.resolve(`./src/templates/tag.tsx`),
    }
    resolve(
      // query for posts and tags
      graphql(`
        {
          postsRemark: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                excerpt(format: PLAIN)
                fileAbsolutePath
                fields {
                  slug
                }
                frontmatter {
                  title
                  template
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
          tagsGroup: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }
        }
      `).then(result => {
        // handle errors
        if (result.errors) {
          reporter.panicOnBuild(`Error while running GraphQL query.`)
          return
        }
        // create the posts
        const posts = result.data.postsRemark.edges
        posts.forEach(({ node }) => {
          // determine which template to use
          let templateComponent
          if (node.frontmatter.template) {
            templateComponent = templates[node.frontmatter.template]
          } else {
            templateComponent = templates.post
          }
          createPage({
            path: node.fields.slug,
            component: templateComponent,
            context: {
              slug: node.fields.slug,
            },
          })
        })
        // create the tags
        const tags = result.data.tagsGroup.group
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: templates["tag"],
            context: {
              tag: tag.fieldValue,
            },
          })
        })
      })
    )
  })
}
