import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Icon from 'vue-awesome/components/Icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VueCompositionAPI from '@vue/composition-api'
// import '@/assets/styles/tailwind.css';

Vue.config.productionTip = false


Vue.use(VueCompositionAPI)

Vue.component('v-icon', Icon)
Vue.component('Header', Header)
Vue.component('Footer', Footer)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
