<template>
  <div 
    class="loading"
    v-show="mainStore.isLoading"
    @click="offLoading"
    >
    <div class="loading-img">
      <img src="@/assets/img/home/full-screen-loading.gif">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';

const mainStore = useMainStore()
const offLoading = () => {
    mainStore.isLoading = false
}
</script>

<style scoped lang="less">
.loading {
  position: fixed;
  z-index: 999;
  top:0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .2);

  .loading-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 107px;
    height: 107px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>