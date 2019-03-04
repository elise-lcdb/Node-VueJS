<template>
	<div>
    <br>
    <h1 style="text-align: center;">Salarié</h1>
    <br>
    <router-link tag="a" to="/CreateSalarie">Créer Salarié</router-link>
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
        <td>{{s.salarieprenom}}</td>
        <td>{{s.salarienom}}</td>
        <td>{{s.salarieposte}}</td>
        <td><router-link :to="{ name: 'OneSalarie', params: {id: s._id } }">Voir</router-link>
</td>
        <td><router-link :to="{ name: 'EditSalarie', params: {id: s._id } }">Modifer</router-link>
</td>
        <td><router-link :to="{ name: 'DeleteSalarie', params: {id: s._id } }">Supprimer</router-link>
</td>
      </tr>
      
    </tbody>
  </table>
  <br>
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