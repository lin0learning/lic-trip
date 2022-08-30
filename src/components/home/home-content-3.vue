<template>
  <div class="house-item">
    <div class="item">
      <img :src="itemData.image.url" class="cover">
      <div class="infos">
      <div class="reagion">
          <img src="@/assets/img/home/location.png" class="location">
          <span class="text">{{itemData.location}}</span>
      </div>
      <div class="name">{{itemData.houseName}}</div>
      <div class="summary">{{itemData.summaryText}}</div>
      <div class="price">
          <span class="final-price">¥ {{itemData.finalPrice}}</span>
          <span class="origin-price">¥ {{itemData.productPrice}}</span>
          <span class="discount">已减¥{{Number(itemData.productPrice-itemData.finalPrice)}}</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

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
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    margin: 5px;
    .cover {
      width: 100%;
    }
    .infos {
      margin: 5px;
      .reagion {
        display: flex;
        margin-top: 5px;
        height: 14px;
        .location {
          width: 12px;
        }
        .text {
          color: #666;
          font-size: 12px;
          line-height: 14px;
          margin-left: 2px;
        }
      }
      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #333;
      }
      .summary {
        font-size: 12px;
        color: #666;
        margin-bottom: 2px;
      }
      .price {
        .final-price {
          color: #ff9854;
          margin-right: 2px;
        }
        .origin-price {
          font-size: 10px;
          text-decoration: line-through;
          color: #666;
        }
        .discount {
          background-color: #e7a2a1;
          border-radius: 8px;
          padding: 0 5px;
          font-size: 12px;
          color: #fff;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>