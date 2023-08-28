<script setup>
import { useScroll } from '@vueuse/core'
const { y } = useScroll(window)

//使用pinia中的数据
import { useCategoryStore } from '@/stores/categoryStore';
const categoryStore = useCategoryStore();
</script>

<template>
  <header class='app-header' :class="{show:y>78}">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li v-for="(item,index) in categoryStore.categoryList" :key="item.id"> <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink> </li>
        <li class="home">
          <RouterLink to="/">|</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/">品牌</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/">专题</RouterLink>
        </li>
      </ul>
      
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  width: 100%;
  height: 132px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 1000px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
  
    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
  
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
  
        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
  
      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
}
</style>