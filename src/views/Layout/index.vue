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
  <router-view></router-view>
  <LayoutFooter/>
</template>

<style scoped lang="scss">
</style>