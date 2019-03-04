<template>
	<div>
    <br>
    <h1 style="text-align: center;">Projets</h1>
    <router-link tag="a" to="/CreateProjet" style="float: right;"><button type="button" name="button" class="btn btn-primary">Créer Projet</button></router-link>
    <br>
    <br>
    <br>
		  <table class="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Description</th>
        <th>Statut</th>
        <th>Tout Voir</th>
        <th>Modifier</th>
        <th>Supprimer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in projet">
        <td>{{p.projetnom}}</td>
        <td>{{p.projetdescription}}</td>
        <td>{{p.projetstatut}}</td>
        <td><router-link :to="{ name: 'OneProjet', params: {id: p._id } }">Voir</router-link>
</td>
        <td><router-link :to="{ name: 'EditProjet', params: {id: p._id } }">Modifier</router-link>
</td>
        <td><router-link :to="{ name: 'DeleteProjet', params: {id: p._id } }">Supprimer</router-link>
</td>
      </tr>
      
    </tbody>
  </table>
	</div>
</template>
<script>
import ProjetService from '@/Service/projetService.vue';

export default {
  name: 'ProjetTable',
   data() {
   	return{
  	projet: [],
  	}
  },
  created() {
     ProjetService.getProjet()
      .then((data) => {
        this.projet = data;
        console.log(this.projet);
      })
      .catch(error => { console.log(error)});
  }
};
</script>