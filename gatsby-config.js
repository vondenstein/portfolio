module.exports = {
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `Vondenstein`,
    description: `All the information you never wished you knew about Stephen.`,
    author: `Stephen Vondenstein`,
    keywords: [`developer`],
    siteUrl: `https://vondenstein.com`,
    sourceRepo: `https://gitlab.com/vondenstein/portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          "@components": "src/components",
          "@assets": "src/assets",
          "@styles": "src/styles",
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: "https://api.github.com/graphql",
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vondenstein`,
        short_name: `Vondenstein`,
        description: `Site description`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/logo-rounded.png`, // This path is relative to the root of the site.
        // crossOrigin: `use-credentials`,
        cache_busting_mode: `none`,
      },
    },
    // this plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: [`/meet/`, `/connect/`],
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
  ],
}
