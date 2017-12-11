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
                 <el-button type="primary" @click="centerDialogVisible = true">查看</el-button>
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

    <!-- <upload></upload> -->
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
import crop from "../../common/crop.vue";
// import upload from "../../common/upload.vue";
export default {
  data() {
    return {
      logoHeaders: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      },
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
      alert(data.province.value + data.city.value + data.area.value);
      console.log(data);
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
        .then(function(res) {
          _this.$message({
            message: "恭喜你,新增地块成功",
            type: "success"
          });
          console.log(res);
        });
    },
    resetForm: function() {
      this.form = "";
    },
    getchangeNumber: function(obj) {
      this.cropList = obj;
      console.log(this.cropList);
    }
  },
  components: {
    VDistpicker,
    crop
    // upload
  },
  created() {
    // this.red_id =

    const id = window.localStorage.getItem("red_id");
    this.red_id = id;
    console.log(this.red_id);
  }
};
</script>
