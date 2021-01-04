import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FirstTerm from '../views/firstTerm/FirstTerm.vue';
import SecondTerm from '../views/secondTerm/SecondTerm.vue';
import ThirdTerm from '../views/thirdTerm/ThirdTerm.vue';
import Documentation from '../views/Documentation.vue';
import ContactMe from '../views/ContactMe.vue';
import TestHome from '../views/tests/TestHome.vue';

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
  {
    path: '/thirdTerm',
    name: 'ThirdTerm',
    component: ThirdTerm
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactMe
  },
  {
    path: '/testHome',
    name: 'TestHome',
    component: TestHome
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
