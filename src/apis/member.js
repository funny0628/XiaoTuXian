import httpInstance from "@/utils/http";

//猜你喜欢数据
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}

//我的订单
/**
 * params: {
    orderState:0,
    page:1,
    pageSize:2
  }
 */
export const getUserOrderAPI = (params) => {
  return httpInstance({
    url:'/member/order',
    method:'GET',
    params
  })
}