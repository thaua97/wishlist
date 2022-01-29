import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home'
import Products from '@/views/Products'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Products,
    meta: {
      breadcrumbs: [
        { name: 'Home'},
      ]
    }
  },
  {
    path: '/lista-de-desejos',
    name: 'Wishlist',
    component: Products,
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
