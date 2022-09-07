<template>
  <div class="order">
    <nav-bar title="订单列表"></nav-bar>
    <van-tabs v-model:active="active" color="#ff9854" :line-height="2">
      <van-tab v-for="(item,index) in titles" :title="item"></van-tab>
    </van-tabs>

    <!-- 订单 -->
    <div class="content">
      <div v-if="orderList.length">
        <template v-for="item in orderList" :key="item.orderId">
          <order-list :item-data="item"></order-list>
        </template>
      </div>
      <div v-else="!orderList.length" class="tips">
        <img src="@/assets/img/order/icon-order.png" alt="" />
        <div class="title">近期暂无订单</div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { getOrderList } from '@/service';
import navBar from '@/components/nav-bar/nav-bar.vue';
import OrderList from './cpns/order-list.vue';

const active = ref(0)
const titles = ["全部订单","近期订单","待支付"];
const orderTitleType = ["all", "recent", "pend"];

const orderList = ref([])

//网络请求
getOrderList().then(res => {
  orderList.value = res.data.data.orders || [];
})
// 点击标签页请求对应数据
watch(active, (newValue, oldValue) => {
  if (newValue !== undefined) {
    getOrderList(orderTitleType[newValue]).then(res => {
      orderList.value = res.data.data.orders || []
    })
  }
})
</script>

<style scoped lang="less">
.order {
  padding-bottom: 60px;
  background-color: #f7f8fb;
  .content {
    height: calc(100% - 86px);
    overflow: scroll;

    .tips {
      text-align: center;
      margin-top: 80px;
      img {
        width: 88%;
      }

      .title {
        margin-top: 20px;
        color: #000;
        font-size: 18px;
      }
    }
  }
}
</style>