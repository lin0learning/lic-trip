<template>
  <div class="search-box">
    <!-- 1. 位置信息 -->
    <div class="location">
      <div class="city" @click="chooseCity">{{ cityStore.currentCity.cityName }}</div>
      <div class="position" @click="clickPosition">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
    <!-- 2. 入住信息 -->
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{startDateStr}}</span>
        </div>
        <div class="stay">共 {{stayCount}} 晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{endDateStr}}</span>
        </div>
      </div>
    </div>
    <!-- 日历组件 -->
    <van-calendar v-model:show="showCalendar" 
                  :show-confirm="false" 
                  :round="false" 
                  type="range" 
                  @confirm="onConfirm" 
                  color="#ff9854"/>
    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="section bottom-gray-line keywords">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item" :style="{color: item.tagText.color, background: item.tagText.background.color}">
          {{item.tagText.text}}
        </div>
      </template>
    </div>
    <!-- 搜索 -->
    <div class="search">
      <div class="search-btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import useCityStore from '@/stores/modules/city';
  import { formatMonthDay, getDiffDays } from '@/utils/formate_data'
  import { useHomeStore }  from '@/stores/modules/home'
  import useMainStore from '@/stores/modules/main'
  import { storeToRefs } from 'pinia';
  

  const cityStore = useCityStore()
  // 点击城市跳转城市city页面
  const router = useRouter()
  const chooseCity = () => {
    router.push("/city")
  }
  // 点击我的位置获取定位(该功能暂时未完善/VPN可用该API)
  const clickPosition = () => {
    navigator.geolocation.getCurrentPosition(res => {
      console.log("获取位置成功, ", res)
    }, err => {
      console.log("获取位置失败, ", err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }
  // 日期格式处理
  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
  // const nowDate = new Date()
  // const newDate = new Date()
  // newDate.setDate(nowDate.getDate() + 1)

  // 使用ref无法使其具有响应性  因其自定义函数依赖于store中value，最好使用computed使其具有响应性
  const startDateStr = computed(() => formatMonthDay(startDate.value))
  const endDateStr = computed(() => formatMonthDay(endDate.value))
  const stayCount = computed(() => getDiffDays(startDate.value, endDate.value))
  // 日期选择(Vant组件)
  const showCalendar = ref(false)
  const onConfirm = (dates) => {
    const selectStartDate = dates[0]
    const selectEndDate = dates[1]
    // 直接赋值 不推荐
    mainStore.startDate = selectStartDate
    mainStore.endDate = selectEndDate
    // action 调用函数
    // mainStore.changeDate(selectStartDate, selectEndDate)  
    // stayCount.value = getDiffDays(selectStartDate, selectEndDate)

    // 隐藏日历
    showCalendar.value = false
  }

  // 热门建议
  const homeStore = useHomeStore()

  // 发送请求在home.vue 父组件中
  const { hotSuggests } = storeToRefs(homeStore)

  // 搜索页面跳转
  const searchBtnClick = () => {
    router.push("/search")
  }
</script>

<style scoped lang="less">
.search-box {
  --van-calendar-popup-height: 100%;
}
.location {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  font-size: 16px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }
  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      color: #666;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 38px;
  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    font-size: 12px;
    min-width: 30%;
    padding-left: 20px;
  }
  .date {
    display: flex;
    flex-direction: column;
    .tip {
      font-size: 12px;
      color: #999;
    }
    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
.date-range {
  border-bottom: 1px solid var(--line-color);
  .start {
    flex: 1;
    display: flex;
    align-items: center;
    .stay {
      display: flex;
      flex: 1;
      justify-content: center;
    }
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 4px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
.search {
  .search-btn{
    display: flex;
    justify-content: center;
    width: calc(100% - 40px);
    height: 38px;
    max-height: 50px;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    line-height: 38px;
    background-image: linear-gradient(90deg, #e9a170, #f79b5e);
    margin-left: 20px;
    border-radius: 24px;
}
}
</style>