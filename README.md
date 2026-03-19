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
  Fast, modern portfolio and blog powered by Astro
</h3>
<p align="center">
  This site makes use of the GitHub GraphQL API for loading the repository list and information, an MDX-based blog, and Astro to create a clean, full-featured personal portfolio.
</p>
<p align="center">
  <a href="https://astro.build">
    <img src="https://img.shields.io/static/v1?label=%20&style=flat&logo=Astro&message=Created%20with%20Astro&color=181452" />
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/static/v1?label=%20&style=flat&logo=Vercel&logoColor=white&message=Deployed%20on%20Vercel&color=000000">
  </a>
</p>

<h3 align="center">
  <a href="https://vondenstein.com/">Live Site</a>
</h3>

## ❓ About This Project

This site is my personal space On The Line. I showcase my projects, share life experiences, and shed light on things I find interesting - whether it be new photos I've taken, or a helpful new tool I've found. My written content is personal in nature and does not necessarily reflect the views of my employer, university, or anyone I've collaborated with on projects and products.

## 💡 Features

This site is built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com). Below is an incomplete list of features that this site makes use of.

- **MDX blog & photo log** - Written content and photography are both powered by MDX via Astro's content collections, with support for image captions, reading time estimates, and code highlighting via [Shiki](https://shiki.style)
- **GitHub integration** - Pinned repositories and profile data are pulled from the GitHub GraphQL API at build time and displayed on the `/code` page.
- **Open Graph data** - Sharing links are populated with rich open graph data built from page titles and descriptions, along with open graph images genereated on-demand using [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation). Information about this site's deployment for open graph image generation can be found [here](https://github.com/vondenstein/og).
- **XML sitemap** - [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) generates an XML sitemap for each page. According to Google, the most important field in the sitemap is the `lastmod` field - so we populate it using git commit dates, along with calculated `priority` and `changefreq` values, even though these may not be used by Google crawlers.
- **Responsive images** - Astro's built-in image pipeline generates optimized, multi-density srcsets so that different displays are served appropriately sized images.
- **Security & caching headers** - The [vercel.json](./vercel.json) file customizes response headers, including `Strict-Transport-Security` for [HSTS Preload](https://hstspreload.org) functionality, security headers such as `X-XSS-Protection` and `X-Frame-Options`, and aggressive `cache-control` headers for static assets.
- **Self-hosted fonts** - Fonts are hosted with the site and preloaded to increase performance.

## 📝 License

All code is [MIT Licensed](LICENSE) (where applicable), so feel free to reuse what you find helpful. However, the files in `content/`, `src/images/`, and `public/icons/icon-*` are © Stephen Vondenstein - as they contain copyrighted photos and posts, you **may not** reuse anything therein without my written permission.

I would love it if this code inspires your own portfolio, helps you solve a problem or implement a feature, but I would greatly appreciate if you did not make exact clones of this site.
