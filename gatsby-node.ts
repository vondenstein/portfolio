import { CreateNodeArgs, CreatePageArgs } from "gatsby"
const readingTime = require(`reading-time`)
const simpleGit = require(`simple-git`)

exports.onCreateNode = ({ node, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions

  // Add reading time estimates to blog posts (Mdx pages)
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    })
  }
}

exports.onCreatePage = async ({ page, actions }: CreatePageArgs) => {
  const { createPage } = actions

  /***
   * Add last modified date for sitemap using component name
   * unless it is an mdx blog post, in which case use contentFilePath
   ***/
  const filePath = page.component.split("?__contentFilePath=").pop()
  const fileLog = await simpleGit().log({
    file: filePath,
    maxCount: 1,
    strictDate: true,
  })

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
  if (page.path.includes("/blog/posts/")) {
    changeFreq = "monthly"
  } else if (page.path === "/blog") {
    changeFreq = "daily"
  }

  createPage({
    ...page,
    context: {
      ...page.context,
      priority: priority,
      changeFreq: changeFreq,
      lastMod: fileLog?.latest?.date,
    },
  })
}
