import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default (({mode}: { mode: string }) => {
	return defineConfig({
		// Development server configuration
		server: {
			port: 3000, // Specify the development server port
			open: true, // Automatically open the browser
		},
		// Build configuration
    base: "/portfolio-v3/",
		build: {
			rollupOptions: {
				// input: 'src/main.tsx',
				// Apply tree shaking to remove unused code
				treeshake: true,
				// Use the terser plugin to minify your JavaScript
				plugins: [
					// Add the Terser plugin for minification
					terser({
						compress: true,
						ecma: 2015,
						safari10: true,
						sourceMap: true,
					}),
					resolve(),
					commonjs(),
					image(),
					nodeResolve(),
				],
				// Output configuration
				output: {
					dir: "dist",
					chunkFileNames: "chunks/[hash].js",
					assetFileNames: "assets/[hash][extname]",
					format: "es",
					// Set the entry file name
					entryFileNames: "[hash].js",
				},
			},
			sourcemap: "hidden",
			minify: mode === "production", // Minify the code in production mode
			chunkSizeWarningLimit: 500, // Adjust the chunk size warning limit as needed
			cssMinify: mode === "production", // Enable CSS minification in production mode
			dynamicImportVarsOptions: {
				include: ["*.css", "*.less", "*.sass", "*.scss"],
				exclude: ["node_modules"],
			},
			manifest: true, // Generate manifest.json file
		},
		plugins: [react()],
	});
});