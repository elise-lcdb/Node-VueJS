<template>
	<div>
    <br>
     <br>
    <h1 style="text-align: center;">Salarié</h1>
    <br>
		  <table class="table">
    <thead>
      <tr>
        <th>Prenom</th>
        <th>Nom</th>
        <th>Username</th>
        <th>Date de Naissance</th>
        <th>Rue</th>
        <th>Ville</th>
        <th>Code Postale</th>
        <th>Mail</th>
        <th>Telephone</th>
        <th>Poste</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{salarie.salarieprenom}}</td>
        <td>{{salarie.salarienom}}</td>
        <td>{{salarie.salarieusername}}</td>
        <td>{{salarie.salarieddn}}</td>
        <td>{{salarie.salarierue}}</td>
        <td>{{salarie.salarieville}}</td>
        <td>{{salarie.salariecp}}</td>
        <td>{{salarie.salariemail}}</td>
        <td>{{salarie.salarietel}}</td>
        <td>{{salarie.salarieposte}}</td>
      </tr>
      
    </tbody>
  </table>
  <br>
	</div>
</template>
<script>
import SalarieService from '@/Service/SalarieService.vue';

export default {
    data () {
    return {
      salarie: []
      }
  },
    created() {
      let params = this.$route.params.id;
      SalarieService.oneSalarie(params)
        .then((data) => {
          this.salarie = data;
          console.log(this.salarie);
      })
      .catch(error => { console.log(error)});
   
}
};
</script>