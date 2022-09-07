<template>
  <div class="order-item-title">
    <div class="name ellipsis-text-1">{{ itemData.unitName }}</div>
    <div class="status" :style="{ color: itemData.orderStatusDescColor }">
        {{ itemData.orderStatusDesc }}
        <span class="sub-name">{{ itemData.cancelReasonDesc }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        default: () => {},
    }
})
</script>

<style scoped lang="less">
.order-item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    .name {
        max-width: 204px;
        font-size: 12px;
        color: #333;
        line-height: 12px;
    }
    .status {
        font-size: 18px;
        color: var(--primary-color)
    }
}
</style>