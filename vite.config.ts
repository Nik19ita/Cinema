import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/style/globals.scss";`,
      },
    },
  },
  plugins: [
    svgr(),
    react(),
    tsconfigPaths({
      projects: ["tsconfig.json"],
    }),
  ],
  base: "/cinema/",
});
