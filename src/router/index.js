import Vue from "vue";
import Router from "vue-router";
import login from "../components/login/login.vue";
import register from "../components/register/register.vue";
import business from "../components/business/business.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: login
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
      name: "register",
      component: business
    }
  ]
});
