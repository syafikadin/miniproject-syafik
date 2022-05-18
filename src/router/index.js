import Vue from 'vue'
import VueRouter from 'vue-router'
import ListCars from '../views/admin/ListCars.vue'
import index from '../views/index.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import DetailMobil from '../views/DetailMobil'
import FormTransaksi from '../views/FormTransaksi'
import ConfirmPayment from '../views/ConfirmPayment'
import tespage from '../views/tespage'
import InTransaction from '../views/admin/InTransaction'
import TransactionHistory from '../views/admin/TransactionHistory'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
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
  {
    path: '/formTransaksi/:id',
    name: 'formTransaksi',
    component: FormTransaksi
  },
  {
    path: '/confirmPayment/:id',
    name: 'confirmpayment',
    component: ConfirmPayment
  },
  {
    path: '/tespage',
    name: 'tespage',
    component: tespage
  },
  {
    path: '/admin/inTransaction',
    name: 'intransaction',
    component: InTransaction
  },
  {
    path: '/admin/transactionHistory',
    name: 'transactionhistory',
    component: TransactionHistory
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
