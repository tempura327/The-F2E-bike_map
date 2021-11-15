<template>
  <div id="app">
    <Header></Header>

    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  // import Footer from './components/Footer.vue';

  export default {
    name: 'App',    
    components: {
      Header,
      // Footer,


    },
    data(){
      return{

      }
    },
    methods:{

    }

  }
</script>

<style src="./../node_modules\bootstrap\dist\css\bootstrap.min.css"></style>
<style src="./../node_modules\bootstrap-vue\dist\bootstrap-vue.css"></style>
<style src="./style/App.css"></style>

<style scoped>

</style>
