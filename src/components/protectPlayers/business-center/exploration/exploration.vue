<template>
  <div>
    <!-- 左边部分 -->
    <div class="left">
      <div class="left-top">
        <div class="left-top-header">
          <span>关键字</span><br>
          <input type="text">
          <i class="el-icon-search seascsarfs"></i>
        </div>
        <div class="left-top-mu">
          <span>亩数</span><br>
          <el-input v-model="input1" clearable class="input-mu"></el-input> —
          <el-input v-model="input2" clearable class="input-mu "></el-input>
        </div>
        <div class="left-top-mu">
          <span>时间</span><br>
          <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </div>
        <div class="left-top-buttom">
          <el-button type="primary" class="souser">搜索</el-button>
          <el-button plain style="width: 110px">全部</el-button>
        </div>
      </div>
    </div>

    <!-- 右边主体内容部分 -->

    <div class="exploration">
      <div class="exploration-heder">
        待上传工勘报告需求（3单）
        <div class="demonstrate">
          展示筛选:<span class="el-icon-menu actiover" @click="menu" ref="menu"></span><span class="el-icon-tickets" @click="tickets" ref="tickets"></span>
        </div>
      </div>
      <div class="exploration-center">
        <!-- 竖版 -->
        <div class="exploration-center-li" v-show="actiover">
          <img src="../../../../assets/5555.png" alt="">
          <div class="exploration-center-li-right">
            <p>田地一号</p>
            <span>发布:2017-10-22</span>
            <span>作业:2017-10-22</span>
          </div>
          <div class="ares">
            广东省深圳市特发信息港A栋8楼高科新农
          </div>
          <div class="Science">
            <span>水稻</span>
            <span>施肥</span>
            <span>120亩</span>
            <span>10元一亩</span>
          </div>
            <el-button type="primary" class="updetaboger" @click="updetaboger">上传报告</el-button>
            <el-button type="primary" class="updetaboger look">查看</el-button>
        </div>
        <div class="exploration-center-li-heng-heder" v-show="!actiover">
          <span>地块图片</span>
          <span>地块名称</span>
          <span>创建时间</span>
          <span>作业时间</span>
          <span>面积</span>
          <span>作物</span>
          <span>类型</span>
          <span>单价(亩)</span>
          <span>操作</span>
        </div>
        <div class="exploration-center-li-heng" v-show="!actiover">
          <img src="../../../../assets/5555.png" alt="" class="images">
          <div class="exploration-center-li-heng-top">
            <span>田地一号</span>
            <span>2017-10-22</span>
            <span>2017-10-22</span>
            <span>120亩</span>
            <span>水稻</span>
            <span>施肥</span>
            <span>10</span>
            <span>
              <img src="../../../../assets/icon-player-upload-measure-1-upload.png" alt="" @click="updetaboger">
              <img src="../../../../assets/icon-player-upload-measure-1-see.png" alt="">
            </span>
          </div>
          <div class="exploration-center-li-heng-bottom">
            <span>订单号:1710221411932</span><br>
            <span>地块地址:广东省深圳市南山区特发信息港A栋8楼</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import "./exploration.css";
export default {
  data() {
    return {
      input1: "",
      input2: "",
      value: "",
      actiover: true
    };
  },
  methods: {
    menu: function() {
      this.$refs.menu.className = "el-icon-menu actiover";
      this.$refs.tickets.className = "el-icon-tickets";
      this.actiover = true;
    },
    tickets: function() {
      this.$refs.tickets.className = "el-icon-tickets actiover";
      this.$refs.menu.className = "el-icon-menu";
      this.actiover = false;
    },
    updetaboger: function() {
      location.href = "#/protect/Jobreportupload";
    }
  }
};
</script>


