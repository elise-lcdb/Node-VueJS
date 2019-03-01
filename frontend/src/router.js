import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AllProjects from './views/Projects/AllProjects.vue';
import AllClients from './views/Clients/AllClients.vue';
import AllSalarie from './views/Salarie/AllSalarie.vue';
import CreateSalarie from './views/Salarie/CreateSalarie.vue';
import CreateProject from './views/Projects/CreateProjet.vue';
import CreateClient from './views/Clients/CreateClient.vue';

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
    {
      path: '/CreateSalarie',
      name: 'CreateSalarie',
      component: CreateSalarie,
    },
    {
      path: '/clients',
      name: 'AllClients',
      component: AllClients,
    },
    {
      path: '/CreatClient',
      name: 'CreateClient',
      component: CreateClient,
    },
  ],
});
