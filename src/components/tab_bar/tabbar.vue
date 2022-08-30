<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
        <template v-for="(item, index) in tabbarURL" :key="index">
            <van-tabbar-item :to="item.path">
                <template #icon>
                    <img v-if="currentIndex != index" :src="getAssetURL(item.image)">
                    <img v-else :src="getAssetURL(item.imageActive)">
                </template>
                <span>{{item.text}}</span>
            </van-tabbar-item>
        </template>
    </van-tabbar>
  </div>
</template>

<script setup>
    import tabbarURL from '../../assets/data/tabbar.js'
    import { getAssetURL } from '../../utils/load_assets'
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute() // 默认为 "/", 即 "/home"
    const currentIndex = ref(0)
    watch(route, (newRoute) => {
        const index = tabbarURL.findIndex(item => item.path === newRoute.path)
        if (index === -1) return
        currentIndex.value = index
    })
</script>

<style scoped lang="less">
    .tab-bar {
        // 找到类, 对类中的属性进行重写
        // :deep(.class) 找到子组件的类, 使其生效
        :deep(--van-tabbar-item-font-size) {
            font-size: 14px;
        }
        img {
            height: 28px;
        }
    }
</style>