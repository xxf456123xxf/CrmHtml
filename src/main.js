// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import install from './common/install'
import 'element-ui/lib/theme-chalk/index.css'
import './css/index.css'
Vue.config.devtools = true
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */

window.vueLoad = function (vueConfig) {
  window.vueConfig = vueConfig || {}
  Vue.use(install)

  window.vm = new Vue({
    el: '#app',

    router,
    components: { App },
    template: '<App/>'
  })
}
