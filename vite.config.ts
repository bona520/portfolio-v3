import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// Vite 8 bundles with rolldown — the standalone @rollup/plugin-* packages are
// not compatible with it and crash the build, so the config stays minimal and
// lets Vite handle CJS interop, resolution, asset imports and minification.
export default defineConfig({
    base: "/portfolio-v3/",
    server: {
        port: 3000,
        open: true,
    },
    plugins: [react(), tailwindcss()],
    build: {
        sourcemap: "hidden",
        chunkSizeWarningLimit: 800,
    },
});
