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
        订单信息（<span>20</span>单）
      </div>
        <!-- 展示订单信息的tab -->
      <div class="order-center">
          <ul class="order-center-tops-ul" ref="allss">
            <li class="order-center-tops-li" ref="all" @click="all(index)" v-for="(item,index) in hederlist" :key="index">{{item}}</li>
          </ul>
            <div class="order-card">
               <!-- 竖版 -->
              <li class="order-card-li" v-show="select">
                  <div class="order-card-li-heder">
                     <span class="order-card-li-heder-left">用户指定</span><span class="order-card-li-heder-right">订单号：1710221411932</span>
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
                        <el-button type="primary" class="selects">接单</el-button>  <el-button type="primary" class="selects cancel" @click="dialogFormVisible = true">拒绝</el-button>
                        <el-button type="primary" class="selects"><router-link to="/protect/checkojb">查看</router-link></el-button>
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
                     <el-button type="primary" class="primar jigouss">接单</el-button>
                   </div>
                   <div class="wireas"></div>
                   <div class="order-sper-bottoms">
                     <span>订单号：1710221411932</span>
                     <span>接单中</span>
                     <span>高科新农公司</span>
                     <span>值保一队</span>
                     <el-button type="primary" class="primar quxiaoS" @click="dialogFormVisible = true">拒绝</el-button>
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
      hederlist: ["全部", "用户指定", "值保商分配", "用户发布"]
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
    },

    getMyorderList: function() {
      this.$http
        .post(
          api.apihost + "TaskManager",
          {
            reg_id: this.red_id.reg_id,
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
    }
  },
  mounted() {
    this.$refs.all[0].className = "order-center-tops-li actionsColr";
    this.red_id = JSON.parse(window.sessionStorage.getItem("id"));
    this.getMyorderList();
  }
};
</script>
