<template>

  <div>

    <el-select v-model="ruleForm.value" placeholder="作物种类" @change="provinceChange">
      <el-option v-for="item in ruleForm.options" :key="item.value" :label="item.label" :value="item.value" >
      </el-option>
    </el-select>
    <el-select placeholder="具体名称" v-model="ruleForm.city" @change="cityChange">
      <el-option v-for="item in ruleForm.cityOptions" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>

</template>

<script>
export default {
  props: ["crop"],
  data() {
    return {
      ruleForm: {
        value: "无",
        city: "无",
        options: [
          {
            value: "0",
            label: "粮食作物"
          },
          {
            value: "1",
            label: "纤维作物"
          },
          {
            value: "2",
            label: "油料作物"
          },
          {
            value: "3",
            label: "蔬菜"
          },
          {
            value: "4",
            label: "果树"
          },
          {
            value: "5",
            label: "其他作物"
          },
          {
            value: "6",
            label: "无"
          }
        ],
        cityOptions: []
      },
      cropObj: {}
    };
  },
  methods: {
    provinceChange(val) {
      if (val) {
        this.croptify();
      }
      if (val == 0) {
        this.ruleForm.cityOptions = [
          { value: "0", label: "小麦" },
          { value: "1", label: "小麦稀有种" },
          { value: "2", label: "水稻" },
          { value: "3", label: "大麦" },
          { value: "4", label: "燕麦" },
          { value: "5", label: "玉米" },
          { value: "6", label: "高粱" },
          { value: "7", label: "谷子" },
          { value: "8", label: "荞麦" },
          { value: "9", label: "黍稷" },
          { value: "10", label: "绿豆" },
          { value: "11", label: "蚕豆" },
          { value: "12", label: "小豆" },
          { value: "13", label: "豌豆" },
          { value: "14", label: "普通菜豆" },
          { value: "15", label: "豇豆" },
          { value: "16", label: "多花菜豆" },
          { value: "17", label: "木豆" },
          { value: "18", label: "刀豆" },
          { value: "19", label: "黎豆" },
          { value: "20", label: "扁豆" },
          { value: "21", label: "利马豆" },
          { value: "22", label: "四棱豆" },
          { value: "23", label: "小扁豆" },
          { value: "24", label: "鹰嘴豆" },
          { value: "25", label: "饭豆" },
          { value: "26", label: "甘薯" },
          { value: "27", label: "马铃薯" }
        ];
      }
      if (val == 1) {
        this.ruleForm.cityOptions = [
          { value: "0", label: "棉花" },
          { value: "1", label: "亚麻" },
          { value: "2", label: "苎麻" },
          { value: "3", label: "红麻" },
          { value: "4", label: "黄麻" },
          { value: "5", label: "大麻" },
          { value: "6", label: "青麻" }
        ];
      }

      if (val == 2) {
        this.ruleForm.cityOptions = [
          { value: "0", label: "大豆" },
          { value: "1", label: "油菜" },
          { value: "2", label: "芝麻" },
          { value: "3", label: "花生" },
          { value: "4", label: "向日葵" },
          { value: "5", label: "红花" },
          { value: "6", label: "苏子" },
          { value: "7", label: "蓖麻" }
        ];
      }
      if (val == 3) {
        this.ruleForm.cityOptions = [
          { value: "0", label: "萝卜" },
          { value: "1", label: "胡萝卜" },
          { value: "2", label: "芜菁" },
          { value: "3", label: "芜菁甘蓝" },
          { value: "4", label: "根甜菜" },
          { value: "5", label: "牛蒡" },
          { value: "6", label: "大白菜" },
          { value: "7", label: "白菜" },
          { value: "8", label: "薹菜" },
          { value: "9", label: "菜薹" },
          { value: "10", label: "叶芥菜" },
          { value: "11", label: "茎芥菜" },
          { value: "12", label: "根芥菜" },
          { value: "13", label: "薹芥菜" },
          { value: "14", label: "子芥菜" },
          { value: "15", label: "结球甘蓝" },
          { value: "16", label: "球茎甘蓝" },
          { value: "17", label: "花椰菜" },
          { value: "18", label: "嫩茎花椰菜" },
          { value: "19", label: "芥蓝" },
          { value: "20", label: "黄瓜" },
          { value: "21", label: "西葫芦" },
          { value: "22", label: "南瓜" },
          { value: "23", label: "笋瓜" },
          { value: "24", label: "冬瓜" },
          { value: "25", label: "节瓜" },
          { value: "26", label: "苦瓜" },
          { value: "27", label: "丝瓜" },
          { value: "28", label: "瓠瓜" },
          { value: "29", label: "蛇瓜" },
          { value: "30", label: "菜瓜" },
          { value: "31", label: "越瓜" },
          { value: "32", label: "黑子南瓜" },
          { value: "33", label: "西瓜" },
          { value: "34", label: "甜瓜" },
          { value: "35", label: "其它瓜类" },
          { value: "36", label: "番茄" },
          { value: "37", label: "茄子" },
          { value: "38", label: "辣椒" },
          { value: "39", label: "酸浆" },
          { value: "40", label: "菜豆" },
          { value: "41", label: "莱豆" },
          { value: "42", label: "多花菜豆" },
          { value: "43", label: "刀豆" },
          { value: "44", label: "长豇豆" },
          { value: "45", label: "毛豆" },
          { value: "46", label: "豌豆" },
          { value: "47", label: "蚕豆" },
          { value: "48", label: "扁豆" },
          { value: "49", label: "其它豆类" },
          { value: "50", label: "韭菜" },
          { value: "51", label: "大葱" },
          { value: "52", label: "分葱" },
          { value: "53", label: "洋葱" },
          { value: "54", label: "韭葱" },
          { value: "55", label: "菠菜" },
          { value: "56", label: "芹菜" },
          { value: "57", label: "苋菜" },
          { value: "58", label: "蕹菜" },
          { value: "59", label: "叶用莴苣" },
          { value: "60", label: "茎用莴苣" },
          { value: "61", label: "茴香" },
          { value: "62", label: "芫荽" },
          { value: "63", label: "落葵" },
          { value: "64", label: "茼蒿" },
          { value: "65", label: "冬寒菜" },
          { value: "66", label: "罗勒" },
          { value: "67", label: "金花菜" },
          { value: "68", label: "紫苏" },
          { value: "69", label: "其它绿叶菜" },
          { value: "70", label: "豆薯" },
          { value: "71", label: "黄花菜" },
          { value: "72", label: "石刁柏" },
          { value: "73", label: "枸杞" }
        ];
      }
      if (val == 4) {
        this.ruleForm.cityOptions = [
          { value: "0", label: "苹果" },
          { value: "1", label: "梨" },
          { value: "2", label: "山楂" },
          { value: "3", label: "草莓" },
          { value: "4", label: "李子" },
          { value: "5", label: "杏" },
          { value: "6", label: "核桃" },
          { value: "7", label: "栗" },
          { value: "8", label: "柿" },
          { value: "9", label: "枣" },
          { value: "10", label: "柑橘" },
          { value: "11", label: "香蕉" },
          { value: "12", label: "荔枝" },
          { value: "13", label: "龙眼" },
          { value: "14", label: "枇杷" }
        ];
      }
      if (val == 5) {
        this.ruleForm.cityOptions = [
          { value: "0", label: "甜菜" },
          { value: "1", label: "甘蔗" },
          { value: "2", label: "西瓜" },
          { value: "3", label: "甜瓜" },
          { value: "4", label: "烟草" },
          { value: "5", label: "牧草" },
          { value: "6", label: "绿肥" },
          { value: "7", label: "满江红" },
          { value: "8", label: "茶" },
          { value: "9", label: "桑" },
          { value: "10", label: "籽粒苋" },
          { value: "11", label: "地肤" },
          { value: "12", label: "薏苡" },
          { value: "13", label: "藜" },
          { value: "14", label: "橡胶" },
          { value: "15", label: "木薯" },
          { value: "16", label: "咖啡" },
          { value: "17", label: "腰果" },
          { value: "18", label: "油梨" },
          { value: "19", label: "芒果" },
          { value: "20", label: "胡椒" },
          { value: "21", label: "椰子" },
          { value: "22", label: "龙舌兰麻" }
        ];
      }
      if (val == 6) {
        this.ruleForm.cityOptions = [{ value: "0", label: "无" }];
      }
    },
    croptify: function() {
      this.cropObj = {
        value: this.ruleForm.value,
        city: this.ruleForm.city
      };
      this.$emit("cropList", this.cropObj);
    },
    cityChange: function() {
      this.croptify();
    }
  }
  // mounted() {
  //   this.ruleForm.value = this.crop.crops_type;
  //   this.ruleForm.city = this.crop.crops_name;
  // }
};
</script>
