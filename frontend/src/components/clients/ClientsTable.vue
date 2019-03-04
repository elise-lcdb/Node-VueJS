<template>
	<div>
     <br>
    <h1 style="text-align: center;">Clients</h1>
    <router-link tag="a" to="/CreateClient" style="float: right;"><button type="button" name="button" class="btn btn-primary">Créer Client</button></router-link>
    <br>
    <br>
    <br>
		  <table class="table">
    <thead>
      <tr>
        <th>Nom de l'entreprise</th>
        <th>Adresse:Rue + Ville + Code postale</th>
        <th>Contact référent: nom + prénom + mail + téléphone</th>
        <th>Secteur d'activité</th>
        <th>Tout Voir</th>
        <th>Modifier</th>
        <th>Supprimer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="s in client">
        <td>{{s.cliententreprise}}</td>
        <td>{{s.clientrue}} {{s.clientville}} {{s.clientcp}}</td>
        <td>{{s.clientrefnom}} {{s.clientrefprenom}} {{s.clientrefmail}} {{s.clientreftel}}</td>
        <td>{{s.clientsec}}</td>
         <td><router-link :to="{ name: 'OneClient', params: {id: s._id } }">Voir</router-link>
</td>
       <td><router-link :to="{ name: 'EditClient', params: {id: s._id } }">Modifier</router-link>
</td>
        <td><router-link :to="{ name: 'DeleteClient', params: {id: s._id } }">Supprimer</router-link>
</td>
      </tr>
      
    </tbody>
  </table>
	</div>
</template>
<script>
import ClientService from '@/Service/ClientService.vue';

export default {
  name: 'ClientTable',
   data() {
   	return{
  	client: [],
  	}
  },
  created() {
      ClientService.getClient()
      .then((data) => {
        this.client = data;
        console.log(this.client);
      })
      .catch(error => { console.log(error)});
  }
};
</script>