<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'

export default{
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
