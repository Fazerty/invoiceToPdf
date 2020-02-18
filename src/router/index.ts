import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Invoices from '../views/Invoices.vue'
import BackgroundReport from '../views/BackgroundReport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/invoices',
    name: 'Invoices',
    component: Invoices
  },
  {
    path: '/backgroundReport',
    name: 'BackgroundReport',
    component: BackgroundReport
  }
]

const router = new VueRouter({
  routes
})

export default router
