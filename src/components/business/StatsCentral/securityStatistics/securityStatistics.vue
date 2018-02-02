<template>
  <div>
    <!-- 左边部分 -->
    <div class="left">
      <div class="left-centers">
        <div class="left-centers-top">
          <p>选择需要查看的值保队</p>
          <el-button type="primary" class="stlesdeusr" @click="allocations">选择</el-button>
        </div>
        <div class="dateoption">
          <div class="dateoption-heder">
            选择时段
          </div>
          <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </div>
        <el-button type="primary" class="stlesdeusrs" @click="uvaprimary">确定</el-button>
      </div>
    </div>
    <div class="security">
      <div class="security-heder">
        值保队数据总览
      </div>
      <div class="security-center">
        <div class="security-center-heder">
          <span></span>
          <span>订单总数</span>
          <span>总收入</span>
          <span>作业总面积</span>
          <span>作业时长</span>
          <span>作业总架次</span>
          <span>无人机飞行距离</span>
        </div>
        <div class="security-center-list">
          <li class="security-center-list-li" v-for="(item,index) in poverseverlist" :key="index">
            <!-- <img src="../../../../assets/5555.png" alt=""> -->
            <div class="secrityname">{{item.team_name}}</div>
            <div class="security-center-list-li-span">
            <span>{{item.num_tasks}}单</span>
            <span>{{item.total_income}}元</span>
            <span>{{item.total_ares}}亩</span>
            <span>{{item.total_duration}}秒</span>
            <span>{{item.total_sorties}}架次</span>
            <span>{{item.total_distance}}米</span>
            </div>
          </li>

        </div>
      </div>
      <div class="securstesiter" v-show="shows">
        值保队作业数据统计
      </div>
      <div class="echearts" v-show="shows">
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
            <span>-0% 环比{{datasliset}}</span>
            <span>-0% 同比去年</span>
          </div>
        </div>
             <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px" v-show="shows">
        Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
    </div>
    </div>



<!-- 选择值保队弹出框 -->

  <el-dialog title="分配值保队" :visible.sync="dialogVisibles" width="54%" :lock-scroll="false">
    <div class="disalogs">
      <div class="disalogs-tops" >
        <span class="yixuanz">已选择:</span>
        <div class="disasdhasition " ref="disbply" v-for="(item,index) in teamlist" :key="index">
          <img src="../../../../assets/5555.png" alt="">
          <div class="zhibaoname">{{item.team_name}}</div>
          <div class="datename">
            <span v-for="(item,index) in item.players" :key="index" v-show="index < 3">{{item.real_name}} </span>
          </div>
        </div>
      </div>
      <div class="disalogs-center">
        <li class="disalogs-center-li" ref="disali"  @click="disali(index,item,item.team_id)" v-for="(item,index) in playersList" :key="index">
            <img src="../../../../assets/5555.png" alt="">
          <div class="zhibaonames">{{item.team_name}}</div>
          <div class="datenames">
            <span v-for="(items,indexs) in item.players" :key="indexs" v-show="indexs < 3">{{items.real_name}} </span>
          </div>
          <span class="el-icon-success displaysert " ref="choice"></span>
        </li>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisibles = false" class="submitseter">取 消</el-button>
      <el-button type="primary" @click="tpteam" class="submitseter">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>
<script>
import "./securityStatistics.css";
import echarts from "echarts";
import api from "../../../common/api.js";
export default {
  data() {
    return {
      value: "",
      hederlist: [
        "订单统计",
        "作业面积统计",
        "收入统计",
        "时长统计",
        "架次统计",
        "飞行距离统计"
      ],
      lines: null,
      toggoto: "line",
      dialogVisibles: false,
      playersList: [],
      disables: false,
      player: {},
      ids: "",
      teamlist: [],
      teamidlist: [],
      index: "",
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
      poverseverlist: [],
      shows: false,
      datasliset: "昨日"
    };
  },
  methods: {
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
      this.datasliset = "昨日";
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
      this.datasliset = "上周";
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
      this.datasliset = "上月";
    },
    gettenant: function() {
      this.$http
        .post(
          api.apihost + "ServiceTeamInfo",
          {
            action: 2,
            reg_id: this.ids
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
            this.playersList = res.data.attachment;
          }
        });
    },
    allocations: function() {
      this.gettenant();
      this.dialogVisibles = true;
    },
    disali: function(index, item, id) {
      this.player = this.playersList[index];
      if (this.$refs.choice[index].className == "el-icon-success choice") {
        this.$refs.choice[index].className = "el-icon-success displaysert";
        this.$refs.disali[index].className = "disalogs-center-li ";
        for (let i = 0; i < this.teamlist.length; i++) {
          if (this.teamlist[i] == item) {
            this.teamlist.splice(i, 1);
          }
        }
      } else {
        this.teamlist.push(item);
        this.teamidlist.push(id);
        this.$refs.disali[index].className = "disalogs-center-li disali";
        this.$refs.choice[index].className = "el-icon-success choice";
      }
    },
    tpteam: function() {
      this.dialogVisibles = false;
    },
    // 获取值保商id
    getuseid: function() {
      this.ids = this.$store.getters.getbusinessId;
      if (this.ids == "") {
        const data = JSON.parse(window.sessionStorage.getItem("id"));
        this.$store.commit("business", data);
        this.ids = this.$store.getters.getbusinessId;
      }
    },
    // 搜索条件
    uvaprimary: function() {
      const data1 = Date.parse(this.value[0]) / 1000;
      const data2 = Date.parse(this.value[1]) / 1000;
      // this.ProvObj
      console.log(this.value);
      this.$http
        .post(
          api.apihost + "ServiceTeamStat",
          {
            date_start: data1,
            date_end: data2,
            team_ids: this.teamidlist
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
            this.shows = true;
            this.stateseitus(res);
            this.day();
          } else {
            this.$message.error("选择需要统计的值保队和时间段");
          }
        });
    },
    stateseitus: function(res) {
      this.poverseverlist = res.data.attachment.summary;
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
  mounted() {
    this.getline();
    this.$refs.hederlist[0].className = "echearts-heder-li hederlist";
  }
};
</script>
