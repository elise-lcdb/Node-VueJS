<template>
  <div id="app" style=" margin-bottom: -28px;">
    <Header />
    <div class="container" style="min-height: 83vh;">
    <router-view/>
</div>
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
