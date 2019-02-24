import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AllProjects from './views/Projects/AllProjects.vue';
import AllSalarie from './views/Salarie/AllSalarie.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'AllProjects',
      component: AllProjects,
    },
    {
      path: '/salarie',
      name: 'AllSalarie',
      component: AllSalarie,
    },
  ],
});
