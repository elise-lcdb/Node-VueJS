<template>
	<div>
		<form>
			<div class="form-group">
		    	<label for="nom">Nom:</label>
		    	<input type="text" class="form-control" id="nom" v-model="projetnom">
		 	</div>
		 	<div class="form-group">
		    	<label for="description">Description:</label>
		    	<input type="text" class="form-control" id="description" v-model="projetdescription">
		 	</div>
		 	<div class="form-group">
		    	<label for="date_debut">Date de Début:</label>
		    	<input type="date" class="form-control" id="date_debut" v-model="projetdatedebut">
		 	</div>
		 	<div class="form-group">
		    	<label for="date_fin">Date de la fin:</label>
		    	<input type="date" class="form-control" id="date_fin" v-model="projetdatefin">
		 	</div>
		 	<div class="form-group">
		    	<label for="montant_total">Le Montant Total</label>
		    	<input type="text" class="form-control" id="montant_total" v-model="projetmontant">
		 	</div>
		  <div class="form-group">
		  	<label>Statut:</label>
		  	<select name="statut" class="custom-select" v-model="projetstatut">
    			<option value="Annulé">Annulé</option>
    			<option value="Terminér">Terminé</option>
    			<option value="En cours de réalisation">En cours de réalisation</option>
    			<option value="Prospect">Prospect</option>
  			</select>
		  </div>
 
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(projetnom, projetdescription, projetdatedebut, projetdatefin, projetmontant, projetstatut)">Submit</button>
	</form>
	</div>
</template>
<script>
import ProjetService from '@/Service/projetService.vue';

export default {
  data () {
    return {
    projetnom: "",
    projetdescription: "",
    projetdatedebut: "",
    projetdatefin:"",
    projetmontant: "",
    projetstatut: "",
    }
  },
  methods: {
    formData: function (projetnom, projetdescription, projetdatedebut, projetdatefin, projetmontant, projetstatut){
        ProjetService.createProjet()
    }
  }
};
</script>