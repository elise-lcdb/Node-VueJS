<template>
	<div>
    <br>
    <h1>Modifier Client</h1>
    <br>
    <form>
      <div class="form-group">
          <label for="nom_entreprise">Nom de l'entreprise:</label>
          <input type="text" class="form-control" id="nom_entreprise" v-model="cliententreprise">
      </div>
      <div class="form-group">
          <label for="rue">Rue:</label>
          <input type="text" class="form-control" id="rue" v-model="clientrue">
      </div>
      <div class="form-group">
          <label for="ville">Ville:</label>
          <input type="text" class="form-control" id="ville" v-model="clientville">
      </div>
      <div class="form-group">
          <label for="cp">Code Postale:</label>
          <input type="text" class="form-control" id="cp" v-model="clientcp">
      </div>
      <div class="form-group">
          <label for="nom">Nom:</label>
          <input type="text" class="form-control" id="nom" v-model="clientrefnom">
      </div>
      <div class="form-group">
          <label for="prenom">Prénom:</label>
          <input type="text" class="form-control" id="tprenom" v-model="clientrefprenom">
      </div>
      <div class="form-group">
          <label for="telephone">Telephone:</label>
          <input type="text" class="form-control" id="telephone" v-model="clientreftel">
      </div>
      <div class="form-group">
        <label for="mail">Adresse Mail:</label>
        <input type="email" class="form-control" id="mail" v-model="clientrefmail">
      </div>
      <div class="form-group">
        <label for="secteur_activite">Secteur d'activité:</label>
        <input type="text" class="form-control" id="secteur_activite" v-model="clientsec">
      </div>
  <router-link to="/clients" tag="a">
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(cliententreprise, clientrue, clientville, clientcp, clientrefnom, clientrefprenom, clientrefmail, clientreftel, clientsec)">Submit</button>
</router-link>
  </form>
  <br>
  </div>
</template>
<script>
import ClientService from '../../Service/ClientService.vue';

export default {
	name: 'ModifyProjet',
  data () {
     return {
      client: [],
        cliententreprise:"",
        clientrue:"",
        clientville:"",
        clientcp:"",
        clientrefnom:"",
        clientrefprenom:"",
        clientrefmail:"",
        clientreftel:"",
        clientsec:"",
    }
  },
  created() {
      let params = this.$route.params.id;
     ClientService.oneClient(params)
        .then((data) => {
          this.client = data;
          console.log(data);
          this.cliententreprise = this.client.cliententreprise;
          this.clientrue = this.client.clientrue;
          this.clientville = this.client.clientville;
          this.clientcp = this.client.clientcp;
          this.clientrefnom = this.client.clientrefnom;
          this.clientrefprenom = this.client.clientrefprenom;
          this.clientrefmail = this.client.clientrefmail;
          this.clientreftel = this.client.clientreftel;
          this.clientsec = this.client.clientsec;
      })
      .catch(error => { console.log(error)});
   
},
  methods: {
    formData: function (cliententreprise, clientrue, clientville, clientcp, clientrefnom, clientrefprenom, clientrefmail, clientreftel, clientsec){
        ClientService.editClient( this.$route.params.id, cliententreprise, clientrue, clientville, clientcp, clientrefnom, clientrefprenom, clientrefmail, clientreftel, clientsec);

    },
  }
};
</script>