import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/Settings').default
    },
    {
      path: '/journal',
      name: 'journal',
      component: require('@/components/Journal').default
    },
    {
      path: '/trading-page',
      name: 'trading-page',
      component: require('@/components/TradingPage').default
    }
  ]
})
