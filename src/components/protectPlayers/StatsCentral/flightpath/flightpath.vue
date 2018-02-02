<template>
  <div>
    <!-- 左边部分 -->
    <div class="left">
      <div class="being">
        <span class="actives">正在作业中</span><br>
        <el-button type="primary" class="gopper">刷新</el-button>
      </div>
    </div>

    <!--  -->
    <div class="processs">
      <div class="process-heders">
        正在作业中订单( {{num}}单 )
      </div>
      <div class="process-orders">
        <div class="process-order-li" v-for="(item,index) in flightList" :key="index">
          <div class="process-order-li-heder">
            <span>{{item.team_name}}</span>
            <span>订单号:{{item.task_id}}</span>
          </div>
          <div class="process-order-li-center">
            <img src="../../../../assets/5555.png" alt="">
            <div class="process-order-li-center-right">
              <span>{{item.farmland_name}}</span>
              <span>{{date}}</span>
            </div>
            <div class="croptare">
              <span>{{item.ares}}亩</span>
              <span>{{item.crops_name}}</span>
            </div>
            <div class="foutersgdhgdfe">
              <img src="../../../../assets/飞机.png" alt="">
                <el-button type="primary" class="ckshihi">查看实时轨迹</el-button>
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
import "./flightpath.css";
import api from "../../../common/api";
export default {
  data() {
    return {
      flightList: [],
      ids: "",
      num: "",
      date: ""
    };
  },
  methods: {
    // 获取值保商id
    getuseid: function() {
      this.ids = JSON.parse(window.sessionStorage.getItem("id"));
    },
    getflight: function() {
      this.$http
        .post(
          api.apihost + "RealTimeFlightStat",
          { reg_id: this.ids },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.flightList = res.data.attachment;
            this.num = this.flightList.length;
          }
        });
    },
    // 获取当前时间
    gettimedate: function() {
      Date.prototype.format = function(fmt) {
        var o = {
          "M+": this.getMonth() + 1, //月份
          "d+": this.getDate(), //日
          "h+": this.getHours(), //小时
          "m+": this.getMinutes(), //分
          "s+": this.getSeconds(), //秒
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度
          S: this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        }
        for (var k in o) {
          if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
            );
          }
        }
        return fmt;
      };
      this.date = new Date().format("yyyy-MM-dd");
    }
  },
  mounted() {
    this.getuseid();
    this.getflight();
    this.gettimedate();
  }
};
</script>
