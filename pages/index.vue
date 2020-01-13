<template>
  <div class="container">
    <div class="screen">
      <img class="background" src="http://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d009b3de9c82d15808f0b01c880a19d8bc3e4229.jpg" alt="">
      <div class="dot" />
      <Water />
    </div>
  </div>
</template>

<script>
import Water from '@/components/Water'
export default {
  name: 'Home',
  components: {
    Water
  },
  data () {
    return {
      image: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/home.scss";
</style>
