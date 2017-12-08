<template>
  <div>
    <div class="left">
      <div class="demand">
          <div class="demand-top">
            <p>选择发布需求的地块</p>
          </div>
          <div class="souse">
            <input type="text">
            <i class="el-icon-search"></i>
          </div>
          <el-button type="primary" class="xzdk"  @click="dialogFormVisible = true"><i class="el-icon-circle-plus-outline"></i>新增地块</el-button>
      </div>
      <div class="dklist">
          <div class="information">
              <img src="../../../../assets/5555.png" alt="">
              <div class="information-right">
                <h4>田地一号</h4>
                <span>广东省深圳市南山区特发信息港A栋</span><br>
                <span>120亩</span>|<span>水稻</span>
              </div>
          </div>
          <div class="information">
              <img src="../../../../assets/5555.png" alt="">
              <div class="information-right">
                <h4>田地一号</h4>
                <span>广东省深圳市南山区特发信息港A栋</span><br>
                <span>120亩</span>|<span>水稻</span>
              </div>
          </div>
          <div class="information">
              <img src="../../../../assets/5555.png" alt="">
              <div class="information-right">
                <h4>田地一号</h4>
                <span>广东省深圳市南山区特发信息港A栋</span><br>
                <span>120亩</span>|<span>水稻</span>
              </div>
          </div>
          <div class="information">
              <img src="../../../../assets/5555.png" alt="">
              <div class="information-right">
                <h4>田地一号</h4>
                <span>广东省深圳市南山区特发信息港A栋</span><br>
                <span>120亩</span>|<span>水稻</span>
              </div>
          </div>
          <div class="information">
              <img src="../../../../assets/5555.png" alt="">
              <div class="information-right">
                <h4>田地一号</h4>
                <span>广东省深圳市南山区特发信息港A栋</span><br>
                <span>120亩</span>|<span>水稻</span>
              </div>
          </div>
      </div>
    </div>

    <el-dialog title="新增地块" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="地块名称" :label-width="formLabelWidth">
      <el-input v-model="form.name"  style="width: 80%" placeholder="请输入地块名称"></el-input>
    </el-form-item>
    <el-form-item label="地块地址" :label-width="formLabelWidth">
      <v-distpicker  @selected="onSelected"></v-distpicker>
    </el-form-item>
    <el-form-item label="详细地址" :label-width="formLabelWidth">
    <el-input v-model="form.site" placeholder="请输入详细地址" style="width: 80%"></el-input>
  </el-form-item>
    <el-form-item label="作业面积" :label-width="formLabelWidth" >
    <el-input v-model="form.area" style="width: 80%" placeholder="请输入作业面积"></el-input>
  </el-form-item>
   <el-form-item label="目标作物" :label-width="formLabelWidth" >
      <el-select v-model="ruleForm.value" placeholder="作物种类"  @change="provinceChange">
    <el-option
      v-for="item in ruleForm.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
     </el-select>
    <el-select placeholder="具体名称" v-model="ruleForm.city">
        <el-option
         v-for="item in ruleForm.cityOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="地块描述和备注" :label-width="formLabelWidth">
    <el-input type="textarea" v-model="form.desc" style="width: 80%" placeholder="请输入地块描述和备注"></el-input>
  </el-form-item>
  <el-form-item label="地块图片" :label-width="formLabelWidth" >
   <el-upload
  action="https://jsonplaceholder.typicode.com/posts"
  list-type="picture-card"
  :multiple="true"
  :show-file-list="true"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible" size="tiny">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary"  @click="dialogFormVisible = false" class="fabu">发布</el-button>
    <el-button  @click="reset" id="chongzhi">重置</el-button>
  </div>
</el-dialog>



<div class="publish">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="农户姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="农户电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="作物类型" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="防治" name="type"></el-checkbox>
      <el-checkbox label="杀虫灭菌" name="type"></el-checkbox>
      <el-checkbox label="施肥" name="type"></el-checkbox>
      <el-checkbox label="授粉" name="type"></el-checkbox>
      <el-checkbox label="脱叶" name="type"></el-checkbox>
      <el-checkbox label="消杀灭菌" name="type"></el-checkbox>
      <el-checkbox label="消杀灭菌" name="type"></el-checkbox>
      <el-checkbox label="其他" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="农作物" prop="type2">
    <el-checkbox-group v-model="ruleForm.type2">
      <el-checkbox label="水稻" name="type"></el-checkbox>
      <el-checkbox label="小麦" name="type"></el-checkbox>
      <el-checkbox label="玉米" name="type"></el-checkbox>
      <el-checkbox label="柑橘" name="type"></el-checkbox>
    </el-checkbox-group>
    <span class="ck" @click="ck">查看更多</span>
  </el-form-item>
  <el-form-item v-show="ruleForm.zwzl" label="更多作物">
    <el-select v-model="ruleForm.value" placeholder="作物种类"  @change="provinceChange">
    <el-option
      v-for="item in ruleForm.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
     </el-select>
    <el-select placeholder="具体名称" v-model="ruleForm.city">
        <el-option
         v-for="item in ruleForm.cityOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="作业时间" required>
    <el-col :span="6">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="作物地址" ><v-distpicker  @selected="onSelected"></v-distpicker></el-form-item>
   <el-form-item label="详细地址" prop="site">
    <el-input v-model="ruleForm.site" placeholder="请填写详细地址"></el-input>
  </el-form-item>
  <el-form-item label="作业面积" prop="area">
    <el-input v-model="ruleForm.area"></el-input>
  </el-form-item>
  <el-form-item label="发布价格" prop="price">
    <el-input v-model="ruleForm.price"></el-input>
  </el-form-item>
  <el-form-item label="作业说明" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc" style="width: 592px"></el-input>
  </el-form-item>
   <el-form-item label="值保队选择">
   <el-button type="primary">选择值保队</el-button><br>
   可以指定值保机构为您服务
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" class="fbcz">发布</el-button>
    <el-button @click="resetForm('ruleForm')" class="fbcz">重置</el-button>
  </el-form-item>
</el-form>
  <!-- 版权号 -->
    <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px">
        Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
    </div>
</div>
  </div>
</template>

<style>
.left {
  width: 312px;
  background-color: #4c5e70;
  padding: 22px 14px;
  position: fixed;
  top: 70px;
  height: 100%;
}
.information {
  height: 112px;
  margin-top: 15px;
  border-radius: 10px;
  background-color: #fff;
}
.information img {
  display: inline-block;
  width: 116px;
  height: 86px;
  margin-top: 14px;
  margin-left: 10px;
}
.information-right {
  display: inline-block;
  width: 166px;
  height: 112px;
  margin-left: 10px;
  margin-top: -20px;
}
.information-right h4 {
  margin: 0;
}
.information-right span {
  font-size: 14px;
}
.demand {
  height: 200px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.demand-top {
  padding: 0 10px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.demand-top p {
  margin: 0;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
}
.souse {
  height: 30px;
  /* background-color: red; */
  padding: 20px 46px;
  position: relative;
}
.souse input {
  height: 30px;
  width: 200px;
  border-radius: 10px;
  font-size: 20px;
}
.souse i {
  position: absolute;
  font-size: 30px;
  right: 65px;
  top: 23px;
}
.xzdk {
  width: 120px;
  height: 70px;
  padding: 0;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 90px;
}
.zwzl {
  height: 45px;
  margin-bottom: 22px;
  margin-left: 50px;
  display: none;
}
.zwzl select {
  height: 45px;
  width: 100px;
  font-size: 14px;
}
.publish {
  width: 850px;
  padding-top: 20px;
  position: relative;
  height: 95%;
  left: 354px;
  top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px #ccc;
}
.el-input {
  width: 376px;
}
.ck {
  position: absolute;
  width: 60px;
  height: 30px;
  right: 350px;
  top: 0;
  color: #0094ff;
  cursor: pointer;
}
.el-input__suffix {
  right: 220px;
}
.el-input--suffix .el-input__inner {
  width: 160px;
}
.el-select {
  width: 160px;
}
.fbcz {
  width: 192px;
}
.fabu {
  width: 20%;
  position: absolute;
  right: 50%;
}
#chongzhi {
  width: 20%;
  margin-right: 25%;
}
</style>
<script>
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      form: {
        name: "",
        site: "",
        area: "",
        crop: "",
        desc: ""
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        date: "",
        type: [],
        type2: [],
        desc: "",
        phone: "",
        site: "",
        area: "",
        price: "",
        value: "",
        city: "",
        zwzl: false,
        options: [
          {
            value: "1",
            label: "粮食作物"
          },
          {
            value: "2",
            label: "纤维作物"
          },
          {
            value: "3",
            label: "油料作物"
          },
          {
            value: "4",
            label: "蔬菜"
          },
          {
            value: "5",
            label: "果树"
          },
          {
            value: "6",
            label: "其他作物"
          }
        ],
        cityOptions: []
      },
      rules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入电话号码或手机号码", trigger: "blur" },
          { min: 7, max: 11, message: "长度在 7 到 11 个字符", trigger: "blur" }
        ],
        site: [{ required: true, message: "请输入您的详细地址", trigger: "blur" }],
        area: [{ required: true, message: "请输入您需要作业的面积", trigger: "blur" }],
        price: [{ required: true, message: "请输入价格", trigger: "blur" }],
        date: [
          { type: "date", required: true, message: "请选择日期", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个作物类型",
            trigger: "change"
          }
        ],
        type2: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个农作物",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写作业说明", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    reset() {
      this.form = {};
    },
    ck: function() {
      this.ruleForm.zwzl = true;
    },
    onSelected(data) {
      alert(data.province.value + data.city.value + data.area.value);
      console.log(data);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    provinceChange(val) {
      if (val == 1) {
        this.ruleForm.cityOptions = [
          { value: "1", label: "小麦" },
          { value: "2", label: "小麦稀有种" },
          { value: "3", label: "水稻" },
          { value: "4", label: "大麦" },
          { value: "5", label: "燕麦" },
          { value: "6", label: "玉米" },
          { value: "7", label: "高粱" },
          { value: "8", label: "谷子" },
          { value: "9", label: "荞麦" },
          { value: "10", label: "黍稷" },
          { value: "11", label: "绿豆" },
          { value: "12", label: "蚕豆" },
          { value: "13", label: "小豆" },
          { value: "14", label: "豌豆" },
          { value: "15", label: "普通菜豆" },
          { value: "16", label: "豇豆" },
          { value: "17", label: "多花菜豆" },
          { value: "18", label: "木豆" },
          { value: "19", label: "刀豆" },
          { value: "20", label: "黎豆" },
          { value: "21", label: "扁豆" },
          { value: "22", label: "利马豆" },
          { value: "23", label: "四棱豆" },
          { value: "24", label: "小扁豆" },
          { value: "25", label: "鹰嘴豆" },
          { value: "26", label: "饭豆" },
          { value: "27", label: "甘薯" },
          { value: "28", label: "马铃薯" }
        ];
      }
      if (val == 2) {
        this.ruleForm.cityOptions = [
          { value: "1", label: "棉花" },
          { value: "2", label: "亚麻" },
          { value: "3", label: "苎麻" },
          { value: "4", label: "红麻" },
          { value: "5", label: "黄麻" },
          { value: "6", label: "大麻" },
          { value: "7", label: "青麻" }
        ];
      }

      if (val == 3) {
        this.ruleForm.cityOptions = [
          { value: "1", label: "大豆" },
          { value: "2", label: "油菜" },
          { value: "3", label: "芝麻" },
          { value: "4", label: "花生" },
          { value: "5", label: "向日葵" },
          { value: "6", label: "红花" },
          { value: "7", label: "苏子" },
          { value: "8", label: "蓖麻" }
        ];
      }
      if (val == 4) {
        this.ruleForm.cityOptions = [
          { value: "1", label: "萝卜" },
          { value: "2", label: "胡萝卜" },
          { value: "3", label: "芜菁" },
          { value: "4", label: "芜菁甘蓝" },
          { value: "5", label: "根甜菜" },
          { value: "6", label: "牛蒡" },
          { value: "7", label: "大白菜" },
          { value: "8", label: "白菜" },
          { value: "9", label: "薹菜" },
          { value: "10", label: "菜薹" },
          { value: "11", label: "叶芥菜" },
          { value: "12", label: "茎芥菜" },
          { value: "13", label: "根芥菜" },
          { value: "14", label: "薹芥菜" },
          { value: "15", label: "子芥菜" },
          { value: "16", label: "结球甘蓝" },
          { value: "17", label: "球茎甘蓝" },
          { value: "18", label: "花椰菜" },
          { value: "19", label: "嫩茎花椰菜" },
          { value: "20", label: "芥蓝" },
          { value: "21", label: "黄瓜" },
          { value: "22", label: "西葫芦" },
          { value: "23", label: "南瓜" },
          { value: "24", label: "笋瓜" },
          { value: "25", label: "冬瓜" },
          { value: "26", label: "节瓜" },
          { value: "27", label: "苦瓜" },
          { value: "28", label: "丝瓜" },
          { value: "29", label: "瓠瓜" },
          { value: "30", label: "蛇瓜" },
          { value: "31", label: "菜瓜" },
          { value: "32", label: "越瓜" },
          { value: "33", label: "黑子南瓜" },
          { value: "34", label: "西瓜" },
          { value: "35", label: "甜瓜" },
          { value: "36", label: "其它瓜类" },
          { value: "37", label: "番茄" },
          { value: "38", label: "茄子" },
          { value: "39", label: "辣椒" },
          { value: "40", label: "酸浆" },
          { value: "41", label: "菜豆" },
          { value: "42", label: "莱豆" },
          { value: "43", label: "多花菜豆" },
          { value: "44", label: "刀豆" },
          { value: "45", label: "长豇豆" },
          { value: "46", label: "毛豆" },
          { value: "47", label: "豌豆" },
          { value: "48", label: "蚕豆" },
          { value: "49", label: "扁豆" },
          { value: "50", label: "其它豆类" },
          { value: "51", label: "韭菜" },
          { value: "52", label: "大葱" },
          { value: "53", label: "分葱" },
          { value: "54", label: "洋葱" },
          { value: "55", label: "韭葱" },
          { value: "56", label: "菠菜" },
          { value: "57", label: "芹菜" },
          { value: "58", label: "苋菜" },
          { value: "59", label: "蕹菜" },
          { value: "60", label: "叶用莴苣" },
          { value: "61", label: "茎用莴苣" },
          { value: "62", label: "茴香" },
          { value: "63", label: "芫荽" },
          { value: "64", label: "落葵" },
          { value: "65", label: "茼蒿" },
          { value: "66", label: "冬寒菜" },
          { value: "67", label: "罗勒" },
          { value: "68", label: "金花菜" },
          { value: "69", label: "紫苏" },
          { value: "70", label: "其它绿叶菜" },
          { value: "71", label: "豆薯" },
          { value: "72", label: "黄花菜" },
          { value: "73", label: "石刁柏" },
          { value: "74", label: "枸杞" }
        ];
      }
      if (val == 5) {
        this.ruleForm.cityOptions = [
          { value: "1", label: "苹果" },
          { value: "2", label: "梨" },
          { value: "3", label: "山楂" },
          { value: "4", label: "草莓" },
          { value: "5", label: "李子" },
          { value: "6", label: "杏" },
          { value: "7", label: "核桃" },
          { value: "8", label: "栗" },
          { value: "9", label: "柿" },
          { value: "10", label: "枣" },
          { value: "11", label: "柑橘" },
          { value: "12", label: "香蕉" },
          { value: "13", label: "荔枝" },
          { value: "14", label: "龙眼" },
          { value: "15", label: "枇杷" }
        ];
      }
      if (val == 6) {
        this.ruleForm.cityOptions = [
          { value: "1", label: "甜菜" },
          { value: "2", label: "甘蔗" },
          { value: "3", label: "西瓜" },
          { value: "4", label: "甜瓜" },
          { value: "5", label: "烟草" },
          { value: "6", label: "牧草" },
          { value: "7", label: "绿肥" },
          { value: "8", label: "满江红" },
          { value: "9", label: "茶" },
          { value: "10", label: "桑" },
          { value: "11", label: "籽粒苋" },
          { value: "12", label: "地肤" },
          { value: "13", label: "薏苡" },
          { value: "14", label: "藜" },
          { value: "15", label: "橡胶" },
          { value: "16", label: "木薯" },
          { value: "17", label: "咖啡" },
          { value: "18", label: "腰果" },
          { value: "19", label: "油梨" },
          { value: "20", label: "芒果" },
          { value: "21", label: "胡椒" },
          { value: "22", label: "椰子" },
          { value: "23", label: "龙舌兰麻" }
        ];
      }
    }
  },
  components: { VDistpicker }
};
</script>












