import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Stephen Vondenstein`,
    description: `The portfolio site and personal blog of Stephen Vondenstein, Software Engineer at S&P Global`,
    siteUrl: `https://vondenstein.com`,
    ogImageUrl: `https://og.vondenstein.com/api/generate`,
    author: {
      name: `Stephen Vondenstein`,
      title: `👋🏻 I'm Stephen.`,
      subtitle: `Software Engineer · Tinkerer · Occasional Photographer`,
    },
    twitterHandle: ``,
  },
  graphqlTypegen: true,
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stephen Vondenstein`,
        short_name: `Vondenstein`,
        description: `All the information you never wished you knew about Stephen.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `standalone`,
        cache_busting_mode: `name`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: "icons/icon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "icons/icon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
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
