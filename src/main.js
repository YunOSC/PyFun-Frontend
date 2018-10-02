// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

import Navigator from '@/components/Navigator'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
// Vue.prototype.$backend = 'http://127.0.0.1:8000'
Vue.prototype.$backend = 'https://pyfun-backend.herokuapp.com'
Vue.prototype.$ajax = Axios

Vue.component('navigator', Navigator)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
