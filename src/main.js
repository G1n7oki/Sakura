import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import './styles/element-variables.scss'
import 'normalize.css/normalize.css'
import './styles/index.scss'
import './assets/font/iconfont.css'

Vue.use(Element, {
  size: 'small' // 设置元素-ui默认大小
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
