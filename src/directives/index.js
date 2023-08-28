//vueUse检测元素是否出现在视口中
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin =  {
  install: (app) => {
    // 在这里编写插件代码
    app.directive('img-lazy', {
      /**
       * 
       * @param {*} el:指令绑定的那个元素 img
       * @param {*} binding:binding.value 指令等于后面绑定的表达式的值 图片的url
       */
      mounted(el,binding){
        //useIntersectionObserver的监听是一直存在的,再不需要的时候要手动清除才可以解决内存浪费问题
      const {stop} = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if(isIntersecting){
              //进入视口区域
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}