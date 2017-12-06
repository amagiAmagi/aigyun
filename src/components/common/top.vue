<template>
  <div class="topbar">
   <div class="corent">
     <div class="min-logon">
       <img src="../../assets/小logo.gif" alt="">
     </div>
      <div class="tab-centers">
              <el-menu class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1"><router-link to="/business/bushome"><i class="el-icon-delete"></i>值保商首页</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title"><router-link to="/business/busCenter"><i class="el-icon-delete"></i>值保中心</router-link></template>
    <el-menu-item index="2-1"><router-link to="/business/busCenter/mybus">我的订单</router-link></el-menu-item>
    <el-menu-item index="2-2"><router-link to="/business/busCenter/mybus">发布订单</router-link></el-menu-item>
    <el-menu-item index="2-3"><router-link to="/business/busCenter/mybus">接单订单</router-link></el-menu-item>
    <el-menu-item index="2-4"><router-link to="/business/busCenter/mybus">评价订单</router-link></el-menu-item>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title"><router-link to="/business/teamCenter"><i class="el-icon-delete"></i>团队中心</router-link></template>
    <el-menu-item index="3-1"><router-link to="/business/busCenter/mybus">值保队员管理</router-link></el-menu-item>
    <el-menu-item index="3-2"><router-link to="/business/busCenter/mybus">值保队管理</router-link></el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title"><router-link to="/business/assetsCenter"><i class="el-icon-delete"></i>资产中心</router-link></template>
    <el-menu-item index="4-1"><router-link to="/business/busCenter/mybus">无人机管理</router-link></el-menu-item>
    <el-menu-item index="4-2"><router-link to="/business/busCenter/mybus">无人机分配</router-link></el-menu-item>
  </el-submenu>
  <el-submenu index="5">
    <template slot="title"><router-link to="/business/StatsCentral"><i class="el-icon-delete"></i>统计中心</router-link></template>
    <el-menu-item index="5-1"><router-link to="/business/busCenter/mybus">作业统计</router-link></el-menu-item>
    <el-menu-item index="5-2"><router-link to="/business/busCenter/mybus">值保队统计</router-link></el-menu-item>
    <el-menu-item index="5-3"><router-link to="/business/busCenter/mybus">值保队员统计</router-link></el-menu-item>
    <el-menu-item index="5-4"><router-link to="/business/busCenter/mybus">无人机统计</router-link></el-menu-item>
    <el-menu-item index="5-5"><router-link to="/business/busCenter/mybus">实时飞行轨迹</router-link></el-menu-item>
  </el-submenu>
</el-menu>

      </div>
      <div class="search">
          <input type="text" class="searchInpt">
          <i class="el-icon-search"></i>
      </div>
      <div class="personal">
        <div class="personal-left">
          <i class="el-icon-question" style="font-size: 20px"></i>
          <span class="shu"></span>
        </div>
        <div class="personal-right">
            <span>夏先生</span>
            <i class="xiala">
              <img src="../../assets/Down 2.png" alt="">
            </i>
            <img src="../../assets/头像.png" alt="">
             <div class="xgzl">
              <p @click="open">修改资料</p>
            </div>
        </div>
      </div>
   </div>
  </div>
</template>

<style>
.xgzl {
  position: absolute;
  font-size: 12px;
  width: 60px;
  height: 80px;
  top: 48px;
  left: 14px;
  background-color: #0094ff;
  border-radius: 5px;
  text-align: center;
  display: none;
  color: #fff;
  padding-top: 10px;
}
.el-menu {
  left: -14px;
  top: -10px;
  height: 70px;
  background-color: #d5dde4;
  color: #000;
}
.el-menu--horizontal .el-menu-item {
  height: 70px;
  line-height: 70px;
  width: 20%;
  padding: 0;
}
.el-menu--horizontal .el-submenu {
  width: 20%;
  padding: 0;
}
.el-menu--horizontal .el-submenu .el-submenu__title {
  height: 70px;
  line-height: 70px;
  padding: 0;
}
.el-menu--horizontal .el-submenu > .el-menu {
  top: 70px;
  min-width: 0px;
  width: 108px;
  height: 180px;
  overflow: hidden;
}
.el-menu--horizontal .el-menu-item:hover {
  /* background-color: #0094ff; */
}
.el-menu--horizontal .el-submenu .el-submenu__title:hover {
  /* background-color: #0094ff; */
}
.el-menu--horizontal .el-submenu > .el-menu:hover {
  /* background-color: #0094ff; */
}
.topbar {
  width: 100%;
  height: 70px;
  background-color: #d5dde4;
  position: fixed;
  box-sizing: border-box;
  z-index: 2;
}
.corent {
  width: 1200px;
  height: 70px;
  /* background-color: red; */
  position: fixed;
  left: 50%;
  margin-left: -600px;
}
.search {
  width: 142px;
  height: 24px;
  position: absolute;
  left: 886px;
  top: 23px;
  border-radius: 10px;
}
.search .searchInpt {
  width: 142px;
  height: 22px;
  border: 0;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  font-size: 12px;
}
.personal {
  width: 170px;
  height: 70px;
  /* background-color: red; */
  position: absolute;
  right: 0;
  top: 0;
}
.personal-left {
  width: 50px;
  position: relative;
}
.personal-right {
  width: 120px;
  position: absolute;
  right: 0;
  top: 0;
  height: 70px;
}
.personal-right img {
  position: absolute;
  right: 0;
  top: 10px;
}
.personal-right span {
  font-size: 14px;
  position: absolute;
  left: 15px;
  top: 25px;
}
.xiala {
  position: absolute;
  left: 70px;
  top: 20px;
}
.el-icon-question {
  line-height: 70px;
  margin-left: 15px;
}
.el-icon-search {
  position: absolute;
  right: 5px;
  top: 3px;
}
.shu {
  width: 1px;
  height: 26px;
  background-color: #666;
  position: absolute;
  right: 0;
  top: 22px;
}
.min-logon {
  width: 340px;
  height: 70px;
  padding: 5px 120px;
}
.tab-centers {
  width: 540px;
  position: relative;
  top: -70px;
  height: 70px;
  left: 340px;
  padding-left: 14px;
  /* background-color: red; */
}
</style>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  }
};
</script>
