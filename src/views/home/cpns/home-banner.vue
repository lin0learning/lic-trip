<template>
  <div class="home-banner">
    <div class="title">弘源旅途</div>
  </div>
  <div class="cover">
    <img src="@/assets/img/home/banner.webp">
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
  .home-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-bottom: 1px solid #efefef;
    .title {
      color: var(--primary-color);
      font-size: 16px;
    }
  }
  .cover {
      img {
        width: 100%;
      }
    }
</style>