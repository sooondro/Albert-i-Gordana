import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import apartments from './modules/apartments'
import reservations from './modules/reservations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    apartments,
    reservations
  }
})
