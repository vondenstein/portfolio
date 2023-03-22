import { CreateNodeArgs, CreatePageArgs, CreatePagesArgs } from "gatsby"
const readingTime = require(`reading-time`)
const path = require(`path`)

const postTemplate = path.resolve(`./src/templates/BlogPost/BlogPost.tsx`)
const photosetTemplate = path.resolve(`./src/templates/Photoset/Photoset.tsx`)

exports.onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    // Add reading time estimates to blog posts (Mdx pages)
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    })

    // Add content type to Mdx pages so we know which template/path to use
    const parent = getNode(node.parent!)
    createNodeField({
      node,
      name: `contentType`,
      value: parent?.sourceInstanceName,
    })
  }
}

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions

  /***
   * Create pages for mdx nodes based on contentType
   ***/
  const mdxPageQuery: { data?: Queries.MDXPagesQuery; errors?: any } =
    await graphql(`
      query MDXPages {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
            fields {
              contentType
            }
          }
        }
      }
    `)

  if (mdxPageQuery.errors) {
    reporter.panicOnBuild("Error loading MDX content", mdxPageQuery.errors)
  }

  const templates: { [id: string]: string } = {
    blog: postTemplate,
    photos: photosetTemplate,
  }

  const mdxPages = mdxPageQuery.data?.allMdx.nodes
  mdxPages!.forEach(node => {
    createPage({
      path: `/${node.fields?.contentType}/${node.frontmatter?.slug}`,
      component: `${templates[node.fields!.contentType!]}?__contentFilePath=${
        node.internal.contentFilePath
      }`,
      context: { id: node.id },
    })
  })
}

exports.onCreatePage = ({ page, actions }: CreatePageArgs) => {
  const { createPage } = actions

  /***
   * Add priority for sitemap
   * 1.0 for homepage, all other priorities based on path depth
   ***/
  var priority = 1.0
  if (page.path !== "/") {
    const re = new RegExp("/", "g")
    const depth = page.path.match(re)?.length!
    priority = 1.0 - depth * 0.1
  }

  /***
   * Add changefreq for sitemap - weekly by default
   * monthly for blog posts, daily for blog index
   ***/
  var changeFreq = "weekly"
  if (page.path.includes("/blog/") || page.path.includes("/photos/")) {
    changeFreq = "monthly"
  } else if (page.path === "/blog" || page.path === "/photos") {
    changeFreq = "daily"
  }

  createPage({
    ...page,
    context: {
      ...page.context,
      priority: priority,
      changeFreq: changeFreq,
    },
  })
}
