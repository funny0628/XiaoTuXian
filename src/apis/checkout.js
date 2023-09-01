import httpInstance from "@/utils/http";

//获取订单详情
export const getCheckInfoAPI = ()=>{
  return httpInstance({
    url:'/member/order/pre',
  })
}

export const createOrderAPI = ()=>{
  return httpInstance({
    
  })
}

//添加地址
export const addAddressAPI = (data)=>{
  return httpInstance({
    url:'/member/address',
    method:'post',
    data
  })
}