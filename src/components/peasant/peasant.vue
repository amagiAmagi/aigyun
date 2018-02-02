<template>
  <div>
    <div class="topbar">
      <div class="corent">
        <div class="min-logon">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="tabs-centers">
          <ul class="tab-centers-ul">
            <li class="tab-centers-ul-li" @click="home" ref="home"><img src="../../assets/047.png" alt="" style="position: relative;top: 4px;"> 农户首页</li>
            <li class="tab-centers-ul-li" ref="poit"><img src="../../assets/049.png" alt="" style="position: relative;top: 3px;"> 值保中心 <img src="../../assets/005.png" alt="" style="position: relative;top: -3px;">
              <ul class="point">
                <li class="point-li" @click="Myord">我的订单</li>
                <li class="point-li" @click="pubsh">发布订单</li>
                <li class="point-li" @click="affim">确认订单</li>
                <li class="point-li" @click="evauat">评价订单</li>
              </ul>
            </li>
            <li class="tab-centers-ul-li" @click="solits" ref="solits"><img src="../../assets/002.png" alt="" style="position: relative;top: 3px;"> 地块中心</li>
            <li class="tab-centers-ul-li" ref="state"><img src="../../assets/001.png" alt=""> 统计中心 <img src="../../assets/005.png" alt="" style="position: relative;top: -3px;">
              <ul class="states">
                <li class="states-li" @click="objstate">作业统计</li>
                <li class="states-li" @click="filter">实时轨迹</li>
              </ul>
            </li>
          </ul>

      </div>
      <div class="personal">
        <div class="personal-left">
          <i class="el-icon-bell" style="font-size: 20px"></i>
          <span class="shu"></span>
        </div>
        <div class="personal-right">
            <span>{{name}}</span>
            <i class="xiala">
              <img src="../../assets/005.png" alt="">
            </i>
            <img :src="url" class="toux">
            <div class="xgzls">
                <p @click="open">修改资料</p>
                <p @click="amendpassword">修改密码</p>
                <p @click="write">注销</p>
            </div>
        </div>

      </div>
   </div>
  </div>
  <router-view></router-view>
</div>
</template>

<style>

</style>

<script>
import "./peasant.css";
import api from "../common/api";
export default {
  data() {
    return {
      plot: {},
      id: "",
      name: "",
      url: ""
    };
  },
  methods: {
    open: function() {
      location.href = "#/peasant/modifieds";
    },
    home: function() {
      location.href = "#/peasant/peasantHome";
      this.$refs.home.className = "tab-centers-ul-li home";
      this.$refs.solits.className = "tab-centers-ul-li";
      this.$refs.poit.className = "tab-centers-ul-li";
      this.$refs.state.className = "tab-centers-ul-li";
    },
    solits: function() {
      location.href = "#/peasant/peasantSoil";
      this.$refs.home.className = "tab-centers-ul-li";
      this.$refs.poit.className = "tab-centers-ul-li";
      this.$refs.state.className = "tab-centers-ul-li";
      this.$refs.solits.className = "tab-centers-ul-li home";
    },
    Myord: function() {
      location.href = "#/peasant/peasantBotany/Myorder";
      this.poit();
    },
    pubsh: function() {
      location.href = "#/peasant/peasantBotany/publish";
      this.poit();
    },
    affim: function() {
      location.href = "#/peasant/peasantBotany/affirm";
      this.poit();
    },
    evauat: function() {
      location.href = "#/peasant/peasantBotany/evaluate";
      this.poit();
    },
    poit: function() {
      this.$refs.poit.className = "tab-centers-ul-li home";
      this.$refs.home.className = "tab-centers-ul-li";
      this.$refs.solits.className = "tab-centers-ul-li";
      this.$refs.state.className = "tab-centers-ul-li";
    },
    objstate: function() {
      this.$refs.state.className = "tab-centers-ul-li home";
      this.$refs.poit.className = "tab-centers-ul-li";
      this.$refs.home.className = "tab-centers-ul-li";
      this.$refs.solits.className = "tab-centers-ul-li";
      location.href = "#/peasant/peasantStats/JobStatisticss";
    },
    filter: function() {
      this.$refs.state.className = "tab-centers-ul-li home";
      this.$refs.poit.className = "tab-centers-ul-li";
      this.$refs.home.className = "tab-centers-ul-li";
      this.$refs.solits.className = "tab-centers-ul-li";
      location.href = "#/peasant/peasantStats/flightpaths";
    },
    write: function() {
      window.sessionStorage.removeItem("id");
      console.log(window.sessionStorage.getItem("id"));
      location.href = "#/login";
    },
    amendpassword: function() {
      location.href = "#/peasant/amendpassword";
    },
    getuseid: function() {
      this.id = window.sessionStorage.getItem("id");
    },
    getuseifon: function() {
      this.$http
        .post(
          api.apihost + "GetUserIndexInfo",
          {
            reg_id: this.id
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 0) {
            this.name = res.data.attachment.real_name;
            this.url = res.data.attachment.avatar_url;
          }
        });
    }
  },
  created() {},
  mounted() {
    this.getuseid();
    this.getuseifon();
    this.home();
  }
};
</script>
