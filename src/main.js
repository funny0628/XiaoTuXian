// import './assets/main.css'
//引入初始化的样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'

//vueUse检测元素是否出现在视口中
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'

const app = createApp(App)
app.directive('img-lazy', {
  /**
   * 
   * @param {*} el:指令绑定的那个元素 img
   * @param {*} binding:binding.value 指令等于后面绑定的表达式的值 图片的url
   */
  mounted(el,binding){
    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if(isIntersecting){
          //进入视口区域
          el.src = binding.value
        }
      },
    )
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
