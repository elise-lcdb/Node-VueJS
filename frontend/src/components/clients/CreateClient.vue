<template>
	<div>
		<form action="/action_page.php">
			<div class="form-group">
		    	<label for="nom_entreprise">Nom de l'entreprise:</label>
		    	<input type="text" class="form-control" id="nom_entreprise" v-model="nom_entreprise">
		 	</div>
		 	<div class="form-group">
		    	<label for="rue">Rue:</label>
		    	<input type="text" class="form-control" id="rue" v-model="rue">
		 	</div>
		 	<div class="form-group">
		    	<label for="ville">Ville:</label>
		    	<input type="text" class="form-control" id="ville" v-model="ville">
		 	</div>
		 	<div class="form-group">
		    	<label for="cp">Code Postale:</label>
		    	<input type="text" class="form-control" id="cp" v-model="cp">
		 	</div>
		 	<div class="form-group">
		    	<label for="nom">Nom:</label>
		    	<input type="text" class="form-control" id="nom" v-model="nom">
		 	</div>
		 	<div class="form-group">
		    	<label for="prenom">Prénom:</label>
		    	<input type="text" class="form-control" id="tprenom" v-model="prenom">
		 	</div>
		 	<div class="form-group">
		    	<label for="telephone">Telephone:</label>
		    	<input type="text" class="form-control" id="telephone" v-model="telephone">
		 	</div>
		  <div class="form-group">
		    <label for="mail">Adresse Mail:</label>
		    <input type="email" class="form-control" id="mail" v-model="mail">
		  </div>
		  <div class="form-group">
		    <label for="secteur_activite">Secteur d'activité:</label>
		    <input type="text" class="form-control" id="secteur_activite" v-model="secteur_activite">
		  </div>
 
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(nom_entreprise, adresse, rue, ville, cp, contact_referent, nom, prenom, telephone, mail, secteur_activite)">Submit</button>
	</form>
	</div>
</template>
<script>
import SalarieService from '../../Service/ClientService.vue';

export default {
  data () {
    return {
    	nom_entreprise"",
          adresse"",
            rue"",
            ville"",
            cp"",
            contact_referent"",
            nom"",
            prenom"",
          telephone"",
         mail"",
           secteur_activite"",
    }
  },
  methods: {
    formData: function (nom_entreprise, adresse, rue, ville, cp, contact_referent, nom, prenom, telephone, mail, secteur_activite){
        ClientService.createClient()
    }
  }
};
</script>