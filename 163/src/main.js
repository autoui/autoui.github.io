// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import IScrollView from 'vue-iscroll-view'

/* Using these kinds of IScroll class for different cases. */
// import IScroll from 'iscroll'
// import IScroll from 'iscroll/build/iscroll-infinite.js
import IScroll from 'iscroll/build/iscroll-probe.js'
// import IScroll from 'iscroll/build/iscroll-view.js
// import IScroll from 'iscroll/build/iscroll-zoom.js
// import IScroll from 'iscroll/build/iscroll-lite.js
import { swiper, swiperSlide } from 'vue-awesome-swiper'

Vue.use(IScrollView, IScroll)

Vue.use(swiper, swiperSlide)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
