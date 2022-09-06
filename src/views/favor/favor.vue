<template>
  <div class="favor" ref="favorRef">
    <nav-bar left-text="旅途">
      <template #title>
        <van-tabs v-model:active="active" type="card" color="#ff9854">
          <van-tab v-for="item in titles" :title="item"></van-tab>
        </van-tabs>
      </template>
    </nav-bar>
    <!-- 我的收藏 -->
    <div v-show="active === 0">
      <van-tabs v-model:active="activeName">
        <van-tab title="房屋" name="house">
          <div class="content">
            <template v-for="item in favorList" :key="item.productId">
              <item-list :item-data="item"></item-list>
            </template>
          </div>
        </van-tab>
        <van-tab title="房东" name="landlord">
          <favor-landlord />
        </van-tab>
      </van-tabs>
    </div>
    <!-- 浏览历史 -->
    <div v-show="active === 1">
      <div class="content">
        <template v-for="item in historyList" :key="item.productId">
          <item-list :item-data="item"></item-list>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import useFavorStore from '@/stores/modules/favor'
import useHistoryStore from '@/stores/modules/history';
import navBar from '@/components/nav-bar/nav-bar.vue';
import FavorLandlord from './cpns/favor-landlord.vue';
import itemList from '@/components/favor-list/index.vue'

const active = ref(0)
const titles = ["我的收藏","浏览历史"]
const activeName = ref("house")


const favorStore = useFavorStore()
const historyStore = useHistoryStore()

// 网络请求
if (!localStorage.getItem('favor')) {
  favorStore.getFavorData()
}
if (!localStorage.getItem('history')) {
  historyStore.getHistoryData()
}
// 取得房屋数据
const { favorList } = storeToRefs(favorStore)
const { historyList } = storeToRefs(historyStore)

</script>

<style scoped lang="less">
.content {
  padding: 10px 20px 55px 20px;
  background-color: #f7f8fb;
}
</style>