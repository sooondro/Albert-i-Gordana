import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Novalja from '../views/Novalja.vue';
import FindUs from '../views/FindUs.vue';
import i18n from '../i18n';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`,
  },
  {
    path: '/:lang',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: 'novalja',
        name: 'Novalja',
        component: Novalja,
      },
      {
        path: 'findUs',
        name: 'FindUs',
        component: FindUs,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
