<template>
  <div>
    <!-- 左边区域 -->
     <div class="left">
       <div class="left-wrjglss">
         <div class="left-wrjgls-top">
             <el-button type="primary addxxh" @click="dialogVisible = true"><i class="el-icon-circle-plus-outline"></i><br>添加新型号</el-button>
         </div>
         <div class="left-wrjgls-centers">
           <li v-for="(item,index) in typelist" :key="index" class="left-wrjgls-center-lis">
             <span class="feierrs">
               <img src="../../../../assets/plane_3.png" alt="" v-if="item.uav_type == 0">
               <img src="../../../../assets/plane_2.png" alt="" v-if="item.uav_type == 1">
               <img src="../../../../assets/plane_1.png" alt="" v-if="item.uav_type == 2">
               </span><br>
             <span>{{item.uav_model}}({{item.num_uavs}}架)</span>
           </li>
         </div>
       </div>
    </div>
    <!-- 主体内容部分 -->
    <div class="management">
      <div class="management-top">
        无人机管理(全部:<span> {{num}} </span>架)
      </div>
      <div class="management-centers">
        <div class="management-center-top">
          <span  ref="all" @click="all(index)" v-for="(item,index) in centerherder" :key="index">{{item}}</span>
        </div>
        <div class="management-center-list">
          <li class="management-center-list-add" v-if="adders" @click="centerDialogVisible = true">
            <span class="el-icon-circle-plus-outline adders"></span>
            <span class="addmouder" >添加无人机</span>
          </li>
          <li class="management-center-list-li" v-for="(item,index) in uavList" :key="(index)">
            <div class="management-center-list-li-heder">
              {{item.uav_no}}
            </div>
            <div class="management-center-list-li-images">
              <img src="../../../../assets/5555.png" alt="">
              <div class="management-center-list-li-images-right">
                <p>{{item.uav_model}}</p>
                <p>{{item.reg_time | time}}</p>
              </div>
            </div>
            <div class="service">
              <p><span class="leftsfertrt"><span class="el-icon-success TUBIAO"></span> {{item.uav_state == 0?"空闲":(item.uav_state ==2?"维修":"作业中")}}</span><span class="rightsert"><span class="el-icon-info TUBIAOs"></span> {{item.reg_no}}</span></p>
              <p><span class="leftsfertrt"><span class="el-icon-success TUBIAO"></span> {{item.sorties}}次</span><span class="rightsert"><span class="el-icon-info TUBIAO"></span> {{item.duration}}分钟</span></p>
              <p><span class="leftsfertrt"><span class="el-icon-success TUBIAO"></span> {{item.work_length}}米</span><span class="rightsert"><span class="el-icon-info TUBIAO"></span> {{item.work_ares}}亩</span></p>
            </div>
              <el-button type="primary" class="deltplane" @click="deltuav(index,item.uav_id,item.uav_no) ">删除无人机</el-button>
          </li>
        </div>
         <div class="block sexsex" v-show="num>16">
           <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background :current-page.sync="currentPage1" :page-size="10"
             layout="total, prev, pager, next" :total="num">
           </el-pagination>
         </div>
      </div>
      <!-- <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px">
        Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
    </div> -->

<!--新增无人机 -->


  <el-dialog title="添加无人机" :visible.sync="centerDialogVisible" width="40%" :lock-scroll="false">
    <div class="wurenji">
      <div class="wurenjibianhao">
        <span>&nbsp;&nbsp;&nbsp;<i class="xing">*</i>无人机编号:</span><input type="text" v-model="uav_no">
      </div>
      <div class="wurenjibianhao">
        <span> <i class="xing">*</i>无人机型号:</span>
        <el-select v-model="value" placeholder="请选择" class="selects">
          <el-option v-for="item in typelist" :key="item.uav_type_id" :label="item.uav_model" :value="item.uav_type_id">
          </el-option>
        </el-select>

      </div>
      <div class="wurenjibianhao">
        <span> 无人机实名登记编号:</span><input type="text" v-model="reg_no">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div class="updeter">
        <span>无人机实名登记二维码:</span>
        <div class="adduva">
          <upaldimg></upaldimg>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addUav" class="wancehng">完成</el-button>
      </span>
  </el-dialog>


<!-- 添加新型号 -->
  <el-dialog title="添加新型号" :visible.sync="dialogVisible" width="40%" :lock-scroll = "false">
    <div class="adderters">
      <div class="inputxinghao">
        <span>无人机型号:</span><input type="text" v-model="type">
        <i>*</i>
      </div>
      <div class="inputxinghaos">
        <span class="wurenjleix">无人机类型:</span>
        <el-radio-group v-model="resource" >
          <el-radio label="多旋翼" value="0"></el-radio>
          <el-radio label="单旋翼" value="1"></el-radio>
          <el-radio label="固定翼" value="2"></el-radio>
        </el-radio-group>
        <i>*</i>
      </div>
      <div class="inputxinghao">
        <span>无人机厂商:</span><input type="text" v-model="uvafirm">
        <i>*</i>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="UavType" class="wancehng">完 成</el-button>
    </span>
  </el-dialog>

<!-- 删除无人机 -->


  <el-dialog title="删除无人机" :visible.sync="centerDialogVisibles" width="35%" :lock-scroll="false">
    <div class="delterteam">
      <span class="el-icon-warning"></span>
      <span class="cvenjdhaslfsdhss">请确定是否删除无人机</span>
      <span  class="cvenjdhaslfsdhs">{{uav_nos}}</span>
    </div>
    <span slot="footer" class="dialog-footer">
       <el-button type="primary" @click="centerDialogVisibles = false" class="member">不了，我在想想</el-button>
      <el-button @click="removerTeam" class="member">确 定</el-button>
    </span>
  </el-dialog>

<!-- @click="adderters" -->

    </div>
  </div>
</template>
<script>
import "./Uavmanagement.css";
import api from "../../../common/api.js";
import upaldimg from "../../../common/upladimg.vue";
export default {
  data() {
    return {
      centerDialogVisibles: false,
      dialogVisible: false,
      adders: true,
      currentPage1: 1,
      dialogVisible: false,
      resource: "",
      centerDialogVisible: false,
      value: "",
      centerherder: ["全部", "空闲", "作业中", "维修"],
      type: "",
      uvafirm: "",
      uav_type: "",
      id: "",
      typelist: [],
      uav_no: "",
      reg_no: "",
      uavList: [],
      index: "",
      uav_id: "",
      uav_nos: "",
      num: 0
    };
  },
  methods: {
    all: function(index) {
      const list = this.$store.getters.getuavList;
      this.$refs.all.forEach(e => {
        e.className = "";
      });
      this.$refs.all[index].className = "actionser";
      if (index == 0) {
        this.adders = true;
        this.getUavInfo();
      } else {
        this.adders = false;
        if (index == 1) {
          this.getobjuva();
        } else if (index == 2) {
          this.getleisureuva();
        } else if (index == 3) {
          this.getserviceuva();
        }
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    adderters: function() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 删除无人机
    removerTeam: function() {
      this.$http
        .post(
          api.apihost + "UavInfo",
          {
            pp_reg_id: this.id,
            action: 1,
            uav_id: this.uav_id
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
            this.getUavInfo();
            this.typelist = [];
            this.getuavtype();
          }
        });
      this.centerDialogVisibles = false;
    },
    // 查所有无人机
    getUavInfo: function() {
      this.$http
        .post(
          api.apihost + "UavInfo",
          {
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
          // this.$store.commit("setuavList", res.data.attachment);
          this.uavList = res.data.attachment.all;
          this.num = this.uavList.length;
          console.log(this.num);
        });
    },
    // 作业中的无人机
    getobjuva: function() {
      this.$http
        .post(
          api.apihost + "UavInfo",
          {
            action: 2
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          this.uavList = res.data.attachment.uav_state_0;
        });
    },
    // 空闲无人机
    getleisureuva: function() {
      this.$http
        .post(
          api.apihost + "UavInfo",
          {
            action: 2
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          this.uavList = res.data.attachment.uav_state_1;
        });
    },
    // 维修无人机
    getserviceuva: function() {
      this.$http
        .post(
          api.apihost + "UavInfo",
          {
            action: 2
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          this.uavList = res.data.attachment.uav_state_2;
        });
    },
    // 新增无人机型号
    UavType: function() {
      this.uavTypes();
      this.$http
        .post(
          api.apihost + "UavTypeManager",
          {
            action: 0,
            uav_model: this.type,
            uav_type: this.uav_type,
            uav_company: this.uvafirm,
            pp_reg_id: this.id
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          this.typelist = [];
          this.getuavtype();
          this.getUavInfo();
        });
      this.dialogVisible = false;
    },
    uavTypes: function() {
      if (this.resource == "多旋翼") {
        this.uav_type = 0;
      }
      if (this.resource == "单旋翼") {
        this.uav_type = 1;
      }
      if (this.resource == "固定翼") {
        this.uav_type = 2;
      }
    },
    // 获取值保商id
    getuseid: function() {
      this.id = this.$store.getters.getbusinessId;
      if (this.id == "") {
        const data = JSON.parse(window.sessionStorage.getItem("id"));
        this.$store.commit("business", data);
        this.id = this.$store.getters.getbusinessId;
      }
      console.log(this.id);
    },
    // 查看所以无人机型号
    getuavtype: function() {
      this.$http
        .post(
          api.apihost + "UavTypeManager",
          {
            pp_reg_id: this.id,
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
          res.data.attachment.forEach(e => {
            var ifon = {
              uav_type_id: e.uav_type_id,
              uav_model: e.uav_model,
              num_uavs: e.num_uavs,
              uav_type: e.uav_type
            };
            this.typelist.push(ifon);
          });
          console.log(this.typelist);
        });
    },
    addUav: function() {
      this.$http
        .post(
          api.apihost + "UavInfo",
          {
            pp_reg_id: this.id,
            action: 0,
            reg_no: this.reg_no,
            uav_no: this.uav_no,
            uav_type_id: this.value
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
            this.getUavInfo();
          }
        });
      this.centerDialogVisible = false;
    },
    deltuav: function(index, id, uav_no) {
      this.uav_id = id;
      this.index = index;
      this.uav_nos = uav_no;
      this.centerDialogVisibles = true;
    }
  },
  mounted() {
    this.getuseid();
    this.getUavInfo();
    this.$refs.all[0].className = "actionser";
    this.getuavtype();
  },
  components: {
    upaldimg
  }
};
</script>
