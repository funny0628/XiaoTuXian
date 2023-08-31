
//通过插件的方式将component中的所有组件进行全局注册
import ImageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'
import HeaderCart from '@/views/Layout/components/HeaderCart.vue'


export const componentPlugin = {
  install(app){
    app.component('XtxImageView',ImageView)
    app.component('XtxSku',Sku)
    app.component('XtxHeaderCart',HeaderCart)
  }
}