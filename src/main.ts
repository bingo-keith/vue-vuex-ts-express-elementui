import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

import { currencyFilter } from '@/utils/currency'
console.log(MintUI)
// 全部引入
Vue.use(MintUI)

Vue.filter('currency', currencyFilter)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
