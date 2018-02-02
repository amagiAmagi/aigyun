<template>
  <div class="centers">
    <div class="left">
      <day></day>
      <weather></weather>
    </div>
    <div class="conter">
     <!-- 欢迎语 -->
      <div class="teates">
        <div class="name">您好！{{name}}</div>
        <p>欢迎登录爱极云，请检查您最新项目和代办事情</p>
      </div>
      <!-- 值保流程 -->
        <div class="process">
          <div class="zblc">
            值保流程
          </div>
          <ul class="zblcxq">
            <li>
              <img src="../../assets/值保商首页/15.png" alt="">
              <span>待接订单数</span>
              <span class="figure">{{businesstasksList[0] == ""?0:businesstasksList[0]}}</span>
            </li>
             <li>
              <img  src="../../assets/值保商首页/16.png" alt="">
              <span>待分配订单数</span>
              <span class="figure">{{businesstasksList[1]== ""?0:businesstasksList[1]}}</span>
            </li>
             <li>
              <img src="../../assets/值保商首页/18.png" alt="">
              <span>施工中订单数</span>
              <span class="figure">{{businesstasksList[2]== ""?0:businesstasksList[2]}}</span>
            </li>
             <li>
              <img  src="../../assets/值保商首页/19.png" alt="">
              <span>待确认订单数</span>
              <span class="figure">{{businesstasksList[3]== ""?0:businesstasksList[3]}}</span>
            </li>
             <li>
              <img  src="../../assets/值保商首页/20.png" alt="">
              <span>已完成订单数</span>
              <span class="figure">{{businesstasksList[4]== ""?0:businesstasksList[4]}}</span>
            </li>
             <li>
              <img src="../../assets/值保商首页/21.png" alt="">
              <span>发起值保订单</span>
            </li>
          </ul>
        </div>
        <!-- 值保工作状态 -->
        <div class="zbsgzzt">
          值保商工作状态
        </div>
        <div class="zbzt">
          <ul class="ztlc">
            <li>
              <div class="ztlc-li-top">
                <img src="../../assets/值保商首页/icon_gk.png" alt="">
                <p>{{useifon}}</p>
              </div>
              <div class="ztlc-li-center">
                <p>
                  <img src="../../assets/值保商首页/icon_field.png" alt="">
                  <span>作业<span> {{work_ares}} </span>亩</span>
                </p>
                <p>
                  <img  src="../../assets/值保商首页/icon_mileage.png" alt="">
                  <span>飞行<span> {{work_length}} </span>千米</span>
                </p>
                <p>
                  <img src="../../assets/值保商首页/icon_praise.png" alt="">

                    <el-rate v-model="value5" disabled show-score text-color="#ff9900" class="pinkfer">
                    </el-rate>
                    <div class="cover">

                    </div>
                </p>
              </div>
            </li>
            <li>
              <div class="ztlc-li-top">
                <img src="../../assets/值保商首页/icon_plane.png" alt="">
                <p>无人机<span> {{num_uavs}} </span>架</p>
              </div>
              <div class="ztlc-li-center">
                <p>
                  <img src="../../assets/值保商首页/icon_working.png" alt="">
                  <span>作业中 &nbsp;&nbsp;&nbsp;<span>{{businessuavsList[0]}}</span></span>
                </p>
                <p>
                  <img  src="../../assets/值保商首页/icon_free.png" alt="">
                  <span>空闲中 &nbsp;&nbsp;&nbsp;<span>{{businessuavsList[1]}}</span></span>
                </p>
                <p>
                  <img src="../../assets/值保商首页/icon_repair.png" alt="">
                  <span>维修中 &nbsp;&nbsp;&nbsp;<span>{{businessuavsList[2]}}</span></span>
                </p>
              </div>
            </li>
             <li>
              <div class="ztlc-li-top">
                <img src="../../assets/值保商首页/icon_person.png" alt="">
                <p>队员<span> {{businessteamList.num_service_players}} </span>人</p>
              </div>
              <div class="ztlc-li-center">
                <p>
                  <img src="../../assets/值保商首页/icon_working.png" alt="">
                  <span>作业中 &nbsp;&nbsp;&nbsp;<span>{{businessteamList.num_in_duty_service_players}}</span></span>
                </p>
                <p>
                  <img  src="../../assets/值保商首页/icon_free.png" alt="">
                  <span>空闲中 &nbsp;&nbsp;&nbsp;<span>{{businessteamList.num_idle_service_players}}</span></span>
                </p>
              </div>
            </li>
             <li>
              <div class="ztlc-li-top">
                <img src="../../assets/值保商首页/icon_somebody.png" alt="">
                <p>值保队<span> {{businessprasDataList.num_service_teams}} </span>队</p>
              </div>
              <div class="ztlc-li-center">
               <p>
                  <img src="../../assets/值保商首页/icon_working.png" alt="">
                  <span>作业中 &nbsp;&nbsp;&nbsp;<span>{{businessprasDataList.num_in_duty_service_teams}}</span></span>
                </p>
                <p>
                  <img  src="../../assets/值保商首页/icon_free.png" alt="">
                  <span>空闲中 &nbsp;&nbsp;&nbsp;<span>{{businessprasDataList.num_idle_service_teams}}</span></span>
                </p>
              </div>
            </li>
          </ul>
        </div>

          <!-- 值保作业统计模块 -->
        <statistics></statistics>

      <!-- 新闻模块 -->

    <news></news>

    <!-- 版权号 -->
    <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px">
        Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
    </div>
 </div>
</div>
</template>
<style>
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
.conter {
  padding-top: 70px;
  margin-left: 340px;
  padding-left: 14px;
}
.zblc {
  height: 24px;
  font-size: 20px;
  padding-top: 16px;
  padding-left: 16px;
}
.pinkfer {
  /* width: 110px; */
  position: absolute;
  right: 0px;
  bottom: 26px;
}
.teates {
  height: 70px;
  border-bottom: 2px solid #ccc;
}
.name {
  font-size: 20px;
  margin-top: 20px;
  font-weight: 700;
}
.teates p {
  margin: 0;
  font-size: 14px;
  margin-top: 14px;
}
.process {
  width: 850px;
  height: 206px;
  border: 1px solid #e0e7ec;
  border-radius: 10px;
  margin-top: 22px;
  box-shadow: 0 0 2px 2px #ccc;
}
.cover {
  width: 20px;
  height: 18px;
  position: absolute;
  background-color: #fff;
  right: 0;
  bottom: 26px;
}
.zblcxq {
  width: 802px;
  height: 130px;
  margin: 0;
  padding: 0px 24px;
}
.zblcxq li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 100%;
  position: relative;
}
.figure {
  position: absolute;
  top: 80px;
  left: 0;
  font-size: 18px;
}
.ztlc-li-center {
  padding-left: 10px;
}
.ztlc-li-center p {
  margin: 0;
  margin-top: 8px;
}
.ztlc-li-center p img {
  vertical-align: middle;
}
.zblcxq li span {
  display: inline-block;
  width: 100%;
  /* font-size: 14px; */
}
.zbsgzzt {
  height: 56px;
  font-size: 20px;
  line-height: 58px;
  border-bottom: 2px solid #e0e6ec;
  width: 850px;
}
.zbzt {
  height: 310px;
  width: 850px;
}
.ztlc {
  margin: 0;
  width: 100%;
  padding-top: 20px;
  padding-left: 0;
  height: 100%;
}
.ztlc li {
  width: 166px;
  height: 266px;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px #ccc;
  padding: 0px 18px;
  float: left;
  margin-right: 14px;
  position: relative;
}
.ztlc-li-top {
  text-align: center;
  height: 100px;
  border-bottom: 1px solid #0094ff;
}
.ztlc-li-top p {
  margin: 0;
  font-weight: 700;
}
.ztlc li img {
  margin: 0;
}
.ztlc li:last-child {
  margin-right: 0;
}
</style>

<script>
import day from "../day/day.vue";
import statistics from "../statistics/statistics.vue";
import news from "../news/news.vue";
import hello from "../helloMiss/hello.vue";
import weather from "../day/weather.vue";
import api from "../common/api.js";
export default {
  data() {
    return {
      value5: 0,
      businesstasksList: [],
      useifon: "",
      name: "",
      businessprasDataList: {},
      businessteamList: {},
      businessuavsList: [],
      work_ares: "",
      work_length: "",
      num_uavs: "",
      id: ""
    };
  },
  components: {
    day,
    statistics,
    news,
    hello,
    weather
  },
  methods: {
    getbusinessnameuse: function() {
      this.id = window.sessionStorage.getItem("id");
      console.log(this.id);
    },
    businessHoem: function() {
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
          console.log(res);
          if (res.data.code == 0) {
            this.businesstasksList = res.data.attachment.tasks;
            this.businessprasDataList = res.data.attachment.service_teams;
            this.businessteamList = res.data.attachment.service_players;
            this.businessuavsList = res.data.attachment.uavs;
            this.work_ares = res.data.attachment.work_ares;
            this.work_length = res.data.attachment.work_length;
            this.num_uavs = res.data.attachment.num_uavs;
            this.value5 = res.data.attachment.rate;
            this.useifon = res.data.attachment.ppsp_name;
            this.name = res.data.attachment.real_name_leader;
          }
        });
    }
  },
  mounted() {
    this.getbusinessnameuse();
    this.businessHoem();
    // this.getbusinesstasks();
    // this.getbusinessprasData();
    // this.getbusinessteam();
    // this.getbusinessuavs();
    // this.getwork_ares();
    // this.getwork_length();
    // this.getnum_uavs();
    // this.getrole();
  }
};
</script>
