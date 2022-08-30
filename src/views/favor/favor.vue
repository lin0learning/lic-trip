<template>
  <div class="favor" ref="favorRef">
    <h2>favor</h2>
    <template v-for="item in 100">
      <div>{{ item }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useScroll from '@/hooks/useScroll';

const favorRef = ref()
const { scrollTop } = useScroll(favorRef)
</script>

<style scoped lang="less">
.favor {
  height: 300px;
  background-color: #efefef;
  overflow-y: auto;
}
</style>