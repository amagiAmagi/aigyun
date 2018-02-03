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
      <div class="dklist" ref="dklist">
           <div class="information" v-for="(item,index) in this.plotList" :key="index" @click="showcar(item)" ref="information">
             <img src="../../../../assets/5555.png" alt="">
             <div class="information-right">
               <h4>{{item.farmland_name}}</h4>
               <span>{{item.farmland_addr}}</span><br>
               <span>{{item.farmland_ares}}亩</span>|<span>{{item.crops_name}}</span>
             </div>
           </div>
         </div>
    </div>

<!-- 新增地块模态框 -->
  <el-dialog title="新增地块" :visible.sync="dialogFormVisible" :lock-scroll="false">
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
        <el-input v-model="form.area" style="width: 80%" placeholder="请输入作业面积" type="number"></el-input>
      </el-form-item>
      <el-form-item label="目标作物" :label-width="formLabelWidth">
        <crop v-on:cropList="getchangeNumber"></crop>
      </el-form-item>
      <el-form-item label="地块描述和备注" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc" style="width: 80%" placeholder="请输入地块描述和备注"></el-input>
      </el-form-item>
      <el-form-item label="地块图片" :label-width="formLabelWidth">
      <upaldimg></upaldimg>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addplot" class="fabu">发布</el-button>
      <el-button @click="reset" id="chongzhi">重置</el-button>
    </div>
  </el-dialog>



<el-steps :active="num" class="stepss">
  <el-step title="请选择地块" icon="el-icon-edit"></el-step>
  <el-step title="请输入信息" icon="el-icon-upload"></el-step>
  <el-step title="发布完成" icon="el-icon-picture"></el-step>
</el-steps>

<div class="publish" v-show="formData" >

  <el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
    <el-form-item label="农户姓名" prop="name">
      <el-input v-model="ruleForm.name" style="width: 80%"></el-input>
    </el-form-item>
    <el-form-item label="农户电话" prop="phone">
      <el-input v-model="ruleForm.phone" style="width: 80%"></el-input>
    </el-form-item>
    <el-form-item label="作物类型" class="groupseter">
      <el-checkbox-group class="group" >
        <el-radio v-model="radios" label="防治" name="type"></el-radio>
        <el-radio v-model="radios" label="杀虫灭菌" name="type"></el-radio>
        <el-radio v-model="radios" label="施肥" name="type"></el-radio>
        <el-radio v-model="radios" label="授粉" name="type"></el-radio>
        <el-radio v-model="radios" label="脱叶" name="type"></el-radio>
        <el-radio v-model="radios" label="消杀免疫" name="type"></el-radio>
        <el-radio v-model="radios" label="除草" name="type"></el-radio>
        <el-radio v-model="radios" label="其他" name="type"></el-radio>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="农作物" v-if="types" >
      <el-input v-model="cytype" style="width: 80%" :disabled="true"></el-input>
      <span class="ck" @click="ck" v-show="false">查看更多</span>
    </el-form-item>
    <el-form-item label="农作物" v-else>
      <el-checkbox-group >
        <el-radio v-model="radio" label="水稻" name="type"></el-radio>
        <el-radio v-model="radio" label="小麦" name="type"></el-radio>
        <el-radio v-model="radio" label="玉米" name="type"></el-radio>
        <el-radio v-model="radio" label="柑橘" name="type"></el-radio>
      </el-checkbox-group>
      <span class="ck" @click="ck">查看更多</span>
    </el-form-item>
    <el-form-item v-show="ruleForm.zwzl" label="更多作物" class="groupseter">
      <crop v-on:cropList="getchangeNumber"></crop>
    </el-form-item>
    <el-form-item label="作业时间" required>
      <el-col :span="6">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <!-- <el-form-item label="作物地址">
      <v-distpicker @selected="onSelected"></v-distpicker>
    </el-form-item> -->
    <el-form-item label="详细地址" prop="site" >
      <el-input v-model="ruleForm.site" placeholder="请填写详细地址" :disabled="true" style="width: 80%"></el-input>
    </el-form-item>
    <el-form-item label="作业面积" prop="area" >
      <el-input v-model="ruleForm.area" :disabled="true" type="number" placeholder="请填写作业面积" style="width: 80%"></el-input>
    </el-form-item>
    <el-form-item label="发布价格" prop="price">
      <el-input v-model="ruleForm.price" placeholder="请输入发布价格" style="width: 80%"  type="number"></el-input>
    </el-form-item>
    <el-form-item label="作业说明" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc" style="width: 592px" placeholder="请填写作业说明"></el-input>
    </el-form-item>
    <el-form-item label="值保队选择">
      <el-button type="primary"  @click="outerVis">选择值保队</el-button><br> 可以指定值保机构为您服务
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="release" class="fbcz">发布</el-button>
      <!-- <el-button @click="resetForm" class="fbcz">重置</el-button> -->
    </el-form-item>
  </el-form>


<!-- 值保队选择框 -->



  <el-dialog title="值保机构选择" :visible.sync="outerVisible" :lock-scroll="false">
    <div class="dialog-top">
      <h3>选择系统推荐值保商：</h3>
      <div class="zbsxz"  ref="dialogbusi" v-for="(item,index) in busisilist" @click="busisilists(item,item.pp_reg_id,index,item.team_id)" :key="index" v-on:mouseover="heedr(index)">
        <p><span>值保商:</span>&nbsp;&nbsp;<span>{{item.ppsp_name}}</span></p>
        <p><span>人数:</span>&nbsp;&nbsp;<span>{{item.num_players}}</span></p>
        <p><span>值保范围:</span>&nbsp;&nbsp;<span>{{item.range[0]}}</span></p>
        <p><span>评价:</span>&nbsp;&nbsp;<span> <el-rate :value="item.rate" disabled></el-rate></span></p>
        <div class="iconcheckesarch" ref="iconche">
          <span class="el-icon-check checkss"></span>
        </div>
      </div>

    </div>
    <div class="xzzbdhzbs">
      <h3>选择值保队或值保商:</h3>
      <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column property="date" label="值保商名称">
        </el-table-column>
        <el-table-column property="name" label="值保队名称">
        </el-table-column>
        <el-table-column property="address" label="人数">
        </el-table-column>
        <el-table-column property="addr" label="值保范围">
        </el-table-column>
        <el-table-column property="ress" label="评价">
        </el-table-column>
      </el-table>

    </div>
    <div slot="footer" class="dialog-footer">

      <el-button @click="outerVisible = false">取 消</el-button>
      <el-button type="primary" @click="outerVisible = false">确 定</el-button>
    </div>
  </el-dialog>




  <!-- 版权号 -->
    <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px">
        Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
    </div>
</div>
  </div>
</template>

<style>

</style>
<script>
import VDistpicker from "v-distpicker";
import crop from "../../../common/crop.vue";
import api from "../../../common/api.js";
import "./publish.css";
import upaldimg from "../../../common/upladimg.vue";
export default {
  data() {
    return {
      team_id: "",
      demand_type: 1,
      pp_reg_id: "",
      busisilist: [],
      cytype: "",
      types: false,
      num: 1,
      formData: false,
      length: "",
      id: "",
      task_type: "",
      radio: "",
      radios: "",
      plotList: [],
      red_id: "",
      tableData: [],
      currentRow: null,
      cropList: {},
      form: {
        name: "",
        site: "",
        area: "",
        are: "",
        crop: "",
        desc: "",
        cit: "",
        prov: ""
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
      outerVisible: false,
      ruleForm: {
        name: "",
        date: "",
        desc: "",
        phone: "",
        site: "",
        area: "",
        price: "",
        zwzl: false,
        dates: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        phone: [
          {
            required: true,
            message: "请输入电话号码或手机号码",
            trigger: "blur"
          },
          { min: 7, max: 11, message: "长度在 7 到 13 个字符", trigger: "blur" }
        ],
        site: [
          { required: true, message: "请输入您的详细地址", trigger: "blur" }
        ],
        area: [
          { required: true, message: "请输入您需要作业的面积", trigger: "blur" }
        ],
        price: [{ required: true, message: "请输入价格", trigger: "blur" }],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写作业说明", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 新增地块
    addplot: function() {
      this.dialogFormVisible = false;
      this.$http
        .post(
          api.apihost + "FieldManager",
          {
            reg_id: this.red_id,
            action: 0,
            farmland_name: this.form.name,
            farmland_prov: this.form.prov,
            farmland_city: this.form.cit,
            farmland_district: this.form.are,
            farmland_addr: this.form.site,
            farmland_ares: this.form.area,
            crops_type: this.cropList.value,
            crops_name: this.cropList.city,
            remarks: this.form.desc
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.getproverpli();
            this.$message({
              message: "恭喜你,新增地块成功",
              type: "success"
            });
          } else {
            this.$message({
              message: "地块新增失败",
              type: "error"
            });
          }
        });
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      console.log(val);
      if (val != undefined) {
        this.$refs.iconche.forEach(e => {
          e.className = "iconcheckesarch";
        });
        this.$refs.dialogbusi.forEach(e => {
          e.className = "zbsxz";
        });
      }
      this.team_id = this.currentRow.team_id;
      this.pp_reg_id = this.currentRow.pp_reg_id;
      this.getdemand_types();
    },
    reset() {
      this.form = {};
    },
    ck: function() {
      this.ruleForm.zwzl = true;
    },
    onSelected(data) {
      // alert(data.province.value + data.city.value + data.area.value);
      this.form.prov = data.province.value;
      this.form.cityOptions = data.city.value;
      this.form.are = data.area.value;
      console.log(data);
    },
    release() {
      this.ruleForm.dates = Math.round(this.ruleForm.date.getTime() / 1000);
      const _this = this;
      console.log(11111111111);
      console.log(this.ruleForm);
      console.log(this);
      this.$http
        .post(
          api.apihost + "TaskManager",
          {
            reg_id: this.red_id,
            action: 0,
            farmland_id: this.id,
            task_type: this.task_type,
            // task_other_type: "",
            crops_type: this.cropList.value,
            crops_name: this.cropList.city,
            task_time: this.ruleForm.dates,
            // task_prov: "",
            // task_city: "",
            // task_district: "",
            task_ares: this.ruleForm.area,
            task_price: this.ruleForm.price,
            task_introduce: this.ruleForm.desc,
            task_addr: this.ruleForm.site,
            demand_type: this.demand_type,
            pp_teg_id: this.pp_reg_id,
            team_id: this.team_id
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(function(res) {
          console.log(res);
          if (res.data.code == 0) {
            _this.num = 3;
            _this.$message({
              type: "success",
              message: "发布成功!"
            });
            _this.ruleForm.name = "";
            _this.ruleForm.date = "";
            _this.ruleForm.desc = "";
            _this.ruleForm.phone = "";
            _this.ruleForm.site = "";
            _this.ruleForm.price = "";
            _this.ruleForm.dates = "";
            _this.radios = "";
            location.href = "#/business/busCenter/mybuss";
          } else {
            _this.$message({
              type: "info",
              message: "发布失败"
            });
          }
        });
    },
    resetForm() {
      // this.ruleForm = {};
    },
    getchangeNumber: function(obj) {
      this.cropList = obj;
      console.log(this.cropList);
    },
    showcar: function(item) {
      this.ruleForm.site = item.farmland_addr;
      this.ruleForm.area = item.farmland_ares;
      this.id = item.farmland_id;
      this.formData = true;
      this.num = 2;
      console.log(item);

      if (item.crops_name == "") {
        this.types = false;
        console.log(1111111);
      } else {
        this.types = true;
        this.cytype = item.crops_name;
      }
      this.getcorpindex(item.crops_type, item.crops_name);
    },
    getRadio: function() {
      if (this.radio == "水稻") {
        this.cropList.value = 0;
        this.cropList.city = 2;
      }
      if (this.radio == "小麦") {
        this.cropList.value = 0;
        this.cropList.city = 0;
      }
      if (this.radio == "玉米") {
        this.cropList.value = 0;
        this.cropList.city = 5;
      }
      if (this.radio == "柑橘") {
        this.cropList.value = 4;
        this.cropList.city = 10;
      }
    },
    getRadios: function() {
      if (this.radios == "防治") {
        this.task_type = 1;
      }
      if (this.radios == "杀虫灭菌") {
        this.task_type = 2;
      }
      if (this.radios == "施肥") {
        this.task_type = 3;
      }
      if (this.radios == "授粉") {
        this.task_type = 4;
      }
      if (this.radios == "脱叶") {
        this.task_type = 5;
      }
      if (this.radios == "消杀免疫") {
        this.task_type = 6;
      }
      if (this.radios == "除草") {
        this.task_type = 7;
      }
      if (this.radios == "其他") {
        this.task_type = 8;
      }
    },
    // 获取值保商id
    getuseid: function() {
      this.red_id = window.sessionStorage.getItem("id");

      console.log(this.red_id);
    },
    // 获取地块信息
    getproverpli: function() {
      this.$http
        .post(
          api.apihost + "FieldManager",
          {
            reg_id: this.red_id,
            action: 2
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.plotList = res.data.attachment;
            console.log(this.plotList);
            this.nums = this.plotList.length;
          }
        });
    },
    // 获取作物下标
    getcorpindex: function(corp, name) {
      if (corp == "粮食作物") {
        this.cropList.value = 0;
        const list = [
          "小麦",
          "小麦稀有种",
          "水稻",
          "大麦",
          "燕麦",
          "玉米",
          "高粱",
          "谷子",
          "荞麦",
          "黍稷",
          "绿豆",
          "蚕豆",
          "小豆",
          "豌豆",
          "普通菜豆",
          "豇豆",
          "多花菜豆",
          "木豆",
          "刀豆",
          "黎豆",
          "扁豆",
          "利马豆",
          "四棱豆",
          "小扁豆",
          "鹰嘴豆",
          "饭豆",
          "甘薯",
          "马铃薯"
        ];
        for (let i = 0; i < list.length; i++) {
          if (list[i] == name) {
            this.cropList.city = i;
          }
        }
      }
      if (corp == "纤维作物") {
        this.cropList.value = 1;
        const list = ["棉花", "亚麻", "苎麻", "红麻", "黄麻", "大麻", "青麻"];
        for (let i = 0; i < list.length; i++) {
          if (list[i] == name) {
            this.cropList.city = i;
          }
        }
      }
      if (corp == "油料作物") {
        this.cropList.value = 2;
        const list = [
          "大豆",
          "油菜",
          "芝麻",
          "花生",
          "向日葵",
          "红花",
          "苏子",
          "蓖麻"
        ];
        for (let i = 0; i < list.length; i++) {
          if (list[i] == name) {
            this.cropList.city = i;
          }
        }
      }
      if (corp == "蔬菜") {
        this.cropList.value = 3;
        const list = [
          "萝卜",
          "胡萝卜",
          "芜菁",
          "芜菁甘蓝",
          "根甜菜",
          "牛蒡",
          "大白菜",
          "白菜",
          "薹菜",
          "菜薹",
          "叶芥菜",
          "茎芥菜",
          "根芥菜",
          "薹芥菜",
          "子芥菜",
          "结球甘蓝",
          "球茎甘蓝",
          "花椰菜",
          "嫩茎花椰菜",
          "芥蓝",
          "黄瓜",
          "西葫芦",
          "南瓜",
          "笋瓜",
          "冬瓜",
          "节瓜",
          "苦瓜",
          "丝瓜",
          "瓠瓜",
          "蛇瓜",
          "菜瓜",
          "越瓜",
          "黑子南瓜",
          "西瓜",
          "甜瓜",
          "其它瓜类",
          "番茄",
          "茄子",
          "辣椒",
          "酸浆",
          "菜豆",
          "莱豆",
          "多花菜豆",
          "刀豆",
          "长豇豆",
          "毛豆",
          "豌豆",
          "蚕豆",
          "扁豆",
          "其它豆类",
          "韭菜",
          "大葱",
          "分葱",
          "洋葱",
          "韭葱",
          "菠菜",
          "芹菜",
          "苋菜",
          "蕹菜",
          "叶用莴苣",
          "茎用莴苣",
          "茴香",
          "芫荽",
          "落葵",
          "茼蒿",
          "冬寒菜",
          "罗勒",
          "金花菜",
          "紫苏",
          "其它绿叶菜",
          "豆薯",
          "黄花菜",
          "石刁柏",
          "枸杞"
        ];
        for (let i = 0; i < list.length; i++) {
          if (list[i] == name) {
            this.cropList.city = i;
          }
        }
      }
      if (corp == "果树") {
        this.cropList.value = 4;
        const list = [
          "苹果",
          "梨",
          "山楂",
          "草莓",
          "李子",
          "杏",
          "核桃",
          "栗",
          "柿",
          "枣",
          "柑橘",
          "香蕉",
          "荔枝",
          "龙眼",
          "枇杷"
        ];
        for (let i = 0; i < list.length; i++) {
          if (list[i] == name) {
            this.cropList.city = i;
          }
        }
      }
      if (corp == "其他作物") {
        this.cropList.value = 5;
        const list = [
          "甜菜",
          "甘蔗",
          "西瓜",
          "甜瓜",
          "烟草",
          "牧草",
          "绿肥",
          "满江红",
          "茶",
          "桑",
          "籽粒苋",
          "地肤",
          "薏苡",
          "藜",
          "橡胶",
          "木薯",
          "咖啡",
          "腰果",
          "油梨",
          "芒果",
          "胡椒",
          "椰子",
          "龙舌兰麻"
        ];
        for (let i = 0; i < list.length; i++) {
          if (list[i] == name) {
            this.cropList.city = i;
          }
        }
      }
    },
    getplayers: function() {
      this.$http.get(api.apihost + "GetServiceTeam").then(res => {
        console.log(res);
        const playerslist = res.data.attachment;
        playerslist.forEach(e => {
          const obj = {
            date: e.ppsp_name,
            name: e.team_name,
            address: e.team_num,
            addr: e.team_range,
            ress: "好评",
            pp_reg_id: e.pp_reg_id,
            team_id: e.team_id
          };
          this.tableData.push(obj);
        });
        this.getServiceProvider();
      });
    },
    getServiceProvider: function() {
      this.$http.get(api.apihost + "GetServiceProvider").then(res => {
        console.log(res);
        const list = res.data.attachment;
        list.forEach(e => {
          const obj = {
            date: e.ppsp_name == "" ? "-" : e.ppsp_name,
            name: "-",
            address: e.num_players,
            addr: e.team_range == "" ? "全国" : e.team_range,
            ress: "好评",
            pp_reg_id: e.pp_reg_id,
            team_id: e.team_id
          };
          this.tableData.push(obj);
        });
      });
    },
    // 获取值保商
    outerVis: function() {
      this.$http.get(api.apihost + "GetRecommendAuthorities").then(res => {
        console.log(res);
        this.busisilist = res.data.attachment;
      });
      this.getplayers();
      this.outerVisible = true;
    },
    busisilists: function(item, id, index, team_id) {
      this.pp_reg_id = id;
      this.team_id = team_id;
      console.log(id, team_id);
      this.$refs.dialogbusi.forEach(e => {
        e.className = "zbsxz";
      });
      this.$refs.dialogbusi[index].className = "zbsxz buseisdfusder";
      this.$refs.iconche.forEach(e => {
        e.className = "iconcheckesarch";
      });
      this.$refs.iconche[index].className = "iconche";
      this.getdemand_type();
    },
    getdemand_type: function() {
      if (this.pp_reg_id == 0) {
      } else {
        if (this.team_id == 0) {
          this.demand_type = 2;
          console.log("您未选择");
        } else {
          this.demand_type = 3;
        }
      }
      console.log(this.pp_reg_id, this.team_id);
    },
    getdemand_types: function() {
      if (this.pp_reg_id == undefined) {
      } else {
        if (this.team_id == undefined) {
          this.demand_type = 4;
          console.log("您未选择");
        } else {
          this.demand_type = 5;
        }
      }
      console.log(this.pp_reg_id, this.team_id);
    },
    heedr: function(index) {
      // this.$refs.iconche.forEach(e => {
      //   e.className = "iconcheckesarch";
      // });
      // this.$refs.iconche[index].className = "checkesarch";
    }
  },
  components: {
    VDistpicker,
    crop,
    upaldimg
  },
  mounted() {
    this.getuseid();
    this.getproverpli();
  },
  updated() {
    this.getRadio();
    this.getRadios();
  }
};
</script>
