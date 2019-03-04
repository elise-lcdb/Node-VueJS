<template>
	<div>
    <br>
     <br>
    <h1 style="text-align: center;">Projet</h1>
    <br>
		  <table class="table">
    <thead>
      <tr>
        <th>Nom du Projet</th>
        <th>Description</th>
        <th>Date de début</th>
        <th>Date de fin</th>
        <th>Montant total du projet</th>
        <th>Statut</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{projets.projetnom}}</td>
        <td>{{projets.projetdescription}}</td>
        <td>{{projets.projetdatedebut}}</td>
        <td>{{projets.projetdatefin}}</td>
        <td>{{projets.projetmontant}}</td>
        <td>{{projets.projetstatut}}</td>
      </tr>
      
    </tbody>
  </table>
  <br>
	</div>
</template>
<script>
import projetService from '@/Service/projetService.vue';

export default {
    data () {
    return {
      salarie: []
      }
  },
    created() {
      let params = this.$route.params.id;
      projetService.oneSalarie(params)
        .then((data) => {
          this.projet = data;
          console.log(this.projet);
      })
      .catch(error => { console.log(error)});
   
}
};
</script>