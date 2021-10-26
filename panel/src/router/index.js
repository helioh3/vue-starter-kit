import Vue from 'vue'
import VueRouter from 'vue-router'

import LayoutAuth from '@/layouts/Auth'
import LayoutDefault from '@/layouts/Default';
import Login from '@/views/Login'
import Register from '@/views/Register'
import VerifyEmail from '@/views/VerifyEmail'
import ForgotPassword from '@/views/ForgotPassword'
import ResetPassword from '@/views/ResetPassword'

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

  {
    path: '/painel/login', component: LayoutAuth,
    children: [
      { path: '', name: 'login', component: Login }
    ]
  },

  {
    path: '/painel/registro', component: LayoutAuth,
    children: [
      { path: '', name: 'register', component: Register }
    ]
  },

  {
    path: '/painel/verificar-email', component: LayoutAuth,
    children: [
      { path: '', name: 'verifyEmail', component: VerifyEmail }
    ]
  },
  {
    path: '/painel/esqueci-senha', component: LayoutAuth,
    children: [
      { path: '', name: 'forgotPassword', component: ForgotPassword }
    ]
  },

  {
    path: '/painel/recuperar-senha', component: LayoutAuth,
    children: [
      { path: '', name: 'resetPassword', component: ResetPassword }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
