<template>
	<div>
    <br>
     <br>
    <h1 style="text-align: center;">Client</h1>
    <br>
		  <table class="table">
    <thead>
      <tr>
        <th>Entreprise du client</th>
        <th>Rue</th>
        <th>Ville</th>
        <th>Code postal</th>
        <th>Nom du client référent</th>
        <th>Prénom du client référent</th>
        <th>Mail du client référent</th>
        <th>Téléphone du client référent</th>
        <th>Secteur d'activité</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{client.cliententreprise}}</td>
        <td>{{client.clientrue}}</td>
        <td>{{client.clientville}}</td>
        <td>{{client.clientcp}}</td>
        <td>{{client.clientrefnom}}</td>
        <td>{{client.clientrefprenom}}</td>
        <td>{{client.clientrefmail}}</td>
        <td>{{client.clientreftel}}</td>
        <td>{{client.clientsec}}</td>
      </tr>
      
    </tbody>
  </table>
  <br>
	</div>
</template>
<script>
import ClientService from '@/Service/ClientService.vue';

export default {
    data () {
    return {
      client: []
      }
  },
    created() {
      let params = this.$route.params.id;
      ClientService.oneClient(params)
        .then((data) => {
          this.client = data;
          console.log(this.client);
      })
      .catch(error => { console.log(error)});
   
}
};
</script>