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
        description: `The portfolio site and personal blog of Stephen Vondenstein, Software Engineer at S&P Global`,
        lang: `en`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `standalone`,
        cache_busting_mode: `none`,
        icon: `src/images/logo.svg`,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
              pageContext
            }
          }
        }
        `,
        serialize: ({ path, pageContext }: Queries.SitePage) => {
          return {
            url: path,
            priority: pageContext?.priority,
            changefreq: pageContext?.changeFreq,
            lastmod: pageContext?.lastMod,
          }
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 75,
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
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 672,
              showCaptions: true,
              markdownCaptions: false,
              backgroundColor: `transparent`,
              quality: 75,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
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
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/content/photos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/content/projects`,
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
    {
      resolve: `gatsby-plugin-git-lastmod`,
      options: {
        useFallback: false,
      },
    },
  ],
}

export default config
