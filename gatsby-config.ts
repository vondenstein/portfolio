import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Stephen Vondenstein`,
    description: `The portfolio site and personal blog of Stephen Vondenstein, Software Engineer at S&P Global`,
    siteUrl: `https://vondenstein.com`,
    ogImageUrl: `https://og-examples.vercel.sh/api/static`,
    author: `Stephen Vondenstein`,
    twitterHandle: ``,
  },
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
        theme_color: `#fdf9f2`,
        icon: `src/images/icon.png`,
        display: `standalone`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://vondenstein.com`,
        stripQueryString: true,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography/typography`,
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
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
