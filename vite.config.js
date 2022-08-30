import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/Backpackertrail/" : "/",
  plugins: [vue(), WindiCSS(),],
  server: {
    proxy: {
      '/photos': {
        target: 'https://picsum.photos',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/photos/, '')
      },
    }
  }
})
