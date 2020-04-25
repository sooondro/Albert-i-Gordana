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
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import auth from './auth';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

library.add(faMobileAlt, faAt, faHome, faMapMarkerAlt,
  faPhoneAlt, faFacebook, faFacebookMessenger, faInstagram,
  faPaintBrush, faLaptopCode, faEdit);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  store,
  auth,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
