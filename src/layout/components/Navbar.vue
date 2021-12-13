<template>
  <div class="app-navbar">
    <div class="app-navbar-name">
      万事屋<span>银</span>ちゃん
    </div>
    <el-menu
      mode="horizontal"
      :default-active="activeMenu"
      active-text-color="#FD9A0D"
      router
    >
      <el-menu-item index="/dashboard">
        <template slot="title">
          <i class="el-icon-s-home" />
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/regular/index">
        <template slot="title">
          <i class="iconfont el-icon-regularExpression-o" style="margin-right: 5px" />
          <span>正则</span>
        </template>
      </el-menu-item>
      <el-menu-item index="3">
        <template slot="title">
          <i class="el-icon-question" />
          <span>占位</span>
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <template slot="title">
          <i class="el-icon-question" />
          <span>占位</span>
        </template>
      </el-menu-item>
      <el-menu-item index="5">
        <template slot="title">
          <i class="el-icon-question" />
          <span>占位</span>
        </template>
      </el-menu-item>
      <el-menu-item index="6">
        <template slot="title">
          <i class="el-icon-info" />
          <span>关于</span>
        </template>
      </el-menu-item>
    </el-menu>
    <div>暂时不知道写什么, 占位用</div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      activeMenu: null
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.activeMenu = route.path
      }
    },
    immediate: true
  },
  created() {
    this.activeMenu = this.$route.path
  }
}
</script>

<style lang="scss" scoped>
.app-navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  &-name {
    font-size: 25px;
    color: #464646;
    cursor: pointer;
    span {
      font-size: 30px;
    }
    &:hover {
      color: #FD9A0D;
    }
  }
}
</style>
