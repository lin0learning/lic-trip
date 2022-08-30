<template>
  <div class="search">
    <van-search 
      v-model="searchValue" 
      shape="round" 
      placeholder="请输入关键词" 
      input-align="center" 
      show-action
      @cancel="returnHome" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const searchValue = ref('')
const router = useRouter()
const returnHome = () => {
  router.back()
}
</script>

<style scoped lang="less">
.search {
  padding: 10px;
}
</style>