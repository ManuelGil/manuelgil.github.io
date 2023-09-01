import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://manuelgil.me',
  base: '/',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt({
      host: 'manuelgil.me',
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 10,
        },
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 10,
        },
      ],
    }),
  ],
});
