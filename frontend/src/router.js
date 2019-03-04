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
import CreateProjet from './views/Projets/CreateProjet.vue';
import OneProjet from './views/Projets/OneProjet.vue';
import EditProjet from './views/Projets/EditProjet.vue';
import DeleteProjet from './views/Projets/DeleteProjet.vue';
// Clients
import AllClients from './views/Clients/AllClients.vue';
import CreateClient from './views/Clients/CreateClient.vue';
import OneClient from './views/Clients/OneClient.vue';
import EditClient from './views/Clients/EditClient.vue';
import DeleteClient from './views/Clients/DeleteClient.vue';

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
      path: '/clients',
      name: 'AllClients',
      component: AllClients,
    },
    {
      path: '/CreateSalarie',
      name: 'CreateSalarie',
      component: CreateSalarie,
    },
    {
   path: '/CreateProjet', 
   name: 'CreateProjet', 
   component: CreateProjet,
  },
    
    {
      path: '/CreateClient',
      name: 'CreateClient',
      component: CreateClient,
    },
    {
   path: '/salarie/:id', 
   name: 'OneSalarie', 
   component: OneSalarie,
  },
  {
  path: '/projets/:id', 
   name: 'OneProjet', 
   component: Oneprojet,
  },
  {
  path: '/clients/:id', 
   name: 'OneClient', 
   component: OneClient,
  },

   {
   path: '/salarie/edit/:id', 
   name: 'EditSalarie', 
   component: EditSalarie
  },

   {
   path: '/projets/edit/:id', 
   name: 'EditProjet', 
   component: EditProjet,
  },

   {
   path: '/clients/edit/:id', 
   name: 'EditClient', 
   component: EditClient,
  },
  {
   path: '/salarie/delete/:id', 
   name: 'DeleteSalarie', 
   component: DeleteSalarie
  },
   {
   path: '/projets/delete/:id', 
   name: 'DeleteProjet', 
   component: DeleteProjet,
  },
   {
   path: '/clients/delete/:id', 
   name: 'DeleteClient', 
   component: DeleteClient,
  },


  ],
});
