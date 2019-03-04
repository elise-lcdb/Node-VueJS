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
        <td>{{projet.projetnom}}</td>
        <td>{{projet.projetdescription}}</td>
        <td>{{projet.projetdatedebut}}</td>
        <td>{{projet.projetdatefin}}</td>
        <td>{{projet.projetmontant}}</td>
        <td>{{projet.projetstatut}}</td>
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
      projet: []
      }
  },
    created() {
      let params = this.$route.params.id;
      projetService.oneProjet(params)
        .then((data) => {
          this.projet = data;
          console.log(this.projet);
      })
      .catch(error => { console.log(error)});
   
}
};
</script>