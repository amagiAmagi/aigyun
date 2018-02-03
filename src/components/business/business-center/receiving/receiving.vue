<template>
  <div>
    <div class="left">
      <div class="left-top">
        <div class="left-top-header">
          <span>关键字</span><br>
          <input type="text">
          <i class="el-icon-search seascsarfs"></i>
        </div>
        <div class="left-top-mu">
          <span>亩数</span><br>
          <el-input v-model="input1" clearable class="input-mu"></el-input> —
          <el-input v-model="input2" clearable class="input-mu "></el-input>
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
        <el-button type="text" class="left-center-button" @click="dialog"><i class="el-icon-circle-plus-outline"></i><br> 发起值保订单
        </el-button>
      </div>
    </div>
    <div class="order">
      <div class="order-top">
        订单信息（<span>{{num}}</span>单）
      </div>
        <!-- 展示订单信息的tab -->
      <div class="order-center">
          <ul class="order-center-tops-ul" ref="allss">
            <li class="order-center-tops-li" ref="all" @click="all(index)" v-for="(item,index) in hederlist" :key="index">{{item}}</li>
          </ul>
            <div class="order-card">
               <!-- 竖版 -->
              <!-- <li class="order-card-li" v-show="select">
                  <div class="order-card-li-heder">
                     <span class="order-card-li-heder-left">待分配</span><span class="order-card-li-heder-right">订单号：1710221411932</span>
                  </div>
                  <div class="order-card-li-center">
                    <img src="../../../../assets/5555.png" alt="">
                    <div class="order-card-li-center-right">
                        <h5>田地一号</h5>
                        <span>发布：2017.10.22</span><br>
                        <span>作业：2017.10.22</span>
                    </div>
                    <p>广东省深圳市南山区特发信息港A栋8楼</p>
                    <div class="tetale">
                      <span>120亩</span><span>水稻</span><span>施肥</span><span>10元/亩</span>
                    </div>
                    <p>高科新农值保一队</p>
                      <div class="feelot">
                        <el-button type="primary" class="selectss oraders" @click="getuseifonData">分配值保队</el-button>  <el-button type="primary" class="selectss cancel" @click="dialogFormVisible = true" v-show="false">拒绝</el-button>
                        <el-button type="primary" class="selectss oraders lefysef"><router-link to="/business/checkojb">查看</router-link></el-button>
                      </div>
                  </div>
              </li> -->
               <li class="order-card-li" v-show="select" v-for="(item,index) in MyorderList" :key="index">
                  <div class="order-card-li-heder">
                     <span class="order-card-li-heder-left">{{item.demand_type == 1? "用户发布":"待分配"}}</span><span class="order-card-li-heder-right">订单号：{{item.task_id}}</span>
                  </div>
                  <div class="order-card-li-center">
                    <img src="../../../../assets/5555.png" alt="">
                    <div class="order-card-li-center-right">
                        <h5>{{item.farmer_name == ""?"-":item.farmer_name}}</h5>
                        <span>发布：{{item.demand_time |time}}</span><br>
                        <span>作业：{{item.task_time |time}}</span>
                    </div>
                    <p>{{item.task_addr}}</p>
                    <div class="tetale">
                      <span>{{item.task_ares}}亩</span><span>{{item.crops_name}}</span><span>{{item.task_type ==1?"防治":(item.task_type == 2 ?"杀虫灭菌":(item.task_type == 3?"施肥":(item.task_type == 4? "授粉":(item.task_type == 5 ?"脱叶":(item.task_type == 6 ? "消杀免疫":(item.task_type == 7?"除草":(item.task_type == 8?"其他":item.task_type)))))))}}</span><span>{{item.task_prices}}元/亩</span>
                    </div>
                    <p>{{item.team_name == "" ?"-":item.team_name}}</p>
                      <div class="feelot">
                        <!-- <el-button type="primary" class="selectss oraders lefysef" v-if="item.demand_type == 1" @click="dialogVisible=true">接单</el-button> -->
                        <el-button type="primary" class="selectss oraders"  @click="getuseifonData(item.task_id)" >分配值保队</el-button>
                        <el-button type="primary" class="selectss oraders lefysef" v-if="item.demand_type == 1"><router-link to="/business/checkojb" >查看</router-link></el-button>
                      </div>
                  </div>
              </li>
              <!-- 横版 -->
              <div class="order-spers order-sper-li" v-show="!select">
                <div v-show="!select" class="order-sper-heders">
                  <span class="sper-titela namesss">名称</span>
                  <span class="sper-titela fbsjss">发布时间</span>
                  <span class="sper-titela zysjss">作业时间</span>
                  <span class="sper-titela aersss">地块地址</span>
                  <span class="sper-titela sasess">面积</span>
                  <span class="sper-titela zuowss">作物</span>
                  <span class="sper-titela">作业类型</span>
                  <span class="sper-titela jagess">价格</span>
                  <span class="sper-titela caozuoss">操作</span>
                </div>
                <!-- 横版 -->
                 <div class="across" v-for="(item,index) in MyorderList" :key="index">
                   <img src="../../../../assets/5555.png" alt="">
                   <div class="order-sper-tops">
                     <span>{{item.farmer_name == ""?"-":item.farmer_name}} &nbsp;{{item.demand_time |time}} &nbsp;{{item.task_time |time}}</span>
                     <span class="aerss">{{item.task_addr}}</span>
                     <span class="mianjise">{{item.task_ares}}亩</span>
                     <span class="rice">{{item.crops_name}}</span>
                     <span class="shif">{{item.task_type ==1?"防治":(item.task_type == 2 ?"杀虫灭菌":(item.task_type == 3?"施肥":(item.task_type == 4? "授粉":(item.task_type == 5 ?"脱叶":(item.task_type == 6 ? "消杀免疫":(item.task_type == 7?"除草":(item.task_type == 8?"其他":item.task_type)))))))}}</span>
                     <span class="jiasheridfashjfg">{{item.task_prices}}元/亩</span>
                     <!-- <el-button type="primary" class="selectss oraders lefysef" v-if="item.demand_type == 1" @click="dialogVisible=true">接单</el-button> -->
                        <el-button type="primary" class="selectss oraders lefysefssss"  @click="getuseifonData(item.task_id)">分配值保队</el-button>
                   </div>
                   <div class="wireas"></div>
                   <div class="order-sper-bottoms">
                     <span>订单号：{{item.task_id}}</span>
                     <span>{{item.demand_type == 1? "用户发布":"待分配"}}</span>
                     <span>{{item.ppsp_name == ""? "-":item.ppsp_name}}</span>
                     <span>{{item.team_name == ""? "-":item.team_name}}</span>
                     <el-button type="primary" class="primar quxiaoS" @click="dialogFormVisible = true" v-show="false">拒绝</el-button>
                     <el-button type="primary" class="selectss oraders lefysefss" v-if="item.demand_type == 1"><router-link to="/business/checkojb">查看</router-link></el-button>
                   </div>
                 </div>
              </div>

            </div>
         <div class="showScreen">
            <span>展示筛选</span>
            <span class="el-icon-menu actions" ref="menu" @click="menu"></span>
            <span class="el-icon-tickets" ref="tickets" @click="tickets"></span>
          </div>
      </div>

    </div>

    <!-- 取消订单弹出框 -->
    <el-dialog title="取消订单" :visible.sync="dialogFormVisible" :lock-scroll="false">
      <div class="bodys">
        <div>
          <span class="el-icon-document" style="font-size: 100px;  vertical-align: middle;"></span>
          <p>请确定是否取消订单</p><br>
          <p style="margin-left: 100px;margin-top: -50px">如果确定取消，请输入取消理由</p>
          <el-checkbox-group v-model="type" style="margin-left: 100px;width: 60%">
            <el-checkbox label="订单内容需要修改" name="type1"></el-checkbox>
            <el-checkbox label="已经选定其他值保队作业" name="type2"></el-checkbox>
            <el-checkbox label="平台不好用" name="type3"></el-checkbox>
            <el-checkbox label="计划有变" name="type4"></el-checkbox>
            <el-checkbox label="其他" name="type5"></el-checkbox>
          </el-checkbox-group>
          <el-input type="textarea" style="margin-left: 100px ;width: 60%;height: 155px" placeholder="请输入其他原因" v-model="neirong"></el-input>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">否，我在考虑一下</el-button>
        <el-button @click="dialogFormVisible = false">确定取消</el-button>
      </div>
    </el-dialog>


<!-- 分配值保队 -->

 <el-dialog title="分配值保队" :visible.sync="dialogVisibles" width="54%" :lock-scroll="false">
    <div class="disalogs">
      <div class="disalogs-top" >
        <span class="yixuanz">已选择:</span>
        <div class="disasdhasition" v-show="disables">
          <img src="../../../../assets/5555.png" alt="">
          <div class="zhibaoname">{{player.team_name}}</div>
          <div class="datename">
            <span v-for="(item,index) in player.players" :key="index" v-show="index < 3">{{item.real_name}} </span>
          </div>
        </div>
      </div>
      <div class="disalogs-center">
        <li class="disalogs-center-li" ref="disali"  @click="disali(index,item.team_id)" v-for="(item,index) in playersList" :key="index">
            <img src="../../../../assets/5555.png" alt="">
          <div class="zhibaonames">{{item.team_name}}</div>
          <div class="datenames">
            <span v-for="(items,indexs) in item.players" :key="indexs" v-show="indexs < 3">{{items.real_name}} </span>
          </div>
          <span class="el-icon-success displaysert " ref="choice"></span>
        </li>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisibles = false">取 消</el-button>
      <el-button type="primary" @click="tpteam">确 定</el-button>
    </span>
  </el-dialog>


  <!-- 确认接单 -->
<el-dialog
  title="接单提示"
  :visible.sync="dialogVisible"
  width="40%" :lock-scroll="false">
  <span>是否接受此订单？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>


</template>

<script>
import api from "../../../common/api.js";
import "./receiving.css";
export default {
  data() {
    return {
      input1: "",
      input2: "",
      value: "",
      select: true,
      dialogTableVisible: false,
      dialogFormVisible: false,
      type: [],
      neirong: "",
      MyorderList: [],
      red_id: "",
      hederlist: ["全部", "待分配", "用户发布"],
      dialogVisibles: false,
      disables: false,
      dialogVisible: false,
      playersList: [],
      player: {},
      team_ids: "",
      num: ""
    };
  },
  methods: {
    dialog: function() {
      location.href = "#/peasant/peasantBotany/publish";
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
    all: function(index) {
      // this.$refs.all.className = "order-center-tops-li actionsColr";
      this.$refs.all.forEach(e => {
        e.className = "order-center-tops-li";
      });
      this.$refs.all[index].className = "order-center-tops-li actionsColr";
      this.getMyorderLists(index);
    },
    // demand_type_1: [],
    // demand_type_not_1: []
    getMyorderLists: function(index) {
      this.$http
        .post(
          api.apihost + "TaskManager",
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
          if (res.data.code == 0) {
            this.getuseindex(res, index);
          }
        });
    },
    getuseindex: function(res, index) {
      if (index == 0) {
        this.MyorderList = res.data.attachment.type_0;
      }
      if (index == 1) {
        this.MyorderList = res.data.attachment.demand_type_1;
      }
      if (index == 2) {
        this.MyorderList = res.data.attachment.demand_type_not_1;
      }
    },
    getMyorderList: function() {
      this.$http
        .post(
          api.apihost + "TaskManager",
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
            this.MyorderList = res.data.attachment.type_0;
            this.num = this.MyorderList.length;
          }
        });
    },
    disali: function(index, id) {
      console.log(id);
      this.team_ids = id;
      this.$refs.disali.forEach(e => {
        e.className = "disalogs-center-li";
      });
      this.$refs.choice.forEach(e => {
        e.className = "el-icon-success displaysert";
      });
      this.$refs.disali[index].className = "disalogs-center-li disali";
      this.disables = true;
      this.$refs.choice[index].className = "el-icon-success choice";
      this.player = this.playersList[index];
    },
    // 确认分配
    tpteam: function() {
      this.$http
        .post(
          api.apihost + "TaskManager",
          {
            action: 3,
            team_id: this.team_ids,
            reg_id: this.red_id,
            task_id: this.task_id
            // tp_reg_id: this.team_id
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
            this.all(0);
            this.$message({
              message:
                "值保队分配成功，小妹下海码代码不容易，麻烦各位哥哥给个五星好评",
              type: "success"
            });
          } else {
            this.$message.error("分配值保队失败");
          }
        });
      this.dialogVisibles = false;
    },
    // 获取值保队
    getuseifonData: function(id) {
      this.task_id = id;
      this.$http
        .post(
          api.apihost + "ServiceTeamInfo",
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
            this.playersList = res.data.attachment;
            this.dialogVisibles = true;
          } else {
            this.$message.error("未找到可分配的值保队");
          }
        });
    }
  },
  mounted() {
    this.$refs.all[0].className = "order-center-tops-li actionsColr";
    this.red_id = JSON.parse(window.sessionStorage.getItem("id"));
    this.getMyorderList();
  }
};
</script>
