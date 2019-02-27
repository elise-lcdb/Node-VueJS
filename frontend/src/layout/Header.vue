<template>
	<div>
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  	<!-- Brand -->
  		<router-link to="/" tag="a" class="navabr-brand">Home</router-link> 

  <!-- Links -->
<!--   <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
 -->
    <!-- Dropdown -->
    <span class="nav-item dropdown">
      <a class="nav-link dropdown-toggle"id="navbardrop" data-toggle="dropdown">
        Salaries
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">All Salariés</a>
        <a class="dropdown-item" href="#">Create Salarié</a>
        <a class="dropdown-item" href="#">Edit Salarié</a>
        <a class="dropdown-item" href="#">Delete Salarié</a>
      </div>
    </span>
  </ul>
</nav>
	
      <!-- <router-link to="/projects">Projects</router-link> -->
  </div>
</template>
<style scoped>
a{
	color: white !important;
}
</style>