import Vue from 'vue'
import VueRouter from 'vue-router'

import LayoutAuth from '@/layouts/Auth'
import LayoutDefault from '@/layouts/Default';

import Home from '@/views/Home'
import Post from '@/views/Post'
import Manager from '@/views/Manager'
import Diary from '@/views/Diary'
// import Profile from '@/views/Profile';


Vue.use(VueRouter)

const routes = [
  {
    path: '/painel', component: LayoutDefault,
    children: [
      { path: '', name: 'index', component: Home },
      // { path: 'perfil', name: 'profile', component: Profile },
    ],
  },

  {
    path: '/painel/noticias', component: LayoutDefault,
    children: [
      { path: '', name: 'post', component: Post },
      // { path: 'perfil', name: 'profile', component: Profile },
    ],
  },

  {
    path: '/painel/diarios', component: LayoutDefault,
    children: [
      { path: '', name: 'diary', component: Diary },
      // { path: 'perfil', name: 'profile', component: Profile },
    ],
  },

  {
    path: '/painel/cadastros', component: LayoutDefault,
    children: [
      { path: '', name: 'manager', component: Manager },
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
