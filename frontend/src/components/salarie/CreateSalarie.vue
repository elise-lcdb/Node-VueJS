<template>
	<div>
		<form action="/action_page.php">
			<div class="form-group">
		    	<label for="nom">Nom:</label>
		    	<input type="text" class="form-control" id="nom">
		 	</div>
		 	<div class="form-group">
		    	<label for="prenom">Prénom:</label>
		    	<input type="text" class="form-control" id="prenom">
		 	</div>
		 	<div class="form-group">
		    	<label for="username">Username:</label>
		    	<input type="text" class="form-control" id="username">
		 	</div>
		 	<div class="form-group">
		    	<label for="ddn">Date de Naissance:</label>
		    	<input type="date" class="form-control" id="ddn">
		 	</div>
		 	<div class="form-group">
		    	<label for="rue">Rue:</label>
		    	<input type="text" class="form-control" id="rue">
		 	</div>
		 	<div class="form-group">
		    	<label for="ville">Ville:</label>
		    	<input type="text" class="form-control" id="ville">
		 	</div>
		 	<div class="form-group">
		    	<label for="cp">Code Postale:</label>
		    	<input type="text" class="form-control" id="cp">
		 	</div>
		 	<div class="form-group">
		    	<label for="telephone">Telephone:</label>
		    	<input type="text" class="form-control" id="telephone">
		 	</div>
		  <div class="form-group">
		    <label for="mail">Adresse Mail:</label>
		    <input type="email" class="form-control" id="mail">
		  </div>
		  <div class="form-group">
		  	<label>Poste:</label>
		  	<select name="cars" class="custom-select">
    			<option selected>Select Poste</option>
    			<option value="Chef de projet">Chef de projet</option>
    			<option value="Développeur">Développeur</option>
    			<option value="Commercial">Commercial</option>
    			<option value="intégrateur">Intégrateur</option>
  			</select>
		  </div>
 
  <button type="button" class="btn btn-primary">Submit</button>
	</form>
	</div>
</template>
<script>
// import SalarieService from '@/service/SalarieService';

// export default {
//   name: 'CreateProduct',
//   data () {
//     return {
//       productname: "",
//       productdescripion: "",
//       productprice: "",
//       producttva: ""
//     }
//   },
//   methods: {
//     formData: function (productname, productprice, productdescripion, producttva){
//         ProductsService.CreateProduct()
//     }
//   }
// };
</script>