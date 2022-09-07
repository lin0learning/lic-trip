<template>
  <div class="order-item-info">
        <img :src="itemData.unitPicture" class="img-cover">
        <div class="bottom-info">
            <div class="b-left">
                <div class="data">
                    <div class="month-day">{{ getFormDate(itemData.checkInDate) }}</div>
                    <div class="day-time">
                        <span class="week">{{getFormDate(itemData.checkInDate, true)}}</span>
                        <span class="hour">{{itemData.checkInLatestTime}}</span>
                    </div>
                </div>
                <img src="@/assets/img/order/icon_right_orderlist.png" class="icon">
                <div class="data">
                    <div class="month-day">{{getFormDate(itemData.checkOutDate)}}</div>
                    <div class="day-time">
                        <span class="week">{{ getFormDate(itemData.checkOutDate, true) }}</span>
                        <span class="hour">{{itemData.checkOutLatestTime}}</span>
                    </div>
                </div>
            </div>
            <div class="b-right">
                <div class="total">支付总价</div>
                <div class="price">¥ {{ itemData.prepayAmount }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    itemData: {
        type: Object,
        default: {}
    }
})

// 日期格式化
const getFormDate = computed(() => {
    return (dataString, isTrue = false) => {
        let date = new Date(dataString);
        if (isTrue) {
            return "周" + "日一二三四五六".charAt(date.getDay())
        }
        return `${date.getMonth() + 1}月${date.getDate()}日`
    }
})
</script>

<style scoped lang="less">
.order-item-info {
        position: relative;
        height: 223px;
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
        .bottom-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 70px;
            background: rgba(9, 10, 14, 0.7);
            border-radius: 0 0 6px 6px; // 顺时针
            .b-left {
                flex: 1;
                display: flex;
                align-items: center;
                color: #fff;
                .data {
                    padding: 0 20px;
                    .month-day {
                        font-size: 16px;
                    }
                    .day-time {
                        font-size: 14px;
                        transform: scale(0.9);
                        opacity: 0.8;
                    }
                }
                .icon {
                    width: 15px;
                    height: 100%;
                }
            }
            .b-right {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 105px;
                &::before {
                    content: "";
                    position: absolute;
                    left: -18px;
                    width: 1px;
                    height: 40px;
                    background-color: white;
                }
                .total {
                    transform: scale(0.9);
                    color: #fff;
                    opacity: 0.8;
                }
                .price {
                    font-size: 16px;
                    color: var(--primary-color);
                    margin-top: 2px;
                }

            }
        }
    }
</style>