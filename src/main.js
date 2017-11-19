import 'babel-polyfill' //es6补丁
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import fastclick from 'fastclick' //解决点击事件延迟
import VueLazyload from 'vue-lazyload' //图片懒加载
import ElementUI from 'element-ui' //
import 'common/stylus/index.styl'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
