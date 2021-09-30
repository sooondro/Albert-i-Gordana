import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/auth/Signup.vue')
  },
  {
    path: '/apartments',
    name: 'apartments',
    component: () => import('../views/Apartments.vue')
  },
  {
    path: '/apartment:id',
    name: 'apartment',
    component: () => import('../views/Apartment.vue')
  },
  {
    path: '/novalja',
    name: 'novalja',
    component: () => import('../views/Novalja.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
