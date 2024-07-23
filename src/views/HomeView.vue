<template>
  <div class="home">
    <router-link to="/data-lazy">数据懒加载场景</router-link> <br />
    <router-link to="/img-lazy">图片懒加载场景</router-link>
  </div>
</template>

<script>
import * as xlsx from 'xlsx'
import * as echats from 'echarts'

export default {
  name: 'HomeView',
  created() {
    console.log(xlsx)
    console.log(echats)
  }
}
</script>
<style lang="scss" scoped></style>
