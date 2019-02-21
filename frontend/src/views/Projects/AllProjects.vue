<template>
  <div class="AllProjects">
    <h1>A table that will show all of the products. I think to get a better grade we should move everything to components and have almost nothing on the views page. just the imports from components</h1>
    <ProjectsTable />
  </div>
</template>
<script>
import ProjectsTable from '@/components/projects/ProjectsTable.vue'

export default{
	components: {
		ProjectsTable
	}
}
</script>
