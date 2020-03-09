<template>
  <div class="container">
    <div :class="{ 'active': flag.nav === true }" class="nav-area">
      <div class="name">
        万事屋<span>银</span>ちゃん
      </div>
      <ul class="nav">
        <li class="item">
          <nuxt-link to="/">
            <i class="iconfont icon-fortawesome home" />
            <span>首页</span>
            <div class="border" />
          </nuxt-link>
        </li>
        <li class="item archive">
          <nuxt-link to="/archive">
            <i class="iconfont icon-archive" />
            <span>归档</span>
            <div class="border" />
          </nuxt-link>
        </li>
        <li class="item list">
          <nuxt-link to="/list">
            <i class="iconfont icon-qingdan" />
            <span>清单</span>
            <div class="border" />
          </nuxt-link>
        </li>
        <li class="item message">
          <nuxt-link to="/message">
            <i class="iconfont icon-liuyan" />
            <span>留言板</span>
            <div class="border" />
          </nuxt-link>
        </li>
        <li class="item friend">
          <nuxt-link to="/friend">
            <i class="iconfont icon-lianjie" />
            <span>友人帐</span>
            <div class="border" />
          </nuxt-link>
        </li>
        <li class="item about">
          <nuxt-link to="/about">
            <i class="iconfont icon-yezi" />
            <span>关于</span>
            <div class="border" />
          </nuxt-link>
        </li>
      </ul>
      <div class="operation">
        <nuxt-link to="/search">
          <i class="iconfont icon-sousuo" />
        </nuxt-link>
        <nuxt-link to="/login">
          <i class="iconfont icon-yonghu" />
        </nuxt-link>
      </div>
    </div>
    <transition name="translate">
      <div v-if="flag.top" @click="handleTop" class="return-area" />
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
      speed: 0,
      once: true
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
      if (this.once) {
        this.once = false
        this.timer = setInterval(() => {
          this.top = document.documentElement.scrollTop
          this.speed = this.top / 10
          document.documentElement.scrollTop = this.top - this.speed
          if (this.top === 0) {
            clearInterval(this.timer)
            this.once = true
          }
        }, this.delay)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/nav.scss";
</style>
