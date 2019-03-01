import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AllProjets from './views/Projets/AllProjets.vue';
import AllClients from './views/Clients/AllClients.vue';
import AllSalarie from './views/Salarie/AllSalarie.vue';
import CreateSalarie from './views/Salarie/CreateSalarie.vue';
import CreateProject from './views/Projets/CreateProjet.vue';
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
      path: '/projets',
      name: 'AllProjets',
      component: AllProjets,
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
      path: '/CreateClient',
      name: 'CreateClient',
      component: CreateClient,
    },
  ],
});
