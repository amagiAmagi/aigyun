<template>
  <div>
     <!-- 左边区域 -->
     <div class="left">
       <div class="left-first">
         <div class="left-first-heder">
           全部无人机(<span>24</span>架)
         </div>
         <div class="left-two">
           <p><span ><span class="el-icon-success tubiaos"> &nbsp;</span>作业中( <span>18</span>架 )</span></p>
           <p><span ><span class="el-icon-remove tubiaos teows"> &nbsp;</span>空闲中( <span>6</span>架 )&nbsp;&nbsp;</span></p>
         </div>
       </div>
       <div class="left-subise">
         <div class="left-first-heder">
           值保一队
         </div>
         <div class="left-two">
           <p><span ><span class="el-icon-rank tubiaoss"></span><span>5</span>架</span></p>
         </div>
       </div>
       <div class="left-subise">
         <div class="left-first-heder">
           值保一队
         </div>
         <div class="left-two">
           <p><span ><span class="el-icon-rank tubiaoss"></span><span>5</span>架</span></p>
         </div>
       </div>
       <div class="left-subise">
         <div class="left-first-heder">
           值保一队
         </div>
         <div class="left-two">
           <p><span ><span class="el-icon-rank tubiaoss"></span><span>5</span>架</span></p>
         </div>
       </div>
    </div>

        <!-- 主体内容部分 -->
    <div class="management">
      <div class="management-top">
        无人机管理(全部:<span>{{num}}</span>架)
      </div>
      <div class="management-centers">
        <div class="management-center-top">
          <span class="actionser" ref="all" @click="all">全部</span>
          <span ref="actions" @click="actions">已分配</span>
          <span ref="leisure" @click="leisure">未分配</span>
        </div>
        <div class="management-center-list">
          <li class="management-center-list-li" v-for="(item,index) in uavList" :key="index">
            <div class="management-center-list-li-top">
              <img src="../../../../assets/5555.png" alt="">
              <div class="management-center-list-li-top-right">
                <span>{{item.uav_no}}</span>
                <span>{{item.uav_model}}</span>
              </div>
            </div>
            <div class="management-center-list-li-button">
              <div class="management-center-list-li-button-top">
                <img src="../../../../assets/5555.png" alt="">
                <div  class="management-center-list-li-button-top-right">
                  <span>{{item.team_name}}</span>
                  <span>{{item.real_name}}</span>
                </div>
              </div>
               <el-button type="primary" class="xiugai" @click="centerDialogVisibless = true" v-if="item.real_name">修改</el-button>
                <el-button type="primary" class="xiugai" @click="adduavid(item.uav_id)" v-else>分配</el-button>
                <el-button type="primary" class="xiugai" v-if="item.real_name" @click="deletes(item.uav_id)">删除</el-button>
            </div>
          </li>
        </div>
         <!-- <div class="block sexsex" v-show="num > 16">
           <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background :current-page.sync="currentPage1" :page-size="10"
             layout="total, prev, pager, next" :total="num">
           </el-pagination>
         </div> -->
      </div>
      </div>

  <!-- 删除分配 -->

  <el-dialog title="提示" :visible.sync="dialogVisible" width="40%" >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>


      <!-- 无人机流转弹出框 -->
  <el-dialog title="分配无人机" :visible.sync="centerDialogVisibless" width="45%" :lock-scroll="false">
    <div class="xiahuaxian"></div>
    <div class="center-top">
      <div class="titerlser">已选择:</div>
      <div class="tags" v-for="(item,index) in pullteantList" :key="index">
        <img src="../../../../assets/值保商首页/icon_person_03.gif" alt=""><span>{{item.real_name}}</span><i class="el-icon-circle-close rightdelr" @click="deltepullteans(index)"></i>
      </div>
    </div>
    <div class="center-dyxz">
      <div class="center-dyxz-top">
          <el-button type="primary prim">全部</el-button>
           <el-input placeholder="请输入内容" v-model="input3" class="input3">
           </el-input>
           <i class="el-icon-search sous"></i>
      </div>
      <div class="center-dyxz-center">
        <li class="center-dyxz-center-li" v-for="(item,index) in TeanminstrList" :key="index" @click="teanmistrs(index,item.tp_reg_id,item)" >
          <div class="center-dyxz-center-li-top">
            <img src="../../../../assets/值保商首页/icon_person_03.gif" alt="">
            <div  class="center-dyxz-center-li-right">
              <span>{{item.real_name}}</span><br>
            <span>{{item.sex == 0?"男":"女"}}<span>{{item.age}}</span>岁</span>
            </div>
          </div>
          <p><span>加入时间:</span>{{item.reg_time|time}}</p>
          <p>{{item.reg_country +"-"+ item.reg_prov+"-"+item.reg_city}}</p>
          <div class="pullteant" ref="asteantLists">
            <span class="el-icon-circle-check bottom"></span>
          </div>
          <div class="asteant" ref="asteantListss">
            <span class="el-icon-circle-plus bottom"></span>
          </div>
        </li>

      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="quedibngs" class="quedibng">确定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import "./Allocation.css";
import api from "../../../common/api.js";
export default {
  data() {
    return {
      currentPage1: 1,
      uavList: [],
      num: "",
      centerDialogVisibless: false,
      pullteantList: [],
      TeanminstrList: [],
      id: "",
      input3: "",
      tp_reg_idList: [],
      uav_id: "",
      tp_reg_id: "",
      dialogVisible: false
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    all: function() {
      this.$refs.all.className = "actionser";
      this.$refs.actions.className = "";
      this.$refs.leisure.className = "";
      this.getuseuav();
    },
    actions: function() {
      this.$refs.all.className = "";
      this.$refs.actions.className = "actionser";
      this.$refs.leisure.className = "";
      this.getallocateduav();
    },
    leisure: function() {
      this.$refs.all.className = "";
      this.$refs.actions.className = "";
      this.$refs.leisure.className = "actionser";
      this.getunallocateduav();
    },
    // 查看所有无人机
    getuseuav: function() {
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
          this.uavList = res.data.attachment.all;
          this.num = this.uavList.length;
          console.log(this.num);
        });
    },
    // 查看未分配无人机
    getunallocateduav: function() {
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
          this.uavList = res.data.attachment.unallocated;
        });
    },
    // 查看已分配无人机
    getallocateduav: function() {
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
          this.uavList = res.data.attachment.allocated;
        });
    },
    teanmistrs: function(index, id, item) {
      console.log(index, item);
      if (this.$refs.asteantLists[index].className == "pullteant asteant") {
        this.$refs.asteantLists[index].className = "pullteant ";
        this.$refs.asteantListss[index].className = "pullteant asteant";
        for (let i = 0; i < this.pullteantList.length; i++) {
          if (this.pullteantList[i] == item) {
            this.pullteantList.splice(i, 1);
          }
        }
      } else {
        this.$refs.asteantLists[index].className = "pullteant asteant";
        this.$refs.asteantListss[index].className = "pullteant";
        this.tp_reg_idList.push(id);
        this.pullteantList.push(item);
      }
      console.log(this.pullteantList);
      this.tp_reg_id = this.tp_reg_idList[0];
    },
    // 删除选中的队员
    deltepullteans: function(index) {
      console.log(index);
      for (let i = 0; i < this.TeanminstrList.length; i++) {
        if (this.tp_reg_idList[index] == this.TeanminstrList[i].tp_reg_id) {
          // this.$refs.asteantList[i].className = "pullteant";
          this.$refs.asteantLists[i].className = "pullteant";
          this.$refs.asteantListss[i].className = "asteant";
        }
      }
      this.pullteantList.splice(index, 1);
      this.tp_reg_idList.splice(index, 1);
      this.tp_reg_id = this.tp_reg_idList[0];
    },
    // 获取id
    getuseid: function() {
      this.id = window.sessionStorage.getItem("id");
      console.log(this.id);
    },
    // 查所有队员
    getteamifon: function() {
      this.$http
        .post(
          api.apihost + "ServicePlayerManager",
          {
            action: 2,
            reg_id: this.id
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
            this.TeanminstrList = res.data.attachment.undeployed;
          }

          // console.log(this.TeanminstrList);
        });
    },
    // 分配无人机
    quedibngs: function() {
      this.$http
        .post(
          api.apihost + "UavInfo",
          {
            action: 3,
            uav_id: this.uav_id,
            tp_reg_id: this.tp_reg_id
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
            this.centerDialogVisibless = false;
          }
        });
    },
    adduavid: function(id) {
      this.uav_id = id;
      console.log(id);
      this.centerDialogVisibless = true;
    },
    // 删除无人机
    deletes: function(id) {
      this.dialogVisible = true;
      this.$http
        .post(
          api.apihost + "UavInfo",
          {
            uav_id: id
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
        });
    }
  },
  mounted() {
    this.getuseid();
    this.getteamifon();
    this.getuseuav();
  }
};
</script>
