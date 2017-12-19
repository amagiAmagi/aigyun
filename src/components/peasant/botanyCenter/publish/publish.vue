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
               <span>{{item.farmland_addr}}</span>
               <span>{{item.farmland_ares}}亩</span>|<span>{{item.crops_name}}</span>
             </div>
           </div>
         </div>
    </div>

<!-- 新增地块模态框 -->
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
        <crop v-on:cropList="getchangeNumber"></crop>
      </el-form-item>
      <el-form-item label="地块描述和备注" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc" style="width: 80%" placeholder="请输入地块描述和备注"></el-input>
      </el-form-item>
      <el-form-item label="地块图片" :label-width="formLabelWidth">
        <el-upload action="https://jsonplaceholder.typicode.com/posts" list-type="picture-card" :multiple="true" :show-file-list="true"
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
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="农户电话" prop="phone">
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>
    <el-form-item label="作物类型" >
      <el-checkbox-group>
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
    <el-form-item label="农作物">
      <el-checkbox-group >
        <el-radio v-model="radio" label="水稻" name="type"></el-radio>
        <el-radio v-model="radio" label="小麦" name="type"></el-radio>
        <el-radio v-model="radio" label="玉米" name="type"></el-radio>
        <el-radio v-model="radio" label="柑橘" name="type"></el-radio>
      </el-checkbox-group>
      <span class="ck" @click="ck">查看更多</span>
    </el-form-item>
    <el-form-item v-show="ruleForm.zwzl" label="更多作物">
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
      <el-input v-model="ruleForm.site" placeholder="请填写详细地址" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="作业面积" prop="area" >
      <el-input v-model="ruleForm.area" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="发布价格" prop="price">
      <el-input v-model="ruleForm.price"></el-input>
    </el-form-item>
    <el-form-item label="作业说明" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc" style="width: 592px"></el-input>
    </el-form-item>
    <el-form-item label="值保队选择">
      <el-button type="primary"  @click="outerVisible = true">选择值保队</el-button><br> 可以指定值保机构为您服务
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="release" class="fbcz">发布</el-button>
      <el-button @click="resetForm('ruleForm')" class="fbcz">重置</el-button>
    </el-form-item>
  </el-form>


<!-- 值保队选择框 -->



  <el-dialog title="值保机构选择" :visible.sync="outerVisible">
    <div class="dialog-top">
      <h3>选择系统推荐值保商：</h3>
      <div class="zbsxz" style="width: 20%; border: 1px solid #ccc; padding-left: 3%;float: left;border-radius: 10px;margin-right: 1%">
        <p><span>值保商:</span>&nbsp;&nbsp;<span>高科新农总部</span></p>
        <p><span>人数:</span>&nbsp;&nbsp;<span>20</span></p>
        <p><span>值保范围:</span>&nbsp;&nbsp;<span>全国</span></p>
        <p><span>评价:</span>&nbsp;&nbsp;<span> <el-rate :value="5"></el-rate></span></p>
      </div>
      <div class="zbsxz" style="width: 20%; border: 1px solid #ccc; padding-left: 3%;float: left;border-radius: 10px;margin-right: 1%">
        <p><span>值保商:</span>&nbsp;&nbsp;<span>高科新农总部</span></p>
        <p><span>人数:</span>&nbsp;&nbsp;<span>20</span></p>
        <p><span>值保范围:</span>&nbsp;&nbsp;<span>全国</span></p>
        <p><span>评价:</span>&nbsp;&nbsp;<span> <el-rate :value="5"></el-rate></span></p>
      </div>
      <div class="zbsxz" style="width: 20%; border: 1px solid #ccc; padding-left: 3%;float: left;border-radius: 10px;margin-right: 1%">
        <p><span>值保商:</span>&nbsp;&nbsp;<span>高科新农总部</span></p>
        <p><span>人数:</span>&nbsp;&nbsp;<span>20</span></p>
        <p><span>值保范围:</span>&nbsp;&nbsp;<span>全国</span></p>
        <p><span>评价:</span>&nbsp;&nbsp;<span> <el-rate :value="5"></el-rate></span></p>
      </div>
      <div class="zbsxz" style="width: 20%; border: 1px solid #ccc; padding-left: 3%;float: left;border-radius: 10px">
        <p><span>值保商:</span>&nbsp;&nbsp;<span>高科新农总部</span></p>
        <p><span>人数:</span>&nbsp;&nbsp;<span>20</span></p>
        <p><span>值保范围:</span>&nbsp;&nbsp;<span>全国</span></p>
        <p><span>评价:</span>&nbsp;&nbsp;<span> <el-rate :value="5"></el-rate></span></p>
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
.stepss {
  width: 500px;
  margin-left: 550px;
  margin-top: 20px;
}
.stepss .el-step__icon-inner[class*="el-icon"]:not(.is-status) {
  margin-left: 20px;
}
.step__title {
  font-size: 14px;
}
.el-step__icon-inner[class*="el-icon"]:not(.is-status) {
  font-size: 45px;
}
.dialog-top {
  height: 238px;
  margin-bottom: 50px;
}
.left {
  width: 312px;
  background-color: #4c5e70;
  padding: 22px 14px;
  position: fixed;
  top: 70px;
  height: 100%;
}

.dklist {
  overflow: auto;
  margin-top: 20px;
  box-pack: justify;
  height: 600px;
  overflow-x: hidden;
}
.information {
  width: 280px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  height: 116px;
  margin-bottom: 20px;
}
.information:hover {
  color: #0094ff;
  transform: scale(1.05);
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
  width: 136px;
  margin-top: 10px;
  text-align: center;
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
import crop from "../../../common/crop.vue";
import api from "../../../common/api.js";
export default {
  data() {
    return {
      num: 1,
      formData: false,
      length: "",
      id: "",
      task_type: "",
      radio: "",
      radios: "",
      plotList: [],
      red_id: "",
      tableData: [
        {
          date: "高科新农总部",
          name: "值保一队",
          address: "20",
          addr: "全国",
          ress: "好评"
        },
        {
          date: "高科新农总部",
          name: "值保一队",
          address: "20",
          addr: "全国",
          ress: "好评"
        },
        {
          date: "高科新农总部",
          name: "值保一队",
          address: "20",
          addr: "全国",
          ress: "好评"
        },
        {
          date: "高科新农总部",
          name: "值保一队",
          address: "20",
          addr: "全国",
          ress: "好评"
        }
      ],
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
      dialogImageUrl: "",
      dialogVisible: false,
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
          { required: true, message: "请输入电话号码或手机号码", trigger: "blur" },
          { min: 7, max: 11, message: "长度在 7 到 11 个字符", trigger: "blur" }
        ],
        site: [{ required: true, message: "请输入您的详细地址", trigger: "blur" }],
        area: [{ required: true, message: "请输入您需要作业的面积", trigger: "blur" }],
        price: [{ required: true, message: "请输入价格", trigger: "blur" }],
        date: [
          { type: "date", required: true, message: "请选择日期", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写作业说明", trigger: "blur" }]
      }
    };
  },
  methods: {
    addplot: function() {
      this.dialogFormVisible = false;
      const _this = this;
      this.$http
        .post(
          api.apihost + "FieldManager",
          {
            reg_id: this.red_id.reg_id,
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
        .then(function(res) {
          console.log(res);
          if (res.data.code == 0) {
            _this.$http
              .post(
                api.apihost + "GetUserIndexInfo",
                {
                  reg_id: _this.red_id.reg_id
                },
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                }
              )
              .then(function(res) {
                // 将之前数据初始化
                _this.$store.commit("deltePeasant");
                // 将农户地块数量存到vuex
                _this.$store.commit("peasant", res.data.num_fields);
                // 将农户地块数量存到loacl
                // window.localStorage.setItem("num", res.data.num_fields);
                window.localStorage.num = res.data.attachment.num_fields;
                // 将农户地块信息存储vuex;
                _this.dataIfon = res.data.attachment.fields;
                _this.$store.commit("setusepolt", _this.dataIfon);
                // _this.types.SET_USEPLOT(_this.dataIfon);
                // 存到loacl去
                const list = JSON.stringify(res.data.attachment.fields);
                window.localStorage.setItem("peasantList", list);
                _this.plotList = _this.$store.getters.getPenasntPlot[0];
                console.log(_this.plotList);
              });

            // _this.$store.commit("peasantProl", res.data.attachment);
            // let pl = JSON.parse(window.localStorage.getItem("peasantList"));
            // pl = pl.push(res.data.attachment);
            // window.localStorage.setItem("peasantList", JSON.stringify(pl));
            _this.$message({
              message: "恭喜你,新增地块成功",
              type: "success"
            });
            // const plot = _this.$store.getters.getPenasntPlot;
            // console.log(plot);
            // _this.plotList = plot[0];
          } else {
            _this.$message({
              message: "地块新增失败",
              type: "error"
            });
          }

          console.log(res);
        });
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
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
      // alert(data.province.value + data.city.value + data.area.value);
      this.form.prov = data.province.value;
      this.form.cityOptions = data.city.value;
      this.form.are = data.area.value;
      console.log(data);
    },
    release() {
      // this.ruleForm.dates = Math.round(this.ruleForm.date.getTime() / 1000);
      const _this = this;
      console.log(11111111111);
      console.log(this.ruleForm);
      console.log(this);
      this.$http
        .post(
          api.apihost + "TaskManager",
          {
            reg_id: 7622756,
            action: 0,
            farmland_id: 7622756002,
            task_type: 1,
            // task_other_type: "",
            crops_type: 0,
            crops_name: 0,
            task_time: 1513662376,
            // task_prov: "",
            // task_city: "",
            // task_district: "",
            task_ares: 2562,
            task_price: 1236,
            task_introduce: "是大法官好是大法官好",
            task_addr: "山西省朔州市右玉县阿萨德法国和",
            demand_type: 1
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(function(res) {
          console.log(res);
          _this.num = 3;
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
    },
    getRadio: function() {
      if (this.radio == "水稻") {
        this.cropList.type = 0;
        this.cropList.name = 2;
      }
      if (this.radio == "小麦") {
        this.cropList.type = 0;
        this.cropList.name = 0;
      }
      if (this.radio == "玉米") {
        this.cropList.type = 0;
        this.cropList.name = 5;
      }
      if (this.radio == "柑橘") {
        this.cropList.type = 4;
        this.cropList.name = 10;
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
    }
  },
  components: {
    VDistpicker,
    crop
  },
  created() {
    this.red_id = JSON.parse(window.localStorage.getItem("id"));
    this.plotList = this.$store.getters.getPenasntPlot[0];
  },
  mounted() {
    const plo = JSON.parse(window.localStorage.getItem("peasantList"));
    if (this.plotList == undefined) {
      this.$store.commit("setusepolt", plo);
    }
    this.plotList = this.$store.getters.getPenasntPlot[0];
    this.length = this.plotList.length;
    this.index = Math.ceil(this.length / 4);
    // if (this.length > 5) {
    //   this.$refs.dklist.firstElementChild.clientWidth = 280;
    // }
  },
  updated() {
    this.getRadio();
    this.getRadios();
    // console.log();
  }
};
</script>












