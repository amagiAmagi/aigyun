<template>
  <div class="Jobreportupload">
    <!-- 左边部分 -->
    <div class="left">
      <div class="povrtser">
        <div class="povrtser-top">
          <img src="../../../../../assets/icon-player-uploadjob-rice.png" alt="">
          <h5>田地一号</h5>
        </div>
        <div class="povrtser-bottom">
          <p>
          <span>水稻</span>|
          <span>施肥</span>|
          <span>120亩</span>|
          <span>12元/亩</span>
          </p>
          <p>广东省深圳市特发信息港</p>
          <p>2017-10-22</p>
          <p class="lastntp">说明信息:地理位置:135处以东，平安大街以西，东平路以南，塔北路以北，67亩</p>
        </div>
      </div>
    </div>
    <!-- 工勘报告上传 -->
    <div class="survey">
      <div class="survey-heder">
        工勘报告上传
      </div>
      <div class="survey-center">
        <div class="povrstype">
          <span class="porvs"><i>*</i> 农作物：</span><span>水稻</span>
        </div>
        <div class="povrstype">
          <span class="porvs"><i>*</i> 作业场地地形：</span>
         <div class="checkboxst">
           <el-checkbox-group v-model="checkedCities1" :min="1">
             <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
           </el-checkbox-group>
           <input type="text">
         </div>
        </div>
        <div class="povrstype">
          <span class="porvs"><i>*</i> 地块总面积（亩）：</span><input type="text" class="inpuer">
        </div>
        <div class="povrstype">
          <span class="porvs"><i>*</i> 地块数量：</span>  <el-radio-group v-model="radio">
    <el-radio :label="1">1~10</el-radio>
    <el-radio :label="2">11~20</el-radio>
    <el-radio :label="3">21~50</el-radio>
    <el-radio :label="4">51~100</el-radio>
    <el-radio :label="5">100+</el-radio>
  </el-radio-group>
        </div>
         <div class="povrstype">
          <span class="porvs"><i>*</i> 场地有水源：</span>  <el-radio-group v-model="radio1">
    <el-radio :label="1">是</el-radio>
    <el-radio :label="2">否</el-radio>
  </el-radio-group>
        </div>
         <div class="povrstype">
          <span class="porvs"><i>*</i> 存在机耕地：</span>  <el-radio-group v-model="radio2">
    <el-radio :label="1">是</el-radio>
    <el-radio :label="2">否</el-radio>
  </el-radio-group>
        </div>
         <div class="povrstype">
          <span class="porvs"><i>*</i> 存在防风林：</span>  <el-radio-group v-model="radio3">
    <el-radio :label="1">是</el-radio>
    <el-radio :label="2">否</el-radio>
  </el-radio-group>
        </div>
         <div class="povrstype">
          <span class="porvs"><i>*</i> 用户自备药剂：</span>  <el-radio-group v-model="radio4">
    <el-radio :label="1">是</el-radio>
    <el-radio :label="2">否</el-radio>
  </el-radio-group>
        </div>
        <div class="povrstype">
          <span class="porvs"><i>*</i> 值保总费用（元）：</span><input type="text" class="inpuer">
        </div>
        <div class="povrstype">
          <span class="porvs">作物高度（米）：</span><input type="text" class="inpuer">
        </div>
        <div class="povrstype">
          <span class="porvs">作物密度（株/亩）：</span><input type="text" class="inpuer">
        </div>
        <div class="povrstype">
          <span class="porvs">工勘备注说明：</span>
          <div class="wenbenyu">
            <el-input type="textarea"  placeholder="请输入内容" v-model="textarea2">
           </el-input>
          </div>
        </div>
        <div class="povrstype">
          <span class="porvs">地块图片：</span>
          <div class="poveupdate">
              <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
               :on-remove="handleRemove">
               <i class="el-icon-plus"></i>
              </el-upload>
          </div>
        </div>
            <el-button type="primary" class="presents">提交</el-button>
            <el-button class="presents">重置</el-button>

      </div>
    </div>
  </div>
</template>
<script>
import "./Jobreportupload.css";
export default {
  data() {
    return {
      checkedCities1: [],
      cities: ["平地", "丘陵", "山地", "梯田", "水塘", "其他"],
      radio: 1,
      radio1: 1,
      radio2: 1,
      radio3: 1,
      radio4: 1,
      textarea2: "",
      dialogImageUrl: ""
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
