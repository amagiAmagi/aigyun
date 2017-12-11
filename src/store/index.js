import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  peasantUseList: []
};

import mutations from "./mutations.js";
import getters from "./getters.js";

export default new Vuex.Store({
  state,
  mutations,
  getters
});
