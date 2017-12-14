export default {
  // 新增地块
  addUser({ commit }, data) {
    commit("setplotadd", data);
  },
  // 删除地块
  delUser({ commit }, i) {
    commit("setplotdel", i);
  },
  // 用户名和id
  NameUser({ commit }, data) {
    commit("setuseifon", data);
  }
};
