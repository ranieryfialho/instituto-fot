import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.jsx'),
    },
  },
})