<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader />
      </el-header>
      <el-main>
        <CommonTag />
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'

export default {
  name: 'MainPage',
  components: { CommonAside, CommonHeader, CommonTag }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: pink;
}
.el-main {
  padding-top: 0;
}
</style>
