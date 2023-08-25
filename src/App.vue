<script setup>
// import HelloWorld from './components/HelloWorld.vue'
//在jsconfig.json中的配置只是将路径转换了一个别名@,而将别名在转换为实际的路径其实是在vite.config.js文件中
// import HelloWorld from '@/components/HelloWorld.vue';
// import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
