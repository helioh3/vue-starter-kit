import Vue from 'vue'
import VueRouter from 'vue-router'

import LayoutAuth from '@/layouts/Auth'
import LayoutDefault from '@/layouts/Default';


import Home from '@/views/Home'
import Profile from '@/views/Profile';


Vue.use(VueRouter)

const routes = [
  {
    path: '/painel', component: LayoutDefault,
    children: [
      { path: '', name: 'index', component: Home },
      { path: 'perfil', name: 'profile', component: Profile },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router