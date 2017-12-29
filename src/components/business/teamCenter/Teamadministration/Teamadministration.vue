<template>
  <div>
     <div class="left">
      <div class="left-top">
        <div class="left-top-headers">
          <span>关键字</span><br>
          <input type="text">
          <i class="el-icon-search"></i>
        </div>
        <div class="left-top-mu">
          <span>加入时间</span><br>
          <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </div>
        <div class="left-top-mu">
          <span>所在地</span><br>
          <linkage v-on:getprov="getprov"></linkage>
        </div>
        <div class="left-top-buttom">
          <el-button type="primary" class="sousers">搜索</el-button>
          <!-- <el-button plain>全部</el-button> -->
        </div>
      </div>
      <div class="left-center">
        <el-button type="text" class="left-center-button" @click="dialogVisible = true"><i class="el-icon-circle-plus-outline"></i><br> 新增值保队员
        </el-button>
      </div>
    </div>
    <!-- 值保队员 -->
    <div class="teamMember">
      <div class="teamMember-top">
        队员信息 ( <span>{{number}}</span>人 )
      </div>
      <div class="teamMember-center">
        <div class="teamMember-center-heder">
            <div class="teamMember-center-heder-xuanz">
              <span class="activots" ref="all" @click="all">全部</span>
              <span ref="aoyuo" @click="aoyuo">已分配</span>
              <span ref="mengter" @click="mengter">未分配</span>
            </div>
           <div class="demonstrates">
             <span style="font-size: 12px">展示筛选</span>
             <span class="el-icon-menu actions" ref="menu"  @click="menu"></span>
             <span class="el-icon-tickets" ref="tickets"  @click="tickets"></span>
           </div>
        </div>
        <div class="youtuo">
          <!-- 竖版 -->
          <li class="youtuo-li" v-show="select" v-for="(item,index) in teamList" :key="index">
            <img src="../../../../assets/5555.png" alt="">
            <div class="youtuo-li-right">
              <span class="lave_name">{{item.real_name}}</span><br>
              <span>{{item.sex == 0?"男":"女"}} </span><span v-show="item.age > 0">{{item.age}}岁</span>
            </div>
            <p>加入时间:<span>{{item.reg_time|time}}</span></p>
            <p>{{item.reg_country +"-"+ item.reg_prov+"-"+item.reg_city}}</p>
            <p v-if="item.team_name">{{item.team_name}}</p>
            <p v-else class="fepeisree" @click="allocations">分配值保队</p>
              <el-button type="primary" class="shanchu" @click="delteam(index,item.tp_reg_id,item.team_id)">删除</el-button>
          </li>
          <!-- 横版 -->
          <div class="youtuo-heng-heder" v-show="!select">
            <span class="heng-heder-top1">名称</span>
            <span class="heng-heder-top2">性别</span>
            <span class="heng-heder-top3">年龄</span>
            <span class="heng-heder-top4">加入时间</span>
            <span class="heng-heder-top5">值保团队</span>
            <span class="heng-heder-top6">所在地</span>
            <span class="heng-heder-top7">身份证</span>
            <span class="heng-heder-top8">无人机驾驶证</span>
          </div>
          <li class="youtuo-heng-li"  v-show="!select"  v-for="(item,index) in teamList" :key="index">
            <img src="../../../../assets/5555.png" alt="">
            <div  class="youtuo-heng-li-left">
                <span>{{item.real_name}}</span>
                <span>{{item.sex == 0?"男":"女"}}</span>
                <el-button type="primary" class="delrefertsr" @click="delteam(index,item.tp_reg_id,item.team_id)">删除</el-button>
            </div>
            <div class="generder">
             <span class="sui"><span v-show="item.age > 0" >{{item.age}}岁</span></span>
              <span>{{item.reg_time|time}}</span>
              <span v-if="item.team_name">{{item.team_name}}</span>
              <span v-else class="fepeisrees" @click="allocations">分配</span>
            </div>
            <div class="location">
              {{item.reg_country +"-"+ item.reg_prov+"-"+item.reg_city}}
            </div>
             <div class="location ssenfs">
             {{item.id_card}}
            </div>
            <div class="licence">
                <span v-if="item.certificate_id">有</span>
                <span v-else>无</span>
            </div>
          </li>
        </div>
      </div>
    </div>


    <!-- 新增队员弹出框 -->

  <el-dialog title="新增队员" :visible.sync="dialogVisible" width="35%">

    <div class="addteam">
      <img src="../../../../assets/值保商首页/icon_person_03.gif" alt="">
      <span>请输入队员邮箱</span>
       <el-input v-model="email" class="emali"></el-input>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false" class="member">发送邀请邮件</el-button>
      <el-button @click="dialogVisible = false" class="member">取 消</el-button>
    </span>
  </el-dialog>

  <!-- 删除队员弹出框 -->


  <el-dialog title="删除队员" :visible.sync="centerDialogVisible" width="35%">
    <div class="delterteam">
      <span class="el-icon-warning"></span>
      <span class="cvenjdhaslfsdh">请确定是否删除队员</span>
    </div>
    <span slot="footer" class="dialog-footer">
       <el-button type="primary" @click="centerDialogVisible = false" class="member">不了，我在想想</el-button>
      <el-button @click="removerTeam" class="member">确 定</el-button>

    </span>
  </el-dialog>


<!-- 分配值保队弹出框 -->

  <el-dialog title="分配值保队" :visible.sync="dialogVisibles" width="54%">
    <div class="disalogs">
      <div class="disalogs-top" >
        <span class="yixuanz">已选择:</span>
        <div class="disasdhasition" v-show="disables">
          <img src="../../../../assets/5555.png" alt="">
          <div class="zhibaoname">值保一队</div>
          <div class="datename">
            <span>队员1</span>
            <span>队员2</span>
            <span>队员3</span>
          </div>
        </div>
      </div>
      <div class="disalogs-center">
        <li class="disalogs-center-li" ref="disali" @click="disali">
            <img src="../../../../assets/5555.png" alt="">
          <div class="zhibaonames">值保一队</div>
          <div class="datenames">
            <span>队员1</span>
            <span>队员2</span>
            <span>队员3</span>
          </div>
        </li>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisibles = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisibles = false">确 定</el-button>
    </span>
  </el-dialog>

</div>
</template>

<script>
import "./Teamadministration.css";
import linkage from "./linkage/linkage.vue";
import api from "../../../common/api.js";
export default {
  data() {
    return {
      disables: false,
      value: "",
      select: true,
      dialogVisible: false,
      dialogVisibles: false,
      email: "",
      centerDialogVisible: false,
      ProvObj: {},
      id: "",
      teamList: [],
      number: "",
      team_id: "",
      index: "",
      team_ids: ""
    };
  },
  methods: {
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
    all: function() {
      this.$refs.all.className = "activots";
      this.$refs.aoyuo.className = "";
      this.$refs.mengter.className = "";
      this.settaem();
    },
    aoyuo: function() {
      this.$refs.all.className = "";
      this.$refs.aoyuo.className = "activots";
      this.$refs.mengter.className = "";
      this.teamList = this.$store.getters.getbusinessdeployed;
    },
    mengter: function() {
      this.$refs.all.className = "";
      this.$refs.aoyuo.className = "";
      this.$refs.mengter.className = "activots";
      this.teamList = this.$store.getters.getbusinessundeployed;
      console.log(this.teamList);
    },
    getprov: function(data) {
      this.ProvObj = data;
      console.log(this.ProvObj);
    },
    // 获取值保商id
    getuseid: function() {
      this.id = this.$store.getters.getbusinessId;
      if (this.id == "") {
        const data = JSON.parse(window.localStorage.getItem("businessid"));
        this.$store.commit("business", data);
        this.id = this.$store.getters.getbusinessId;
      }
    },
    getTamadminstr: function() {
      this.$http
        .post(
          api.apihost + "ServicePlayerManager",
          {
            reg_id: this.id,
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
            this.setDatateam(res);
          }
        });
    },
    setDatateam: function(res) {
      // 将队员信息存储到vuex中
      this.$store.commit("businessteamAll", res.data.attachment.all);
      this.$store.commit("businessdeployed", res.data.attachment.deployed);
      this.$store.commit("businessundeployed", res.data.attachment.undeployed);
      // 将队员信息存储到本地
      window.sessionStorage.setItem(
        "businessteamAll",
        JSON.stringify(res.data.attachment.all)
      );
    },
    settaem: function() {
      this.teamList = this.$store.getters.getbusinessteamAll;
      this.number = this.teamList.length;
      if (this.teamList.length == 0) {
        const list = JSON.parse(
          window.sessionStorage.getItem("businessteamAll")
        );
        this.$store.commit("businessteamAll", list);
        this.teamList = this.$store.getters.getbusinessteamAll;
        this.number = this.teamList.length;
      }
    },
    delteam: function(index, id, team_id) {
      console.log(index, id, team_id);
      this.team_ids = team_id;
      this.index = index;
      this.team_id = id;
      this.centerDialogVisible = true;
    },
    removerTeam: function() {
      this.$http
        .post(
          api.apihost + "ServicePlayerManager",
          {
            reg_id: this.id,
            action: 1,
            tp_reg_id: this.team_id
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          this.getteam();
        });
      this.centerDialogVisible = false;
    },
    getteam: function() {
      // 将veux中的数据删除
      this.$store.commit("removebusinessteamAllt", this.index);
      const list = JSON.parse(window.sessionStorage.getItem("businessteamAll"));
      const lists = list.splice(this.index, 1);
      window.sessionStorage.setItem("businessteamAll", JSON.stringify(list));
      this.teamList = this.$store.getters.getbusinessteamAll;
      this.number = this.teamList.length;
      this.delbusiness();
    },
    delbusiness: function() {
      if (this.team_ids == 0) {
        this.$store.commit("removebusinessundeployed", this.index);
      } else {
        this.$store.commit("removebusinessdeployed", this.index);
      }
    },
    allocations: function() {
      this.dialogVisibles = true;
    },
    disali: function() {
      console.log(this.$refs.disali);
      this.$refs.disali.className = "disalogs-center-li disali";
      this.disables = true;
    }
  },
  components: {
    linkage
  },
  mounted() {
    this.getuseid();
    this.getTamadminstr();
    this.settaem();
  },
  created() {
    this.teamList = this.$store.getters.getbusinessteamAll;
  }
};
</script>


