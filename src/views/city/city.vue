<template>
  <div class="city">
    <div class="top">
        <!-- 1. 搜索框 -->
        <van-search v-model="searchValue" 
                    placeholder="城市/区域/位置" shape="round" 
                    show-action @cancel="cancelClick"/>
        <!-- 2. Tab切换 -->
        <van-tabs v-model:active="tabActive" line-height="2" color="#ff9854">
            <template v-for="(value, key, index) in allCities" :key="key">
                <van-tab :title="value.title" :name="key"></van-tab>
            </template>
        </van-tabs>
    </div>
    <div class="content">
        <template v-for="(value, key, index) in allCities" :key="key">
            <CityGroup v-show="tabActive === key" :city-data="value" />
        </template>
    </div>
  </div>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { storeToRefs } from 'pinia';
    import useCityStore from '@/stores/modules/city'
    import CityGroup from './cpns/city-group.vue';
 
    // 1. 搜索框功能
    const searchValue = ref("")
    const router = useRouter()
    // 点击取消回退页面
    const cancelClick = () => {
        router.back()
    }
    // 2. tab栏切换
    const tabActive = ref() //索引与name(key)绑定
    // 2.1 从Pinia中获取数据
    const cityStore = useCityStore()
    // 调用发送请求数据函数
    cityStore.fetchAllCitiesData()
    const { allCities } = storeToRefs(cityStore)
    // 选中标签后的数据
    // const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style scoped lang="less">
    .city {
        position: relative;
        background-color: #fff;
        z-index: 9;
        .top {
            position: relative;
            z-index: 9;
        }
        .content {
            height: calc(100vh - 98px);
            overflow-y: auto;
        }

    }
</style>