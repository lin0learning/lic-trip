<template>
  <div class="house-item">
    <div class="item">
        <img :src="itemData.image.url">
        <div class="infos">
        <div class="summary">{{itemData.summaryText}}</div>
        <div class="house-name">{{itemData.houseName}}</div>
        <div class="info-bottom">
            <van-rate :model-value="Number(itemData.commentScore)" readonly allow-half color="#fff" :size="15"/>
            <span class="price">¥ {{itemData.finalPrice}}</span>
        </div>
        </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style scoped lang="less">
.house-item {
  width: 50%;
  .item {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    .infos {
      position: absolute;
      bottom: 0;
      color: #fff;
      padding: 8px 10px;
      .summary {
        font-size: 12px;
      }
      .house-name {
        margin: 5px 0;
        overflow: hidden;
        // 字体溢出为 ...
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .info-bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        .price {
          font-size: 14px;
        }
      }
    }
  }
}
</style>