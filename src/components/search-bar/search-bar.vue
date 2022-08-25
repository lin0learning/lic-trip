<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="data">{{startDateStr}}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="data">{{endDateStr}}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';
import { formatMonthDay } from '@/utils/formate_data';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore()
const {startDate, endDate} = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
</script>

<style scoped lang="less">
.search {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 45px;
  line-height: 45px;
  padding: 0 10px ;
  font-size: 14px;
  color: #999;

  border-radius: 6px;
  background: #f2f4f6;

  .select-time {
    display: flex;
    flex-direction: column;
    
    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: normal;
      font-size: 10px;
      line-height: 1.2;

      .name {
        font-size: 10px;
      }

      .data {
        position: relative;
        color: #333;
        font-weight: 500;
        margin: 0 10px 0 3px;
      }
    }
    .end .data::after {
        content: " ";
        width: 0;
        height: 0;
        border: 4px solid;
        border-color:transparent transparent transparent #666;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        bottom: 0;
        right: -12px;
    }
  }
  .content {
    position: relative;
    flex: 1;
    padding: 0 6px;
    border-left: 1px solid #fff;
    
    .keyword {
      max-width: 155px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    padding-right: 10px;

    .icon-search {
      display: inline-block;
      background: url('@/assets/img/home/home-sprite.png') no-repeat -31px -153px;
      background-size: 207px 192px;
      width: 24px;
      height: 24px;
    }
  }
}
</style>