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

  deltePeasant: function(state) {
    state.peasantPorlList = [];
  },

  // 值保商机构的id
  business: function(state, data) {
    state.businessid = data;
  },
  // 值保商名字和头像
  businessnameuse: function(state, data) {
    state.businessnameuse = data;
  },
  // 值保商值保队的数据
  businessprasData: function(state, data) {
    state.businessprasData = data;
  },
  // 值保商质保队员数据
  businessteam: function(state, data) {
    state.businessteam = data;
  },
  // 值保商订单状态
  businesstasks: function(state, data) {
    state.businesstasks = data;
  },
  // 值保商无人机状态
  businessuavs: function(state, data) {
    state.businessuavs = data;
  },
  // 值保商总面积
  businesswork_ares: function(state, data) {
    state.work_ares = data;
  },
  // 值保商飞行总距离
  businesswork_length: function(state, data) {
    state.work_length = data;
  },
  // 值保商无人机总数
  num_uavs: function(state, data) {
    state.num_uavs = data;
  },
  // 值保商评分
  rate: function(state, data) {
    state.rate = data;
  },

  //值保商地块数量
  peasants: function(state, data) {
    state.peasants = data;
  },
  // 删除值保商地块的时候数量减一
  delpeasants: function(state) {
    state.peasants--;
  },
  // 新增值保商地块的时候数量加一
  addpeasants: function(state) {
    state.peasants++;
  },
  // 值保商地块的数据
  setusepolts: function(state, data) {
    state.peasantPorlLists.push(data);
    console.log(state.peasantPorlLists);
  },
  // 新增值保商地块
  setplotadds: function(state, data) {
    state.peasantPorlLists[0].push(data);
    console.log(state.peasantPorlLists[0]);
  },
  // 删除值保商地块
  setplotdels: function(state, index) {
    state.peasantPorlLists[0].splice(index, 1);
  },
  // 初始化值保商地块
  deltePeasants: function(state) {
    state.peasantPorlLists = [];
  },
  // 获取值保商值保队的数据
  businessprotectList: function(state, data) {
    state.businessprotectList = data;
  },
  // 删除值保商值保队
  removebusinessprotectList: function(state, index) {
    state.businessprotectList.splice(index, 1);
  },
  // 值保商全部值保队员信息
  businessteamAll: function(state, data) {
    state.businessteamAll = data;
  },
  // 值保商已分配值保队员的信息
  businessdeployed: function(state, data) {
    state.businessdeployed = data;
  },
  // 值保商未分配值保队员的信息
  businessundeployed: function(state, data) {
    state.businessundeployed = data;
  },
  // 删除值保商值保队员的信息
  removebusinessteamAllt: function(state, index) {
    state.businessteamAll.splice(index, 1);
  },
  // 删除值保商值保队员的信息
  removebusinessdeployed: function(state, index) {
    state.businessdeployed.splice(index, 1);
  },
  // 删除值保商值保队员的信息
  removebusinessundeployed: function(state, index) {
    state.businessundeployed.splice(index, 1);
    console.log(state.businessundeployed);
  },
  // 获取无人机数据
  setuavList: function(state, data) {
    state.uavList = data;
    console.log(state.uavList);
  },
  getuseifon: function(state, data) {
    state.getifon[0] = data;
  },

  setfiightpath: function(state, data) {
    state.fiightpath = data;
  }
};
