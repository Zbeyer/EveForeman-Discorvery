import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Account/Register'
import Login from '@/components/Account/Login'
import Root from '@/components/Root'
import ScrapSheet from '@/components/Mining/ScrapSheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/scrapSheet',
      name: 'scrapSheet',
      component: ScrapSheet
    }
  ]
})
