import counterMutations from './mutations.js';
import counterActionss from './actions.js';
import counterGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActionss,
  getters: counterGetters,
};
