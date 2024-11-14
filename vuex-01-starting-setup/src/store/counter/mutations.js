export default {
  increment(state) {
    // 메서드는 자동으로 현재 상태를 인수로 받는다.(인수로 받도록 Vuex가 보장)
    state.counter = state.counter + 1;
  },
  increase(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  },
};
