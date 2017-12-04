<template>
  <div class="centers">
    <div class="left">
      <day></day>
      <weather></weather>
    </div>
    <div class="conter">
     <!-- 欢迎语 -->
      <hello></hello>
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
  width: 166px;
  height: 256px;
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
</style>

<script>
import day from "../day/day.vue";
import statistics from "../statistics/statistics.vue";
import news from "../news/news.vue";
import hello from "../helloMiss/hello.vue";
import weather from "../day/weather.vue";
export default {
  components: {
    day,
    statistics,
    news,
    hello,
    weather
  }
};
</script>
