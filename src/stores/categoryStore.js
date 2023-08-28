import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore('caregor',()=>{
  const categoryList = ref([]);

  //定义异步action
  const getCategory = async()=>{
    const {data} = await getCategoryAPI()
    categoryList.value = data.result;
  }

  return {
    categoryList,
    getCategory
  }
})