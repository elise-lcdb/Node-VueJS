<template>
	<div>
		  <table class="table">
    <thead>
      <tr>
        <th>Prenom</th>
        <th>Nom</th>
        <th>Poste</th>
        <th>Tout Voir</th>
        <th>Modifier</th>
        <th>Supprimer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="s in salarie">
        <td>{{s.prenom}}</td>
        <td>{{s.nom}}</td>
        <td>{{s.poste}}</td>
        <td><button>Voir</button></td>
        <td><button>Modifier</button></td>
        <td><button>Supprimer</button></td>
      </tr>
      
    </tbody>
  </table>
	</div>
</template>
<script>
import SalarieService from '@/Service/SalarieService.vue';

export default {
  name: 'SalarieTable',
   data() {
   	return{
  	salarie: [],
  	}
  },
  created() {
      SalarieService.getSalarie()
      .then((data) => {
        this.salarie = data;
        console.log(this.salarie);
      })
      .catch(error => { console.log(error)});
  }
};
</script>