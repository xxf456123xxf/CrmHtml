import Vue from 'vue'
import Router from 'vue-router'
import demo from './map/newDemo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component (resolve) {
      require(['@/components/HelloWorld'], resolve)
    }
  },
  ...demo
  ]
})
