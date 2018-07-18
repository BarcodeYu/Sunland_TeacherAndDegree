// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '../static/css/reset.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, Axios)
Vue.prototype.$axios = require('axios') // 挖坑！！！axios使用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios, // axios引用
  components: { App },
  template: '<App/>'
})
