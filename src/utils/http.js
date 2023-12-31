import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'


const httpInstance = axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000,

})

 // 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
  const userStore = useUserStore();
  const token = userStore.userInfo.token;
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
httpInstance.interceptors.response.use(response => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, error => {
  const userStore = useUserStore();
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  //统一的错误处理
  ElMessage({
    type:'warning',
    message:error.response.data.msg
  })
  //401 token失效处理
  //1.清除本地的user数据
  //2.跳转到登录页面
  if(error.response.status === 401){
    userStore.clearUserInfor();
    router.push('/login')
  }
  return Promise.reject(error);
})


export default httpInstance