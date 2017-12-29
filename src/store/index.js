// import "babel-polyfill";
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
  peasant: "",
  // 值保商的id
  businessid: "",
  // 值保商名字头像
  businessnameuse: {},
  // 值保商的值保队数据
  businessprasData: {},
  // 值保商的质保队员数据
  businessteam: {},
  // 值保商的订单状态
  businesstasks: [],
  // 值保商无人机数量
  businessuavs: [],
  // 值保商总面积
  work_ares: "",
  // 值保商飞行总里程
  work_length: "",
  // 值保无人机总数
  num_uavs: "",
  // 值保商评分
  rate: "",
  // 值保商地块
  peasantPorlLists: [],
  peasants: "",
  // 值保商值保队的数据
  businessprotectList: [],
  // 全部队员信息
  businessteamAll: [],
  // 已分配值保队的队员信息
  businessdeployed: [],
  // 未分配值保队的队员信息
  businessundeployed: []
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
