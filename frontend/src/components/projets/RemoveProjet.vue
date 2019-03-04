<template>
	<div>
		<br>
		<h3>Your Project has been deleted</h3>
		<router-link tag="a" to="/projets">Go Back</router-link>
	</div>
</template>
<script>
import ProjetService from '../../Service/projetService.vue';

export default {
	name: 'RemoveProjet',
	data() {
   	return{
  	projet: [],
  	}
  },

  created() {
      let params = this.$route.params.id;
      ProjetService.oneProjet(params)
        .then((data) => {
          this.projet = data;
          console.log(this.projet);
      })
      .catch(error => { console.log(error)});

      ProjetService.deleteProjet(params);  
   
},
};
</script>