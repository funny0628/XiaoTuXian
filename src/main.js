// import './assets/main.css'
//引入初始化的样式文件
import '@/styles/comon.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'

import App from './App.vue'

//测试接口函数
import { getCategory } from './apis/testAPI'
getCategory().then(res=>{
  console.log(res,'res---');
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
