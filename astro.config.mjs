// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://nathan-rs.github.io",
    base: "/portfolio",

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
