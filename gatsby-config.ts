import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Vondenstein`,
    description: `All the information you never wished you knew about Stephen.`,
    author: `Stephen Vondenstein`,
    siteUrl: `https://vondenstein.com`,
    sourceRepo: `https://github.com/vondenstein/portfolio`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vondenstein`,
        short_name: `Vondenstein`,
        description: `All the information you never wished you knew about Stephen.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#ffffff`,
        icon: `src/images/icon.png`,
        display: `standalone`,
        cache_busting_mode: `none`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography/typography`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
  ],
}

export default config
