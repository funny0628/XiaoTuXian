import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart',()=>{
  const cartList = ref([]);

  //添加购物车函数
  const addCart = (goods)=>{
    //拿到商品数据判断,该商品是否已经存在
    //1.存在,数量加1
    //2.不存在,就添加到购物车数据中
    const item = cartList.value.findLast((item)=>item.skuId == goods.skuId)
    if(item){
      item.count++
    }else{
      cartList.value.push(goods)
    }
  }
  //删除购物车数据
  const delCart = (skuId)=>{
    cartList.value = cartList.value.filter(item=>item.skuId !== skuId)
  }
  return {
    cartList,
    addCart,
    delCart
  }
},{
  persist: true,
})