<template>
  <div class="search">
    <div @click="handleClose" class="close">
      <i class="iconfont icon-guanbi icon" />
    </div>
    <div class="inner">
      <p>
        大佬你想找什么呢 ...
      </p>
      <div class="input">
        <i class="iconfont icon-sousuofangdajing icon" />
        <input type="text" placeholder="Search">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    handleClose () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/search";
</style>
