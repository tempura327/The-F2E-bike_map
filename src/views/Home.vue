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
      <b-row class="mb-28">
        <b-col class="d-flex justify-content-center">
          <b-button class="btn-big bg-primary">自行車路線</b-button>
        </b-col>

        <b-col class="d-flex justify-content-center">
          <b-button class="btn-big bg-secondary">單車租借</b-button>
        </b-col>
      </b-row>

      <b-row class=" mb-15">
        <b-col>
          <div class="middle-title text-center">最新公告</div>
        </b-col>
      </b-row>

      <b-row class="mb-30">
        <b-col>
          <ul class="mb-12">
            <li v-for="(item, index) in news" :key="index" class="news-item">
              <h6 class="h6 text-light">{{item.date}}</h6>
              <router-link to="/" class="a">{{item.title}}</router-link>
              <h6 class="h6 text-light"><font-awesome-icon icon="angle-right"></font-awesome-icon></h6>
            </li>
          </ul>
          <div class="text-center">
            <button class="btn-small bg-primary">更多消息</button>
          </div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
  import News from '../config/News.json';

  export default {
    name: 'Home',
    components: {
    
    },
    data(){
      return{
        news:News,
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

  .news-item{
    display: flex;
    justify-content: space-between;
    padding: 24px 40px;
    border-bottom: 1px solid #C8C8C8;
  }
</style>