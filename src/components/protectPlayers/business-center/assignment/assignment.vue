<template>
  <div>
    <!-- 左边部分 -->
    <div class="left">
      <div class="povrtsers">
        <div class="povrtser-tops">
          <img src="../../../../assets/icon-player-uploadjob-rice.png" alt="">
          <h5>田地一号</h5>
        </div>
        <div class="povrtser-bottoms">
          <p>
          <span>水稻</span>|
          <span>施肥</span>|
          <span>120亩</span>|
          <span>12元/亩</span>
          </p>
          <p>广东省深圳市特发信息港</p>
          <p>2017-10-22</p>
        </div>
      </div>
      <div class="povrtserss">
        <div class="povrtser-tops">
          <img src="../../../../assets/icon-player-uploadjob-team.png" alt="">
          <h5>高科值保一队</h5>
        </div>
        <div class="namesrsfrtr">
          <span class="penantname"><img src="../../../../assets/icon-player-uploadjob-person-pressed.png" alt=""> 何涛涛</span>
          <span class="penantname"><img src="../../../../assets/icon-player-uploadjob-person-pressed.png" alt=""> 邹子林</span>
          <span class="penantname"><img src="../../../../assets/icon-player-uploadjob-person-pressed.png" alt=""> 夏某某</span>
          <span class="penantname"><img src="../../../../assets/icon-player-uploadjob-person-pressed.png" alt=""> 夏某某</span>
        </div>
      </div>
      <div class="working">
       <div class="povrtser-topsss">
          <img src="../../../../assets/icon-player-uploadjob-time.png" alt="">
        </div>
        <div class="working-bottom">
          <span>9</span>天
        </div>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="joblist">
      <div class="joblist-heder">
        作业列表 <span class="plusright"> <img src="../../../../assets/icon-player-uploadjob-add.png" alt="" @click="jobupload"></span>
      </div>
      <div class="joblist-center">
        <div class="joblist-center-heder">
          <span>日期</span>
          <span>数量</span>
          <span>操作人</span>
          <span>无人机编号</span>
          <span>操作</span>
        </div>
        <div class="joblist-center-li">
          <span>2017-10-22</span>
          <span>10亩</span>
          <span>何涛涛</span>
          <span>17001000</span>
          <span><img src="../../../../assets/icon-player-uploadjob-delete.png" alt=""><img src="../../../../assets/icon-player-uploadjob-details.png" alt=""></span>
        </div>
        <div class="joblist-center-li">
          <span>2017-10-22</span>
          <span>10亩</span>
          <span>何涛涛</span>
          <span>17001000</span>
          <span><img src="../../../../assets/icon-player-uploadjob-delete.png" alt=""><img src="../../../../assets/icon-player-uploadjob-details.png" alt=""></span>
        </div>
        <div class="joblist-center-li">
          <span>2017-10-22</span>
          <span>10亩</span>
          <span>何涛涛</span>
          <span>17001000</span>
          <span><img src="../../../../assets/icon-player-uploadjob-delete.png" alt=""><img src="../../../../assets/icon-player-uploadjob-details.png" alt=""></span>
        </div>
        <div class="joblist-center-li">
          <span>2017-10-22</span>
          <span>10亩</span>
          <span>何涛涛</span>
          <span>17001000</span>
          <span><img src="../../../../assets/icon-player-uploadjob-delete.png" alt=""><img src="../../../../assets/icon-player-uploadjob-details.png" alt=""></span>
        </div>
        <div class="joblist-center-li">
          <span>2017-10-22</span>
          <span>10亩</span>
          <span>何涛涛</span>
          <span>17001000</span>
          <span><img src="../../../../assets/icon-player-uploadjob-delete.png" alt=""><img src="../../../../assets/icon-player-uploadjob-details.png" alt=""></span>
        </div>
        <div class="joblist-center-li">
          <span>2017-10-22</span>
          <span>10亩</span>
          <span>何涛涛</span>
          <span>17001000</span>
          <span><img src="../../../../assets/icon-player-uploadjob-delete.png" alt=""><img src="../../../../assets/icon-player-uploadjob-details.png" alt=""></span>
        </div>
      </div>
      <el-button type="primary" class="presentss">查看订单</el-button>
      <el-button class="presentss">施工完成</el-button>
    </div>
  </div>
</template>
<script>
import "./assignment.css";
export default {
  data() {
    return {};
  },
  methods: {
    jobupload: function() {
      location.href = "#/protect/surveyreport";
    }
  }
};
</script>

