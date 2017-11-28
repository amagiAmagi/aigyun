<template>
  <div class="centers">
    <div class="left">
      <day></day>
    </div>
    <div class="conter">
      <div class="teates">
        <div class="name">您好！夏先生</div>
        <p>欢迎登录爱极云，请检查您最新项目和代办事情</p>
      </div>
      <!-- 值保流程 -->
        <div class="process">
          <div class="zblc">
            值保流程
          </div>
          <ul class="zblcxq">
            <li>
              <img src="../../assets/1.png" alt="">
            </li>
             <li>
              <img src="../../assets/1.png" alt="">
            </li>
             <li>
              <img src="../../assets/1.png" alt="">
            </li>
             <li>
              <img src="../../assets/1.png" alt="">
            </li>
             <li>
              <img src="../../assets/1.png" alt="">
            </li>
             <li>
              <img src="../../assets/1.png" alt="">
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
              <img src="../../assets/6666.png" alt="">
            </li>
            <li>
              <img src="../../assets/6666.png" alt="">
            </li>
            <li>
              <img src="../../assets/6666.png" alt="">
            </li>
            <li>
              <img src="../../assets/6666.png" alt="">
            </li>
          </ul>
        </div>

        <!-- 值保作业统计模块 -->
        <div class="zbszytj">
          <span>值保商作业统计</span>
          <div class="zbckgd">
            <router-link to="" style="color: #000;">查看更多>></router-link>
          </div>
        </div>
        <div id="statistics" ref="stat" :style="{width: '850px', height: '420px',}">

        </div>
        <div class="jrbzby">
           <p><span>今日</span>&nbsp;&nbsp;&nbsp;<span style="color: #0094ff">本周</span>&nbsp;&nbsp;&nbsp;<span>本月</span></p>
        </div>
        <div class="zbszytj">
          <span>高科新农新闻</span>
          <div class="zbckgd">
            <router-link to="" style="color: #000;">查看更多>></router-link>
          </div>
        </div>

<!-- 新闻模块 -->
    <div class="gkxnxw">
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="">
						<img class="mui-media-object mui-pull-left" src="../../assets/图层 13.png">
						<div class="mui-media-body">
							爱极云是一个集农户在线定制飞防业务
              <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
              <span>2017-11-28</span>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../assets/图层 13.png">
						<div class="mui-media-body">
							爱极云是一个集农户在线定制飞防业务
              <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
              <span>2017-11-28</span>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../assets/图层 13.png">
						<div class="mui-media-body">
							爱极云是一个集农户在线定制飞防业务
              <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
              <span>2017-11-28</span>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="">
						<img class="mui-media-object mui-pull-left"  src="../../assets/图层 13.png">
						<div class="mui-media-body">
							爱极云是一个集农户在线定制飞防业务
              <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>\
              <span>2017-11-28</span>
						</div>
					</a>
				</li>
			</ul>
    </div>

    <!-- 版权号 -->
    <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px">
        Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
    </div>
</div>
</div>
</template>
<style>
#statistics {
  box-shadow: 0 0 2px 2px #ccc;
  margin-top: 22px;
  border-radius: 10px;
}
.centers {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.left {
  width: 340px;
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
.mui-media {
  height: 102px;
}
.mui-media a {
  height: 102px;
}
.mui-table-view .mui-media-object {
  line-height: 80px;
  max-width: 80px;
  height: 80px;
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
.zblc {
  height: 24px;
  font-size: 20px;
  padding-top: 16px;
  padding-left: 16px;
}
.teates p {
  margin: 0;
  font-size: 14px;
  margin-top: 14px;
}
.process {
  width: 850px;
  height: 186px;
  border: 1px solid #e0e7ec;
  border-radius: 10px;
  margin-top: 22px;
  box-shadow: 0 0 2px 2px #ccc;
}
.zblcxq {
  width: 802px;
  height: 110px;
  margin: 0;
  padding: 18px 24px;
}
.zblcxq li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 100%;
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
  width: 202px;
  height: 286px;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px #ccc;
  padding: 17px 18px;
  float: left;
  margin-right: 14px;
}
.ztlc li img {
  margin: 0;
}
.ztlc li:last-child {
  margin-right: 0;
}
.zbszytj {
  height: 56px;
  border-bottom: 2px solid #e0e6ec;
}
.zbszytj span {
  font-size: 20px;
  line-height: 56px;
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
  left: 560px;
}
.jrbzby p {
  margin: 0;
}
.mui-media-body {
  height: 80px;
  padding: 15px 0;
}
.mui-media-body span {
  float: right;
  margin-top: -20px;
}
.mui-ellipsis {
  margin-top: 15px;
}
.gkxnxw {
  box-shadow: 0 0 2px 2px #ccc;
  height: 408px;
  margin-top: 22px;
}
</style>

<script>
import day from "../day/day.vue";
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  data() {
    return {};
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
  },
  components: {
    day
  }
};
</script>
