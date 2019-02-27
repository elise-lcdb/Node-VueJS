<template>
  <div class="home">
  	<br>
    <h1>Stats</h1>
    <h3>Nombre de salariés: {{salarie.length}}</h3>
  </div>
</template>

<script>
import SalarieService from '../Service/SalarieService.vue';

export default {
  name: 'home',
   data() {
   	return{
  	salarie: [],
  	}
  },
  created() {
      SalarieService.allSalarie()
      .then((data) => {
        this.salarie = data;
        console.log(this.salarie);
      })
      .catch(error => { console.log(error)});
  }
};
</script>
