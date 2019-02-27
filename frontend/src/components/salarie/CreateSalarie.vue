<template>
	<div>
		<form action="/action_page.php">
			<div class="form-group">
		    	<label for="nom">Nom:</label>
		    	<input type="text" class="form-control" id="nom" v-model="nom">
		 	</div>
		 	<div class="form-group">
		    	<label for="prenom">Prénom:</label>
		    	<input type="text" class="form-control" id="prenom" v-model="prenom">
		 	</div>
		 	<div class="form-group">
		    	<label for="username">Username:</label>
		    	<input type="text" class="form-control" id="username" v-model="username">
		 	</div>
		 	<div class="form-group">
		    	<label for="ddn">Date de Naissance:</label>
		    	<input type="date" class="form-control" id="ddn" v-model="ddn">
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
		    	<label for="telephone">Telephone:</label>
		    	<input type="text" class="form-control" id="telephone" v-model="telephone">
		 	</div>
		  <div class="form-group">
		    <label for="mail">Adresse Mail:</label>
		    <input type="email" class="form-control" id="mail" v-model="mail">
		  </div>
		  <div class="form-group">
		  	<label>Poste:</label>
		  	<select name="poste" class="custom-select" v-model="poste">
    			<option value="Chef de projet">Chef de projet</option>
    			<option value="Développeur">Développeur</option>
    			<option value="Commercial">Commercial</option>
    			<option value="intégrateur">Intégrateur</option>
  			</select>
		  </div>
 
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(nom, prenom, username, ddn, rue, ville, cp, telephone, mail, poste)">Submit</button>
	</form>
	</div>
</template>
<script>
import SalarieService from '../../Service/SalarieService.vue';

export default {
  data () {
    return {
      nom: "",
      prenom: "",
      username: "",
      ddn: "",
      	rue: "",
      	ville: "",
      	cp: "",
      telephone: "",
      mail: "",
      poste: ""
    }
  },
  methods: {
    formData: function (nom, prenom, username, ddn, rue, ville, cp, telephone, mail, poste){
        SalarieService.createSalarie()
    }
  }
};
</script>