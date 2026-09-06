import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from 'node:url'

// Vite 8 bundles with rolldown — the standalone @rollup/plugin-* packages are
// not compatible with it and crash the build, so the config stays minimal and
// lets Vite handle CJS interop, resolution, asset imports and minification.

function src(path: string) {
  return fileURLToPath(new URL(`./src/${path}`, import.meta.url))
}

export default defineConfig({
    base: "/portfolio-v3/",
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@': src(''),
            '@assets': src('assets'),
            '@components': src('components'),
            '@ui': src('components/ui'),
            '@svg': src('components/svg'),
            '@shared': src('components/shared'),
            '@layout': src('components/layout'),
            '@config': src('config'),
            '@enum': src('enum'),
            '@hooks': src('hooks'),
            '@languages': src('languages'),
            '@libs': src('libs'),
            '@styles': src('styles'),
            '@data': src('data'),
        },
    },
    plugins: [react(), tailwindcss()],
    build: {
        sourcemap: "hidden",
        chunkSizeWarningLimit: 800,
    },
});
