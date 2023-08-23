import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

//安装elementplus按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //安装elementplus按需引入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    //安装elementplus按需引入
    Components({
      //1.配置elementPlus采用sass样式配色系统
      resolvers: [ElementPlusResolver({importStyle:'sass'})],
    }),
  ],
  resolve: {
    //实例的路径转换实在这里的 @ - src实际路径
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        //2.自动导入定制化样式文件进行样式覆盖
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
  
  
})
