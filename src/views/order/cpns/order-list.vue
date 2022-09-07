<template>
  <div class="order-list">
    <order-list-title :item-data="getTitleData"></order-list-title>
    <order-list-info :item-data="getInfoData"></order-list-info>
    <order-list-btn :item-data="getFooterBtnData"></order-list-btn>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue"
import orderListTitle from "./order-list-title.vue";
import orderListInfo from "./order-list-info.vue"
import orderListBtn from "./order-list-btn.vue"

const orderData = ref({})
const props = defineProps({
    itemData:{
        type: Object,
        default: () => {},
    }
})
watch(
    () => props.itemData,
    (newValue, oldValue) => {
        orderData.value = newValue
    },
    {
        immediate: true
    }
)

const getTitleData = computed(() => {
    let data = props.itemData;
    return {
        unitName: data.unitName,
        orderStatusDesc: data.orderStatusDesc,
        cancelReasonDesc: data.cancelReasonDesc,
        // orderStatus: data.orderStatus, // 1 待支付  0 取消
        orderStatusDescColor: data.orderStatusDescColor,
    }
})
const getInfoData = computed(() => {
    let data = props.itemData;
    return {
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        checkInLatestTime: data.checkInLatestTime,
        checkOutLatestTime: data.checkOutLatestTime,
        prepayAmount: data.prepayAmount,
        unitPicture: data.unitPicture,
    }
})
const getFooterBtnData = computed(() => {
  let data = props.itemData;
  return {
    countdown: data.countdown, // 剩余支付时间(秒数)
    orderStatusDesc: data.orderStatusDesc,
    orderStatus: data.orderStatus, // 1 待支付  5 取消
    summary: data.summary
  };
});
</script>

<style scoped lang="less">
.order-list {
    padding: 0 20px;
    margin-top: 10px;
    background-color: white;
    border-radius: 6px;
}
</style>