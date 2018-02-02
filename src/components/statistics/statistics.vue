<template>
 <div>
   <div class="zbszytj" v-if="role == 1">
    <span>值保作业统计</span>
    <div class="zbckgd">
      <router-link to="/peasant/peasantStats">查看更多>></router-link>
    </div>
  </div>

  <div class="zbszytj" v-if="role == 2">
    <span>值保商作业统计</span>
    <div class="zbckgd">
      <router-link to="/business/StatsCentral">查看更多>></router-link>
    </div>
  </div>

    <!-- <schart :canvasId="canvasId" :type="type" :width="width"
    :height="height" :data="data" :options="options" ref="canvas"></schart> -->
    <div id="statistics" style="width: 850px;height: 460px;">

    </div>
        <div class="jrbzby">
           <p><span @click="day" ref="day" class="date">日</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <span  @click="week" ref="week">周</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <span @click="month" ref="month">月</span></p>
        </div>

 </div>
</template>
<style>
.zbszytj {
  height: 56px;
  border-bottom: 2px solid #e0e6ec;
}
.zbszytj span {
  font-size: 20px;
  line-height: 56px;
  text-align: center;
}
.zbckgd {
  float: right;
  width: 100px;
  height: 30px;
  margin-top: 20px;
  background-color: #ccc;
  color: #eaeff0;
  border-radius: 20px;
}
.zbckgd a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 5px;
}
.jrbzby {
  width: 140px;
  position: relative;
  top: -448px;
  left: 560px;
}
.jrbzby p {
  margin: 0;
}
.jrbzby p span {
  cursor: pointer;
}
.date {
  color: #0094ff;
}
.actions {
  text-align: center;
  font-size: 20px;
}
</style>
<script>
import Schart from "vue-schart";
import echarts from "echarts";
import api from "../common/api";
export default {
  data() {
    return {
      dataList: [],
      data: [],
      datas: [],
      myBar: null,
      daylist: [],
      role: ""
    };
  },
  methods: {
    day: function() {
      this.$refs.day.className = "date";
      this.$refs.week.className = "";
      this.$refs.month.className = "";
      this.datas = this.dataList[0].data.ares;
      const date = [];
      this.dataList[0].data.date.forEach(e => {
        date.push(e.month + "月" + e.date + "日");
      });
      this.data = date.reverse();
      this.getBar();
    },
    week: function() {
      this.$refs.day.className = "";
      this.$refs.week.className = "date";
      this.$refs.month.className = "";
      this.datas = this.dataList[1].data.ares;
      const date = [];
      this.dataList[1].data.date.forEach(e => {
        date.push(e.year + "年" + e.week + "周");
      });
      this.data = date.reverse();
      this.getBar();
    },
    month: function() {
      this.$refs.day.className = "";
      this.$refs.week.className = "";
      this.$refs.month.className = "date";
      this.datas = this.dataList[2].data.ares;
      const date = [];
      this.dataList[2].data.date.forEach(e => {
        date.push(e.year + "年" + e.month + "月");
      });
      this.data = date.reverse();
      this.getBar();
    },
    // 初始化图
    getBar: function() {
      this.myBar = echarts.init(document.getElementById("statistics"));
      this.myBar.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.data,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "作业面积（亩）",
            type: "bar",
            barWidth: "60%",
            data: this.datas
          }
        ]
      });
    },
    getuesstetseitis: function() {
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
          this.dataList = res.data.attachment.stats;
          this.datas = this.dataList[0].data.ares;
          const date = [];
          this.dataList[0].data.date.forEach(e => {
            date.push(e.month + "月" + e.date + "日");
          });
          this.data = date.reverse();
          console.log(this.data);
        });
    },
    getrole: function() {
      this.role = window.sessionStorage.getItem("role");
      console.log(this.role);
    }
  },
  created() {},
  mounted() {
    this.getuesstetseitis();
    this.getBar();
    setTimeout(res => {
      this.day();
    }, 500);
    this.getrole();
  }
};
</script>
