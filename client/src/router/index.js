import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Novalja from '../views/Novalja.vue';

Vue.use(VueRouter);

const routes = [
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
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
