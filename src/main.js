// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import $ from 'jquery'
Vue.use(ElementUI);
import "vue-event-calendar/dist/style.css"; //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from "vue-event-calendar";
Vue.use(vueEventCalendar, { locale: "en" }); //可以设置语言，支持中文和英文
import axios from "axios";
Vue.prototype.$http = axios;
import fullCalendar from "vue-fullcalendar";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
Vue.component("full-calendar", fullCalendar);
import store from "../store/store.js";
// import api from "../axios/api/api.js";
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
