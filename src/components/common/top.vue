<template>
  <div class="topbar">
   <div class="corent">
     <div class="min-logon">
       <img src="../../assets/小logo.gif" alt="">
     </div>
      <div class="tab-centers">
            <!-- <router-link to="/business/busCenter">值保中心</router-link> -->

              <li class="subTab home activ" @click="sublist1" ref="sublist1">
               <router-link to="/business/bushome"><i class="el-icon-delete"></i>值保商首页</router-link><span class="jiange">|</span>
              </li>
               <li class="subTab" @click="sublist2" ref="sublist2">
               <router-link to="/business/busCenter"><i class="el-icon-delete"></i>值保中心</router-link><span class="jiange">|</span>
              </li>
               <li class="subTab" @click="sublist3" ref="sublist3">
               <router-link to="/business/teamCenter"><i class="el-icon-delete"></i>团队中心</router-link><span class="jiange">|</span>
              </li>
               <li class="subTab" @click="sublist4" ref="sublist4">
               <router-link to="/business/assetsCenter"><i class="el-icon-delete"></i>资产中心</router-link><span class="jiange">|</span>
              </li>
               <li class="subTab" @click="sublist5" ref="sublist5">
               <router-link to="/business/StatsCentral"><i class="el-icon-delete"></i>统计中心</router-link>
              </li>

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
        </div>
      </div>
   </div>
  </div>
</template>

<style>
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
.tab-centers .subTab {
  float: left;
  line-height: 60px;
  height: 60px;
  width: 20%;
  text-align: center;
  position: relative;
  font-size: 14px;
}
.jiange {
  position: absolute;
  right: 0;
  color: #000;
}
.subTab:hover {
  box-sizing: border-box;
  border-bottom: 3px solid #0094ff;
  color: #0094ff;
}
.activ {
  box-sizing: border-box;
  border-bottom: 3px solid #0094ff;
  color: #0094ff;
}
a {
  display: inline-block;
}
/* .home {
  text-align: left;
} */
.router-link-active {
  color: #0094ff;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    sublist1: function() {
      this.$refs.sublist1.className = "subTab activ";
      this.$refs.sublist2.className = "subTab";
      this.$refs.sublist3.className = "subTab";
      this.$refs.sublist4.className = "subTab";
      this.$refs.sublist5.className = "subTab";
    },
    sublist2: function() {
      this.$refs.sublist2.className = "subTab activ";
      this.$refs.sublist1.className = "subTab";
      this.$refs.sublist3.className = "subTab";
      this.$refs.sublist4.className = "subTab";
      this.$refs.sublist5.className = "subTab";
    },
    sublist3: function() {
      this.$refs.sublist3.className = "subTab activ";
      this.$refs.sublist1.className = "subTab";
      this.$refs.sublist4.className = "subTab";
      this.$refs.sublist5.className = "subTab";
      this.$refs.sublist2.className = "subTab";
    },
    sublist4: function() {
      this.$refs.sublist4.className = "subTab activ";
      this.$refs.sublist3.className = "subTab";
      this.$refs.sublist1.className = "subTab";
      this.$refs.sublist5.className = "subTab";
      this.$refs.sublist2.className = "subTab";
    },
    sublist5: function() {
      this.$refs.sublist5.className = "subTab activ";
      this.$refs.sublist4.className = "subTab";
      this.$refs.sublist3.className = "subTab";
      this.$refs.sublist1.className = "subTab";
      this.$refs.sublist2.className = "subTab";
    }
  }
};
</script>
