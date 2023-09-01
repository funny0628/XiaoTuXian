import httpInstance from "@/utils/http";

export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}