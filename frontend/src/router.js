import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// Salarie
import AllSalarie from './views/Salarie/AllSalarie.vue';
import CreateSalarie from './views/Salarie/CreateSalarie.vue';
import OneSalarie from './views/Salarie/OneSalarie.vue';
import EditSalarie from './views/Salarie/EditSalarie.vue';
import DeleteSalarie from './views/Salarie/DeleteSalarie.vue';
// Projet
import AllProjets from './views/Projets/AllProjets.vue';
import CreateProject from './views/Projets/CreateProjet.vue';
// Clients
import AllClients from './views/Clients/AllClients.vue';
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
    {
   path: '/salarie/:id', 
   name: 'OneSalarie', 
   component: OneSalarie
  },
   {
   path: '/salarie/edit/:id', 
   name: 'EditSalarie', 
   component: EditSalarie
  },
  {
   path: '/salarie/delete/:id', 
   name: 'DeleteSalarie', 
   component: DeleteSalarie
  },

  ],
});
