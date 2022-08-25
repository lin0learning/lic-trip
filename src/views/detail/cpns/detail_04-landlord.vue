<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
        <div class="landlord-inner">
            <div class="topScroll">
                <img :src="landLord.topScroll">
            </div>
            <div class="lord-info">
                <div class="hotel-logo"><img :src="landLord.hotelLogo"></div>
                <div class="center">
                    <div class="name">{{ landLord.hotelName }}</div>
                    <div class="tags">
                        <template v-for="(item, index) in landLord.hotelTags" :key="index">
                            <span class="item">{{ item.tagText.text }}</span>
                            <span v-if="index !== landLord.hotelTags.length - 1" class="divider">|</span>
                        </template>
                    </div>
                </div>
                <div class="right">
                    <div class="contact">联系房东</div>
                </div>
            </div>
        </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue'

defineProps({
    landLord: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style scoped lang="less">
.landlord-inner {
    .topScroll {
        img {
            width: 100%;
        }
    }
    .lord-info {
        display: flex;
        margin-top: 10px;
        align-items: center;
        position: relative;
        .hotel-logo {
            img {
                width: 54px;
                height: 54px;
            }
        }
        .center {
            .name {
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 4px;
            }
            .tags {
                display: flex;
                font-size: 10px;
                align-items: center;
                color: #666;
                .divider {
                    margin: 0 4px;
                }
            }
        }
        .right {
            position: absolute;
            right: 10px;
            .contact {
                height: 24px;
                line-height: 24px;
                border-radius: 5px;
                padding: 0 12px;
                font-size: 12px;
                color: #fff;
                background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
            }
        }
    }
}
</style>