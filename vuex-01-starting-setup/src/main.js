import { createApp } from 'vue';
import { createStore } from 'vuex'; // 저장소 생성

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      // 메서드는 자동으로 현재 상태를 인수로 받는다.(인수로 받도록 Vuex가 보장)
      state.counter = state.counter + 1;
    },
  },
});

const app = createApp(App);

app.use(store); // app.use를 호출해 저장소를 전달

app.mount('#app');
