import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve=>require(['@/components'],resolve)
    },
     {
      path: '/introduction',
      name: ' introduction',
      component: resolve=>require(['@/components/introduction'],resolve)
    },
     {
      path: '/product',
      name: 'product',
      component: resolve=>require(['@/components/product'],resolve)
    },
     {
      path: '/connection',
      name: 'connection',
      component: resolve=>require(['@/components/connection'],resolve)
    },
  ]
})
