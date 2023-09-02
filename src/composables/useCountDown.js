import { computed, onMounted, onUnmounted, ref } from "vue"
import dayjs from 'dayjs'

export const useCountDown = ()=>{
  const timeId = ref(null)
  //响应式数据
  const time = ref(0)
  //格式化数据
  const formatTime = computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
  //开启倒计时
  const start = (currentTime)=>{
    time.value = currentTime
    timeId.value = setInterval(() => {
      time.value--
    }, 1000);
  }
  onUnmounted(()=>{
    clearInterval(timeId.value)
  })
  return {
    formatTime,
    start
  }
}