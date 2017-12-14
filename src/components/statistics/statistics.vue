<template>
 <div>
    <div class="zbszytj">
          <span>值保商作业统计</span>
          <div class="zbckgd">
            <router-link to="/business/StatsCentral" style="color: #000;">查看更多>></router-link>
          </div>
        </div>
        <schart :canvasId="canvasId" :type="type" :width="width"
    :height="height" :data="data" :options="options"></schart>
        <div class="jrbzby">
           <p><span @click="day" ref="day">日</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <span class="date" @click="week" ref="week">周</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <span @click="month" ref="month">月</span></p>
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
</style>
<script>
import Schart from "vue-schart";
export default {
  data() {
    return {
      dataList: [],
      canvasId: "myCanvas",
      type: "bar",
      width: 850,
      height: 460,
      data: [
        { name: "星期一", value: 1342 },
        { name: "星期二", value: 2123 },
        { name: "星期三", value: 1654 },
        { name: "星期四", value: 1795 },
        { name: "星期五", value: 2123 },
        { name: "星期六", value: 1654 },
        { name: "星期天", value: 1795 }
      ],
      options: {
        padding: 50, // canvas 内边距
        bgColor: "#FFFFFF", // 默认背景颜色
        title: "", // 图表标题
        titleColor: "#000000", // 图表标题颜色
        titlePosition: "top", // 图表标题位置: top / bottom
        yEqual: 5, // y轴分成5等分
        fillColor: "#1E9FFF", // 默认填充颜色
        contentColor: "#eeeeee", // 内容横线颜色
        axisColor: "#666666" // 坐标轴颜色
      }
    };
  },
  methods: {
    day: function() {
      this.$refs.day.className = "date";
      this.$refs.week.className = "";
      this.$refs.month.className = "";
      this.data = [
        { name: "1号", value: 1342 },
        { name: "2号", value: 2123 },
        { name: "3号", value: 1654 },
        { name: "4号", value: 1795 },
        { name: "5号", value: 2123 },
        { name: "6号", value: 1654 },
        { name: "7号", value: 1795 }
      ];
    },
    week: function() {
      this.$refs.day.className = "";
      this.$refs.week.className = "date";
      this.$refs.month.className = "";
      this.data = [
        { name: "星期一", value: 1342 },
        { name: "星期二", value: 2123 },
        { name: "星期三", value: 1654 },
        { name: "星期四", value: 1795 },
        { name: "星期五", value: 2123 },
        { name: "星期六", value: 1654 },
        { name: "星期天", value: 1795 }
      ];
    },
    month: function() {
      this.$refs.day.className = "";
      this.$refs.week.className = "";
      this.$refs.month.className = "date";
      this.data = [
        { name: "1月", value: 1342 },
        { name: "2月", value: 2123 },
        { name: "3月", value: 1654 },
        { name: "4月", value: 1795 },
        { name: "5月", value: 2123 },
        { name: "6月", value: 1654 },
        { name: "7月", value: 1795 }
      ];
    }
  },
  created() {
    // const data = this.$store.getters.getPenasntStats;
    // this.dataList = data[0].stats;
    // console.log(this.dataList);
  },
  components: {
    Schart
  }
};
</script>
