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
           <el-button type="primary" class="uvaprimary">确定</el-button>
       </div>
       <div class="left-buttom">
         <li class="left-buttom-li">
           <p>订单总数</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>5单</span></p>
         </li>
         <li class="left-buttom-li">
           <p>作业总面积</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>2000亩</span></p>
         </li>
         <li class="left-buttom-li">
           <p>总收入</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>20000元</span></p>
         </li>
         <li class="left-buttom-li">
           <p>作业时长</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>400小时(30天)</span></p>
         </li>
         <li class="left-buttom-li footer">
           <p>作业总架次</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>30000架次</span></p>
         </li>
         <li class="left-buttom-li footer">
           <p>无人机飞行距离</p>
           <p class="el-icon-date iconfion"></p>
           <p class="li-p-span"><span>50000米</span></p>
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
            <span>今日订单总数</span>
            <span>1单</span>
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
      <li class="selectporvt-li" v-for="(item,index) in getprovtslist" :key="index" @click="selects(index)" >
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
import linkage from "../../teamCenter/Teamadministration/linkage/linkage";
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
      dates: "昨日"
    };
  },
  methods: {
    getprov: function(data) {
      this.ProvObj = data;
      console.log(this.ProvObj);
    },
    hederlists: function(index) {
      this.$refs.hederlist.forEach(e => {
        e.className = "echearts-heder-li";
      });
      this.$refs.hederlist[index].className = "echearts-heder-li hederlist";
    },
    day: function() {
      this.$refs.day.className = "date";
      this.$refs.date.className = "";
      this.$refs.moch.classList = "";
      this.dates = "昨日";
      console.log(this.dates);
    },
    date: function() {
      this.$refs.date.className = "date";
      this.$refs.moch.classList = "";
      this.$refs.day.className = "";
      this.dates = "上周";
      console.log(this.dates);
    },
    moch: function() {
      this.$refs.moch.className = "date";
      this.$refs.day.className = "";
      this.$refs.date.className = "";
      this.dates = "上月";
      console.log(this.dates);
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
            "待接单 " + 335,
            "待分配 " + 310,
            "已接单 " + 234,
            "作业中 " + 135,
            "已完成 " + 1548
          ]
        },
        series: [
          {
            name: "订单统计",
            type: "pie",
            radius: "55%",
            center: ["30%", "50%"],
            data: [
              { value: 335, name: "待接单 " + 335 },
              { value: 310, name: "待分配 " + 310 },
              { value: 234, name: "已接单 " + 234 },
              { value: 135, name: "作业中 " + 135 },
              { value: 1548, name: "已完成 " + 1548 }
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
            "评价 " + "4.5星",
            "评价 " + "5.0星",
            "评价 " + "4.2星",
            "评价 " + "4.0星",
            "评价 " + "3.5星"
          ]
        },
        series: [
          {
            name: "订单评价统计",
            type: "pie",
            radius: "55%",
            center: ["30%", "50%"],
            data: [
              { value: 335, name: "评价 " + "4.5星" },
              { value: 310, name: "评价 " + "5.0星" },
              { value: 234, name: "评价 " + "4.2星" },
              { value: 135, name: "评价 " + "4.0星" },
              { value: 1548, name: "评价 " + "3.5星" }
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
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期天"
          ]
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
            data: [2, 3, 9, 247, 27, 81, 741]
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
      this.ids = this.$store.getters.getbusinessId;
      if (this.ids == "") {
        const data = JSON.parse(window.sessionStorage.getItem("id"));
        this.$store.commit("business", data);
        this.ids = this.$store.getters.getbusinessId;
      }
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
    selects: function(index) {
      console.log(index);
      if (this.$refs.selects[index].className == "list") {
        this.$refs.selects[index].className = "leisst";
      } else {
        this.$refs.selects[index].className = "list";
      }
    }
  },
  components: {
    linkage
    // Schart
  },
  mounted() {
    this.getline();
    this.$refs.hederlist[0].className = "echearts-heder-li hederlist";
    this.getpie();
    this.getpieright();
    this.getuseid();
  }
};
</script>
