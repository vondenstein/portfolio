<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://vondenstein.com/">
    <img alt="Vondenstein" src="https://vondenstein.com/icons/icon-144x144.png" width="80" />
  </a>
</p>
<h1 align="center">
  vondenstein.com
</h1>

<h3 align="center">
  📸 💻 🎸
</h3>
<h3 align="center">
  Fast, modern portfolio and blog powered by Gatsby
</h3>
<p align="center">
  This site makes use of the GitHub GraphQL API for loading the repository list and information, an MDX-based blog, and other Gatsby plugins/features to create a clean, full-featured personal portfolio.
</p>
<p align="center">
  <a href="https://gatsbyjs.com">
    <img src="https://img.shields.io/static/v1?label=%20&style=flat&logo=Gatsby&message=Created%20with%20Gatsby&color=663399" />
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/static/v1?label=%20&style=flat&logo=Vercel&logoColor=white&message=Deployed%20on%20Vercel&color=000000">
  </a>
</p>

<h3 align="center">
  <a href="https://vondenstein.com/">Live Site</a>
</h3>

## ❓ About This Project

This site is my personal space On The Line™. I showcase my projects, share life experiences, and shed light on things I find interesting - whether it be new photos I've taken, or a helpful new tool I've found. My written content is personal in nature and does not necessarily reflect the views of my employer, my University (Geaux Tigers), or anyone I've collaborated with on projects and products.

## 💡 Features

Gatsby, React and Vercel have a lot of advanced features available to help developers design a modern, high-performance static site. Below is a list of features that this site makes use of.

### MDX Blog

[gatsby-plugin-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/) makes it easy to create a blog using MDX files as posts, and supports most remark plugins for additional features.

### Open Graph Data

Sharing links are populated with rich open graph data built from page titles and descriptions, along with open graph images genereated on-demand using [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation). Information about this site's deployment for open graph image generation can be found [here](https://github.com/vondenstein/og).

### Compliant XML Sitemap

[gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/) generates an XML sitemap based on page information. According to Google, the most important field in the sitemap is the `lastmod` field. In [gatsby-node.ts](./gatsby-node.ts), we generate the information required to populate the `lastmod` field using [simple-git](https://github.com/steveukx/git-js), along with data for the `priority` and `changefreq` fields, even though these may not be used by Google crawlers.

### Responsive Images

[gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/) is used to display blurred placeholder while lazily loading images, and generating multiple image sizes for different displays.

### Vercel Headers

The `vercel.json` file was added to customize the response headers, such as:

- `cache-control` headers set according to [gatsby guidance](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/caching/)
- `Strict-Transport-Security` headers for [HSTS Preload](https://hstspreload.org) functionality
- Security headers such as `X-XSS-Protection`, `X-Frame-Options` etc.

### Font Preloading

Fonts are hosted with the site and preloaded in [gatsby-ssr.tsx](./gatsby-ssr.tsx) to increase performance.

### Reading Time Estimates

Reading time estimates are generated for each blog post using the [reading-time](https://github.com/ngryman/reading-time) package in [gatsby-node.ts](./gatsby-node.ts).

### GitHub Integration

GitHub profile data is made available on the `/code` page using [gatsby-source-graphql](https://www.gatsbyjs.com/plugins/gatsby-source-graphql/) to access the GitHub GraphQL API.

## 📝 License

Feel free to review the code and reuse what you feel is appropriate. However, please respect that the files in the following directories are © Stephen Vondenstein. As they contain copyrighted photos and posts, you **may not** reuse anything therein without my written permission:

- blog/
- src/images/

All other directories and files are [MIT Licensed](LICENSE) (where applicable).

NOTE: I would love it if this code inspires your own portfolio, helps you solve a problem or implement a feature, but I would greatly appreciate if you did not make exact clones of this site.
