<template>
  <div>
       <!-- 左边部分 -->
    <div class="left">
      <div class="left-uvasetver">
       <div class="left-uvasetver-one">
         <p>无人机选择</p>
         <el-select v-model="value" placeholder="请选择">
           <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
           </el-option>
         </el-select>
       </div>
       <div class="dateoption">
          <div class="dateoption-heder">
            选择时段
          </div>
          <el-date-picker v-model="value2" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </div>
          <div class="dateoption">
           <div class="dateoption-heder">
             选择地区
           </div>
            <linkage v-on:getprov="getprov"></linkage>
         </div>
         <el-button type="primary" class="uvaprimary" @click="uvaprimary">确定</el-button>
      </div>
      <div class="jobstatist">
        <div class="jobstatist-heders">
          作业数据总览
        </div>
        <div class="left-buttoms">
         <li class="left-buttom-li">
           <p>订单总数</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>{{statsitis[0]}}单</span></p>
         </li>
         <li class="left-buttom-li">
           <p>作业总面积</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>{{statsitis[1]}}亩</span></p>
         </li>
         <li class="left-buttom-li">
           <p>总收入</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>{{statsitis[2]}}元</span></p>
         </li>
         <li class="left-buttom-li">
           <p>作业时长</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>{{statsitis[3]}}小时</span></p>
         </li>
         <li class="left-buttom-li footer">
           <p>作业总架次</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>{{statsitis[4]}}架次</span></p>
         </li>
         <li class="left-buttom-li footer">
           <p>无人机飞行距离</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>{{statsitis[5]}}米</span></p>
         </li>
       </div>
      </div>
    </div>

    <!--  -->
    <div class="Uavjobstatisti">
      <div class="Uavjobstatisti-heder">
        无人机作业数据统计
      </div>
      <div class="echeartss">
          <div class="echearts-heder">
            <li class="echearts-heder-li" v-for="(item,index) in hederlist" :key="index" @click="hederlists(index)" ref="hederlist">
              {{item}}
            </li>
            <div class="taggo">
              <img src="../../../../assets/折线.png" alt="" @click="line">
              <img src="../../../../assets/柱状.png" alt="" @click="bar">
            </div>
          </div>
            <div class="dates">
              <span class="date" @click="day" ref="day">日 </span>|<span @click="date" ref="date"> 周 </span>|<span @click="moch" ref="moch"> 月 </span>
            </div>
          <div id="lines" :style="{width:'720px',height:'460px'}">

          </div>
          <div class="echearts-right">
            <span>{{stringstats}}</span>
            <span>{{number}}</span>
            <span>-0% 环比{{dataslist}}</span>
            <span>-0% 同比去年</span>
          </div>
      </div>
      <div class="flight">`
        飞行历史记录
      </div>
      <div class="flightRecorders">
        <div class="flightRecorders-heder">
          <span class="xunzshida">选择时段</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期" class="setersdate">
          </el-date-picker>
          <el-button type="primary" class="guiji">确定</el-button>
          <el-button type="primary" class="guiji feixing">查看当天飞行轨迹</el-button>
        </div>
        <div class="flightRecorders-top">
          <span>架次编号</span>
          <span>起飞时间</span>
          <span>降落时间</span>
          <span>飞行时长</span>
          <span>飞行地点</span>
          <!-- <span></span> -->
        </div>
        <div class="flightRecorders-list">
          <div class="flightRecorders-list-li" v-for="(item,index) in flight_stats" :key="index">
            <span>{{item.seq}}</span>
            <span>{{item.takeoff_time | time}}</span>
            <span>{{item.landing_time | time}}</span>
            <span>{{Math.floor(item.duration/60)}}分{{item.duration%60}}秒</span>
            <span>{{item.addr}}</span>
            <span><span class="recorders">查看飞行轨迹</span></span>
          </div>
        </div>
      </div>
    <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px">
        Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
    </div>
    </div>
  </div>
</template>
<script>
import "./uavStatistics.css";
import linkage from "../../teamCenter/Teamadministration/linkage/linkage";
import echarts from "echarts";
import api from "../../../common/api";
export default {
  data() {
    return {
      dataList: [],
      options: [],
      value: "",
      ProvObj: {},
      lines: null,
      toggoto: "line",
      hederlist: [
        "订单统计",
        "作业面积统计",
        "收入统计",
        "时长统计",
        "架次统计",
        "飞行距离统计"
      ],
      value1: "",
      ids: "",
      value2: "",
      list: [
        "订单总数",
        "总面积(亩)",
        "总收入(元)",
        "总时长(秒)",
        "总架次",
        "飞行距离(米)"
      ],
      stringstats: "订单总数",
      number: "",
      statsitis: [],
      dayList: [],
      weekList: [],
      monthList: [],
      datas: [],
      num: "",
      index: "",
      taskslist: [],
      rateslist: [],
      idlist: [],
      flight_stats: [],
      dataslist: "昨日"
    };
  },
  methods: {
    getprov: function(data) {
      this.ProvObj = data;
      console.log(this.ProvObj);
    },
    // 初始化折线图
    getline: function() {
      this.lines = echarts.init(document.getElementById("lines"));
      this.lines.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}"
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          data: this.datas
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        yAxis: {
          type: "log"
        },
        series: [
          {
            name: "订单统计",
            type: this.toggoto,
            data: this.dataList
          }
        ]
      });
    },
    line: function() {
      this.toggoto = "line";
      this.getline();
    },
    bar: function() {
      this.toggoto = "bar";
      this.getline();
    },
    hederlists: function(index) {
      this.index = index;
      this.$refs.hederlist.forEach(e => {
        e.className = "echearts-heder-li";
      });
      this.$refs.hederlist[index].className = "echearts-heder-li hederlist";
      this.stringstats = this.list[index];
      this.number = this.statsitis[index];
      this.getdatstype();
      this.getline();
    },
    getdatstype: function() {
      if (this.num == 0) {
        if (this.index == 0) {
          this.dataList = this.dayList.tasks;
        }
        if (this.index == 1) {
          this.dataList = this.dayList.ares;
        }
        if (this.index == 2) {
          this.dataList = this.dayList.incomes;
        }
        if (this.index == 3) {
          this.dataList = this.dayList.durations;
        }
        if (this.index == 4) {
          this.dataList = this.dayList.sorties;
        }
        if (this.index == 5) {
          this.dataList = this.dayList.distances;
        }
      }
      if (this.num == 1) {
        if (this.index == 0) {
          this.dataList = this.dayList.tasks;
        }
        if (this.index == 1) {
          this.dataList = this.dayList.ares;
        }
        if (this.index == 2) {
          this.dataList = this.dayList.incomes;
        }
        if (this.index == 3) {
          this.dataList = this.dayList.durations;
        }
        if (this.index == 4) {
          this.dataList = this.dayList.sorties;
        }
        if (this.index == 5) {
          this.dataList = this.dayList.distances;
        }
      }
      if (this.num == 2) {
        if (this.index == 0) {
          this.dataList = this.dayList.tasks;
        }
        if (this.index == 1) {
          this.dataList = this.dayList.ares;
        }
        if (this.index == 2) {
          this.dataList = this.dayList.incomes;
        }
        if (this.index == 3) {
          this.dataList = this.dayList.durations;
        }
        if (this.index == 4) {
          this.dataList = this.dayList.sorties;
        }
        if (this.index == 5) {
          this.dataList = this.dayList.distances;
        }
      }
    },
    day: function() {
      this.$refs.day.className = "date";
      this.$refs.date.className = "";
      this.$refs.moch.classList = "";
      this.dataList = this.dayList.tasks;
      this.days();
      this.getline();
      this.num = 0;
      this.getdatstype();
      this.dataslist = "昨日";
    },
    date: function() {
      this.$refs.date.className = "date";
      this.$refs.moch.classList = "";
      this.$refs.day.className = "";
      this.dataList = this.weekList.tasks;
      this.weeks();
      this.getline();
      this.num = 1;
      this.getdatstype();
      this.dataslist = "上周";
    },
    moch: function() {
      this.$refs.moch.className = "date";
      this.$refs.day.className = "";
      this.$refs.date.className = "";
      this.dataList = this.monthList.tasks;
      this.month();
      this.getline();
      this.num = 2;
      this.getdatstype();
      this.dataslist = "上月";
    },
    getuvatype: function() {
      this.$http
        .post(
          api.apihost + "UavInfo",
          {
            pp_reg_id: this.ids,
            action: 2
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          for (let i = 0; i < res.data.attachment.length; i++) {
            const element = {
              value: res.data.attachment[i].uav_id,
              label: res.data.attachment[i].uav_no
            };
            this.options.push(element);
          }
          console.log(this.options);
        });
    },
    // 获取值保商id
    getuseid: function() {
      this.ids = window.sessionStorage.getItem("id");
    },
    // 搜索条件
    uvaprimary: function() {
      const data1 = Date.parse(this.value2[0]) / 1000;
      const data2 = Date.parse(this.value2[1]) / 1000;
      // this.ProvObj
      console.log(this.value);
      this.$http
        .post(
          api.apihost + "UavStat",
          {
            date_start: data1,
            date_end: data2,
            task_prov: this.ProvObj.prov,
            task_city: this.ProvObj.city,
            uav_id: this.value
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          this.stateseitus(res);
          this.day();
        });
    },
    stateseitus: function(res) {
      this.taskslist = res.data.attachment.tasks;
      // this.getpie();
      this.rateslist = res.data.attachment.rates;
      // this.getpieright();
      this.flight_stats = res.data.attachment.flight_stats;
      this.statsitis.push(res.data.attachment.num_tasks);
      this.statsitis.push(res.data.attachment.total_ares);
      this.statsitis.push(res.data.attachment.total_income);
      this.statsitis.push(res.data.attachment.total_duration);
      this.statsitis.push(res.data.attachment.total_sorties);
      this.statsitis.push(res.data.attachment.total_distance);
      // console.log(this.statsitis);
      this.number = res.data.attachment.num_tasks;
      this.dayList = res.data.attachment.stats[0];
      this.weekList = res.data.attachment.stats[1];
      this.monthList = res.data.attachment.stats[2];
      // console.log(this.dayList);
      // console.log(this.weekList);
      // console.log(this.monthList);
      this.dataList = this.dayList.tasks;
      this.days();
      this.getline();
    },
    getstastisi: function() {
      this.$http
        .post(
          api.apihost + "UavStat",
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
            this.stateseitus(res);
          }
        });
    },
    days: function() {
      const datalist = [];
      this.dayList.dates.forEach(e => {
        datalist.push(e.day + "日");
      });
      this.datas = datalist.reverse();
      // console.log(this.datas);
    },
    weeks: function() {
      const datalist = [];
      this.weekList.dates.forEach(e => {
        datalist.push(e.year - 2000 + "年" + e.week + "周");
      });
      this.datas = datalist.reverse();
      // console.log(this.datas);
    },
    month: function() {
      const datalist = [];
      this.monthList.dates.forEach(e => {
        datalist.push(e.year - 2000 + "年" + e.month + "月");
      });
      this.datas = datalist.reverse();
      // console.log(this.datas);
    }
  },
  components: {
    linkage
  },
  mounted() {
    this.getuseid();
    // this.getline();
    this.getstastisi();
    this.$refs.hederlist[0].className = "echearts-heder-li hederlist";
    this.getuvatype();
  }
};
</script>
