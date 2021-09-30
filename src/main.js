import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyButHZS77MTbbUQM7M0eM0NYB7l7KxibfI',
  authDomain: 'zavrsni-db10d.firebaseapp.com',
  databaseURL: 'https://zavrsni-db10d.firebaseio.com',
  projectId: 'zavrsni-db10d',
  storageBucket: 'zavrsni-db10d.appspot.com',
  messagingSenderId: '97672498322',
  appId: '1:97672498322:web:67c8c064f121ff66a3ea4b',
  measurementId: 'G-VDMX5QQDK0'
})

axios.defaults.baseURL = 'https://zavrsni-db10d.firebaseio.com'

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
