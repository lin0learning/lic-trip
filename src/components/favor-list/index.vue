<template>
    <div class="favor-list">
        <div class="favor-list-pics">
            <img :src="houseData.defaultPicture" class="banner">
            <div class="side-bar">
                <div class="avator">
                    <img :src="houseData.logoUrl">
                </div>
                <div class="heart">
                    <img src="@/assets/img/search/tj-mob-ui_unit-item_collected-new.png">
                </div>
                <div class="comments">
                    <img src="@/assets/img/search/tj-mob-ui_unit-item_comment-new.png">
                    <span>{{ houseData.commentBrief.totalCount }}</span>
                </div>
            </div>
            <div class="overall">
                <div class="tips">
                    <div class="score">{{ houseData.commentBrief.overall + "分"}}</div>
                    <div class="score-title">{{ houseData.commentBrief.scoreTitle }}</div>
                </div>
            </div>
        </div>
        <div class="infos">
            <div class="top">
                <van-tag color="#3f4954" text-color="#fff">{{houseData.address}}</van-tag>
                <span class="name">{{houseData.unitSummeries[0].text}}</span>
                <span class="desc">{{houseData.unitSummeries[1].text}}</span>
            </div>
            <div class="room-name">{{houseData.unitName}}</div>
            <div class="discount">
                <div class="tags">
                    <template v-for="(iten,index) in houseData.houseTags" :key="index">
                        <van-tag :color="iten.background.color" :text-color="iten.color">{{iten.text}}</van-tag>
                    </template>
                </div>

                <div class="price">
                    <span class="now-price">{{houseData.finalPrice}}</span>
                    <span class="old-price">¥{{houseData.productPrice}}</span>
                    <van-tag v-if="houseData.priceTipBadge" round color="rgb(251, 74, 74)" text-color="#fff">
                        <i class="icon-unit-sound"></i>
                        {{houseData.priceTipBadge.text}}
                    </van-tag>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed } from "vue"

const houseData = ref({})
const props = defineProps({
    itemData: {
        type: Object,
        default: {}
    }
})
watch(
    () => props.itemData, 
    (newValue, oldValue) => {
    houseData.value = newValue
    },
    {
        immediate: true
    }
);
</script>

<style scoped lang="less">
    .favor-list {
        .favor-list-pics {
    position: relative;
    img {
      width: 100%;
      border-radius: 8px;
    }
    .side-bar {
      position: absolute;
      right: 10px;
      top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .avator {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
      }
      .heart {
        margin-top: 10px;
        width: 30px;
        height: 30px;
      }
      .comments {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        img {
          width: 30px;
          height: 30px;
        }
        span {
          color: #fff;
          font-weight: 500;
        }
      }
    }
    .overall {
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 15px;
      .tips {
        position: relative;
        display: flex;
        align-items: center;
        width: 20%;
        height: 17px;
        line-height: 17px;
        border-radius: 10px;
        background-color: #efefef;
        padding-left: 6px;
        .score {
          font-size: 14px;
          transform: scale(0.8);
          transform-origin: 0 center;
          color: #333;
          font-weight: 700;
        }
        .score-title {
          position: absolute;
          right: 0;
          top: 1px;
          font-size: 10px;
          transform: scale(0.8);
          transform-origin: 0 center;
          color: #666;
        }
        .score-title::before {
          content: " ";
          left: -4px;
          top: 2px;
          position: absolute;
          height: 10px;
          width: 1px;
          background-color: #333;
        }
      }
    }
  }
  .infos {
    margin-top: 6px;
    margin-bottom: 10px;
    .top {
      display: flex;
      align-items: center;
      .name,
      .desc {
        font-size: 12px;
        white-space: nowrap;
        color: #666;
      }
      .name {
        position: relative;
        margin-left: 10px;
        margin-right: 10px;

        &::after {
          position: absolute;
          content: "";
          top: 45%;
          right: -25%;
          width: 2px;
          height: 2px;
          border-radius: 2px;
          background-color: #666;
        }
      }
    }
    .room-name {
      font-size: 18px;
      font-weight: 500;
      margin-top: 6px;
      margin-bottom: 6px;
    }
    .discount {
      .tags :deep(.van-tag) {
        margin-right: 6px;
      }
    }
    .price {
      margin-top: 6px;
      justify-content: center;
      .now-price {
        font-size: 20px;
        color: var(--primary-color);
        padding-right: 8px;
        padding-left: 1px;
        &::before {
          content: "¥";
          font-size: 14px;
          padding-right: 3px;
        }
      }
      .old-price {
        font-weight: 500;
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
        padding-right: 5px;
      }
      .icon-unit-sound {
        margin-right: 5px;
        display: inline-block;
        width: 10px;
        height: 10px;
        background-image: url(https://fe.tujiacdn.com/pwa/static/fevueui/images/unit-item-m/icon-unit-sound.png);
        background-size: 10px 10px;
        background-repeat: no-repeat;
        background-position: 50%;
      }
      .price :deep(.van-tag) {
        position: relative;
        font-size: 12px;
        transform: scale(0.9);
      }
    }
  }
    }
</style>