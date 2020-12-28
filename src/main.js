import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import cors from 'cors';

// import store from './store'
Vue.config.productionTip = false
Vue.prototype.$http = Axios;

Vue.use(cors());

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
