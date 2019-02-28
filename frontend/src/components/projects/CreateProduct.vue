<template>
	<div>
		<form action="/action_page.php">
			<div class="form-group">
		    	<label for="nom">Nom:</label>
		    	<input type="text" class="form-control" id="nom" v-model="nom">
		 	</div>
		 	<div class="form-group">
		    	<label for="description">Description:</label>
		    	<input type="text" class="form-control" id="description" v-model="description">
		 	</div>
		 	<div class="form-group">
		    	<label for="date_debut">Date de Début:</label>
		    	<input type="date" class="form-control" id="date_debut" v-model="date_debut">
		 	</div>
		 	<div class="form-group">
		    	<label for="date_fin">Date de la fin:</label>
		    	<input type="date" class="form-control" id="date_fin" v-model="date_fin">
		 	</div>
		 	<div class="form-group">
		    	<label for="montant_total">Le Montant Total</label>
		    	<input type="text" class="form-control" id="montant_total" v-model="montant_total">
		 	</div>
		  <div class="form-group">
		  	<label>Statut:</label>
		  	<select name="statut" class="custom-select" v-model="statut">
    			<option value="Annulé">Annulé</option>
    			<option value="Terminér">Terminé</option>
    			<option value="En cours de réalisation">En cours de réalisation</option>
    			<option value="Prospect">Prospect</option>
  			</select>
		  </div>
 
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(nom, description, date_debut, date_fin, montant_total, statut)">Submit</button>
	</form>
	</div>
</template>
<script>
import ProjetService from '../../Service/ProjetService.vue';

export default {
  data () {
    return {
      nom: "",
    description: "",
    date_debut: Date,
    date_fin:"",
    montant_total: "",
    statut: "",
    }
  },
  methods: {
    formData: function (nom, description, date_debut, date_fin, montant_total, statut){
        ProjetService.createProjet()
    }
  }
};
</script>