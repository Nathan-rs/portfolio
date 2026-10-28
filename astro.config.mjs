// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true,
        port: 4321
    },

    markdown: {
        shikiConfig: {
            themes: {
                light: 'one-light',
                dark: 'github-dark',
            },
            defaultColor: false,
        }
    }
});
