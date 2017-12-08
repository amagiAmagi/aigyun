<template>
  <div class="busCenter">
    <div class="left">
      <div class="left-top">
        <div class="left-top-header">
          <span>关键字</span><br>
          <input type="text">
          <i class="el-icon-search"></i>
        </div>
        <div class="left-top-mu">
            <span>亩数</span><br>
            <el-input  v-model="input1" clearable class="input-mu"></el-input> —
            <el-input  v-model="input2" clearable class="input-mu "></el-input>
        </div>
         <div class="left-top-mu">
            <span>时间</span><br>
           <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </div>
        <div class="left-top-buttom">
          <el-button type="primary" class="souser">搜索</el-button>
          <el-button plain>全部</el-button>
        </div>
      </div>
      <div class="left-center">
          <el-button type="text" class="left-center-button"  @click="dialogFormVisible = true"><i class="el-icon-circle-plus-outline"></i><br>
          新增地块</el-button>
      </div>
    </div>

  <!-- 点击新增谈出来的页面 -->
  <el-dialog title="新增地块" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="地块名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" style="width: 80%" placeholder="请输入地块名称"></el-input>
      </el-form-item>
      <el-form-item label="地块地址" :label-width="formLabelWidth">
        <v-distpicker @selected="onSelected"></v-distpicker>
      </el-form-item>
      <el-form-item label="详细地址" :label-width="formLabelWidth">
        <el-input v-model="form.site" placeholder="请输入详细地址" style="width: 80%"></el-input>
      </el-form-item>
      <el-form-item label="作业面积" :label-width="formLabelWidth">
        <el-input v-model="form.area" style="width: 80%" placeholder="请输入作业面积"></el-input>
      </el-form-item>
      <el-form-item label="目标作物" :label-width="formLabelWidth">
        <el-select v-model="form.value" placeholder="作物种类" @change="provinceChange" style="width: 40%">
          <el-option v-for="item in form.options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select placeholder="具体名称" v-model="form.city" style="width: 40%">
          <el-option v-for="item in form.cityOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地块描述和备注" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc" style="width: 80%" placeholder="请输入地块描述和备注"></el-input>
      </el-form-item>
      <el-form-item label="地块图片" :label-width="formLabelWidth">
        <el-upload action="http://10.10.3.32:8080/AigyunWeb/FieldManager" list-type="picture-card" :multiple="true" :show-file-list="true"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addplot" class="fabu">发布</el-button>
      <el-button @click="resetForm" id="chongzhi">重置</el-button>
    </div>
  </el-dialog>


    <div class="plot">
      <div class="plot-top">
          地块信息（<span>5</span>块）
      </div>
      <div class="plot-center">
          <ul class="plot-center-list">
            <li class="plot-center-li">
              <div class="plot-center-li-left">
                  <div class="plot-center-li-left-top">
                      <img src="../../../assets/5555.png" alt="">
                      <div class="plot-center-li-left-top-right">
                        <h5>田地一号</h5><br>
                        <span>2017-10-22</span>
                      </div>
                  </div>
                  <p>广东省深圳市南山区特发信息港A栋</p>
                  <div class="plot-center-li-left-buttom">
                    <span>120亩</span>&nbsp;&nbsp;
                    <span>|</span>&nbsp;&nbsp;
                    <span>水稻</span>
                  </div>
              </div>
              <div class="plot-center-li-right">
                 <el-button plain @click="plot">发布需求</el-button>
                 <el-button type="primary">查看</el-button>
                 <el-button type="primary" @click="open">删除</el-button>
              </div>
            </li>
            <li class="plot-center-li">
              <div class="plot-center-li-left">
                  <div class="plot-center-li-left-top">
                      <img src="../../../assets/5555.png" alt="">
                      <div class="plot-center-li-left-top-right">
                        <h5>田地一号</h5><br>
                        <span>2017-10-22</span>
                      </div>
                  </div>
                  <p>广东省深圳市南山区特发信息港A栋</p>
                  <div class="plot-center-li-left-buttom">
                    <span>120亩</span>&nbsp;&nbsp;
                    <span>|</span>&nbsp;&nbsp;
                    <span>水稻</span>
                  </div>
              </div>
              <div class="plot-center-li-right">
                 <el-button plain  @click="plot">发布需求</el-button>
                 <el-button type="primary">查看</el-button>
                 <el-button type="primary" @click="open">删除</el-button>
              </div>
            </li>
            <li class="plot-center-li">
              <div class="plot-center-li-left">
                  <div class="plot-center-li-left-top">
                      <img src="../../../assets/5555.png" alt="">
                      <div class="plot-center-li-left-top-right">
                        <h5>田地一号</h5><br>
                        <span>2017-10-22</span>
                      </div>
                  </div>
                  <p>广东省深圳市南山区特发信息港A栋</p>
                  <div class="plot-center-li-left-buttom">
                    <span>120亩</span>&nbsp;&nbsp;
                    <span>|</span>&nbsp;&nbsp;
                    <span>水稻</span>
                  </div>
              </div>
              <div class="plot-center-li-right">
                 <el-button plain  @click="plot">发布需求</el-button>
                 <el-button type="primary">查看</el-button>
                 <el-button type="primary" @click="open">删除</el-button>
              </div>
            </li>
            <li class="plot-center-li">
              <div class="plot-center-li-left">
                  <div class="plot-center-li-left-top">
                      <img src="../../../assets/5555.png" alt="">
                      <div class="plot-center-li-left-top-right">
                        <h5>田地一号</h5><br>
                        <span>2017-10-22</span>
                      </div>
                  </div>
                  <p>广东省深圳市南山区特发信息港A栋</p>
                  <div class="plot-center-li-left-buttom">
                    <span>120亩</span>&nbsp;&nbsp;
                    <span>|</span>&nbsp;&nbsp;
                    <span>水稻</span>
                  </div>
              </div>
              <div class="plot-center-li-right">
                 <el-button plain  @click="plot">发布需求</el-button>
                 <el-button type="primary">查看</el-button>
                 <el-button type="primary" @click="open">删除</el-button>
              </div>
            </li>
            <li class="plot-center-li">
              <div class="plot-center-li-left">
                  <div class="plot-center-li-left-top">
                      <img src="../../../assets/5555.png" alt="">
                      <div class="plot-center-li-left-top-right">
                        <h5>田地一号</h5><br>
                        <span>2017-10-22</span>
                      </div>
                  </div>
                  <p>广东省深圳市南山区特发信息港A栋</p>
                  <div class="plot-center-li-left-buttom">
                    <span>120亩</span>&nbsp;&nbsp;
                    <span>|</span>&nbsp;&nbsp;
                    <span>水稻</span>
                  </div>
              </div>
              <div class="plot-center-li-right">
                 <el-button plain  @click="plot">发布需求</el-button>
                 <el-button type="primary">查看</el-button>
                 <el-button type="primary" @click="open">删除</el-button>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<style>
.busCenter {
  width: 1200px;
  margin: 0 auto;
  padding-top: 70px;
}
.left {
  width: 312px;
  background-color: #4c5e70;
  padding: 22px 14px;
  position: fixed;
  top: 70px;
  height: 100%;
}
.left-top {
  width: 248px;
  height: 260px;
  background-color: #fff;
  padding: 10px 32px;
  border-radius: 10px;
}
.left-top-mu {
  margin-top: 6px;
}
.left-top-mu span {
  font-size: 14px;
}
.left-top-header span {
  font-size: 14px;
}
.left-top-header input {
  width: 248px;
  height: 34px;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 6px;
}
.left-top-header i {
  position: absolute;
  font-size: 30px;
  right: 50px;
  top: 62px;
}
.left-top-buttom {
  margin-top: 20px;
}
.left-top-mu .input-mu {
  width: 111px;
}
.el-range-editor.el-input__inner {
  width: 248px;
}
.el-date-editor .el-range__close-icon {
  position: absolute;
  right: 0;
}
.souser {
  width: 110px;
  margin-right: 35px;
}
.plot {
  width: 850px;
  height: 800px;
  /* background-color: #0094ff; */
  margin-left: 350px;
}
.plot-top {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
}
.plot-center {
  width: 100%;
  height: 700px;
}
.plot-center-list {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
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
.plot-center-li {
  width: 416px;
  height: 222px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 18px;
  box-sizing: border-box;
  float: left;
  padding: 18px;
}
.plot-center-li:nth-of-type(2n) {
  margin-left: 18px;
}
.plot-center-li-left {
  width: 270px;
  height: 186px;
  /* background-color: red; */
  border-right: 1px solid #ccc;
}
.plot-center-li-left-top {
  width: 270px;
  height: 93px;
}
.plot-center-li-left-top img {
  width: 116px;
  height: 86px;
}
.plot-center-li-left-top-right {
  display: inline-block;
  width: 100px;
  height: 53px;
  padding: 20px;
  position: relative;
  top: -10px;
}
.plot-center-li-left-top-right h5 {
  font-size: 16px;
  margin: 0;
}
.plot-center-li-left-top-right span {
  font-size: 14px;
  color: #666;
}
.plot-center-li-left-buttom {
  text-align: center;
  margin-top: 20px;
}
.plot-center-li-left-buttom span {
  font-size: 18px;
}
.plot-center-li-right {
  float: right;
  width: 94px;
  height: 162px;
  margin-top: -186px;
  text-align: center;
  padding: 12px 0;
}
.el-button + .el-button {
  margin-left: 0;
  margin-bottom: 20px;
  width: 98px;
}
.el-button {
  margin-bottom: 20px;
}
.left-center {
  width: 176px;
  height: 116px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 47px 68px;
}
.left-center .left-center-button {
  width: 176px;
  height: 116px;
  border-radius: 10px;
  background-color: #409eff;
  color: #fff;
}
.left-center-button i {
  font-size: 50px;
}
</style>

<script>
import VDistpicker from "v-distpicker";
import api from "../../common/api.js";
export default {
  data() {
    return {
      input1: "",
      input2: "",
      value: "",
      dialogFormVisible: false,
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        name: "",
        site: "",
        area: "",
        are: "",
        crop: "",
        desc: "",
        value: "",
        city: "",
        cit: "",
        prov: "",
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
      formLabelWidth: "120px"
    };
  },
  methods: {
    open() {
      this.$confirm("此操作将永久删除该地块, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    plot: function() {
      location.href = "#/peasant/peasantBotany/publish";
    },
    onSelected(data) {
      this.form.prov = data.province.value;
      this.form.cityOptions = data.city.value;
      this.form.are = data.area.value;
      // alert(data.province.value + data.city.value + data.area.value);
      // console.log(data);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    provinceChange(val) {
      if (val == 1) {
        this.form.cityOptions = [
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
        this.form.cityOptions = [
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
        this.form.cityOptions = [
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
        this.form.cityOptions = [
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
          { value: "80", label: "叶用莴苣" },
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
        this.form.cityOptions = [
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
        this.form.cityOptions = [
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
    },
    resetForm() {
      this.form = {};
    },
    addplot: function() {
      this.dialogFormVisible = false;
      var reg = window.local;
      console.log(window.local);
      this.$http
        .post(
          api.apihost + "FieldManager",
          {
            reg_id: 88956252,
            action: 0,
            farmland_name: this.form.name,
            farmland_prov: this.form.prov,
            farmland_city: this.form.cit,
            farmland_district: this.form.are,
            farmland_addr: this.form.site,
            farmland_ares: this.form.area,
            crops_type: this.form.value,
            crops_name: this.form.city,
            remarks: this.form.desc
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(function(res) {
          console.log(res);
        });
    }
  },
  components: {
    VDistpicker
  }
};
</script>
