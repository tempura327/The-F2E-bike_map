<template>
  <div class="home">
    <div class="banner">
      <h1 class="banner-title">台灣自行車資訊網</h1>
      <b-input-group class="banner-search">
        <b-input></b-input>
        <b-input-group-append>
          <b-button variant="info">
            <font-awesome-icon icon="search"></font-awesome-icon>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>

    <b-container>
      <b-row>
        <b-col class="d-flex justify-content-center">
          <b-button class="btn-big bg-primary">自行車路線</b-button>
        </b-col>

        <b-col class="d-flex justify-content-center">
          <b-button class="btn-big bg-secondary">單車租借</b-button>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>

  export default {
    name: 'Home',
    components: {
    
    },
    data(){
      return{
      
      }
    },
    methods:{
      
    }
  }
</script>

<style scoped>
  .banner{
    height:425px;
    background: url('https://images.unsplash.com/photo-1600976267946-1039881b21d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80');
    background-size: cover;
    background-position: center;
    margin-bottom: 80px;
  }

  .banner-title{
    position: relative;
    top: 45%;
    text-align: center;
    color: white;
    letter-spacing: 0.3em;
    font-size: 40px !important;
    font-weight: 700;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  }

  .banner-search{
    position: relative;
    top: 50%;
    margin: 0 auto;
    width: 25%;
      
  }
</style>