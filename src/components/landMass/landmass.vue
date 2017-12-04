<template>
<div class="landMass">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="地块一" name="first">地块一</el-tab-pane>
    <el-tab-pane label="地块二" name="second">地块二</el-tab-pane>
    <el-tab-pane label="地块三" name="third">地块三</el-tab-pane>
  </el-tabs>
<div class="gkgd">
  <router-link to="">更多>></router-link>
</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
};
</script>

<style>
.landMass {
  width: 310px;
  height: 240px;
  box-shadow: 0 0 2px 2px #ccc;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  position: relative;
}
.el-tabs {
  padding: 10px;
}
.gkgd {
  font-size: 14px;
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
