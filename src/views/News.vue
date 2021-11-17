<template>
  <b-container>
    <b-row class="mb-10">
      <b-col class="d-flex align-content-center">
        <h1 class="h1"><b-badge variant="warning" class="text-white mr-10">{{newsData.type}}</b-badge></h1>
        
        <h6 class="h6 text-light">{{newsData.date}}</h6>
      </b-col>
    </b-row>

    <b-row class="mb-10">
      <b-col>
        <h4 class="h4 font-weight-3">{{newsData.title}}</h4>
      </b-col>
    </b-row>

    <b-row class="mb-30">
      <b-col>
        <div v-html="newsData.content" class="h4 text-light  line-height-2"></div>
        <!-- <h4 class="h4 text-light">{{newsData.content}}</h4> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  export default {
    name: 'Home',
    components: {
    
    },
    data(){
      return{
        newsData:this.$router.currentRoute.params
      }
    },
    methods:{
      
    }
  }
</script>

<style scoped>
  .line-height-2{
    line-height: 1.5 !important;
  }
</style>