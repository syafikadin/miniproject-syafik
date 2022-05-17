import Vue from 'vue'
import VueRouter from 'vue-router'
import ListCars from '../views/admin/ListCars.vue'
import index from '../views/index.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import DetailMobil from '../views/DetailMobil'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin/listCars',
    name: 'listcars',
    component: ListCars
  },
  {
    path: '/admin/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/detailMobil/:id',
    name: 'detailMobil',
    component: DetailMobil
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
