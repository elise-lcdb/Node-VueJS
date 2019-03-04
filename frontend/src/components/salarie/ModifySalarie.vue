<template>
	<div>
		 <br>
    <h1 style="text-align: center;">Modifier Salarié</h1>
    <br>
		<form>
			<div class="form-group">
		    	<label for="nom">Nom:</label>
		    	<input type="text" class="form-control" id="nom" v-model="salarienom" >
		 	</div>
		 	<div class="form-group">
		    	<label for="prenom">Prénom:</label>
		    	<input type="text" class="form-control" id="prenom" v-model="salarieprenom" >
		 	</div>
		 	<div class="form-group">
		    	<label for="username">Username:</label>
		    	<input type="text" class="form-control" id="username" v-model="salarieusername" >
		 	</div>
		 	<div class="form-group">
		    	<label for="ddn">Date de Naissance:</label>
		    	<input type="date" class="form-control" id="ddn" v-model="salarieddn" >
		 	</div>
		 	<div class="form-group">
		    	<label for="rue">Rue:</label>
		    	<input type="text" class="form-control" id="rue" v-model="salarierue">
		 	</div>
		 	<div class="form-group">
		    	<label for="ville">Ville:</label>
		    	<input type="text" class="form-control" id="ville" v-model="salarieville" >
		 	</div>
		 	<div class="form-group">
		    	<label for="cp">Code Postale:</label>
		    	<input type="text" class="form-control" id="cp" v-model="salariecp">
		 	</div>
		 	<div class="form-group">
		    	<label for="telephone">Telephone:</label>
		    	<input type="text" class="form-control" id="telephone" v-model="salarietel" >
		 	</div>
		  <div class="form-group">
		    <label for="mail">Adresse Mail:</label>
		    <input type="semail" class="form-control" id="smail" v-model="salariemail" >
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
 <router-link to="/Salarie" tag="a">
  <button type="button" name="button" class="btn btn-primary" v-on:click="formData(salarienom, salarieprenom, salarieusername, salarieddn, salarierue, salarieville, salariecp, salarietel, salariemail, salarieposte)">Submit</button>
</router-link>
	</form>
	<br>
	</div>
</template>
<script>
import SalarieService from '../../Service/SalarieService.vue';

export default {
	name: 'ModifySalarie',
  data () {
    return {
    	salarie: [],
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
  created() {
      let params = this.$route.params.id;
      SalarieService.oneSalarie(params)
        .then((data) => {
          this.salarie = data;
          console.log(data);
          this.salarienom = this.salarie.salarienom;
          this.salarieprenom = this.salarie.salarieprenom;
          this.salarieusername = this.salarie.salarieusername;
          this.salarieddn = this.salarie.salarieddn;
          this.salarierue = this.salarie.salarieville;
          this.salariecp = this.salarie.salariecp;
          this.salarietel = this.salarie.salarietel;
          this.salariemail = this.salarie.salariemail;
          this.salarieposte = this.salarie.salarieposte;
      })
      .catch(error => { console.log(error)});
   
},
  methods: {
    formData: function (salarienom, salarieprenom, salarieusername, salarieddn, salarierue, salarieville, salariecp, salarietel, salariemail, salarieposte){
        SalarieService.editSalarie( this.$route.params.id, salarienom, salarieprenom, salarieusername, salarieddn, salarierue, salarieville, salariecp, salarietel, salariemail, salarieposte);   
    },
  }
};
</script>