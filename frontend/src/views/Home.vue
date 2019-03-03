<template>
  <div class="home">
  	<br>
    <h1>Stats</h1>
    <h3>Nombre de salariés: {{salarie.length}}</h3>
    <h3>Nombre de clients: {{client.length}}</h3>
    <h3>Nombre de projets: {{projet.length}}</h3>
  </div>
</template>

<script>
import SalarieService from '../Service/SalarieService.vue';
import ClientService from '../Service/ClientService.vue';
import ProjetService from '../Service/projetService.vue';

export default {
  name: 'home',
   data() {
   	return{
  	salarie: [],
    projet: [],
    client: [],
  	}
  },
  created() {
      SalarieService.getSalarie()
      .then((data) => {
        this.salarie = data;
        console.log(this.salarie);
      })
      .catch(error => { console.log(error)});

      ClientService.getClient()
      .then((data) => {
        this.client = data;
        console.log(this.client);
      })
      .catch(error => { console.log(error)});

      ProjetService.getProjet()
      .then((data) => {
        this.projet = data;
        console.log(this.projet);
      })
      .catch(error => { console.log(error)});


  }
};
</script>
