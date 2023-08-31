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