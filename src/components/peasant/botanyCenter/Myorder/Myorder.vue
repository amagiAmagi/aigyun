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

        <el-tabs type="border-card">
          <el-tab-pane label="全部">

            <ul class="order-card">
               <div v-show="!select" class="order-sper-heders">
              <span class="sper-titela namesss">名称</span>
              <span class="sper-titela fbsj">发布时间</span>
              <span class="sper-titela zysj">作业时间</span>
              <span class="sper-titela aers">地块地址</span>
              <span class="sper-titela sase">面积</span>
              <span class="sper-titela zuow">作物</span>
              <span class="sper-titela">作业类型</span>
              <span class="sper-titela jage">价格</span>
              <span class="sper-titela caozuo">操作</span>
            </div>
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
                        <el-button type="primary" class="select">选择值保机构</el-button>  <el-button type="primary" class="select" @click="dialogFormVisible = true">取消</el-button>
                      </div>
                  </div>
              </li>
              <!-- 横版 -->
              <li class="order-spers order-sper-li" v-show="!select">
                  <img src="../../../../assets/5555.png" alt="">
                  <div class="order-sper-tops">
                    <span>田地一号 &nbsp;&nbsp;&nbsp;2017.11.22 &nbsp;&nbsp;2017.11.22</span>
                  <span class="aerss">广东省深圳市南山区特发信息港A栋8楼</span>
                  <span>120亩</span>
                  <span style="margin-left: 0px">水稻</span>
                  <span class="shif">施肥</span>
                  <span style="margin-left: 24px">10元/亩</span>
                  <el-button type="primary" class="primar jigou">选择值保机构</el-button>
                  </div>
                  <div class="order-sper-bottoms">
                    <span>订单号：1710221411932</span>
                    <span>接单中</span>
                    <span>高科新农公司</span>
                    <span>值保一队</span>
                    <el-button type="primary" class="primar quxia" @click="dialogFormVisible = true">取消</el-button>
                  </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="接单中">接单中</el-tab-pane>
          <el-tab-pane label="已接单">已接单</el-tab-pane>
          <el-tab-pane label="作业中">作业中</el-tab-pane>
           <el-tab-pane label="待确定">待确定</el-tab-pane>
          <el-tab-pane label="待评价">待评价</el-tab-pane>
          <el-tab-pane label="已完成">已完成</el-tab-pane>
        </el-tabs>
         <div class="zssx">
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
          </el-form-item>
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
.namesss {
  width: 60px;
  margin-left: 100px;
  border-right: 1px solid #ccc;
}
.fbsj {
  border-right: 1px solid #ccc;
  width: 70px;
}
.zysj {
  border-right: 1px solid #ccc;
  width: 70px;
}
.aers {
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
.sase {
  width: 50px;
  border-right: 1px solid #ccc;
}
.zuow {
  width: 40px;
  border-right: 1px solid #ccc;
}
.shif {
  margin-left: 20px;
}
.jage {
  width: 70px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.caozuo {
  margin-left: 40px;
}
.jigou {
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
  height: 96px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 11px 5px;
}
.order-sper-li {
  margin-top: 20px;
  height: 106px;
}
.order-sper-bottoms {
  border-top: 1px solid #ccc;
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
  /* left: 100px; */
}
.order-spers img {
  width: 98px;
  height: 74px;
  border-radius: 10px;
  vertical-align: text-top;
}
.quxia {
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
  width: 100%;
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
  background-color: #409eff;
  color: #fff;
  font-size: 20px;
}
.left-center-button i {
  font-size: 50px;
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
  /* height: 700px; */
  box-shadow: 0 0 2px 2px #ccc;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 14px 0px 14px;
  position: relative;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  background-color: #0094ff;
  color: #fff;
}
.el-tabs--border-card {
  border: 0;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.order-card {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
.el-tabs--border-card > .el-tabs__content {
  padding: 15px 0;
}
.order-card-li {
  float: left;
  width: 256px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-right: 27px;
  margin-bottom: 15px;
}
.order-card-li:nth-of-type(3n) {
  margin-right: 0;
}
.order-card-li-heder {
  height: 30px;
  line-height: 30px;
  background-color: #ccc;
  font-size: 12px;
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
.zssx {
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
      neirong: ""
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
    }
  }
};
</script>
