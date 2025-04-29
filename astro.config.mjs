import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';


export default defineConfig({
    base: '/',
    output: 'static',
    adapter: vercel(),
    integrations: [react()],
    build: {
        format: 'directory', 
    },
    

});