// @ts-check
import { defineConfig } from 'astro/config';

// Served as a GitHub Pages *project* site (ojdh.github.io/camping-2026-jul/),
// not a user site, so it needs an explicit base path.
export default defineConfig({
  site: 'https://ojdh.github.io',
  base: '/camping-2026-jul/',
});
