<template>
  <div>
    <div class="left">
      <div class="left-top">
        <div class="left-top-header">
          <span>关键字</span><br>
          <input type="text">
          <i class="el-icon-search"></i>
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
          <el-button plain>全部</el-button>
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
            <li class="order-center-tops-li actionsColr" ref="all" @click="all">全部</li>
            <li class="order-center-tops-li" @click="order" ref="order">接单中</li>
            <li class="order-center-tops-li" @click="Inorder" ref="Inorder">已接单</li>
            <li class="order-center-tops-li" @click="Operation" ref="Operation">作业中</li>
            <li class="order-center-tops-li" @click="confirmed" ref="confirmed">待确认</li>
            <li class="order-center-tops-li" @click="evaluated" ref="evaluated">待评价</li>
            <li class="order-center-tops-li" @click="accomplish" ref="accomplish">已完成</li>
          </ul>
            <div class="order-card">
               <!-- 竖版 -->
              <li class="order-card-li" v-show="select">
                  <div class="order-card-li-heder">
                     <span class="order-card-li-heder-left">接单中</span><span class="order-card-li-heder-right">订单号：1710221411932</span>
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
                        <el-button type="primary" class="select">选择值保机构</el-button>  <el-button type="primary" class="select cancel" @click="dialogFormVisible = true">取消</el-button>
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
                     <span>田地一号 &nbsp;&nbsp;&nbsp;2017.11.22 &nbsp;&nbsp;2017.11.22</span>
                     <span class="aerss">广东省深圳市南山区特发信息港A栋8楼</span>
                     <span>120亩</span>
                     <span class="rice">水稻</span>
                     <span class="shif">施肥</span>
                     <span style="margin-left: 24px">10元/亩</span>
                     <el-button type="primary" class="primar jigouss">选择值保机构</el-button>
                   </div>
                   <div class="wireas"></div>
                   <div class="order-sper-bottoms">
                     <span>订单号：1710221411932</span>
                     <span>接单中</span>
                     <span>高科新农公司</span>
                     <span>值保一队</span>
                     <el-button type="primary" class="primar quxiaS" @click="dialogFormVisible = true">取消</el-button>
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
    <el-dialog title="取消订单" :visible.sync="dialogFormVisible">
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

<style>
.order-center-tops-ul {
  margin: 0;
  padding: 0;
  width: 822px;
  padding-bottom: 20px;
  height: 100%;
}
.order-center-tops-ul .actionsColr {
  color: #fff;
  background-color: #0094ff;
}
.order-center-tops-li {
  float: left;
  width: 80px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #bdc4c7;
  color: #959fa7;
  margin-right: 6px;
  cursor: pointer;
}
.wireas {
  width: 600px;
  height: 1px;
  background-color: #eaeff0;
  position: absolute;
  left: 110px;
  top: 55px;
}
.namesss {
  width: 60px;
  margin-left: 100px;
  border-right: 1px solid #ccc;
}
.cancel {
  margin-left: 10px;
}
.fbsjss {
  border-right: 1px solid #ccc;
  width: 70px;
}
.zysjss {
  border-right: 1px solid #ccc;
  width: 70px;
}
.aersss {
  display: inline-block;
  width: 153px;
  word-break: break-all;
  border-right: 1px solid #ccc;
}
.aerss {
  display: inline-block;
  width: 153px;
  word-break: break-all;
}
.across {
  height: 96px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 5px;
  position: relative;
}
.sasess {
  width: 50px;
  border-right: 1px solid #ccc;
}
.zuowss {
  width: 40px;
  border-right: 1px solid #ccc;
}
.shif {
  margin-left: 20px;
}
.jagess {
  width: 70px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.caozuoss {
  margin-left: 40px;
}
.jigouss {
  margin-left: 8px;
}
.bodys p {
  display: inline-block;
  position: absolute;
  font-size: 18px;
  font-weight: 900;
}
.order-spers {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.order-sper-bottoms {
  height: 28px;
  line-height: 28px;
  position: relative;
  left: 100px;
  top: -30px;
}
.order-sper-tops {
  position: relative;
  top: 10px;
  display: inline-block;
  height: 30px;
}
.order-spers img {
  width: 98px;
  height: 74px;
  border-radius: 10px;
  vertical-align: text-top;
}
.quxiaS {
  position: absolute;
  right: 105px;
  top: 2px;
}
.order-sper-bottoms span {
  font-size: 12px;
  margin-right: 20px;
}
.order-sper-tops span {
  font-size: 12px;
  margin-right: 10px;
}
.order-sper-heders {
  width: 822px;
  height: 32px;
  line-height: 32px;
  background-color: #d3dee3;
  font-size: 14px;
}
.order-sper-heders .sper-titela {
  display: inline-block;
  text-align: center;
}
.primar {
  width: 100px;
  height: 28px;
  padding: 0;
}
.primar span {
  margin-right: 0;
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
  background-color: #fff;
  color: #409eff;
  font-size: 20px;
}
.left-center-button i {
  font-size: 100px;
}
.order {
  width: 850px;
  height: 800px;
  /* background-color: red; */
  margin-left: 350px;
}
.order-top {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
}
.order-center {
  width: 822px;
  box-shadow: 0 0 2px 2px #ccc;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 14px 0px 14px;
  position: relative;
  min-height: 50px;
  padding-bottom: 20px;
}
.order-card {
  margin-top: 20px;
  width: 822px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.order-card-li {
  float: left;
  width: 256px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-right: 27px;
  margin-bottom: 15px;
  border-radius: 10px;
}
.order-card-li:nth-of-type(3n) {
  margin-right: 0;
}
.order-card-li-heder {
  height: 30px;
  line-height: 30px;
  background-color: #ccc;
  font-size: 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.order-card-li-heder-left {
  height: 24px;
  line-height: 24px;
  display: inline-block;
  width: 70px;
  text-align: center;
  border-right: 1px solid #aaa;
}
.order-card-li-heder-right {
  width: 182px;
  display: inline-block;
  text-align: center;
}
.order-card-li-center {
  width: 226px;
  height: 262px;
  /* background-color: red; */
  padding: 10px 15px;
}
.order-card-li-center img {
  width: 98px;
  height: 74px;
  border-radius: 10px;
}
.order-card-li-center-right {
  width: 120px;
  height: 74px;
  display: inline-block;
  font-size: 12px;
  text-align: center;
  position: relative;
  top: -10px;
  /* line-height: 74px; */
}
.order-card-li-center-right h5 {
  margin: 0;
  font-size: 14px;
  margin-bottom: 10px;
}
.order-card-li-center p {
  margin: 0;
  font-size: 14px;
}
.tetale {
  margin: 10px 0;
}
.tetale span {
  display: inline-block;
  width: 113px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 32px;
  font-size: 12px;
}
.select {
  width: 105px;
  height: 28px;
  font-size: 12px;
  padding: 0;
}
.feelot {
  margin-top: 8px;
}
.showScreen {
  position: absolute;
  right: 38px;
  top: 28px;
  font-size: 14px;
}
.el-icon-menu,
.el-icon-tickets {
  font-size: 20px;
}
.actions {
  color: #0094ff;
}
</style>

<script>
import api from "../../../common/api.js";
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
  created() {
    this.red_id = JSON.parse(window.localStorage.getItem("id"));
    this.getMyorderList();
  }
};
</script>
