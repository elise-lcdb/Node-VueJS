<template>
	<div>
		<br>
		<h3>Your Salarié has been deleted</h3>
		<router-link tag="a" to="/salarie">Go Back</router-link>
	</div>
</template>
<script>
import SalarieService from '../../Service/SalarieService.vue';

export default {
	name: 'DeleteSalarie',
	data() {
   	return{
  	salarie: [],
  	}
  },

  created() {
      let params = this.$route.params.id;
      SalarieService.oneSalarie(params)
        .then((data) => {
          this.salarie = data;
          console.log(this.salarie);
      })
      .catch(error => { console.log(error)});

      SalarieService.deleteSalarie(params);  
   
},
};
</script>