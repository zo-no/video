import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//import GitHub from 'github-api';
import $ from 'jquery';


const app = createApp(App)
app
  .use(store)
  .use(router)
  //.use(GitHub)
  .use($)
  .mount('#app')
  
