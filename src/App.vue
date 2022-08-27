<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component" />
      </keep-alive>
    </router-view>
    <tabbar v-show="!route.meta.hideTabBar"/>
    <loading />
  </div>
</template>

<script setup>
  import Tabbar from './components/tab_bar/tabbar.vue';
  import loading from './components/loading/loading.vue';

  import { useRoute } from 'vue-router';
  const route = useRoute()
  // v-show="!route.meta.hideTabBar"
</script>

<style scoped lang="less">

</style>