<template>
<div>
   <div class="topbar">
   <div class="corent">
     <div class="min-logon">
       <img src="../../assets/小logo.gif" alt="">
     </div>
      <div class="tab-centers">
         <el-menu class="el-menu-demo" mode="horizontal">
           <el-menu-item index="1"><router-link to="/peasant/peasantHome"><i class="el-icon-delete"></i>农户首页<span class="jiange"></span></router-link></el-menu-item>
           <el-submenu index="2">
             <template slot="title"><router-link to="/peasant/peasantBotany"><i class="el-icon-delete"></i>值保中心<span class="jiange"></span></router-link></template>
             <el-menu-item index="2-1"><router-link to="/peasant/peasantBotany/Myorder">我的订单</router-link></el-menu-item>
             <el-menu-item index="2-2"><router-link to="/peasant/peasantBotany/publish">发布订单</router-link></el-menu-item>
             <el-menu-item index="2-3"><router-link to="/business/busCenter/mybus">接单订单</router-link></el-menu-item>
             <el-menu-item index="2-4"><router-link to="/business/busCenter/mybus">评价订单</router-link></el-menu-item>
           </el-submenu>
           <el-menu-item index="3"><router-link to="/peasant/peasantSoil"><i class="el-icon-delete"></i>地块中心<span class="jiange"></span></router-link></el-menu-item>
           <el-submenu index="4" class="el-stsaiser">
             <template slot="title"> <router-link to="/peasant/peasantStats"><i class="el-icon-delete"></i>统计中心</router-link></template>
             <el-menu-item index="4-1"><router-link to="/business/busCenter/mybus">无人机管理</router-link></el-menu-item>
             <el-menu-item index="4-2"><router-link to="/business/busCenter/mybus">无人机分配</router-link></el-menu-item>
           </el-submenu>
         </el-menu>
      </div>
      <div class="search">
          <input type="text" class="searchInpt">
          <i class="el-icon-search"></i>
      </div>
      <div class="personal">
        <div class="personal-left">
          <i class="el-icon-bell" style="font-size: 20px"></i>
          <span class="shu"></span>
        </div>
        <div class="personal-right">
            <span>{{this.id[this.id.length-1].name}}</span>
            <i class="xiala">
              <img src="../../assets/Down 2.png" alt="">
            </i>
            <img :src="this.id[this.id.length-1].url" class="toux">
            <div class="xgzl">
                <p @click="open">修改资料</p>
            </div>
        </div>

      </div>
   </div>
  </div>
  <router-view></router-view>
</div>
</template>
<style>

</style>

<script>
import "./peasant.css";
export default {
  data() {
    return {
      plot: {},
      id: []
    };
  },
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
  },
  created() {
    const id = JSON.parse(window.localStorage.getItem("id"));
    console.log(id);
    // vuex获取数据
    const name = JSON.parse(window.localStorage.getItem("name"));
    console.log(name);
    // 登录之后的id
    this.id = this.$store.getters.getPensantId;
    console.log(this.id);
    console.log(this.$store.state.peasantId);
    if (this.$store.state.peasantId.length == 0) {
      this.$store.commit("setuseifon", id);
      this.$store.dispatch("NameUser", name);
      console.log(this.$store.state.peasantId);
    }
    // if()
    // 验证是否登录
    const red_id = JSON.parse(window.localStorage.getItem("id"));
    if (!red_id.reg_id) {
      location.href = "#/login";
    }
  }
};
</script>


