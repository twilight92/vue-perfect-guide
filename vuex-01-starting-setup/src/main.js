import { createApp } from 'vue';

import App from './App.vue';
import store from './store/index.js';

const app = createApp(App);

app.use(store); // app.use를 호출해 저장소를 전달

app.mount('#app');
