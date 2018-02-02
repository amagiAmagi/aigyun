<template>
  <div>
       <!-- 左边区域 -->
     <div class="left">
       <div class="left-heder">
         <div class="left-heder-top">
           作业数据总览
         </div>
         <div class="dateoption">
           <div class="dateoption-heder">
             选择时段
           </div>
           <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
         </div>
         <div class="dateoption">
           <div class="dateoption-heder">
             需要选择统计的地块
           </div>
            <div class="porvlot" @click="getprovts">选择</div>
         </div>
          <div class="dateoption">
           <div class="dateoption-heder">
             所在地
           </div>
            <linkage v-on:getprov="getprov"></linkage>
         </div>
           <el-button type="primary" class="uvaprimary" @click="uvaprimary">确定</el-button>
       </div>
       <div class="left-buttom">
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
    <!-- 作业数据统计 -->
    <div class="jobmessage">
      <div class="jobmessage-heder">
        作业数据统计
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
            <span>-0% 环比{{dates}}</span>
            <span>-0% 同比去年</span>
          </div>
        </div>
        <div class="echearts-bottom">
          <div id="main" :style="{width:'414px',height:'274px'}">
          </div>
          <div id="pieright" :style="{width:'414px',height:'274px'}">

          </div>
        </div>
    </div>
     <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px">
        Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
    </div>



<!-- 选择统计地块弹出框 -->


  <el-dialog title="选择需要统计的地块" :visible.sync="dialogVisible" width="45%" :lock-scroll = "false">
    <div class="selectporvt">
      <li class="selectporvt-li" v-for="(item,index) in getprovtslist" :key="index" @click="selects(index,item.farmland_id)" >
        <img src="../../../../assets/5555.png" alt="">
        <div class="selectporvt-li-right">
          <h5>{{item.farmland_name}}</h5>
          <span>{{item.add_time | time}}</span>
        </div>
        <div class="selectporvt-li-bottom">
          <span>{{item.farmland_ares}}亩 </span> | <span> {{item.crops_name}}</span>
        </div>
        <div  class="leisst" ref="selects">
          <span class="el-icon-check checks"></span>
        </div>
      </li>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>




  </div>
</template>
<script>
import "./JobStatistics.css";
import linkage from "../../../business/teamCenter/Teamadministration/linkage/linkage";
import api from "../../../common/api";
import echarts from "echarts";
export default {
  data() {
    return {
      value: "",
      ProvObj: {},
      dataList: [],
      lines: null,
      hederlist: [
        "订单统计",
        "作业面积统计",
        "收入统计",
        "时长统计",
        "架次统计",
        "飞行距离统计"
      ],
      myChart: null,
      toggoto: "line",
      pieright: null,
      dialogVisible: false,
      ids: "",
      getprovtslist: [],
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
      dates: "昨日"
    };
  },
  methods: {
    getprov: function(data) {
      this.ProvObj = data;
      console.log(this.ProvObj);
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
      this.dates = "昨日";
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
      this.dates = "上周";
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
      this.dates = "上月";
    },
    // 饼图初始化
    getpie: function() {
      this.myChart = echarts.init(document.getElementById("main"));
      this.myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: "left",
          top: "30%",
          data: [
            "待接单 " + this.taskslist[0],
            "待分配 " + this.taskslist[1],
            "已接单 " + this.taskslist[2],
            "作业中 " + this.taskslist[3],
            "已完成 " + this.taskslist[4]
          ]
        },
        series: [
          {
            name: "订单统计",
            type: "pie",
            radius: "55%",
            center: ["30%", "50%"],
            data: [
              { value: this.taskslist[0], name: "待接单 " + this.taskslist[0] },
              { value: this.taskslist[1], name: "待分配 " + this.taskslist[1] },
              { value: this.taskslist[2], name: "已接单 " + this.taskslist[2] },
              { value: this.taskslist[3], name: "作业中 " + this.taskslist[3] },
              { value: this.taskslist[4], name: "已完成 " + this.taskslist[4] }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.3)"
              }
            }
          }
        ]
      });
    },
    getpieright: function() {
      this.pieright = echarts.init(document.getElementById("pieright"));
      this.pieright.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: "left",
          top: "30%",
          data: [
            "评价 " + this.rateslist[0] + "星",
            "评价 " + this.rateslist[1] + "星",
            "评价 " + this.rateslist[2] + "星",
            "评价 " + this.rateslist[3] + "星",
            "评价 " + this.rateslist[4] + "星"
          ]
        },
        series: [
          {
            name: "订单评价统计",
            type: "pie",
            radius: "55%",
            center: ["30%", "50%"],
            data: [
              { value: 335, name: "评价 " + this.rateslist[0] + "星" },
              { value: 310, name: "评价 " + this.rateslist[1] + "星" },
              { value: 234, name: "评价 " + this.rateslist[2] + "星" },
              { value: 135, name: "评价 " + this.rateslist[3] + "星" },
              { value: 1548, name: "评价 " + this.rateslist[4] + "星" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.3)"
              }
            }
          }
        ]
      });
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
    // 获取值保商id
    getuseid: function() {
      this.ids = window.sessionStorage.getItem("id");
    },
    // 查看地块
    getprovts: function() {
      this.$http
        .post(
          api.apihost + "FieldManager",
          {
            reg_id: this.ids,
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
          if (res.data.code == 0) {
            this.getprovtslist = res.data.attachment;
            console.log(this.getprovtslist);
          }
        });
      this.dialogVisible = true;
    },
    selects: function(index, item) {
      if (this.$refs.selects[index].className == "list") {
        this.$refs.selects[index].className = "leisst";
        for (var i = 0; i < this.idlist.length; i++) {
          if (this.idlist[i] == item) {
            this.idlist.splice(i, 1);
          }
        }
      } else {
        this.$refs.selects[index].className = "list";
        this.idlist.push(item);
      }
    },
    // 统计信息
    getstastisi: function() {
      this.$http
        .post(
          api.apihost + "TaskStat",
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
    stateseitus: function(res) {
      this.taskslist = res.data.attachment.tasks;
      this.getpie();
      this.rateslist = res.data.attachment.rates;
      this.getpieright();
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
    },
    // 搜索条件
    uvaprimary: function() {
      const data1 = Date.parse(this.value[0]) / 1000;
      const data2 = Date.parse(this.value[1]) / 1000;
      // this.ProvObj
      this.$http
        .post(
          api.apihost + "TaskStat",
          {
            date_start: data1,
            date_end: data2,
            task_prov: this.ProvObj.prov,
            task_city: this.ProvObj.city,
            farmland_ids: this.idlist,
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
            this.stateseitus(res);
            this.day();
          }
        });
    }
  },
  components: {
    linkage
    // Schart
  },
  mounted() {
    // this.getline();
    this.$refs.hederlist[0].className = "echearts-heder-li hederlist";
    // this.getpie();

    this.getuseid();
    this.getstastisi();
  }
};
</script>
