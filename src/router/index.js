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
import peasant from "../components/peasant/peasant.vue";
import peasantHome from "../components/peasant/peasant-home.vue";
import peasantStats from "../components/peasant/StatsCentral/peasantStatsCentral.vue";
import peasantBotany from "../components/peasant/botanyCenter/botanyCenter.vue";
import peasantSoil from "../components/peasant/soilCenter/soilCenter.vue";
import protect from "../components/protectPlayers/protectPlayers.vue";
import protectHome from "../components/protectPlayers/protect-home.vue";
import protectMoney from "../components/protectPlayers/assetsCenter/assetsCenter.vue";
import protectBotany from "../components/protectPlayers/business-center/business-center.vue";
import protectTeam from "../components/protectPlayers/teamCenter/teamCenter.vue";
import protectStats from "../components/protectPlayers/StatsCentral/StatsCentral.vue";
import mybus from "../components/business/business-center/mybus/mybus.vue";
import publish from "../components/peasant/botanyCenter/publish/publish.vue";
import Myorder from "../components/peasant/botanyCenter/Myorder/Myorder.vue";
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
    // 值保商路由
    {
      path: "/business",
      component: business,
      children: [
        { path: "", component: businessleft },
        { path: "bushome", component: businessleft },
        {
          path: "busCenter",
          component: businessCenter,
          children: [{ path: "mybus", component: mybus }]
        },
        { path: "teamCenter", component: teamCenter },
        { path: "assetsCenter", component: assetsCenter },
        { path: "StatsCentral", component: StatsCentral }
      ]
    },
    // 农户路由
    {
      path: "/peasant",
      component: peasant,
      children: [
        { path: "", component: peasantHome },
        { path: "peasantHome", component: peasantHome },
        { path: "peasantStats", component: peasantStats },
        {
          path: "peasantBotany",
          component: peasantBotany,
          children: [
            { path: "publish", component: publish },
            {
              path: "Myorder",
              component: Myorder
            }
          ]
        },
        { path: "peasantSoil", component: peasantSoil }
      ]
    },
    {
      path: "/protect",
      component: protect,
      children: [
        { path: "", component: protectHome },
        { path: "peasantHome", component: protectHome },
        { path: "protectMoney", component: protectMoney },
        { path: "protectBotany", component: protectBotany },
        { path: "protectTeam", component: protectTeam },
        { path: "protectStats", component: protectStats }
      ]
    }
  ]
});
