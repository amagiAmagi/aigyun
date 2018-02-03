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
      <!-- <div class="left-center">
        <el-button type="text" class="left-center-button" @click="dialog"><i class="el-icon-circle-plus-outline"></i><br> 发起值保订单
        </el-button>
      </div> -->
    </div>
    <div class="order">
      <div class="order-top">
        订单信息（<span>20</span>单）
      </div>
        <!-- 展示订单信息的tab -->
      <div class="order-center">
          <ul class="order-center-tops-ul" ref="allss">
            <!-- <li class="order-center-tops-li actionsColr" ref="all" @click="all" v-show="false">全部</li> -->
            <!-- <li class="order-center-tops-li" @click="order" ref="order">接单中</li>
            <li class="order-center-tops-li" @click="Inorder" ref="Inorder">已接单</li>
            <li class="order-center-tops-li" @click="Operation" ref="Operation">作业中</li>
            <li class="order-center-tops-li" @click="confirmed" ref="confirmed">待确认</li>
            <li class="order-center-tops-li" @click="evaluated" ref="evaluated">待评价</li>
            <li class="order-center-tops-li" @click="accomplish" ref="accomplish">已完成</li> -->
          </ul>
            <div class="order-card">
               <!-- 竖版 -->
              <li class="order-card-li" v-show="select" v-for="(item,index) in MyorderList" :key="index">
                  <div class="order-card-li-heder">
                     <span class="order-card-li-heder-left">待评价</span><span class="order-card-li-heder-right">订单号：{{item.task_id}}</span>
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
                        <el-button type="primary" class="select" @click="evalustyes(item.task_id,item.reg_id)">评价</el-button>  <el-button type="primary" class="select cancel" @click="checkojb">查看订单</el-button>
                      </div>
                  </div>
              </li>
              <!-- 横版 -->

              <div class="order-spers order-sper-li" v-show="!select" >
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
                     <!-- <el-button type="primary" class="primar jigouss">确认完成</el-button> -->
                     <el-button type="primary" class="primar jigouss" @click="evalustyes(item.task_id,item.reg_id)">评价</el-button>
                   </div>
                   <div class="wireas"></div>
                   <div class="order-sper-bottoms">
                     <span>订单号：primar jigouss</span>
                     <span>待评价</span>
                     <span>{{item.ppsp_name == ""? "-":item.ppsp_name}}</span>
                     <span>{{item.team_name == ""? "-":item.team_name}}</span>
                     <el-button type="primary" class="primar quxiaoS" @click="checkojb">查看订单</el-button>
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

<!-- 评价订单 -->

  <el-dialog title="评价订单" :visible.sync="dialogVisible" width="40%" :lock-scroll="false">
    <div class="evaluatedialog">
      <div class="evaluatedialog-left">
        <img src="../../../../assets/015.png" alt="">
      </div>
      <div class="evaluatedialog-right">
        <h4>请评价本次作业的农户</h4>
        <p>
  <el-rate v-model="value5"  text-color="#ff9900" score-template="{value}" class="ratetop">
  </el-rate>
</p>
<p><input type="text" class="rate-input" v-model="provider"></p>
        <!-- <p>{{teamname == ""?"-":teamname}}
  <el-rate v-model="value4"  text-color="#ff9900" score-template="{value}" class="ratetop">
  </el-rate>
</p>
<p><input type="text" class="rate-input" v-model="team"></p> -->
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogs">确 定</el-button>
    </span>
  </el-dialog>


  </div>


</template>

<script>
import api from "../../../common/api.js";
import "./evaluate.css";
export default {
  data() {
    return {
      input1: "",
      input2: "",
      value: "",
      select: true,
      type: [],
      neirong: "",
      MyorderList: [],
      red_id: "",
      dialogVisible: false,
      value5: 0,
      taskid: "",
      provider: "",
      team: "",
      id: ""
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
    // all: function() {
    //   this.$refs.all.className = "order-center-tops-li actionsColr";
    //   this.$refs.order.className = "order-center-tops-li";
    //   this.$refs.Inorder.className = "order-center-tops-li";
    //   this.$refs.Operation.className = "order-center-tops-li";
    //   this.$refs.confirmed.className = "order-center-tops-li";
    //   this.$refs.evaluated.className = "order-center-tops-li";
    //   this.$refs.accomplish.className = "order-center-tops-li";
    // },
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
            this.MyorderList = res.data.attachment.rating;
            console.log(this.MyorderList);
          }
        });
    },
    checkojb: function() {
      location.href = "#/business/checkojb";
    },
    // 评价
    evalustyes: function(id, ids) {
      this.taskid = id;
      this.id = ids;
      console.log(this.id);
      this.dialogVisible = true;
    },
    // 确认评价
    dialogs: function() {
      this.$http
        .post(
          api.apihost + "TaskRateInfo",
          {
            action: 0,
            task_id: this.taskid,
            reg_id: this.id,
            service_provider_rate: this.input5,
            service_team_rate: this.input4,
            service_provider_comments: this.provider,
            service_team_comments: this.team,
            pp_reg_id: this.red_id
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
            this.dialogVisible = false;
          }
        });
    }
  },
  created() {
    this.red_id = JSON.parse(window.sessionStorage.getItem("id"));
    this.getMyorderList();
  }
};
</script>
