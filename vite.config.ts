import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: false,
        ecma: 2015,
      },
      output: {
        comments: true,
      },
    },
  },
});
