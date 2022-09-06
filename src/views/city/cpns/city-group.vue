<template>
  <div class="city-group">
      <van-index-bar :index-list="navlist">
        <van-index-anchor index="热门" />
        <div class="top">
          <template  v-for="(city,index) in cityData.hotCities" :key="index">
            <div class="hot-city" @click="clickCity(city)">{{city.cityName}}</div>
          </template>
        </div>
        <template v-for="(group, index) in cityData.cities" :key="index">
            <van-index-anchor :index="group.group" />
            <template v-for="(city, indey) in group.cities" :key="indey">
              <van-cell :title="city.cityName" @click="clickCity(city)"/>
            </template>
        </template>
      </van-index-bar>
  </div>
</template>

<script setup>
  import useCityStore from "@/stores/modules/city";
  import { computed } from "vue";
  import { useRouter } from "vue-router";

  // 定义props，进行组件通信
  const props = defineProps({
    cityData: {
      type: Object,
      default: ({})
    }
  })

  // 动态索引下划
  const navlist = computed(() => {
    const list = props.cityData.cities.map(item => item.group)
    list.unshift("#")
    return list
  })

  //监听城市点击并返回主界面
  const router = useRouter()
  const cityStore = useCityStore()
  const clickCity = (city) => {
    // 选中当前城市
    cityStore.currentCity = city
    // 返回主界面
    router.back()
  }
</script>

<style scoped lang="less">
  .top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
    &::after {
      content: "";
      flex: auto;
    }
    .hot-city {
      width: 60px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: #fff4ec;
      margin-bottom: 10px;
      border-radius: 14px;
    }
  }
</style>