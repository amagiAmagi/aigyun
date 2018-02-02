<template>
  <div class="checkojb">
    <div class="left">
      <div class="usenames">
        <span>用户信息</span>
        <img src="../../../assets/5555.png" alt="">
        <div class="usebname-right">
          <p>姓名:夏某某</p>
          <p>电话:18088886666</p>
        </div>
      </div>
      <div class="busiicener">
        <span class="busilname">值保机构信息</span>
        <img src="../../../assets/5555.png" alt="">
        <div class="busiicener-right">
          <p>高科新农:100人</p>
          <p>值保一队:3人</p>
          <p>服务范围:广东、安徽、河南、黑龙江</p>
          <p>评价:<el-rate v-model="value1"  disabled class="ratesefsr"></el-rate></p>
        </div>
      </div>
    </div>
    <!--  查看订单状态-->
    <div class="checkojb-sever">
      <div class="checkojb-sever-heder">
        订单号：17101145621521（已完成）
      </div>
      <!-- 状态过程 -->
      <div class="checkojb-sever-state">
        <li class="checkojb-sever-state-li">
          <img src="../../../assets/017.png" alt="">
          <div class="checkojb-sever-state-right">
            <span>需求发布</span>
            <span>2017-10-22</span>
          </div>
        </li>
        <li class="checkojb-sever-state-li">
          <span class="el-icon-d-arrow-right rightarrow"></span>
        </li>
        <li class="checkojb-sever-state-li">
          <img src="../../../assets/019.png" alt="">
          <div class="checkojb-sever-state-right">
            <span>质保机构接单</span>
            <span>2017-10-22</span>
          </div>
        </li>
        <li class="checkojb-sever-state-li">
          <span class="el-icon-d-arrow-right rightarrow"></span>
        </li>
        <li class="checkojb-sever-state-li">
          <img src="../../../assets/020.png" alt="">
          <div class="checkojb-sever-state-right">
            <span>作业开始</span>
            <span>2017-10-22</span>
          </div>
        </li>
        <li class="checkojb-sever-state-li">
          <span class="el-icon-d-arrow-right rightarrow"></span>
        </li>
        <li class="checkojb-sever-state-li">
          <img src="../../../assets/021.png" alt="">
          <div class="checkojb-sever-state-right">
            <span>作业完成</span>
            <span>2017-10-22</span>
          </div>
        </li>
        <li class="checkojb-sever-state-li">
          <span class="el-icon-d-arrow-right rightarrow"></span>
        </li>
        <li class="checkojb-sever-state-li">
          <img src="../../../assets/029.png" alt="">
          <div class="checkojb-sever-state-right">
            <span>评价完成</span>
            <span>2017-10-22</span>
          </div>
        </li>
      </div>
      <!-- 田块信息 -->
      <div class="poverstet">
        田块信息
      </div>
      <div class="poversever">
        <img src="../../../assets/5555.png" alt="">
        <div class="poversever-top">
          <div class="poversever-top-heder">
            <span>田地一号</span> （广东省深圳市南山区特发信息港A栋）
          </div>
          <div class="poversever-top-bottom">
            <span>120亩</span>|
            <span>水稻</span>|
            <span>施肥</span>|
            <span>10元/亩</span>|
            <span>2017-10-22开始作业</span>
          </div>
        </div>
        <div class="poversever-arese">
          说明信息：按属地发生的空间发挥就开始的很干净收到货更健康的凤飞飞咏怀古迹适当，华东师范门口贵金属的反馈客户挂机十多个好地方就换个地方尽快个好地方尽快
        </div>
      </div>
      <!-- 工勘信息 -->
      <div class="poverstet">
        工勘信息
      </div>
      <div class="industrial">
        <img src="../../../assets/5555.png" alt="">
        <div class="industrial-top">
          <div class="industrial-top-heder">
            <span>平地</span>|
            <span>110亩</span>|
            <span>11-20个子地块</span>|
            <span>值保费用：10011元</span>|
            <span>有水源</span>|
            <span>有机耕地</span>
          </div>
          <div class="industrial-top-center">
            <span>无防风林</span>|
            <span>用户自备药剂</span>|
            <span>作物高度：2米</span>|
            <span>作物密度：1000株/亩</span>
          </div>
        </div>
        <div class="industrial-bottom">
          备注：大夫奥斯卡了合肥市的航空啊啥是淡季快干哈速度快
        </div>
      </div>
        <!-- 作业信息 -->
      <div class="ojbstate">
        作业信息 <img src="../../../assets/023.png" alt="" @click="dowms">
      </div>
      <div class="ojbmessage" v-show="downs">
        <div class="ojbstetisite">
          <div class="ohjsteta">
            作业统计:
          </div>
          <div class="ojbstetisite-heder">
            <span>作业五天</span>|
            <span>110亩</span>|
            <span>作业无人机2架</span>
          </div>
          <div class="ojbstetisite-fooler">
            <span>作业无人机80小时</span>|
            <span>飞行1000架次</span>|
            <span>作业无人机2架</span>
          </div>
            <el-button type="primary expmfliner">查看飞行记录</el-button>
        </div>
        <div class="ojbmessage-li">
          <span class="sortie">2017-10-22</span>
          <div class="ojbmessage-li-heder">
            <span>作业面积11亩</span>|
            <span>无人机作业8小时</span>|
            <span>飞行160架次</span>|
            <span>飞行距离500米</span>
            <el-button type="primary expmfliners">查看飞行记录</el-button>
            <span class="minute"  @click="minute">详细信息</span>
            <img src="../../../assets/027.png" alt="" @click="minute"  ref="down" class="inbock">
            <img src="../../../assets/024.png" alt=""  @click="minute" class="innone" ref="minutes">
            <div class="xuxian"></div>
          </div>
          <div class="minutemessage innone"  ref="minutemessage">
           <span>飞行高度5米</span>|
           <span>飞行速度5米/秒</span>|
           <span>喷幅宽度6米</span>|
           <span>风速7米/秒</span>|
           <span>温暖23度</span>
           <span>药剂/化肥种类：化肥</span>|
           <span>药剂/化肥用量：10公斤</span>
           <div class="remark">
             备注：123456415684958498498498495895
           </div>
          </div>
        </div>
      </div>
      <!-- 评价信息 -->
      <div class="poverstet">
        评价信息
      </div>
      <div class="evaluate">
        <div class="evaluate-li">
          <img src="../../../assets/5555.png" alt="">
          <el-rate v-model="value1"  disabled class="ratesefsr evsalssrete"></el-rate>
          <div class="appraise">
            爱上付杀毒撒的发客户当时对方即可更好地发挥各个地方尽快开工后大夫公司的符合告诉对方尽快更换水电费可两个好水电费的健康富商巨贾大夫开会
          </div>
        </div>
        <div class="evaluate-li">
          <img src="../../../assets/5555.png" alt="">
          <el-rate v-model="value1"  disabled class="ratesefsr evsalssrete"></el-rate>
          <div class="appraise">
            爱上付杀毒撒的发客户当时对方即可更好地发挥各个地方尽快开工后大夫公司的符合告诉对方尽快更换水电费可两个好水电费的健康富商巨贾大夫开会
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./checkojb.css";
export default {
  data() {
    return {
      value1: 5,
      down: 0,
      downs: true,
      nums: 0
    };
  },
  methods: {
    dowms: function() {
      this.nums++;
      if (this.nums % 2 != 0) {
        this.downs = false;
      } else {
        this.downs = true;
      }
    },
    minute: function() {
      this.down++;
      if (this.down % 2 != 0) {
        this.$refs.down.className = "innone";
        this.$refs.minutes.className = "inbock";
        this.$refs.minutemessage.className = "minutemessage";
      } else {
        this.$refs.down.className = "inbock";
        this.$refs.minutes.className = "innone";
        this.$refs.minutemessage.className = "minutemessage innone";
      }
    }
  }
};
</script>
