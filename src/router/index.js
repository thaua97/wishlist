import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumbs: [
        { name: 'Home'},
      ]
    }
  },
  {
    path: '/lista-de-desejos',
    name: 'Wishlist',
    component: () => import('@/views/Wishlist'),
    meta: {
      breadcrumbs: [
        { name: 'Home', link: 'Home'},
        { name: 'Lista de desejos',},
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
