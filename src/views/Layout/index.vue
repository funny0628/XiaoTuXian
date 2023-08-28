<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue';

//使用功pinia中的数据,在公共父组件中统一发一次请求
import { useCategoryStore } from '@/stores/categoryStore';
import { onMounted } from 'vue';
const categoryStore = useCategoryStore()
onMounted(()=>{
  categoryStore.getCategory()
})

</script>

<template>
  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader/>
  <!-- 破坏分类二级页面的复用机制,强制的销毁重建 -->
  <!-- 问题:会导致分类二级页面中的所有的请求都重新发送,资源浪费 -->
  <!-- <router-view :key="$route.fullPath"></router-view> -->
  <router-view></router-view>
  <LayoutFooter/>
</template>

<style scoped lang="scss">
</style>