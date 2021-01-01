import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstTerm from '../views/firstTerm/FirstTerm.vue'
import SecondTerm from '../views/secondTerm/SecondTerm.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/firstTerm',
    name: 'FirstTerm',
    component: FirstTerm
  },
  {
    path: '/secondTerm',
    name: 'SecondTerm',
    component: SecondTerm
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
