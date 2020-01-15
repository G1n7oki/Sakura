<template>
  <div class="container">
    <img :src="image.background" class="background" alt="">
    <div class="dot" />
    <div class="screen">
      <div class="info">
        <h1 class="say">
          HI, GINTOKI!
        </h1>
        <div class="contact">
          <div class="triangle" />
          <div class="text">
            <i class="iconfont icon-quotes-up-copy l" />
            <span>When work is a pleasure, life is joy! When work is duty, life is slavery.</span>
            <i class="iconfont icon-quotesUp-copy r" />
          </div>
          <div class="link">
            <a class="iconfont icon-github" href="https://github.com/G1n7oki/Sakura" />
            <a class="iconfont icon-zhihu" href="https://www.zhihu.com/people/uncle-drew-43-98/activities" />
            <a class="iconfont icon-cloud-music" href="https://music.163.com" />
            <a class="iconfont icon-tuite" href="https://www.twitter.com" />
            <a class="iconfont icon-email" href="https://mail.qq.com" />
          </div>
        </div>
      </div>
      <Water />
    </div>
    <div class="discovery">
      <div class="inner">
        <div class="title">
          <i class="iconfont icon-discovery" />
          <div class="name">
            Discovery
          </div>
        </div>
        <ul class="list">
          <li v-for="item in list" :key="item.id" class="item">
            <div v-if="item.id % 2 !== 0" class="foo">
              <div class="info">
                <div class="date">
                  <i class="iconfont icon-shijian" />
                  <span>发布于{{ item.date }}</span>
                </div>
                <div class="name">
                  {{ item.name }}
                </div>
                <p class="content">
                  {{ item.content }}
                </p>
                <nuxt-link to="/detail">
                  <i class="iconfont icon-sandian" />
                </nuxt-link>
              </div>
              <div class="image">
                <img :src="item.url" alt="">
              </div>
            </div>
            <div v-else class="foo">
              <div class="image">
                <img :src="item.url" alt="">
              </div>
              <div class="info">
                <div class="date">
                  <i class="iconfont icon-shijian" />
                  <span>发布于{{ item.date }}</span>
                </div>
                <div class="name">
                  {{ item.name }}
                </div>
                <p class="content">
                  {{ item.content }}
                </p>
                <nuxt-link to="/detail">
                  <i class="iconfont icon-sandian" />
                </nuxt-link>
              </div>
            </div>
          </li>
        </ul>
        <div class="more">
          Previous
        </div>
      </div>
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
      image: {
        background: require('@/assets/img/background.jpg')
      },
      list: [{
        id: 1,
        date: '2019-11-11',
        name: 'GraphQL 实现递归查询',
        content: '当我们需要用 GraphQL 查询多层套嵌的数据，比如像 WordPress 这样套嵌的评论信息时，通常的写法是： { posts(first: 100)通常的写法是： { posts(first: 100)通常的写法是： { posts(first: 100)',
        url: 'http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg'
      }, {
        id: 2,
        date: '2019-11-11',
        name: 'GraphQL 实现递归查询',
        content: '当我们需要用 GraphQL 查询多层套嵌的数据，比如像 WordPress 这样套嵌的评论信息时，通常的写法是： { posts(first: 100)通常的写法是： { posts(first: 100)通常的写法是： { posts(first: 100)',
        url: 'http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/home.scss";
</style>
