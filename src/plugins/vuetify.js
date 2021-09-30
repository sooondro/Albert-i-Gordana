import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import * as locales from './locale'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: {
      locales,
      current: 'hr'
    }
  }
})
