<template>
  <div class="modified">
    <div class="modified-top">
      值保商信息修改
    </div>
    <div class="modified-center">
      <div class="modified-center-left">
         <div class="formdata">
           <span>值保机构:</span>
           <input type="text" v-model="name">
         </div>
         <div class="formdata">
           <span>联 系 人 :</span>
           <input type="text" v-model="names" class="na">
           <span class="xingbie">性别:</span>
           <el-radio v-model="radio" label="1">男</el-radio>
           <el-radio v-model="radio" label="2">女</el-radio>
         </div>
         <div class="formdata">
           <span>机构地址:</span>
            <div class="citydiz">
              <cityLinke v-on:getprov="getprov"></cityLinke>
            </div>
         </div>
          <div class="formdata">
           <span>详细地址:</span>
           <input type="text" v-model="name" placeholder="请输入详细地址">
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./modified.css";
import cityLinke from "./city/cityLinkage.vue";
export default {
  data() {
    return {
      name: "",
      names: "",
      radio: "1",
      ProvObj: {}
    };
  },
  components: {
    cityLinke
  },
  methods: {
    getprov: function(data) {
      this.ProvObj = data;
      console.log(this.ProvObj);
    }
  }
};
</script>
