import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/tmp-vite1/',
  build: {
    // Prevent small assets being inlined as base64
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'main2/index.html'),
      },
    },
  },
})
