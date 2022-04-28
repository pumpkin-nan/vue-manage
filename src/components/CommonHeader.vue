<template>
  <header>
    <div class="l-context">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="handleMenu"
      ></el-button>
      <!-- <h3>首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-context">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader',
  data() {
    return {
      userImg: require('../assets/image/kuluomi.jpg')
    }
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    }
  },
  computed: {
    ...mapState({
      tags: (state) => {
        return state.Tab.tabsList
      }
    })
  }
}
</script>

<style scoped>
h3 {
  color: #fff;
  font-size: 15px;
  margin-left: 10px;
}
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-context {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
