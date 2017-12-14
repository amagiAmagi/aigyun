<template>
  <div class="centers">
    <div class="left">
      <landMass></landMass>
      <day></day>
        <div class="tianqi">
          <iframe allowtransparency="true" frameborder="0" width="312" height="96" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=1&z=1&t=0&v=0&d=2&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=59493&w=312&h=96&align=center"></iframe>
        </div>
    </div>
    <div class="conter">
     <!-- 欢迎语 -->
      <hello></hello>
      <!-- 值保订单状态 -->
      <confirmed></confirmed>

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
<script>
import day from "../day/day.vue";
import statistics from "../statistics/statistics.vue";
import news from "../news/news.vue";
import hello from "../helloMiss/hello.vue";
import weather from "../day/weather.vue";
import landMass from "../landMass/landmass.vue";
import confirmed from "../common/confirmed.vue";
export default {
  components: {
    day,
    statistics,
    news,
    hello,
    weather,
    landMass,
    confirmed
  }
};
</script>

<style>
.tianqi {
  width: 312px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 30px;
}
</style>
