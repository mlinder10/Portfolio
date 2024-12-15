import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser", // Switch from esbuild to terser if esbuild causes issues
    terserOptions: {
      compress: {
        drop_console: false, // Prevent console logs from being stripped (if needed)
        ecma: 2015, // Use appropriate ECMAScript target
      },
      output: {
        comments: true, // Keep comments in the output for debugging
      },
    },
  },
});
