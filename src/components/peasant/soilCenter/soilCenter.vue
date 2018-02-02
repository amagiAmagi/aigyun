<template>
  <div class="busCenter">
    <div class="left">
      <div class="left-top">
        <div class="left-top-header">
          <span>关键字</span><br>
          <input type="text">
          <i class="el-icon-search seascsarfs"></i>
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
          <el-button plain style="width: 110px">全部</el-button>
        </div>
      </div>
      <div class="left-center">
          <el-button type="text" class="left-center-button"  @click="dialogFormVisible = true"><i class="el-icon-circle-plus-outline"></i><br>
          新增地块</el-button>
      </div>
    </div>

  <!-- 点击新增谈出来的页面 -->
  <el-dialog title="新增地块" :visible.sync="dialogFormVisible" :lock-scroll="false">
    <el-form :model="form">
      <el-form-item label="地块名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" style="width: 80%" placeholder="请输入地块名称"></el-input>
      </el-form-item>
      <el-form-item label="地块地址" :label-width="formLabelWidth" class="selecteders">
        <VDistpicker @selected="onSelected"></VDistpicker>
      </el-form-item>
      <el-form-item label="详细地址" :label-width="formLabelWidth">
        <el-input v-model="form.site" placeholder="请输入详细地址" style="width: 80%"></el-input>
      </el-form-item>
      <el-form-item label="作业面积" :label-width="formLabelWidth">
        <el-input v-model="form.area" style="width: 80%" placeholder="请输入作业面积" type="number"></el-input>
      </el-form-item>
      <el-form-item label="目标作物" :label-width="formLabelWidth" class="selecteders">
        <crop v-on:cropList="getchangeNumber" :cropList="cropList"></crop>
      </el-form-item>
      <el-form-item label="地块描述和备注" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc" style="width: 80%" placeholder="请输入地块描述和备注"></el-input>
      </el-form-item>
      <el-form-item label="地块图片" :label-width="formLabelWidth"> <upaldimg></upaldimg>

      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addplot" class="fabu">发布</el-button>
      <el-button @click="resetForm" id="chongzhi">重置</el-button>
    </div>
  </el-dialog>



<!-- 点击查看弹出来的页面信息 -->


  <el-dialog title="地块信息" :visible.sync="outerVisible" :lock-scroll="false">
    <el-form :model="form">
      <el-form-item label="地块名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" style="width: 80%" placeholder="请输入地块名称"></el-input>
      </el-form-item>
      <el-form-item label="地块地址" :label-width="formLabelWidth">
        <VDistpicker @selected="onSelected" :province="cityObj.farmland_prov" :city="cityObj.farmland_city" :area="cityObj.farmland_district"></VDistpicker>
      </el-form-item>
      <el-form-item label="详细地址" :label-width="formLabelWidth">
        <el-input v-model="form.site" placeholder="请输入详细地址" style="width: 80%"></el-input>
      </el-form-item>
      <el-form-item label="作业面积" :label-width="formLabelWidth">
        <el-input v-model="form.area" style="width: 80%" placeholder="请输入作业面积" type="number"></el-input>
      </el-form-item>
      <el-form-item label="目标作物" :label-width="formLabelWidth">
        <crop v-on:cropList="getchangeNumber" :crop="cropList"></crop>
      </el-form-item>
      <el-form-item label="地块描述和备注" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc" style="width: 80%" placeholder="请输入地块描述和备注"></el-input>
      </el-form-item>
      <el-form-item label="地块图片" :label-width="formLabelWidth">
         <upaldimg></upaldimg>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer ">
      <el-button type="primary centerssss" @click="modification" class="modification">修改</el-button>
    </span>
  </el-dialog>


<!-- 地块信息 -->
    <div class="plot">
      <div class="plot-top">
          地块信息（<span ref="num">{{nums == "" ?0:nums}}</span>块）
      </div>
         <div class="zssxs">
            <span>展示筛选</span>
            <span class="el-icon-menu actions" ref="menu" @click="menu"></span>
            <span class="el-icon-tickets" ref="tickets" @click="tickets"></span>
          </div>
      <div class="plot-center">
          <ul class="plot-center-list" v-show="nums != 0">

            <!-- 竖版 -->
            <li class="plot-center-li" v-show="select" ref="list"  :id="item.farmland_id" v-for="(item,index) in  plotList" :key="index">
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
                 <el-button type="primary" @click="examine(item)">查看</el-button>
                 <el-button type="primary" @click="open(item,index)">删除</el-button>
              </div>
            </li>
            <!-- 横版 -->
            <div v-show="!select" class="order-sper-heder-list-heng">
              <div  class="order-sper-heder">
              <span class="names">名称</span>
              <span class="cjsj">创建时间</span>
              <span class="dkdz">地块地址</span>
              <span class="mj">面积</span>
              <span class="zuowu">作物</span>
              <span class="beizhu">备注</span>
            </div>
            <li class="order-sper"  ref="list"  :id="item.farmland_id" v-for="(item,index) in  plotList" :key="index">
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
                <el-button type="primary" class="prima" @click="examine(item)">查看</el-button>
                <el-button type="primary" class="prima" @click="open(item,index)">删除</el-button>
              </div>
            </li>
            </div>

          </ul>
      </div>
    </div>

  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
import api from "../../common/api.js";
import crop from "../../common/crop.vue";
import "./soilCenter.css";
import upaldimg from "../../common/upladimg.vue";
export default {
  data() {
    return {
      nums: "",
      dataIfon: [],
      ids: "",
      id: "",
      cityObj: {},
      select: true,
      num: "",
      plotList: [],
      outerVisible: false,
      cropList: {},
      input1: "",
      input2: "",
      value: "",
      dialogFormVisible: false,
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
        lockScroll: false,
        type: "warning"
      })
        .then(() => {
          this.$http
            .post(
              api.apihost + "FieldManager",
              {
                reg_id: this.ids,
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
              if (res.data.code == 0) {
                this.plotList.splice(index, 1);
                console.log(this.plotList);
                this.getproverpli();
              }
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
    // 新增地块
    addplot: function() {
      this.dialogFormVisible = false;
      const _this = this;
      this.$http
        .post(
          api.apihost + "FieldManager",
          {
            reg_id: this.ids,
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
    resetForm: function() {
      this.form = "";
    },
    getchangeNumber: function(obj) {
      this.cropList = obj;
      console.log(obj);
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
    },
    //
    examine: function(item) {
      // this.onSelected();
      console.log(item);
      const _this = this;
      this.$http
        .post(
          api.apihost + "FieldManager",
          {
            reg_id: this.ids,
            action: 2,
            farmland_id: item.farmland_id + ""
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          this.setExaine(res);
        });

      this.outerVisible = true;
    },
    setExaine: function(res) {
      console.log(res);
      this.cityObj.farmland_prov = res.data.attachment[0].farmland_prov;
      this.cityObj.farmland_city = res.data.attachment[0].farmland_city;
      this.cityObj.farmland_district = res.data.attachment[0].farmland_district;

      this.form.name = res.data.attachment[0].farmland_name;
      this.form.site = res.data.attachment[0].farmland_addr;
      this.form.area = res.data.attachment[0].farmland_ares;
      this.cropList.crops_type = res.data.attachment[0].crops_type;
      this.cropList.crops_name = res.data.attachment[0].crops_name;
      this.form.desc = res.data.attachment[0].farmland_addr;
      this.id = res.data.attachment[0].farmland_id;
    },
    modification: function() {
      const _this = this;
      this.$http
        .post(
          api.apihost + "FieldManager",
          {
            reg_id: this.ids,
            action: 3,
            farmland_id: this.id,
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
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.getproverpli();
            console.log(_this.plotList);
            setTimeout(() => {
              this.$message({
                message: "恭喜你,修改地块成功",
                type: "success"
              });
            }, 200);
          } else {
            this.$message({
              message: "地块修改失败",
              type: "error"
            });
          }
        });

      this.outerVisible = false;
    },
    // 获取值保商id
    getuseid: function() {
      this.ids = window.sessionStorage.getItem("id");
      console.log(this.ids);
    },
    // 获取地块信息
    getproverpli: function() {
      this.$http
        .post(
          api.apihost + "FieldManager",
          {
            reg_id: this.ids,
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
  }
};
</script>
