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
        <VDistpicker @selected="onSelected"></VDistpicker>
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
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :multiple="true" :show-file-list="true"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :headers="logoHeaders">
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



<!-- 点击查看弹出来的页面信息 -->


  <el-dialog title="地块信息" :visible.sync="centerDialogVisible" width="30%" center>
    <div>
      <p><span>地块名称：</span><span>田地一号</span></p>
      <p><span>地块地址：</span><span>广东省深圳市特发信息港</span></p>
      <p><span>详细地址：</span><span>广东省深圳市特发信息港广东省深圳市特发信息港</span></p>
      <p><span>面积（亩）：</span><span>120亩</span></p>
      <p><span>目标作物：</span><span>粮食作物、水稻</span></p>
      <div>
        <span>地块描述和备注：</span><span>工业化农业的发展，已投入大量物质和能量为标注</span>
      </div>
      <div>
        <span>地块图片：</span>
        <img src="../../../assets/0094.gif" alt="">
        <img src="../../../assets/0094.gif" alt="">
        <img src="../../../assets/0094.gif" alt="">
        <img src="../../../assets/0094.gif" alt="">
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="centerDialogVisible = false">修改</el-button>
    </span>
  </el-dialog>







    <div class="plot">
      <div class="plot-top">
          地块信息（<span ref="num">{{this.num}}</span>块）
      </div>
         <div class="zssxs">
            <span>展示筛选</span>
            <span class="el-icon-menu actions" ref="menu" @click="menu"></span>
            <span class="el-icon-tickets" ref="tickets" @click="tickets"></span>
          </div>
      <div class="plot-center">
          <ul class="plot-center-list">
            <div v-show="!select" class="order-sper-heder">
              <span class="names">名称</span>
              <span class="cjsj">创建时间</span>
              <span class="dkdz">地块地址</span>
              <span class="mj">面积</span>
              <span class="zuowu">作物</span>
              <span class="beizhu">备注</span>
            </div>
            <!-- 竖版 -->
            <li class="plot-center-li" v-show="select" ref="list"  :id="item.farmland_id" v-for="(item,index) in  this.plotList" :key="index">
              <div class="plot-center-li-left">
                  <div class="plot-center-li-left-top">
                      <img src="../../../assets/5555.png" alt="">
                      <div class="plot-center-li-left-top-right">
                        <h5>{{item.farmland_name}}</h5><br>
                        <span>{{item.add_time | time}}</span>
                      </div>
                  </div>
                  <p>{{item.farmland_addr}}</p>
                  <div class="plot-center-li-left-buttom">
                    <span>{{item.farmland_ares}}亩</span>&nbsp;&nbsp;
                    <span>|</span>&nbsp;&nbsp;
                    <span>{{item.crops_name}}</span>
                  </div>
              </div>
              <div class="plot-center-li-right">
                 <el-button plain @click="plot">发布需求</el-button>
                 <el-button type="primary" @click="centerDialogVisible = true">查看</el-button>
                 <el-button type="primary" @click="open(item,index)">删除</el-button>
              </div>
            </li>
            <!-- 横版 -->
            <li class="order-sper" v-show="!select" ref="list"  :id="item.farmland_id" v-for="(item,index) in  this.plotList" :key="index">
              <img src="../../../assets/5555.png" alt="">
              <div class="order-sper-top">
                <span class="namessss">{{item.farmland_name}}</span>
                <span class="cjshfdsg">{{item.add_time | time}}</span>
                <span class="dkdzs">{{item.farmland_addr}}</span>
                <span class="mianjisdh">{{item.farmland_ares}}亩</span>
                <span class="zw">{{item.crops_name}}</span>
                <span class="bez">无</span>
              </div>
              <div class="order-sper-bottom">
                <el-button type="info" class="prima quxiao" @click="plot">发布需求</el-button>
                <el-button type="primary" class="prima" @click="centerDialogVisible = true">查看</el-button>
                <el-button type="primary" class="prima" @click="open(item,index)">删除</el-button>
              </div>
            </li>

          </ul>
      </div>
    </div>

    <!-- <upload></upload> -->
  </div>
</template>

<style>
.busCenter {
  width: 1200px;
  margin: 0 auto;
  padding-top: 70px;
}
.zssxs {
  position: relative;
  right: -740px;
  top: -40px;
  font-size: 14px;
}
.cjshfdsg {
  display: inline-block;
  text-align: center;
  width: 80px;
}
.mianjisdh {
  display: inline-block;
  text-align: center;
  width: 100px;
}
.names {
  width: 90px;
  margin-left: 120px;
  border-right: 1px solid #ccc;
}
.namessss {
  display: inline-block;
  text-align: center;
  width: 90px;
}
.zw {
  display: inline-block;
  width: 50px;
  text-align: center;
}
.cjsj {
  width: 90px;
  border-right: 1px solid #ccc;
}
.dkdz {
  width: 200px;
  border-right: 1px solid #ccc;
}
.dkdzs {
  width: 200px;
  display: inline-block;
  text-align: center;
}
.mj {
  width: 90px;
  border-right: 1px solid #ccc;
}
.zuowu {
  width: 50px;
  border-right: 1px solid #ccc;
}
.beizhu {
  margin-left: 75px;
}
.bez {
  margin: 0px;
  text-align: center;
  word-break: break-all;
  display: inline-block;
  word-break: break-all;
  width: 160px;
}
.dikdzs {
  display: inline-block;
  word-break: break-all;
  width: 180px;
}
.actions {
  color: #0094ff;
}
.order-sper-heder {
  margin-top: 20px;
  width: 100%;
  height: 32px;
  line-height: 32px;
  background-color: #d3dee3;
  font-size: 14px;
}
.order-sper-heder span {
  display: inline-block;
  /* width: 16%; */
  text-align: center;
}
.order-sper {
  width: 100%;
  height: 116px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-top: 20px;
  padding: 11px 5px;
}
.order-sper-bottom {
  position: relative;
  left: 100px;
  top: -30px;
}
.order-sper-top {
  position: relative;
  top: 10px;
  display: inline-block;
  height: 30px;
  font-size: 14px;
}
.order-sper-top span {
  /* margin-right: 25px; */
}
.order-sper img {
  width: 98px;
  height: 74px;
  border-radius: 10px;
  vertical-align: text-top;
  margin-right: 15px;
}
.prima {
  width: 100px;
  height: 28px;
  padding: 0;
  margin-right: 20px;
}
.quxiao {
  margin-left: 15px;
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
import crop from "../../common/crop.vue";
// import upload from "../../common/upload.vue";
export default {
  data() {
    return {
      select: true,
      num: "",
      logoHeaders: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      },
      plotList: [],
      centerDialogVisible: false,
      cropList: {},
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
        cit: "",
        prov: ""
      },
      formLabelWidth: "120px",
      red_id: ""
    };
  },
  methods: {
    open(item, index) {
      const _this = this;

      this.$confirm("此操作将永久删除该地块, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .post(
              api.apihost + "FieldManager",
              {
                reg_id: this.red_id.reg_id,
                action: 1,
                farmland_id: item.farmland_id
              },
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              console.log(res);
              // 将vuex里的num删掉
              _this.$store.commit("delpeasant");

              const nums = window.localStorage.num;

              window.localStorage.num = nums - 1;
              // 将vuex里的数据删掉
              _this.$store.dispatch("delUser", index);
              // 将loca的数据取出来
              const plot = JSON.parse(
                window.localStorage.getItem("peasantList")
              );
              // 删掉loac里面选中的那个数据
              plot.splice(index, 1);
              console.log(plot);
              window.localStorage.removeItem("peasantList");
              // 在将数据存储进去
              window.localStorage.setItem("peasantList", JSON.stringify(plot));
              console.log(
                JSON.parse(window.localStorage.getItem("peasantList"))
              );
              _this.num--;
            })
            .catch(err => {
              console.log(err);
            });
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
      console.log(this.form.prov + this.form.cityOptions + this.form.are);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
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
            farmland_city: this.form.cityOptions,
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
              })
              .catch(function(err) {
                console.log(err);
              });
            _this.num++;
            window.localStorage.num = _this.num;
            _this.$message({
              message: "恭喜你,新增地块成功",
              type: "success"
            });
          } else {
            _this.$message({
              message: "地块新增失败",
              type: "error"
            });
          }
        });
    },
    resetForm: function() {
      this.form = "";
    },
    getchangeNumber: function(obj) {
      this.cropList = obj;
    },
    menu: function() {
      this.select = true;
      this.$refs.menu.className = "el-icon-menu actions";
      this.$refs.tickets.className = "el-icon-tickets";
    },
    tickets: function() {
      this.select = false;
      this.$refs.menu.className = "el-icon-menu";
      this.$refs.tickets.className = "el-icon-tickets actions";
    }
  },
  components: {
    VDistpicker,
    crop
    // upload
  },
  created() {
    this.red_id = JSON.parse(window.localStorage.getItem("id"));
    this.plotList = this.$store.getters.getPenasntPlot[0];
    this.num = window.localStorage["num"];
    console.log(this.num);
  },
  mounted() {
    const plo = JSON.parse(window.localStorage.getItem("peasantList"));
    console.log(plo);
    console.log(this.plotList);
    if (this.plotList == undefined) {
      console.log(111111111111111111111111111111);
      this.$store.commit("setusepolt", plo);
      this.plotList = this.$store.getters.getPenasntPlot[0];
    }
    console.log(this.$store.getters.getPenasntPlot);
    this.num = window.localStorage["num"];
    console.log(this.num);
  }
};
</script>
