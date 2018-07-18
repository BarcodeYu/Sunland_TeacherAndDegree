import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/Navigation/Navigation'
import Header from '@/components/Header/Header'
import Teacher from '@/components/Teacher/Teacher'
import Degree from '@/components/Degree/Degree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/Degree',
      name: 'Degree',
      component: Degree
    }
  ]
})
