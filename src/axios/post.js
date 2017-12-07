import api from "../components/common/api.js";
import Vue from "vue";
import axios from "axios";
Vue.prototype.$http = axios;

export default (common, pasme) => {
  return axios.post(api.apihost + common, pasme, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
};
// var pos = post("Login", {
//   phone_num: this.name,
//   email_addr: "",
//   password: this.pswd
// });
// pos
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
