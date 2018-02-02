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
import management from "../components/protectPlayers/assetsCenter/Uavmanagement/Uavmanagement.vue";
import protectBotany from "../components/protectPlayers/business-center/business-center.vue";
import protectTeam from "../components/protectPlayers/teamCenter/teamCenter.vue";
import protectStats from "../components/protectPlayers/StatsCentral/StatsCentral.vue";
import mybuss from "../components/business/business-center/Myorder/Myorder.vue";
import publishs from "../components/business/business-center/publish/publish.vue";
import publish from "../components/peasant/botanyCenter/publish/publish.vue";
import Myorder from "../components/peasant/botanyCenter/Myorder/Myorder.vue";
import history from "../components/map/history.vue";
import tenant from "../components/business/teamCenter/tenant/tenant.vue";
import Teamadministration from "../components/business/teamCenter/Teamadministration/Teamadministration.vue";
import modified from "../components/business/modified/modified.vue";
import solicenter from "../components/business/soilCenter/soilCenter.vue";
import Uavmanagement from "../components/business/assetsCenter/Uavmanagement/Uavmanagement.vue";
import Allocation from "../components/business/assetsCenter/Allocation/Allocation.vue";
import JobStatistics from "../components/business/StatsCentral/JobStatistics/JobStatistics.vue";
import securityStatistics from "../components/business/StatsCentral/securityStatistics/securityStatistics.vue";
import teamStatistics from "../components/business/StatsCentral/teamStatistics/teamStatistics.vue";
import uavStatistics from "../components/business/StatsCentral/uavStatistics/uavStatistics.vue";
import flightpath from "../components/business/StatsCentral/flightpath/flightpath.vue";
import modifieds from "../components/peasant/modified/modified.vue";
import Profile from "../components/protectPlayers/Profile/Profile.vue";
import exploration from "../components/protectPlayers/business-center/exploration/exploration.vue";
import assignment from "../components/protectPlayers/business-center/assignment/assignment.vue";
import Jobreportupload from "../components/protectPlayers/business-center/exploration/Jobreportupload/Jobreportupload.vue";
import surveyreport from "../components/protectPlayers/business-center/assignment/surveyreport/surveyreport.vue";
import JobStatisticss from "../components/peasant/StatsCentral/JobStatistics/JobStatistics.vue";
import flightpaths from "../components/peasant/StatsCentral/flightpath/flightpath.vue";
import process from "../components/protectPlayers/StatsCentral/flightpath/flightpath.vue";
import jobmessage from "../components/protectPlayers/StatsCentral/JobStatistics/JobStatistics.vue";
import mybusot from "../components/protectPlayers/business-center/Myorder/Myorder.vue";
import pullsetplayers from "../components/protectPlayers/business-center/publish/publish.vue";
import statuscenter from "../components/protectPlayers/soilCenter/soilCenter.vue";
import affirm from "../components/peasant/botanyCenter/affirm/affirm.vue";
import evaluate from "../components/peasant/botanyCenter/evaluate/evaluate.vue";
import checkojb from "../components/peasant/checkojb/checkojb.vue";
import affirms from "../components/business/business-center/affirm/affirm.vue";
import evaluates from "../components/business/business-center/evaluate/evaluate.vue";
import affirmss from "../components/protectPlayers/business-center/affirm/affirm.vue";
import evaluatess from "../components/protectPlayers/business-center/evaluate/evaluate.vue";
import retrieve from "../components/retrievepssaword/retrieve.vue";
import receiving from "../components/protectPlayers/business-center/receiving/receiving.vue";
import receivings from "../components/business/business-center/receiving/receiving.vue";
import amendpassword from "../components/business/amendpassword/amendpassword.vue";
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
    { path: "/retrieve", component: retrieve },
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
          children: [
            { path: "", component: mybuss },
            { path: "mybuss", component: mybuss },
            { path: "publishs", component: publishs },
            { path: "affirms", component: affirms },
            { path: "evaluates", component: evaluates },
            { path: "receivings", component: receivings }
          ]
        },
        {
          path: "teamCenter",
          component: teamCenter,
          children: [
            { path: "", component: tenant },
            { path: "tenant", component: tenant },
            { path: "Teamadministration", component: Teamadministration }
          ]
        },
        {
          path: "assetsCenter",
          component: assetsCenter,
          children: [
            { path: "", component: Uavmanagement },
            { path: "Uavmanagement", component: Uavmanagement },
            { path: "Allocation", component: Allocation }
          ]
        },
        {
          path: "StatsCentral",
          component: StatsCentral,
          children: [
            { path: "", component: JobStatistics },
            { path: "JobStatistics", component: JobStatisticss },
            { path: "securityStatistics", component: securityStatistics },
            { path: "teamStatistics", component: teamStatistics },
            { path: "uavStatistics", component: uavStatistics },
            { path: "flightpath", component: flightpath }
          ]
        },
        { path: "modified", component: modified },
        { path: "solicenter", component: solicenter },
        { path: "checkojb", component: checkojb },
        { path: "amendpassword", component: amendpassword },
        { path: "history", component: history }
      ]
    },
    // 农户路由
    {
      path: "/peasant",
      component: peasant,
      children: [
        { path: "", component: peasantHome },
        { path: "peasantHome", component: peasantHome },
        {
          path: "peasantStats",
          component: peasantStats,
          children: [
            { path: "", component: JobStatisticss },
            { path: "JobStatisticss", component: JobStatisticss },
            { path: "flightpaths", component: flightpaths }
          ]
        },
        {
          path: "peasantBotany",
          component: peasantBotany,
          children: [
            { path: "", component: Myorder },
            { path: "publish", component: publish },
            { path: "Myorder", component: Myorder },
            { path: "affirm", component: affirm },
            { path: "evaluate", component: evaluate }
          ]
        },
        { path: "peasantSoil", component: peasantSoil },
        { path: "modifieds", component: modifieds },
        { path: "checkojb", component: checkojb },
        { path: "amendpassword", component: amendpassword }
      ]
    },
    // 值保队员路由
    {
      path: "/protect",
      component: protect,
      children: [
        { path: "", component: protectHome },
        { path: "peasantHome", component: protectHome },
        {
          path: "protectMoney",
          component: protectMoney,
          children: [
            { path: "", component: management },
            { path: "management", component: management }
          ]
        },
        {
          path: "protectBotany",
          component: protectBotany,
          children: [
            { path: "", component: mybusot },
            { path: "exploration", component: exploration },
            { path: "assignment", component: assignment },
            { path: "mybusot", component: mybusot },
            { path: "pullsetplayers", component: pullsetplayers },
            { path: "affirmss", component: affirmss },
            { path: "evaluatess", component: evaluatess },
            { path: "receiving", component: receiving }
          ]
        },
        {
          path: "protectStats",
          component: protectStats,
          children: [
            { path: "", component: jobmessage },
            { path: "process", component: process },
            { path: "jobmessage", component: JobStatisticss }
          ]
        },
        { path: "Profile", component: Profile },
        { path: "Jobreportupload", component: Jobreportupload },
        { path: "surveyreport", component: surveyreport },
        { path: "statuscenter", component: statuscenter },
        { path: "checkojb", component: checkojb },
        { path: "amendpassword", component: amendpassword }
      ]
    }
    // 地图路由
    // {
    //   path: "/history",
    //   component: history
    // }
  ]
});
