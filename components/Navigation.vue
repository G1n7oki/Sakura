<template>
  <div class="container">
    <div :class="{ 'active': flag.nav === true }" class="nav-area">
      <div class="name">
        万事屋<span>银</span>ちゃん
      </div>
      <ul class="nav">
        <li class="item">
          <i class="iconfont icon-fortawesome icon" />
          <span>首页</span>
          <div class="border" />
        </li>
        <li class="item">
          <i class="iconfont icon-archive icon" />
          <span>归档</span>
          <div class="border" />
        </li>
        <li class="item">
          <i class="iconfont icon-qingdan icon" />
          <span>清单</span>
          <div class="border" />
        </li>
        <li class="item">
          <i class="iconfont icon-liuyan icon" />
          <span>留言板</span>
          <div class="border" />
        </li>
        <li class="item">
          <i class="iconfont icon-lianjie icon" />
          <span>友人帐</span>
          <div class="border" />
        </li>
        <li class="item">
          <i class="iconfont icon-yezi icon" />
          <span>关于</span>
          <div class="border" />
        </li>
      </ul>
      <div class="operation">
        <nuxt-link to="/search">
          <i class="iconfont icon-sousuofangdajing icon" />
        </nuxt-link>
        <nuxt-link to="/login">
          <i class="iconfont icon-yonghu icon" />
        </nuxt-link>
      </div>
    </div>
    <transition name="translate">
      <div v-if="flag.top" class="return-area" @click="handleTop" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      flag: {
        nav: false,
        top: false
      },
      top: 0,
      timer: null,
      delay: 20,
      speed: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    handleScroll () {
      this.flag.nav = document.documentElement.scrollTop > 0
      this.flag.top = document.documentElement.scrollTop > 75
    },
    handleTop () {
      this.timer = setInterval(() => {
        this.top = document.documentElement.scrollTop
        this.speed = this.top / 10
        document.documentElement.scrollTop = this.top - this.speed
        if (this.top === 0) {
          clearInterval(this.timer)
        }
      }, this.delay)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/nav.scss";
</style>
