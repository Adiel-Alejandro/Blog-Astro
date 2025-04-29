// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
    base: '/',
    output: 'static',
    adapter: vercel(),
    integrations: [react()],
    build: {
        format: 'directory', // 👈 Esto es la clave
  },
});