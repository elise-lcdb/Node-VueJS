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
        <td>{{p.nom}}</td>
        <td>{{p.description}}</td>
        <td>{{p.statut}}</td>
        <td><button>Voir</button></td>
        <td><button>Modifier</button></td>
        <td><button>Supprimer</button></td>
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