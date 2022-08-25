<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in homeContent" :key="item.data.houseId">
        <home-content-9 v-if="item.discoveryContentType === 9"  :item-data="item.data" @click="enterDetailPage(item.data)" />
        <home-content-3 v-else-if="item.discoveryContentType === 3" :item-data="item.data" @click="enterDetailPage(item.data)" />
      </template>
    </div>
  </div>
</template>

<script setup>
import homeContent3 from '@/components/home/home-content-3.vue';
import homeContent9 from '@/components/home/home-content-9.vue';
import { useRouter } from 'vue-router';
import { useHomeStore } from '@/stores/modules/home';
import { storeToRefs } from 'pinia';


const homeStore = useHomeStore()
const { homeContent } = storeToRefs(homeStore)

const router = useRouter()
// 点击跳转detail页面
const enterDetailPage = (item) => {
  router.push("/detail/" + item.houseId)
}
</script>

<style scoped lang="less">
.content {
  padding: 10px 8px;
  background-color: #f8f5fc;

  .title {
    font-size: 22px;
    padding: 10px;
    padding-top: 0;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>