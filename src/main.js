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
import store from "./store/index.js";
import api from "./components/common/api.js";
import VueAMap from "vue-amap";
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 高德的key
  key: "e6028e37338ad27a169d4bc63a32a0ec",
  // 插件集合
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ]
});
import BaiduMap from "vue-baidu-map";

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "tQjkPjZdaohQAK5V25eCanw2anfBh62D"
});
Vue.config.productionTip = false;

// 封装时间过滤器

Vue.filter("time", function(val) {
  var date = new Date(val * 1000);
  var Y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  if (m < 10) {
    m = "0" + m;
  }
  if (d < 10) {
    d = "0" + d;
  }
  var t = Y + "-" + m + "-" + d;
  return t;
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
