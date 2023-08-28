<script setup>
import HomeBannerVue from "./components/HomeBanner.vue";
import HomeCategoryVue from "./components/HomeCategory.vue";
import HomeHotVue from "./components/HomeHot.vue";
import HomeNewVue from "./components/HomeNew.vue";
import HomeProductVue from "./components/HomeProduct.vue";

import HomePaneltVue from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategoryVue/>
    <HomeBannerVue/>
  </div>
  <HomeNewVue/>
  <HomeHotVue/>
  <HomeProductVue/>
  <!-- <HomePaneltVue title="新鲜好物" subTitle="新鲜好物 好多商品">
    <div>新鲜毫无的内容</div>
  </HomePaneltVue>
  <HomePaneltVue title="人气推荐" subTitle="人气推荐 好多商品">
    <div>人气推荐的内容</div>
  </HomePaneltVue> -->
</template>

<style scoped>
</style>`