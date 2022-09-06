<template>
    <div class="content">
        <!-- <div v-if="landlordList.length" class="list"></div> -->
        <div class="no-data">
            <img src="@/assets/img/favor/empty_favorite.44731802.png" class="img-no-data">
            <div class="title">暂无收藏</div>
            <div class="supply">
                点击
                <img src="@/assets/img/favor/favor.png">
                即可收藏对应房东信息
            </div>
            <button class="btnGo" @click="btnGoClick">随便去逛逛</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const btnGoClick = () => {
  router.push('/')
}
</script>

<style scoped lang="less">
.no-data {
    display: flex;
    flex-direction: column;
    align-items: center;

    .img-no-data {
        width: 100%;
    }

    .title {
        font-size: 18px;
        margin-bottom: 10px;
        color: #333;
    }

    .supply {
        color: #666;

        img {
            width: 14px;
        }
    }

    .btnGo {
        padding: 0 38px;
        height: 40px;
        line-height: 40px;
        margin-top: 40px;
        font-size: 16px;
        color: #fff;
        background-color: var(--primary-color);
        border-radius: 20px;
        border: none;
    }
}
</style>