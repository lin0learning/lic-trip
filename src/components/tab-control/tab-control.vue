<template>
  <div class="container">
    <template v-for="(item,index) in titles" :key="index">
        <div 
          class="box"
          @click="changeIndex(index)"
          :class="{active: this.currentIndex === index}"
        >
            <p>{{ item }}</p>
        </div>
    </template>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        changeIndex(index) {
            this.currentIndex = index
            this.$emit("cgIndex", index)
        }
    },
    props: {
        titles: {
            type: Array,
            default: () => ['demo']
        }
    }
}
</script>

<style scoped>
  * {
        padding: 0;
        margin: 0;
    }
    .container {
        display: flex;
        background-color: #fff;
    }
    .box {
        flex: 1;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .active {
        color: #ff9854;
        font-weight: 700;
        border-bottom: 1px solid #ff9854;
    }
</style>