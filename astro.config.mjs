import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { gitLastmod } from './src/utils/git-lastmod.ts';
import rehypeImageCaptions from './src/plugins/rehype-image-captions.ts';

export default defineConfig({
  site: 'https://vondenstein.com',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;

        // Priority: 1.0 for homepage, subtract 0.1 per depth level
        if (path === '/') {
          item.priority = 1.0;
        } else {
          const depth = path.replace(/\/$/, '').split('/').length - 1;
          item.priority = Math.max(0, 1.0 - depth * 0.1);
        }

        // Changefreq
        if (path === '/blog' || path === '/photos') {
          item.changefreq = 'daily';
        } else if (path.startsWith('/blog/') || path.startsWith('/photos/')) {
          item.changefreq = 'monthly';
        } else {
          item.changefreq = 'weekly';
        }

        // Lastmod from git history
        let filePath;
        if (path === '/') {
          filePath = 'src/pages/index.astro';
        } else if (path.startsWith('/blog/') && path !== '/blog') {
          const slug = path.replace('/blog/', '');
          filePath = `content/blog/${slug}/index.mdx`;
        } else if (path.startsWith('/photos/') && path !== '/photos') {
          const slug = path.replace('/photos/', '');
          filePath = `content/photos/${slug}/index.mdx`;
        } else {
          const page = path.replace(/^\//, '');
          filePath = `src/pages/${page}.astro`;
        }
        const lastmod = gitLastmod(filePath);
        if (lastmod) {
          item.lastmod = lastmod;
        }

        return item;
      },
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeImageCaptions],
    shikiConfig: {
      theme: 'tokyo-night',
    },
  },
});
