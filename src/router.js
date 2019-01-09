import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top'
import Guideline from './views/Guideline'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/guideline',
      name: 'guideline',
      component: Guideline
    }
  ]
})
