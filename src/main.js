import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import 'mapbox-gl/dist/mapbox-gl.css';
import 'leaflet/dist/leaflet.css';


library.add(fas);
library.add(fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')