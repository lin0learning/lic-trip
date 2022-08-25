<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarURL" :key="index">
        <div class="tab-bar-item" @click="clickBar(item, index)" :to="item.path">
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)">
            <img v-else :src="getAssetURL(item.imageActive)">
            <span class="text">{{item.text}}</span>
        </div>
    </template>
  </div>
</template>

<script setup>
    import tabbarURL from '../assets/data/tabbar.js'
    import { getAssetURL } from '../utils/load_assets'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const currentIndex = ref(0)
    const clickBar = (item, index) => {
        currentIndex.value = index;
        router.push(item.path)
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