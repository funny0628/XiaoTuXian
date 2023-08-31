import { loginAPI } from "@/apis/login";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useUserStore = defineStore('user',()=>{
  //定义管理用户的数据
  const userInfo = ref({})
  //定义获取接口的数据action函数
  const getUserInfo = async ({account,password})=>{
    const res = await loginAPI({account,password})
    userInfo.value = res.data.result;
  }
  //退出登录
  const clearUserInfor = ()=>{
    userInfo.value = {}
  }
  //以对象的形式将数据return出去
  return {
    userInfo,
    getUserInfo,
    clearUserInfor
  }
},
{
  persist: true,
}
)