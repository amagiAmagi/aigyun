// import default from "./index";

// import * as types from "./mutations-types.js";

export default {
  // 农户的id,名字和头像
  setuseifon: function(state, data) {
    state.peasantId.push(data);
  },
  // 农户首页统计的数据
  setuseindex: function(state, data) {
    state.peasantUseList.push(data);
    console.log(state.peasantUseList);
  },
  // 农户首页地块的数据
  setusepolt: function(state, data) {
    state.peasantPorlList.push(data);
    console.log(state.peasantPorlList);
  },
  // 新增农户地块
  setplotadd: function(state, data) {
    state.peasantPorlList[0].push(data);
    console.log(state.peasantPorlList[0]);
  },
  // 删除农户地块
  setplotdel: function(state, index) {
    state.peasantPorlList[0].splice(index, 1);
  },
  // 农户首页值保流程的数据
  setplresee: function(state, data) {
    state.processList.push(process);
  },
  //农户地块数量

  peasant: function(state, data) {
    state.peasant = data;
  },
  // 删除地块的时候数量减一
  delpeasant: function(state) {
    state.peasant--;
  },
  // 新增地块的时候数量加一
  addpeasant: function(state) {
    state.peasant++;
  },
  deltePeasant: function(state) {
    state.peasantPorlList = [];
  }
};
