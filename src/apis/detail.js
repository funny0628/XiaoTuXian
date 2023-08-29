import httpInstance from "@/utils/http"
export const getDetail = (id)=>{
  return httpInstance ({
    url:'/goods',
    params:{
      id
    }
  })
}

/**
 * 
 * @returns 获取热门商品
 * id:商品id
 * type:1->24小时热销榜 2->周热销榜
 * limit:获取个数
 */
export const getHotGoodsAPI = ({id,type,limit = 3})=>{
  return httpInstance({
    url:'/goods/hot',
    params:{
      id,
      type,
      limit
    }
  })
}