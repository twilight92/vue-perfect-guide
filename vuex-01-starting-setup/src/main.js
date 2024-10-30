import { createApp } from 'vue';
import { createStore } from 'vuex'; // 저장소 생성

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
});

const app = createApp(App);

app.use(store); // app.use를 호출해 저장소를 전달

app.mount('#app');
