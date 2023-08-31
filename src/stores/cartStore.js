import { defineStore } from "pinia";
import { ref,computed } from "vue";
import { useUserStore } from "./userStore";
import { addCartAPI,getCartListAPI } from "@/apis/cart";

export const useCartStore = defineStore('cart',()=>{
  const cartList = ref([]);

  //计算属性-商品个数
  const allCount = computed(()=>cartList.value.reduce((prev,item)=> prev + item.count,0))
  //计算属性-所有商品价格
  const allPrice = computed(()=>cartList.value.reduce((prev,item)=> prev + (item.count * (+item.price)),0))
  //计算属性-是否全部选中
  const isAll = computed(()=>cartList.value.every((item)=>item.selected))
  //计算属性-已选中商品的个数
  const selectedCount = computed(()=>cartList.value.filter(item=>item.selected).reduce((prev,item)=> prev + item.count,0)) 
   //计算属性-已选中商品价钱总数
  const selectedPrice = computed(()=>cartList.value.filter(item=>item.selected).reduce((prev,item)=> prev + (item.count * (+item.price)),0)) 

  //计算属性-是否登录状态
  const isLogin = computed(()=>useUserStore.userInfo.token)

  //添加购物车函数
  const addCart = async (goods)=>{
    if(isLogin){
      await addCartAPI({skuId:goods.skuId,count:goods.count})
      const res = await getCartListAPI();
      cartList.value = res.data.result;
    }else{
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
  }
  //删除购物车数据
  const delCart = (skuId)=>{
    cartList.value = cartList.value.filter(item=>item.skuId !== skuId)
  }
  //单选控制购物车商品
  const singleCheck = (skuId, selected)=>{
    const item = cartList.value.find(item=>item.skuId == skuId)
    item.selected = selected
    //开关思想-假设全部已经选中

  }
  //全选控制购物车商品选中状态
  const allCheck = (selected)=>{
    cartList.value.forEach((item)=>item.selected = selected )
  }
  return {
    cartList,
    allCount,
    allPrice,
    isAll,
    selectedCount,
    selectedPrice,
    addCart,
    delCart,
    singleCheck,
    allCheck
  }
},{
  persist: true,
})