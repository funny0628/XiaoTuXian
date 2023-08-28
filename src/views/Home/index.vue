<script setup>
import HomeBannerVue from "./components/HomeBanner.vue";
import HomeCategoryVue from "./components/HomeCategory.vue";
import HomeHotVue from "./components/HomeHot.vue";
import HomeNewVue from "./components/HomeNew.vue";
import HomeProductVue from "./components/HomeProduct.vue";
</script>

<template>
  <div class="container">
    <HomeCategoryVue/>
    <HomeBannerVue/>
  </div>
  <HomeHotVue/>
  <HomeNewVue/>
  <HomeProductVue/>
</template>

<style scoped>
</style>`