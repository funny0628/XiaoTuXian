// import './assets/main.css'
//引入初始化的样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'

//导入图片懒加载自定义插件
import { lazyPlugin } from './directives'


import App from './App.vue'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')
