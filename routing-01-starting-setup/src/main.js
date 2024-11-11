import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';

console.log(router);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
