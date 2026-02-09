import { defineConfig } from "astro/config";
import path from "node:path";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",

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

  adapter: node({
    mode: "standalone",
  }),
});