<template>
  <div class="dashboard">
    <el-image :src="image.background" class="dashboard-background" />
    <div class="dashboard-dot" />
    <Water />
  </div>
</template>

<script>
import Water from '@/components/Water'
export default {
  name: 'Dashboard',
  components: { Water },
  data() {
    return {
      image: {
        background: require('@/assets/image/background.jpg')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-background {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  &-dot {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: url("~@/assets/image/dot.gif") 0 0 repeat;
  }
}
</style>
