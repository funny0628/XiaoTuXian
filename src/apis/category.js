import httpInstance from "@/utils/http";
export const getCategoryAPI = (id)=>{
  return httpInstance({
    url:'/category',
    params:{
      id
    }
  })
}

/**
 * 获取二级分类列表数据
 */
export const getCategoryFilterAPI = (id)=>{
  return httpInstance({
    url:'category/sub/filter',
    params:{
      id
    }
  })
}
/**
 * 获取导航数据
 * data:{
 *  categoryId:100500,
 *  page:1,
 *  pageSize:20,
 * sortField:'publishTime' | 'orderNum' | 'evaluateNum'
 * }
 */
export const getSubCategoryAPI = (data)=>{
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}