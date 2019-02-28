<template>
	<div>
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
      <tr v-for="s in salarie">
        <td>{{s.nom}}</td>
        <td>{{s.description}}</td>
        <td>{{s.statut}}</td>
        <td><button>Voir</button></td>
        <td><button>Modifier</button></td>
        <td><button>Supprimer</button></td>
      </tr>
      
    </tbody>
  </table>
	</div>
</template>
<script>
import ProjetService from '@/Service/ProjetService.vue';

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
        this.salarie = data;
        console.log(this.projet);
      })
      .catch(error => { console.log(error)});
  }
};
</script>