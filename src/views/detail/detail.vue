<template>
  <div class="detail">
    <!-- 1. 导航栏NavBar -->
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 2. 各个组件划分 -->
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics.slice(0,20)" />
      <detail-intros :infos="mainPart.topModule" />
      <detail-facility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord :land-lord="mainPart.dynamicModule.landlordModule"/>
      <detail-comment :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <detail-map :position="mainPart.dynamicModule.positionModule" />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">Lic-trip | for learning</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getDetails } from '@/service/index'

import detailSwipe from './cpns/detail_01-swipe.vue'
import detailIntros from './cpns/detail_02-intros.vue'
import detailFacility from './cpns/detail_03-facility.vue'
import detailLandlord from './cpns/detail_04-landlord.vue'
import detailComment from './cpns/detail_05-comment.vue'
import detailNotice from './cpns/detail_06-notice.vue'
import detailMap from './cpns/detail_07-map.vue'
import detailIntro from './cpns/detail_08-intro.vue'


const route = useRoute()
const router = useRouter()
const houseId = route.params.id

// 监听返回按钮
const onClickLeft = () => {
    router.back()
}

// 发送网络请求并获取数据
const detailInfos = ref({})
// 拆解数据
const mainPart = computed(() => detailInfos.value.mainPart)
getDetails(houseId).then(res => {
    detailInfos.value = res.data
})

</script>

<style scoped lang="less">
.detail {
  padding-bottom: 50px;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>