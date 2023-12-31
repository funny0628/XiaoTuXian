import httpInstance from "@/utils/http";

//添加购物车
export const addCartAPI = ({skuId,count})=>{
  return httpInstance({
    url:'/member/cart',
    method:'post',
    data:{
      skuId,
      count
    }
  })
}

//获取购物车列表
export const getCartListAPI = ()=>{
  return httpInstance({
    url:'/member/cart',
  })
}

//删除购物车数据
export const delCartAPI = (ids)=>{
  return httpInstance({
    url:'/member/cart',
    method:'DELETE',
    data:{
      ids
    }
  })
}

//合并购物车
export const mergeCartList = (data)=>{
  return httpInstance({
    url:'/member/cart/merge',
    method:'post',
    data
  })
}