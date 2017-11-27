import Vue from "vue";
import Router from "vue-router";
import login from "../components/login/login.vue";
import register from "../components/register/register.vue";
import business from "../components/business/business.vue";
import businessleft from "../components/business/business-home.vue";
import businessCenter from "../components/business/business-center/business-center.vue";
import teamCenter from "../components/business/teamCenter/teamCenter.vue";
import assetsCenter from "../components/business/assetsCenter/assetsCenter.vue";
import StatsCentral from "../components/business/StatsCentral/StatsCentral.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      // name: 'register',
      component: register
    },
    {
      path: "/business",
      component: business,
      children: [
        { path: "", component: businessleft },
        { path: "bushome", component: businessleft },
        { path: "busCenter", component: businessCenter },
        { path: "teamCenter", component: teamCenter },
        { path: "assetsCenter", component: assetsCenter },
        { path: "StatsCentral", component: StatsCentral }
      ]
    }
  ]
});
