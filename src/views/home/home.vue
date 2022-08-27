<template>
  <div class="home" ref="homeRef">
    <home-banner/>
    <home-search-box  />
    <home-categories />
    <home-content />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar />
    </div>
  </div>
  
</template>

<script>
  export default { name: "home" }
</script>

<script setup>
import { watch, computed, ref, onActivated } from 'vue'
import homeBanner from './cpns/home-banner.vue'
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import searchBar from '@/components/search-bar/search-bar.vue';
import { useHomeStore } from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll';

//  调用发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategories()
homeStore.fetchHomeRoomsData()
//
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newVal) => {
  if (newVal) {
    homeStore.fetchHomeRoomsData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框下拉显示控制
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})

// 跳转home主页时，保留上次滚动位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>

<style scoped lang="less">
  .home {
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
    margin-bottom: 50px;
    

    .search-bar {
      position: fixed;
      z-index: 9;
      top: 0;
      width: 100%;
      height: 45px;
      padding: 16px 16px 10px;
      background-color: #fff;
    }
  }
  
</style>