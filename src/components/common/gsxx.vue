<template>
  <div class="gsxx">
    <div class="gsxx-top">
     <i class="el-icon-info"></i> 高科新农公司
    </div>
    <div class="gsxx-center">
      <p>高科值保一队</p>
      <span><i class="el-icon-question"></i>夏末某</span>
      <span><i class="el-icon-question"></i>夏末某</span>
      <span><i class="el-icon-question"></i>夏末某</span>
      <span><i class="el-icon-circle-plus"></i>添加</span>

       <!-- <el-rate
    v-model="value"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate> -->
    </div>
  </div>
</template>

<style>
.gsxx {
  width: 292px;
  height: 240px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
}
.gsxx-top {
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 700;
}
.gsxx-center span {
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 20px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  text-align: center;
  padding-bottom: 20px;
}
.gsxx-center span:nth-of-type(2n) {
  border-right: 0;
  margin-left: -5px;
}
.gsxx-center span:last-child {
  border-bottom: 0;
}
.gsxx-center span:nth-of-type(3) {
  border-bottom: 0;
}
</style>
<script>
export default {
  data() {
    return {
      value: null
    };
  }
};
</script>
