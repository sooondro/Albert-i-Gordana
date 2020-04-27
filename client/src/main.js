import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMobileAlt,
  faHome,
  faMapMarkerAlt,
  faPhoneAlt,
  faAt,
  faLaptopCode,
  faEdit,
  faPaintBrush,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CountryFlag from 'vue-country-flag';


import i18n from './i18n';
import auth from './auth';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faMobileAlt, faAt, faHome, faMapMarkerAlt,
  faPhoneAlt, faFacebook, faFacebookMessenger, faInstagram,
  faPaintBrush, faLaptopCode, faEdit, faLanguage);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('country-flag', CountryFlag);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = 'hr';
  }
  i18n.locale = language;
  next();
});

Vue.use(Buefy);

new Vue({
  router,
  store,
  auth,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
