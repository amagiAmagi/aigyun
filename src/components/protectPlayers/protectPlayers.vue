<template>
<div>
   <div class="topbar">
   <div class="corent">
     <div class="min-logon">
       <img src="../../assets/小logo.gif" alt="">
     </div>
      <div class="tab-centersprot">
         <ul class="tab-centersprot-ul">
           <li class="tab-centersprot-ul-li home" @click="home" ref="home"><img src="../../assets/047.png" alt="" style="position: relative;top: 4px;"> 队员首页</li>
           <li class="tab-centersprot-ul-li" ref="statuscenter"><img src="../../assets/049.png" alt="" style="position: relative;top: 4px;"> 值保中心 <img src="../../assets/005.png" alt="" style="position: relative;top: -3px;">
              <ul class="oriented">
                <li class="oriented-li" @click="mybusot">我的订单</li>
                <li class="oriented-li" @click="plugis">发布订单</li>
                <li class="oriented-li" @click="exploration">工勘中心</li>
                <li class="oriented-li" @click="assignment">作业中心</li>
                <li @click="receiving" class="oriented-li">接单中心</li>
                <li class="oriented-li" @click="affirm">确认订单</li>
                <li class="oriented-li" @click="evaluate">评价订单</li>
              </ul>
           </li>
           <li class="tab-centersprot-ul-li" @click="botany" ref="botany"><img src="../../assets/002.png" alt="" style="position: relative;top: 3px;"> 地块中心</li>
           <li class="tab-centersprot-ul-li" @click="management" ref="management"><img src="../../assets/051.png" alt=""> 资产中心 <img src="../../assets/005.png" alt="" style="position: relative;top: -3px;">
              <ul class="oriented">
                <li class="oriented-li" @click="management">无人机管理</li>
              </ul>
           </li>
           <li class="tab-centersprot-ul-li" ref="protectStats"><img src="../../assets/001.png" alt=""> 统计中心 <img src="../../assets/005.png" alt="" style="position: relative;top: -3px;">
              <ul class="oriented">
                <li class="oriented-li" @click="jobmessage">作业统计</li>
                <li class="oriented-li" @click="process">飞行轨迹</li>
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
            <i class="xialass">
              <img src="../../assets/Down 2.png" alt="">
            </i>
            <img :src="pic_url_1" alt="" class="pic_url_1">
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
.home {
  box-sizing: border-box;
  border-bottom: 2px solid #0094ff;
}
.centers {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}

.left {
  width: 312px;
  background-color: #4c5e70;
  padding: 22px 14px;
  position: fixed;
  top: 70px;
  height: 100%;
}
.pic_url_1 {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.conter {
  padding-top: 70px;
  margin-left: 340px;
  padding-left: 14px;
}
.topbar {
  width: 100%;
  height: 70px;
  background-color: #d5dde4;
  position: fixed;
  box-sizing: border-box;
  z-index: 2;
}
.corent {
  width: 1200px;
  height: 70px;
  /* background-color: red; */
  position: fixed;
  left: 50%;
  margin-left: -600px;
}

.personal {
  width: 170px;
  height: 70px;
  /* background-color: red; */
  position: absolute;
  right: 0;
  top: 0;
}
.personal-left {
  width: 50px;
  position: relative;
  right: 40px;
}
.personal-right {
  width: 150px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
.personal-right img {
  position: absolute;
  right: 0;
  top: 10px;
}
.personal-right span {
  font-size: 14px;
  position: absolute;
  left: 15px;
  top: 25px;
}
.xialass {
  position: absolute;
  left: 100px;
  top: 20px;
}
.el-icon-bell {
  line-height: 70px;
  margin-left: 15px;
  position: absolute;
  right: 5px;
  top: 0px;
}

.shu {
  width: 1px;
  height: 26px;
  background-color: #666;
  position: absolute;
  right: 0;
  top: 22px;
}
.min-logon {
  width: 340px;
  height: 70px;
  padding: 5px 120px;
}
.tab-centersprot {
  width: 600px;
  position: relative;
  top: -80px;
  height: 70px;
  left: 340px;
  /* background-color: red; */
}
a {
  color: #000;
}
.xgzls {
  position: absolute;
  font-size: 12px;
  width: 120px;
  height: 0px;
  top: 70px;
  left: 0px;
  background-color: #d5dde4;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
}
.personal-right:hover .xgzls {
  transition: all 0.5s;
  height: 120px;
}
.xgzls p {
  height: 40px;
  line-height: 40px;
  margin: 0;
}
.xgzls p:hover {
  color: #0094ff;
  background-color: #e3edf6;
}

.jiange {
  position: absolute;
  right: 0;
  color: #000;
}
.tab-centersprot-ul {
  margin: 0;
  padding: 0;
}
.tab-centersprot-ul-li {
  width: 120px;
  height: 70px;
  float: left;
  line-height: 70px;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.oriented {
  width: 120px;
  height: 0;
  overflow: hidden;
  position: absolute;
  left: 0;
  z-index: 2;
  background-color: #d5dde4;
  padding: 0;
}
.tab-centersprot-ul-li:nth-of-type(2):hover .oriented {
  transition: all 0.5s;
  height: 280px;
}
.tab-centersprot-ul-li:nth-of-type(4):hover .oriented {
  transition: all 0.5s;
  height: 40px;
}
.tab-centersprot-ul-li:nth-of-type(5):hover .oriented {
  transition: all 0.5s;
  height: 80px;
}
.oriented-li {
  width: 120px;
  height: 40px;
  line-height: 40px;
  background-color: #d5dde4;
  text-align: center;
}
.oriented-li:hover {
  color: #0094ff;
  background-color: #e3edf6;
}
</style>
<script>
import api from "../common/api";
export default {
  data() {
    return {
      id: "",
      name: "",
      pic_url_1: ""
    };
  },
  created() {},
  methods: {
    open() {
      location.href = "#/protect/Profile";
    },
    home: function() {
      location.href = "#/protect/peasantHome";
      this.$refs.botany.className = "tab-centersprot-ul-li";
      this.$refs.home.className = "tab-centersprot-ul-li home";
      this.$refs.management.className = "tab-centersprot-ul-li";
      this.$refs.protectStats.className = "tab-centersprot-ul-li";
      this.$refs.statuscenter.className = "tab-centersprot-ul-li";
    },
    botany: function() {
      this.$refs.botany.className = "tab-centersprot-ul-li home";
      this.$refs.home.className = "tab-centersprot-ul-li";
      this.$refs.management.className = "tab-centersprot-ul-li";
      this.$refs.protectStats.className = "tab-centersprot-ul-li";
      this.$refs.statuscenter.className = "tab-centersprot-ul-li";
      location.href = "#/protect/statuscenter";
    },
    management: function() {
      this.$refs.management.className = "tab-centersprot-ul-li home";
      this.$refs.botany.className = "tab-centersprot-ul-li";
      this.$refs.home.className = "tab-centersprot-ul-li";
      location.href = "#/protect/protectMoney/management";
      this.$refs.protectStats.className = "tab-centersprot-ul-li";
      this.$refs.statuscenter.className = "tab-centersprot-ul-li";
    },
    process: function() {
      this.$refs.protectStats.className = "tab-centersprot-ul-li home";
      this.$refs.management.className = "tab-centersprot-ul-li";
      this.$refs.botany.className = "tab-centersprot-ul-li";
      this.$refs.home.className = "tab-centersprot-ul-li";
      this.$refs.statuscenter.className = "tab-centersprot-ul-li";
      location.href = "#/protect/protectStats/process";
    },
    jobmessage: function() {
      this.$refs.protectStats.className = "tab-centersprot-ul-li home";
      this.$refs.management.className = "tab-centersprot-ul-li";
      this.$refs.botany.className = "tab-centersprot-ul-li";
      this.$refs.home.className = "tab-centersprot-ul-li";
      this.$refs.statuscenter.className = "tab-centersprot-ul-li";
      location.href = "#/protect/protectStats/jobmessage";
    },
    mybusot: function() {
      location.href = "#/protect/protectBotany/mybusot";
      this.statuscenter();
    },
    receiving: function() {
      location.href = "#/protect/protectBotany/receiving";
      this.statuscenter();
    },
    plugis: function() {
      location.href = "#/protect/protectBotany/pullsetplayers";
      this.statuscenter();
    },
    exploration: function() {
      location.href = "#/protect/protectBotany/exploration";
      this.statuscenter();
    },
    assignment: function() {
      location.href = "#/protect/protectBotany/assignment";
      this.statuscenter();
    },
    affirm: function() {
      location.href = "#/protect/protectBotany/affirmss";
      this.statuscenter();
    },
    evaluate: function() {
      location.href = "#/protect/protectBotany/evaluatess";
      this.statuscenter();
    },
    statuscenter: function() {
      this.$refs.statuscenter.className = "tab-centersprot-ul-li home";
      this.$refs.protectStats.className = "tab-centersprot-ul-li";
      this.$refs.management.className = "tab-centersprot-ul-li";
      this.$refs.botany.className = "tab-centersprot-ul-li";
      this.$refs.home.className = "tab-centersprot-ul-li";
    },
    write: function() {
      location.href = "#/login";
      window.sessionStorage.removeItem("id");
    },
    amendpassword: function() {
      location.href = "#/protect/amendpassword";
    },
    getuseid: function() {
      this.id = window.sessionStorage.getItem("id");
      console.log(this.id);
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
            this.pic_url_1 = res.data.attachment.pic_url_1;
          }
        });
    }
  },
  mounted() {
    this.getuseid();
    this.getuseifon();
  }
};
</script>
