import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Icon from 'vue-awesome/components/Icon';
import '@/assets/styles/tailwind.css';

Vue.config.productionTip = false

Vue.component('v-icon', Icon)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
