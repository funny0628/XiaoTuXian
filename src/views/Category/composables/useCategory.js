//分类数据相关代码
import { ref,onMounted,watch } from "vue";
import { getCategoryAPI } from "@/apis/category.js";
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

export function useCategory(){
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id)=>{
    const res = await getCategoryAPI(id);
    categoryData.value = res.data.result
    
  }
  onMounted(()=>{
    getCategory()
  })
  onBeforeRouteUpdate((to,from)=>{
    console.log('变化了',to,from);
    getCategory(to.params.id)
  })
  //1.侦听器检测二级分类切换了更新数据
  // watch(
  //   ()=>route.params.id,
  //   (newValue,oldValue)=>{
  //     getCategory()
  //     console.log('name值改变了')
  //   },
  //   {
  //     immediate:true
  //   }
  // );

  return {
    categoryData
  }
}