import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import goodlist from '@/pages/goodlist/goodlist'
import news from '@/pages/news/news'
import shoplist from '@/pages/shoplist/shoplist'
import coupon from '@/pages/coupon/coupon'
import details from '@/pages/details/details'
import seek from '@/pages/seek/seek'

Vue.use(Router)

export default new Router({
  routes: [
     {
       path: '/',
       redirect: '/home'
     },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      component: shoplist
    },
    {
      path: '/goodlist',
      name: 'goodlist',
      component: goodlist
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/seek',
      name: 'seek',
      component: seek
    }
  ]
})
