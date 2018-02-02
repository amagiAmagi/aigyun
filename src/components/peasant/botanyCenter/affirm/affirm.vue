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
            <li class="order-center-tops-li actionsColr" ref="all" @click="all" v-show="false">全部</li>
            <!-- <li class="order-center-tops-li" @click="order" ref="order">接单中</li>
            <li class="order-center-tops-li" @click="Inorder" ref="Inorder">已接单</li>
            <li class="order-center-tops-li" @click="Operation" ref="Operation">作业中</li>
            <li class="order-center-tops-li" @click="confirmed" ref="confirmed">待确认</li>
            <li class="order-center-tops-li" @click="evaluated" ref="evaluated">待评价</li>
            <li class="order-center-tops-li" @click="accomplish" ref="accomplish">已完成</li> -->
          </ul>
            <div class="order-card">
               <!-- 竖版 -->
              <li class="order-card-li" v-show="select">
                  <div class="order-card-li-heder">
                     <span class="order-card-li-heder-left">待确认</span><span class="order-card-li-heder-right">订单号：1710221411932</span>
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
                        <el-button type="primary" class="select">确认完成</el-button>  <el-button type="primary" class="select cancel" @click="checkojb">查看订单</el-button>
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
                 <div class="across">
                   <img src="../../../../assets/5555.png" alt="">
                   <div class="order-sper-tops">
                     <span>田地一号 &nbsp;2017.11.22 &nbsp;2017.11.22</span>
                     <span class="aerss">广东省深圳市南山区特发信息港A栋8楼</span>
                     <span class="mianjise">120亩</span>
                     <span class="rice">水稻</span>
                     <span class="shif">施肥</span>
                     <span class="jiasheridfashjfg">10元/亩</span>
                     <el-button type="primary" class="primar jigouss">确认完成</el-button>
                   </div>
                   <div class="wireas"></div>
                   <div class="order-sper-bottoms">
                     <span>订单号：1710221411932</span>
                     <span>接单中</span>
                     <span>高科新农公司</span>
                     <span>值保一队</span>
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



  </div>


</template>

<script>
import api from "../../../common/api.js";
import "./affirm.css";
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
      red_id: ""
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
    all: function() {
      this.$refs.all.className = "order-center-tops-li actionsColr";
      this.$refs.order.className = "order-center-tops-li";
      this.$refs.Inorder.className = "order-center-tops-li";
      this.$refs.Operation.className = "order-center-tops-li";
      this.$refs.confirmed.className = "order-center-tops-li";
      this.$refs.evaluated.className = "order-center-tops-li";
      this.$refs.accomplish.className = "order-center-tops-li";
    },
    order: function() {
      this.$refs.all.className = "order-center-tops-li ";
      this.$refs.order.className = "order-center-tops-li actionsColr";
      this.$refs.Inorder.className = "order-center-tops-li";
      this.$refs.Operation.className = "order-center-tops-li";
      this.$refs.confirmed.className = "order-center-tops-li";
      this.$refs.evaluated.className = "order-center-tops-li";
      this.$refs.accomplish.className = "order-center-tops-li";
    },
    Inorder: function() {
      this.$refs.all.className = "order-center-tops-li ";
      this.$refs.order.className = "order-center-tops-li";
      this.$refs.Inorder.className = "order-center-tops-li  actionsColr";
      this.$refs.Operation.className = "order-center-tops-li";
      this.$refs.confirmed.className = "order-center-tops-li";
      this.$refs.evaluated.className = "order-center-tops-li";
      this.$refs.accomplish.className = "order-center-tops-li";
    },
    Operation: function() {
      this.$refs.all.className = "order-center-tops-li ";
      this.$refs.order.className = "order-center-tops-li";
      this.$refs.Inorder.className = "order-center-tops-li ";
      this.$refs.Operation.className = "order-center-tops-li  actionsColr";
      this.$refs.confirmed.className = "order-center-tops-li";
      this.$refs.evaluated.className = "order-center-tops-li";
      this.$refs.accomplish.className = "order-center-tops-li";
    },
    confirmed: function() {
      this.$refs.all.className = "order-center-tops-li ";
      this.$refs.order.className = "order-center-tops-li";
      this.$refs.Inorder.className = "order-center-tops-li ";
      this.$refs.Operation.className = "order-center-tops-li";
      this.$refs.confirmed.className = "order-center-tops-li  actionsColr";
      this.$refs.evaluated.className = "order-center-tops-li";
      this.$refs.accomplish.className = "order-center-tops-li";
    },
    evaluated: function() {
      this.$refs.all.className = "order-center-tops-li ";
      this.$refs.order.className = "order-center-tops-li";
      this.$refs.Inorder.className = "order-center-tops-li ";
      this.$refs.Operation.className = "order-center-tops-li";
      this.$refs.confirmed.className = "order-center-tops-li ";
      this.$refs.evaluated.className = "order-center-tops-li  actionsColr";
      this.$refs.accomplish.className = "order-center-tops-li";
    },
    accomplish: function() {
      this.$refs.all.className = "order-center-tops-li ";
      this.$refs.order.className = "order-center-tops-li";
      this.$refs.Inorder.className = "order-center-tops-li ";
      this.$refs.Operation.className = "order-center-tops-li";
      this.$refs.confirmed.className = "order-center-tops-li ";
      this.$refs.evaluated.className = "order-center-tops-li ";
      this.$refs.accomplish.className = "order-center-tops-li  actionsColr";
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
        .then(function(res) {
          console.log(res);
        });
    },
    checkojb: function() {
      location.href = "#/peasant/checkojb";
    }
  },
  created() {
    this.red_id = JSON.parse(window.sessionStorage.getItem("id"));
    this.getMyorderList();
  }
};
</script>
