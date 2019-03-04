<template>
	<div>
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  	<!-- Brand -->
  		<router-link to="/" tag="a" class="navabr-brand">Home</router-link> 

  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <router-link class="nav-item" tag="a" to="/salarie">Salarié</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-item" tag="a" to="/projet">Projet</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-item" tag="a" to="/client">Client</router-link>
    </li>
  </ul>
</nav>
	
      <!-- <router-link to="/projects">Projects</router-link> -->
  </div>
</template>
<style scoped>
a{
	color: white !important;
}
li .nav-item{
  padding: 10px 10px;
}
</style>