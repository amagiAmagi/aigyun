<template>
  <div class="surveyreport">
    <!-- z左边部分 -->
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
    <!-- 作业报告上传 -->
    <div class="surveyreport-center">
      <div class="surveyreport-center-heder">
        作业报告上传
      </div>
      <div class="surveyreport-form">
        <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 作业无人机：</span>
  <el-select v-model="value" placeholder="请选择" class="seluav">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
        </div>
        <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 当天作业面积（亩）：</span> <input type="text">
        </div>
          <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 作业时间：</span>   <div class="block">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
        </div>
          <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 作业时长（小时）：</span> <input type="text">
        </div>
          <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 飞行高度（米）：</span> <input type="text">
        </div>
          <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 飞行速度（米/秒）：</span> <input type="text">
        </div>
          <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 喷射幅度（米）：</span> <input type="text">
        </div>
          <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 使用药剂/肥料种类：</span> <input type="text">
        </div>
          <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 药剂/肥料图片：</span> <div class="updalteoap">
            <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
          </div>
        </div>
             <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 使用药剂/肥料数量：</span> <input type="text">
        </div>
         <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 防杀种类：</span>   <div class="guard">
            <el-checkbox-group v-model="checkedCities" >
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
          </div>
        </div>
          <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 作物病虫害图片：</span> <div class="updalteoap">
            <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
          </div>
        </div>
        <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 风速（米/秒）：</span> <input type="text">
        </div>
        <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 温度（摄氏度）：</span> <input type="text">
        </div>
         <div class="surveyreporttype">
          <span class="surveyretype"><i>*</i> 地块图片：</span> <div class="updalteoap">
            <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
          </div>
        </div>
         <div class="surveyreporttype">
          <span class="surveyretype">作业备注说明：</span> <div class="wenbenyu">
            <el-input type="textarea"  placeholder="请输入内容" v-model="textarea2">
           </el-input>
          </div>
        </div>
        <el-button type="primary" class="presents">确定</el-button>
            <el-button class="presents">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import "./surveyreport.css";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      value1: "",
      dialogImageUrl: "",
      textarea2: "",
      checkedCities: [],
      cities: ["上海", "北京", "广州", "深圳"]
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
