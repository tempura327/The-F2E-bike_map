import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/Home.vue');
const News = () => import('../views/News.vue');
const Map = () => import('../views/Map.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path:'/news',
    name:'News',
    component:News
  },
  {
    path:'/map',
    name:'Map',
    component:Map
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  props:{
    default: true,
  },
  scrollBehavior(){
    return {
      x:0,
      y:0,
      behavior: 'smooth'
    }

  }
})

export default router
