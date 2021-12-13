import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard'),
      meta: { title: '首页' }
    }]
  },
  {
    path: '/regular',
    component: Layout,
    redirect: '/regular/index',
    children: [{
      path: 'index',
      name: 'Regular',
      component: () => import('@/views/regular'),
      meta: { title: '正则方法' }
    }]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
