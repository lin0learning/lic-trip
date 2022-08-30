<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarURL" :key="index">
        <div class="tab-bar-item">
            <img :src="(item.image)">
            <span class="text">{{item.text}}</span>
        </div>
    </template>
    <!-- <div class="tab-bar-item">
        <img src="@/assets/img/tabbar/tab_home.png">
        <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
        <img src="@/assets/img/tabbar/tab_home.png">
        <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
        <img src="@assets/img/tabbar/tab_home.png">
        <span class="text">订单</span>
    </div>
    <div class="tab-bar-item">
        <img src="@/assets/img/tabbar/tab_home.png">
        <span class="text">消息</span>
    </div> -->
  </div>
</template>

<script setup>
    tabbarURL = [
        {
            text: "首页",
            image: "tabbar/tab_home.png",
            path: "/home"
        },
        {
            text: "收藏",
            image: "tabbar/tab_favor.png",
            path: "/favor"
        },
        {
            text: "订单",
            image: "tabbar/tab_order.png",
            path: "/order"
        },
        {
            text: "消息",
            image: "tabbar/tab_message.png",
            path: "/message"
        },
    ]
    const getAssetURL = (image) => {
        return new URL(`../assets/img/${image}`, import.meta.url)
    }
</script>

<style scoped lang="less">
    .tab-bar {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: flex;
        border-top: 1px solid #efefef;
        .tab-bar-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        img {
            width: 36px;
        }
        .text {
            font-size: 12px;
            margin-top: 2px;
        }
    }
</style>