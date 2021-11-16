import Vue from 'vue'
import VueRouter from 'vue-router'

import LayoutAuth from '@/layouts/Auth'
import LayoutDefault from '@/layouts/Default';


import Home from '@/views/Home'
import Category from '@/views/Category'
import Secretary from '@/views/Secretary'

Vue.use(VueRouter)

const routes = [
  {
    path: '/painel', component: LayoutDefault,
    children: [
      { path: '', name: 'home', component: Home },
      // { path: 'perfil', name: 'profile', component: Profile },
    ],
  },
  {
    path: '/painel/categorias', component: LayoutDefault,
    children: [
      { path: '', name: 'category', component: Category },
      // { path: 'perfil', name: 'profile', component: Profile },
    ],
  },
  {
    path: '/painel/secretarias', component: LayoutDefault,
    children: [
      { path: '', name: 'secretary', component: Secretary },
      // { path: 'perfil', name: 'profile', component: Profile },
    ],
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
