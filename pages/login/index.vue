<template>
  <div class="login">
    <div class="iconfont icon-yonghu icon" />
    <div class="input">
      <input type="text" placeholder="Name">
    </div>
    <div class="input">
      <input type="text" placeholder="Password">
    </div>
    <div class="input">
      <input type="button" value="登 入">
    </div>
    <!--<nuxt-link to="/register">
      同学你要注册吗？
    </nuxt-link>-->
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/login.scss";
</style>
