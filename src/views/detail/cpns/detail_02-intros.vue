<template>
  <div class="intro">
    <div class="title">{{infos.houseName}}</div>
    <div class="houseTags">
      <template v-for="(item,index) in infos.houseTags" :key="index">
        <span 
          class="item"
          v-if="item.tagText"
          :style="{color: item.tagText.color, background: item.tagText.background.color}">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="overall">{{ infos.commentBrief.overall }}</span>
        <span class="scoreTitle">{{ infos.commentBrief.scoreTitle }}</span>
        <span class="brief">"{{ infos.commentBrief.commentBrief }}"</span>
      </div>
      <div class="right">
        {{ infos.commentBrief.totalCount }}条评论
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="location extra">
      <div class="left" >
        {{infos.nearByPosition.address}}
      </div>
      <div class="right">
        地图·周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  infos: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
.extra {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  background-color: #f2f3f4;
  border-radius: 5px;
  .right {
    padding-right: 10px;
    font-size: 12px;
    color: var(--primary-color);
  }
}
.intro {
  padding: 10px 10px;
  .title {
    font-size: 19px;
    font-weight: 700;
  }
  .houseTags {
    padding: 5px 0;
    .item {
      font-size: 10px;
      margin-right: 5px;
    }
  }
  .comment {

    .left {
      padding-left: 10px;

      .overall {
        font-size: 18px;
        font-weight: 700;
        padding-right: 5px;
      }
      .scoreTitle {
        font-weight: 700;
        padding-right: 2px;
      }
    }
  }
  .location {
    margin-top: 8px;
    .left {
      font-weight: 700;
      padding-left: 10px;
    }
  }
}
</style>