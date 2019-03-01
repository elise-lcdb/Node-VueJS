<!-- <template>
	<div>
		<form action="/action_page.php">
			<div class="form-group">
		    	<label for="nom">Nom:</label>
		    	<input type="text" class="form-control" id="nom" v-model="salarienom">
		 	</div>
		 	<div class="form-group">
		    	<label for="prenom">Prénom:</label>
		    	<input type="text" class="form-control" id="prenom" v-model="salarieprenom">
		 	</div>
		 	<div class="form-group">
		    	<label for="username">Username:</label>
		    	<input type="text" class="form-control" id="username" v-model="salarieusername">
		 	</div>
		 	<div class="form-group">
		    	<label for="ddn">Date de Naissance:</label>
		    	<input type="date" class="form-control" id="ddn" v-model="salarieddn">
		 	</div>
		 	<div class="form-group">
		    	<label for="rue">Rue:</label>
		    	<input type="text" class="form-control" id="rue" v-model="salarierue">
		 	</div>
		 	<div class="form-group">
		    	<label for="ville">Ville:</label>
		    	<input type="text" class="form-control" id="ville" v-model="salarieville">
		 	</div>
		 	<div class="form-group">
		    	<label for="cp">Code Postale:</label>
		    	<input type="text" class="form-control" id="cp" v-model="salariecp">
		 	</div>
		 	<div class="form-group">
		    	<label for="telephone">Telephone:</label>
		    	<input type="text" class="form-control" id="telephone" v-model="salarietel">
		 	</div>
		  <div class="form-group">
		    <label for="mail">Adresse Mail:</label>
		    <input type="semail" class="form-control" id="smail" v-model="salariemail">
		  </div>
		  <div class="form-group">
		  	<label>Poste:</label>
		  	<select name="sposte" class="custom-select" id="sposte" v-model="salarieposte">
    			<option value="Chef de projet">Chef de projet</option>
    			<option value="Développeur">Développeur</option>
    			<option value="Commercial">Commercial</option>
    			<option value="intégrateur">Intégrateur</option>
  			</select>
		  </div>
 
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(salarienom, salarieprenom, salarieusername, salarieddn, salarierue, salarieville, salariecp, salarietel, salariemail, salarieposte)">Submit</button>
	</form>
	</div>
</template>
<script>
import SalarieService from '../../Service/SalarieService.vue';

export default {
	name: 'CreateSalarie',
  data () {
    return {
      salarienom: "",
      salarieprenom: "",
      salarieusername: "",
      salarieddn: "",
      salarierue: "",
      salarieville: "",
      salariecp: "",
      salarietel: "",
      salariemail: "",
      salarieposte: ""
    }
  },
  methods: {
    formData: function (salarienom, salarieprenom, salarieusername, salarieddn, salarierue, salarieville, salariecp, salarietel, salariemail, salarieposte){
        SalarieService.createSalarie();   
    }
  }
};
</script> -->