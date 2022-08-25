<template>
  <div class="comments">
    <detail-section title="热门评论">
        <div class="topScroll">
            <div class="left">
                <div class="score">
                    <span class="text">{{ comment.overall }}</span>
                    <div class="line"></div>
                </div>
                <div class="extra">
                    <div class="title">{{ comment.scoreTitle }}</div>
                    <div class="commentNum">{{ comment.totalCount }}条评论</div>
                    <van-rate v-model="starValue"  readonly allow-half :size="14" color="#ff9854" />
                </div>
            </div>
            <div class="right">
                <template v-for="(item, index) in comment.subScores" :key="index">
                    <div class="item1">{{ item }}</div>
                </template>
            </div>
        </div>
        <div class="tags">
            <template v-for="(item, index) in comment.commentTagVo" :key="index">
                <div class="item2">{{ item.text }}</div>
            </template>
        </div>
        <div class="commentPart">
            <div class="user">
                <div class="avator"><img :src="comment.comment.userAvatars"></div>
                <div class="infos">
                    <div class="userName">{{ comment.comment.userName }}</div>
                    <div class="inDate">{{ comment.comment.checkInDate }}</div>
                </div>
            </div>
            <div class="comment">{{ comment.comment.commentDetail }}</div>
        </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue'
import { ref } from 'vue';

const starValue = ref(props.comment.overall)
const props = defineProps({
    comment: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style scoped lang="less">
.topScroll {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
        display: flex;
        align-items: center;
        .score {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 65px;
            position: relative;
            .text {
                position: relative;
                z-index: 9;
                font-size: 48px;
                font-weight: 700;
                font-family: Arial, Helvetica, sans-serif;
            }
            .line {
                position: absolute;
                width: 66px;
                height: 6px;
                background: linear-gradient(90deg, #fa8c1d, #eba134);
                border-radius: 5px;
                top: 42px;
            }
        }
        .extra {
            margin-left: 10px;
            .title {
                font-weight: 600;
            }
            .commentNum {
                color: #666;
                font-size: 14px;
            }
        }
    }
    .right {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        justify-content: flex-end;
        .item1 {
            margin-left: 4px;
            font-size: 12px;
            color: #666;
        }
    }
}
.tags {
    display: flex;
    flex-wrap: wrap;
    .item2 {
        padding: 2px 5px;
        margin: 5px 8px 0 0;
        font-size: 12px;
        color: #444;
        background-color: #f2f3f4;
        border-radius: 8px;
    }
}
.commentPart {
    background-color: #f7f9fb;
    .user {
        display: flex;
        padding: 10px 0;
        .avator {
            margin: 0 10px;
            overflow: hidden;
            img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
        }
        .infos {
            .userName {
                font-weight: 600;
            }
            .inDate {
                font-size: 12px;
                color: #666;
            }
        }
    }
    .comment {
        padding: 0 10px;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        color: #666;
    }
}
</style>