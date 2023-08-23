import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    //实例的路径转换实在这里的 @ - src实际路径
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
