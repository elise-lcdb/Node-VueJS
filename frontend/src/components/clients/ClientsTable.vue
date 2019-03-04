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
        <td>{{s.nom_entreprise}}</td>
        <td>{{s.adresse}}</td>
        <td>{{s.contact_referent}}</td>
        <td>{{s.secteur_activite}}</td>
        <td><button>Voir</button></td>
        <td><button>Modifier</button></td>
        <td><button>Supprimer</button></td>
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