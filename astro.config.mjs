
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://affilirator.github.io/blog-691438bb-3rd-website-test-for-pages/',
  integrations: [tailwind()],
  build: {
    format: 'directory'
  }
});
