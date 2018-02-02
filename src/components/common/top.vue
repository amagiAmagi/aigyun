<template>
  <div class="topbar">
    <div class="corent">
      <div class="min-logon">
        <img src="../../assets/log-login-log.png" alt="">
      </div>
      <div class="tab-centersrs">

        <ul class="poityrhome-ul">
          <li class="poityrhome-ul-li" ref="home" @click="home"> 值保商首页</li>
          <li class="poityrhome-ul-li" ref="insuty"> 值保中心 <img src="../../assets/005.png" alt="" style="position: relative;top: -3px;">
            <ul class="insurance">
                <li class="insurance-li" @click="Myord">我的订单</li>
                <li class="insurance-li" @click="pubsh">发布订单</li>
                <li class="insurance-li" @click="receivings">接单中心</li>
                <li class="insurance-li" @click="affim">确认订单</li>
                <li class="insurance-li" @click="evauat">评价订单</li>
            </ul>
          </li>
          <li class="poityrhome-ul-li" @click="solits" ref="solits"> 地块中心</li>
          <li class="poityrhome-ul-li" ref="teamcenter"> 团队中心 <img src="../../assets/005.png" alt="" style="position: relative;top: -3px;">
            <ul class="teamcenter">
                <li class="insurance-li" @click="team">值保队管理</li>
                <li class="insurance-li" @click="teamtatistes">队员管理</li>
            </ul>
          </li>
          <li class="poityrhome-ul-li" ref="assetsCenter"> 资产中心 <img src="../../assets/005.png" alt="" style="position: relative;top: -3px;">
            <ul class="assetsCenter">
              <li class="insurance-li" @click="Uavmanagement">无人机管理</li>
              <li class="insurance-li" @click="Allocation">无人机分配</li>
            </ul>
          </li>
          <li class="poityrhome-ul-li" ref="StatsCentra"> 统计中心 <img src="../../assets/005.png" alt="" style="position: relative;top: -3px;">
            <ul class="StatsCentra">
              <li class="insurance-li" @click="StatsCentra1">作业统计</li>
              <li class="insurance-li" @click="StatsCentra2">值保队统计</li>
              <li class="insurance-li" @click="StatsCentra3">队员统计</li>
              <li class="insurance-li" @click="StatsCentra4">无人机统计</li>
              <li class="insurance-li" @click="StatsCentra5">实时轨迹</li>
            </ul>
          </li>
        </ul>

      </div>
      <div class="personals">
        <div class="personal-lefts">
          <i class="el-icon-bell" style="font-size: 20px"></i>
          <span class="shu"></span>
        </div>
        <div class="personal-rights">
          <span>{{ifon.real_name_leader}}</span>
          <i class="xiala">
                  <img src="../../assets/005.png" alt="">
                </i>
          <img :src="ifon.ppsp_logo_1" alt="" class="touxiang">
          <div class="xgzls">
            <p @click="open">修改资料</p>
            <p @click="amendpassword">修改密码</p>
            <p @click="write">注销</p>
          </div>
        </div>
      </div>
    </div>


  </div>

<!-- <img src="../../assets/001.png" alt=""> -->
</template>

<style>
.poityrhome-ul {
  margin: 0;
  padding: 0;
}
.poityrhome-ul-li {
  width: 110px;
  height: 70px;
  line-height: 70px;
  float: left;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.StatsCentra,
.assetsCenter,
.teamcenter,
.insurance {
  width: 110px;
  height: 0;
  overflow: hidden;
  position: absolute;
  left: 0;
  padding: 0;
  z-index: 2;
  background-color: #d5dde4;
  padding: 0;
}
.insurance-li {
  width: 110px;
  height: 40px;
  line-height: 40px;
  background-color: #d5dde4;
  text-align: center;
}
.insurance-li:hover {
  color: #0094ff;
  background-color: #e3edf6;
}
.poityrhome-ul-li:nth-of-type(2):hover .insurance {
  transition: all 0.5s;
  height: 200px;
}
.poityrhome-ul-li:nth-of-type(4):hover .teamcenter {
  transition: all 0.5s;
  height: 80px;
}
.poityrhome-ul-li:nth-of-type(5):hover .assetsCenter {
  transition: all 0.5s;
  height: 80px;
}
.poityrhome-ul-li:nth-of-type(6):hover .StatsCentra {
  transition: all 0.5s;
  height: 200px;
}
.home {
  box-sizing: border-box;
  border-bottom: 2px solid #0094ff;
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
.personal-rights:hover .xgzls {
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

.personals {
  width: 200px;
  height: 70px;
  position: absolute;
  right: 0;
  top: 0;
}
.personal-lefts {
  width: 50px;
  height: 70px;
  line-height: 70px;
  position: relative;
}
.personal-rights {
  width: 150px;
  position: absolute;
  right: 0;
  top: 0;
  height: 70px;
}

.touxiang {
  width: 42px;
  height: 42px;
  position: absolute;
  right: 0;
  top: 14px;
  border-radius: 50%;
  /* border: 0 solid transparent; */
}
.personal-rights span {
  font-size: 14px;
  position: absolute;
  left: 15px;
  top: 25px;
  text-align: center;
}
.xiala {
  position: absolute;
  left: 100px;
  top: 20px;
}
.personal-lefts .el-icon-bell {
  margin-left: 15px;
  top: 24px;
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
.tab-centersrs {
  width: 660px;
  position: relative;
  top: -80px;
  height: 70px;
  left: 340px;
  /* padding-left: 14px; */
  /* background-color: red; */
}
</style>
<script>
import api from "../common/api";
export default {
  data() {
    return {
      useifon: [],
      ifon: {}
    };
  },
  created() {},
  methods: {
    open: function() {
      location.href = "#/business/modified";
    },
    getbusinessnameuse: function() {
      const id = window.sessionStorage.getItem("id");
      this.$http
        .post(
          api.apihost + "GetUserIndexInfo",
          {
            reg_id: id
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            const ifon = {
              real_name_leader: res.data.attachment.real_name_leader,
              ppsp_logo_1: res.data.attachment.ppsp_logo_1
            };
            this.$store.commit("getuseifon", ifon);
            window.sessionStorage.setItem("getifon", JSON.stringify(ifon));
            this.ifon = this.useifon[0];
          }
        });
      this.useifon = this.$store.getters.getuseifon;
      console.log(this.useifon);
      if (this.useifon.length == 0) {
        console.log(111111111111);
        const ifon = JSON.parse(window.sessionStorage.getItem("getifon"));
        this.$store.commit("getuseifon", ifon);
      }
      this.useifon = this.$store.getters.getuseifon;
      console.log(this.useifon);
      this.ifon = this.useifon[0];
    },
    home: function() {
      this.$refs.home.className = "poityrhome-ul-li home";
      this.$refs.insuty.className = "poityrhome-ul-li";
      this.$refs.solits.className = "poityrhome-ul-li";
      this.$refs.teamcenter.className = "poityrhome-ul-li";
      this.$refs.assetsCenter.className = "poityrhome-ul-li";
      this.$refs.StatsCentra.className = "poityrhome-ul-li";

      location.href = "#/business/bushome";
    },
    Myord: function() {
      location.href = "#/business/busCenter/mybuss";
      this.poit();
    },
    pubsh: function() {
      location.href = "#/business/busCenter/publishs";
      this.poit();
    },
    receivings: function() {
      location.href = "#/business/busCenter/receivings";
      this.poit();
    },
    affim: function() {
      location.href = "#/business/busCenter/affirms";
      this.poit();
    },
    evauat: function() {
      location.href = "#/business/busCenter/evaluates";
      this.poit();
    },
    poit: function() {
      this.$refs.insuty.className = "poityrhome-ul-li home";
      this.$refs.home.className = "poityrhome-ul-li";
      this.$refs.solits.className = "poityrhome-ul-li";
      this.$refs.teamcenter.className = "poityrhome-ul-li";
      this.$refs.assetsCenter.className = "poityrhome-ul-li";
      this.$refs.StatsCentra.className = "poityrhome-ul-li";
    },
    solits: function() {
      location.href = "#/business/solicenter";
      this.$refs.solits.className = "poityrhome-ul-li home";
      this.$refs.insuty.className = "poityrhome-ul-li";
      this.$refs.home.className = "poityrhome-ul-li";
      this.$refs.teamcenter.className = "poityrhome-ul-li";
      this.$refs.assetsCenter.className = "poityrhome-ul-li";
      this.$refs.StatsCentra.className = "poityrhome-ul-li";
    },
    team: function() {
      location.href = "#/business/teamCenter/tenant";
      this.$refs.teamcenter.className = "poityrhome-ul-li home";
      this.$refs.solits.className = "poityrhome-ul-li";
      this.$refs.insuty.className = "poityrhome-ul-li";
      this.$refs.home.className = "poityrhome-ul-li";
      this.$refs.assetsCenter.className = "poityrhome-ul-li";
      this.$refs.StatsCentra.className = "poityrhome-ul-li";
    },
    teamtatistes: function() {
      location.href = "#/business/teamCenter/Teamadministration";
      this.$refs.teamcenter.className = "poityrhome-ul-li home";
      this.$refs.solits.className = "poityrhome-ul-li";
      this.$refs.insuty.className = "poityrhome-ul-li";
      this.$refs.home.className = "poityrhome-ul-li";
      this.$refs.assetsCenter.className = "poityrhome-ul-li";
      this.$refs.StatsCentra.className = "poityrhome-ul-li";
    },
    Uavmanagement: function() {
      location.href = "#/business/assetsCenter/Uavmanagement";
      this.$refs.assetsCenter.className = "poityrhome-ul-li home";
      this.$refs.teamcenter.className = "poityrhome-ul-li";
      this.$refs.solits.className = "poityrhome-ul-li";
      this.$refs.insuty.className = "poityrhome-ul-li";
      this.$refs.home.className = "poityrhome-ul-li";
      this.$refs.StatsCentra.className = "poityrhome-ul-li";
    },
    Allocation: function() {
      location.href = "#/business/assetsCenter/Allocation";
      this.$refs.assetsCenter.className = "poityrhome-ul-li home";
      this.$refs.teamcenter.className = "poityrhome-ul-li";
      this.$refs.solits.className = "poityrhome-ul-li";
      this.$refs.insuty.className = "poityrhome-ul-li";
      this.$refs.home.className = "poityrhome-ul-li";
      this.$refs.StatsCentra.className = "poityrhome-ul-li";
    },
    StatsCentra1: function() {
      location.href = "#/business/StatsCentral/JobStatistics";
      this.StatsCentra();
    },
    StatsCentra2: function() {
      location.href = "#/business/StatsCentral/securityStatistics";
      this.StatsCentra();
    },
    StatsCentra3: function() {
      location.href = "#/business/StatsCentral/teamStatistics";
      this.StatsCentra();
    },
    StatsCentra4: function() {
      location.href = "#/business/StatsCentral/uavStatistics";
      this.StatsCentra();
    },
    StatsCentra5: function() {
      location.href = "#/business/StatsCentral/flightpath";
      this.StatsCentra();
    },
    StatsCentra: function() {
      this.$refs.StatsCentra.className = "poityrhome-ul-li home";
      this.$refs.assetsCenter.className = "poityrhome-ul-li";
      this.$refs.teamcenter.className = "poityrhome-ul-li";
      this.$refs.solits.className = "poityrhome-ul-li";
      this.$refs.insuty.className = "poityrhome-ul-li";
      this.$refs.home.className = "poityrhome-ul-li";
    },
    write: function() {
      window.sessionStorage.removeItem("id");
      console.log(window.sessionStorage.getItem("id"));
      location.href = "#/login";
    },
    amendpassword: function() {
      location.href = "#/business/amendpassword";
    }
  },
  mounted() {
    this.getbusinessnameuse();
    this.home();
  }
};
</script>
