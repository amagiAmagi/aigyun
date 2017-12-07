<template>
 <div>
    <div class="zbszytj">
          <span>值保商作业统计</span>
          <div class="zbckgd">
            <router-link to="/business/StatsCentral" style="color: #000;">查看更多>></router-link>
          </div>
        </div>
        <div id="statistics" ref="stat" :style="{width: '850px', height: '420px',}">

        </div>
        <div class="jrbzby">
           <p><span>日</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span style="color: #0094ff">周</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>月</span></p>
           <!-- <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker> -->
        </div>

 </div>
</template>
<style>
#statistics {
  box-shadow: 0 0 2px 2px #ccc;
  margin-top: 22px;
  border-radius: 10px;
}
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
  background-color: #999;
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
  top: -400px;
  left: 650px;
}
.jrbzby p {
  margin: 0;
}
/* .el-range-editor.el-input__inner {
  left: 130px;
  top: -30px;
} */
</style>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  data() {
    return {
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value7: ""
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("statistics"));
      myChart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"],
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
            name: "作业统计",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 590, 330, 220]
          }
        ]
      });
    }
  }
};
</script>
