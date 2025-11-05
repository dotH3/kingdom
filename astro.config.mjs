import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dotH3.github.io',
  base: '/kingdom',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
