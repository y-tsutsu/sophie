import 'shitajicss/docs/css/shitaji.min.css'
import './scss/style.scss'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
