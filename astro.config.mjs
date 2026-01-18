import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: cloudflare({
		platformProxy: {
			experimental: { remoteBindings: true },
		},
	}),
	vite: {
		// customLogger: pino(),
		build: {
			minify: false,
		},
		resolve: {
			alias: {
				"@": path.resolve("./src"),
			},
		},
	},
});
