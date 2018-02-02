<template>
  <div class="confirmed">
    <div class="confirmed-top">
     <span v-show="role == 1"> <router-link to="/peasant/peasantBotany/publish"> <img src="../../assets/037.png" alt="" class="confighimges"> 发起值保订单</router-link></span>
     <span v-show="role == 3"> <router-link to="/protect/protectBotany/pullsetplayers"> <img src="../../assets/037.png" alt="" class="confighimges"> 发起值保订单</router-link></span>
     &nbsp;&nbsp;|&nbsp;&nbsp;
     <span v-show="role == 1"> <router-link to="/peasant/peasantBotany/Myorder"> <img src="../../assets/012.png" alt="" class="confighimgess"> 查看所有订单</router-link></span>
     <span v-show="role == 3"> <router-link to="/protect/protectBotany/mybusot"> <img src="../../assets/012.png" alt="" class="confighimgess"> 查看所有订单</router-link></span>
     </div>
      <div class="stlsp">
        <ul class="stlsp-ul">
          <li class="stlsp-li" v-for="(item,index) in uavtatelist" :key="index">
            <div class="tiandi">
            <span style="color: #0094ff">田地一号</span><br>
            <span>2017.11.30</span>
             </div>
             <div class="zsfj" ref="uav">
               <img src="../../assets/0094.gif" alt="">
             </div>
            <el-steps  :active="item" finish-status="success">
            <el-step title="需求发布"></el-step>
            <el-step title="接单中"></el-step>
            <el-step title="接单完成"></el-step>
            <el-step title="作业完成"></el-step>
            <el-step title="确定完成"></el-step>
            <el-step title="已评价"></el-step>
            </el-steps>
          </li>
        </ul>

      </div>
  </div>
   <!-- :space="200" -->
</template>
<style>
.confirmed {
  height: 250px;
  box-shadow: 0 0 2px 2px #ccc;
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 20px;
}
.confirmed-top {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.confirmed-top span {
  font-size: 14px;
}
.confighimges {
  position: relative;
  top: 6px;
}
.confighimgess {
  position: relative;
  top: 4px;
}
.stlsp {
  height: 210px;
}
.stlsp-li {
  height: 30px;
  padding: 18px 20px 20px 0;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.stlsp-li:last-child {
  border: 0;
}
.stlsp-ul {
  margin: 0;
  height: 210px;
  padding: 0;
}
.tiandi {
  width: 80px;
  float: left;
  margin-right: 20px;
  font-size: 14px;
  text-align: center;
}
.el-step .el-step__title {
  font-size: 14px;
  line-height: 18px;
  margin-left: -10px;
}
.el-step .el-step__head.is-success {
  color: #0094ff;
  border-color: #0094ff;
}
.el-step .el-step__title.is-success {
  color: #0094ff;
}
.zsfj {
  position: absolute;
  left: 160px;
  top: 0px;
}
.uavone {
  left: 360px;
  top: 6px;
  /* z-index: 2; */
}
.uavone {
  left: 320px;
  top: 0px;
}
.el-step .el-step__title.is-process {
  color: #b4bccc;
}
.el-step .el-step__head.is-process {
  color: #b4bccc;
  border-color: #b4bccc;
}
</style>
<script>
// #/protect/protectBotany/mybusot
export default {
  data() {
    return {
      uavtatelist: [3, 4, 5],
      role: ""
    };
  },
  methods: {
    getuavstate: function() {
      this.$refs.uav[0].className = "zsfj uavone";
      console.log(this.$refs);
    },
    getrole: function() {
      this.role = window.sessionStorage.getItem("role");
      console.log(this.role);
    }
  },
  mounted() {
    this.getrole();
    this.getuavstate();
  }
};
</script>
