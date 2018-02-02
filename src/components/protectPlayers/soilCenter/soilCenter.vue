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
      <el-form-item label="地块地址" :label-width="formLabelWidth" >
        <VDistpicker @selected="onSelected"></VDistpicker>
      </el-form-item>
      <el-form-item label="详细地址" :label-width="formLabelWidth">
        <el-input v-model="form.site" placeholder="请输入详细地址" style="width: 80%"></el-input>
      </el-form-item>
      <el-form-item label="作业面积" :label-width="formLabelWidth">
        <el-input v-model="form.area" style="width: 80%" placeholder="请输入作业面积" type="number"></el-input>
      </el-form-item>
      <el-form-item label="目标作物" :label-width="formLabelWidth">
        <crop v-on:cropList="getchangeNumber" :cropList="cropList"></crop>
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
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :multiple="true" :show-file-list="true"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :headers="logoHeaders">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer ">
      <el-button type="primary centerssss" @click="modification">修改</el-button>
    </span>
  </el-dialog>


<!-- 地块信息 -->
    <div class="plot">
      <div class="plot-top">
          地块信息（<span ref="num">{{nums}}</span>块）
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
      logoHeaders: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      },
      plotList: [],
      outerVisible: false,
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
              // 将vuex里的num删掉
              _this.$store.commit("delpeasants");

              const nums = window.sessionStorage.nums;

              window.sessionStorage.nums = nums - 1;
              console.log(nums);
              console.log(window.sessionStorage.nums);
              // 将vuex里的数据删掉
              _this.$store.dispatch("delUsers", index);
              // 将loca的数据取出来
              const plot = JSON.parse(
                window.sessionStorage.getItem("peasantLists")
              );
              // 删掉loac里面选中的那个数据
              plot.splice(index, 1);
              console.log(plot);
              window.sessionStorage.removeItem("peasantLists");
              // 在将数据存储进去
              window.sessionStorage.setItem(
                "peasantLists",
                JSON.stringify(plot)
              );
              console.log(
                JSON.parse(window.sessionStorage.getItem("peasantLists"))
              );
              _this.nums--;
              _this.plotList = _this.$store.getters.getPenasntPlots[0];
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
      location.href = "#/protect/protectBotany/pullsetplayers";
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
        .then(function(res) {
          console.log(res);
          if (res.data.code == 0) {
            _this.$http
              .post(
                api.apihost + "FieldManager",
                {
                  reg_id: _this.ids,
                  action: 2
                },
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                }
              )
              .then(function(res) {
                console.log(res);
                // 将之前数据初始化
                _this.$store.commit("deltePeasants");
                // 将农户地块数量存到vuex
                _this.$store.commit("peasants", res.data.attachment.length);
                // 将农户地块数量存到loacl
                // window.sessionStorage.setItem("num", res.data.num_fields);
                window.sessionStorage.nums = res.data.attachment.length;
                // 将农户地块信息存储vuex;
                _this.dataIfon = res.data.attachment;
                _this.$store.commit("setusepolts", _this.dataIfon);
                // 存到loacl去
                const list = JSON.stringify(res.data.attachment);
                window.sessionStorage.setItem("peasantLists", list);
                _this.plotList = _this.$store.getters.getPenasntPlots[0];
              })
              .catch(function(err) {
                console.log(err);
              });
            _this.nums++;
            window.sessionStorage.nums = _this.nums;
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
        .then(function(res) {
          console.log(res);
          _this.setExaine(res);
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
        .then(function(res) {
          console.log(res);
          if (res.data.code == 0) {
            _this.getproverpli();
            setTimeout(function() {
              _this.plotList = _this.$store.getters.getPenasntPlots[0];
            }, 200);
            console.log(_this.plotList);
            setTimeout(function() {
              _this.$message({
                message: "恭喜你,修改地块成功",
                type: "success"
              });
            }, 200);
          } else {
            _this.$message({
              message: "地块修改失败",
              type: "error"
            });
          }
        });

      this.outerVisible = false;
    },
    // 获取值保商id
    getuseid: function() {
      this.ids = JSON.parse(window.sessionStorage.getItem("id"));

      console.log(this.ids);
    },
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
            // 将之前数据初始化
            this.$store.commit("deltePeasants");
            // 将农户地块数量存到vuex
            this.$store.commit("peasants", res.data.attachment.length);
            // 将农户地块数量存到loacl
            // window.sessionStorage.setItem("num", res.data.num_fields);
            window.sessionStorage.nums = res.data.attachment.length;
            // 将农户地块信息存储vuex;
            this.dataIfon = res.data.attachment;
            this.$store.commit("setusepolts", this.dataIfon);
            // 存到loacl去
            const list = JSON.stringify(res.data.attachment);
            window.sessionStorage.setItem("peasantLists", list);
          }
        });
    },
    getifons: function() {
      this.plotList = this.$store.getters.getPenasntPlots[0];
      this.nums = window.sessionStorage["nums"];
      console.log(this.nums);
      const plo = JSON.parse(window.sessionStorage.getItem("peasantLists"));
      console.log(plo);
      console.log(this.plotList);
      if (this.plotList == undefined) {
        console.log(111111111111111111111111111111);
        this.$store.commit("setusepolts", plo);
        this.plotList = this.$store.getters.getPenasntPlots[0];
      }
      console.log(this.$store.getters.getPenasntPlots);
      this.nums = window.sessionStorage["nums"];
      console.log(this.nums);
      console.log(this.plotList);
      if (this.nums == "") {
        console.log(1111111);
        this.nums = 0;
      }
    }
  },
  components: {
    VDistpicker,
    crop
  },
  created() {
    this.getproverpli();
    this.plotList = this.$store.getters.getPenasntPlots[0];
  },
  mounted() {
    this.getuseid();
    this.getproverpli();
    this.getifons();
  }
};
</script>
