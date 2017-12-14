import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const state = {
  // 农户统计信息
  peasantUseList: [],
  // 农户地块
  peasantPorlList: [],
  // 农户id
  peasantId: [],
  // 农户值保状态
  processList: [],
  peasant: ""
};
// import * as types from "./mutations-types.js";
import mutations from "./mutations.js";
import * as getters from "./getters.js";
import actions from "./actions.js";

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions

  // plugins: [createPersistedState({ storage: window.sessionStorage })]
});
