import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'public/doctors/*', dest: 'doctors' },
        { src: 'public/gallery/*', dest: 'gallery' },
        { src: 'public/testimonials/*', dest: 'testimonials' },
        { src: 'public/logo.jpg', dest: '' },
        { src: 'public/img-paciente.JPG', dest: ''},
        { src: 'public/ATENDIMENTO-DR-FELIPE-E-DR-ROBERTO.png', dest: ''}
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'build',
    // Nomes de ficheiro fixos, igual ao projeto da gráfica
    rollupOptions: {
      output: {
        entryFileNames: `assets/fot-script.js`,
        assetFileNames: `assets/fot-style.css`,
      },
    },
  },
})