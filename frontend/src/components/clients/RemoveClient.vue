<template>
	<div>
		<br>
		<h3>Your Client has been deleted</h3>
		<router-link tag="a" to="/clients">Go Back</router-link>
	</div>
</template>
<script>
import ClientService from '../../Service/ClientService.vue';

export default {
	name: 'RemoveClient',
	data() {
   	return{
  	client: [],
  	}
  },

  created() {
      let params = this.$route.params.id;
      ClientService.oneClient(params)
        .then((data) => {
          this.client = data;
          console.log(this.client);
      })
      .catch(error => { console.log(error)});

      ClientService.deleteClient(params);  
   
},
};
</script>