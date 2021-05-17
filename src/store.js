import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personajes: [],
    personaje: null
  },
  mutations: {
    establecerState(state, data) {
      state[data[0]] = data[1];
    }
  },
  actions: {}
});
