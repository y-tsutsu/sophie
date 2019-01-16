import 'shitajicss/docs/css/shitaji.min.css'
import './scss/style.scss'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyA3m6p0p6sVOuozR8rDq4Q2ygPMYJ-rlho',
  authDomain: 'sophie-ac655.firebaseapp.com',
  databaseURL: 'https://sophie-ac655.firebaseio.com',
  projectId: 'sophie-ac655',
  storageBucket: 'sophie-ac655.appspot.com',
  messagingSenderId: '175775206608'
}
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
