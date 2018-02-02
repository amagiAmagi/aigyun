<template>
<div>
  <div class="modified">
    <div class="modified-top">
      用户信息修改
    </div>

    <div class="institution">
      <span class="organization">联系人：</span><input type="text" v-model="name">
    </div>
    <div class="institution">
      <span class="organization">性别：</span>
      <el-radio v-model="radio" label="0">男</el-radio>
      <el-radio v-model="radio" label="1">女</el-radio>
    </div>
    <div class="institution">
      <span class="organization">地址：</span>
      <div class="provers">
        <cityLinke :getprov="getprov"></cityLinke>
      </div>
    </div>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 2}" placeholder="请输入详细地址" class="textareass" v-model="textares">
    </el-input>
    <div class="institution">
      <span class="organization">身份证号：</span><input type="text" v-model="identity">
    </div>

    <div class="ihpone">
      <span class="organization">手机：</span><input type="text">
      <div class="chasger" @click="changeipgone"><span class="el-icon-sort change"></span></div>
    </div>
    <div class="ihpone">
      <span class="organization">邮箱：</span><input type="text">
      <div class="chasger" @click="changeipgones"><span class="el-icon-sort change"></span></div>
    </div>

    <div class="Logo">
      <span class="organization">头像：</span>  <div class="updloads"><upladimg v-on:srclistchage="srclistchage"></upladimg></div>

    </div>
    <!-- <div class="introduction">
      <span class="organization">服务介绍：</span>
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 2}" placeholder="请输入内容" class="textareas">
      </el-input>
    </div> -->
    <div class="buttonfortsr">

      <el-button type="primary" class="approve" @click="modification">确定</el-button>
      <el-button class="approve">重置</el-button>
    </div>
  </div>

  <!-- 更换手机弹出框 -->

  <div class="moderl" v-show="model" @click="windouse">

  </div>
  <div class="replacement" v-show="model">
    <div class="replacement-heder">
      更换绑定手机<span class="el-icon-close clickser" @click="windouse"></span>
    </div>
    <div class="Progress">
      <div class="row" ref="row">

      </div>
      <div class="row-noer">
          1
      <span>验证旧手机</span>
      </div>
      <div class="xiaoyuandain" ref="xian">
      </div>
      <div class="row-noers" ref="corlros">
          2
          <span ref="corlr" class="cor">绑定新手机</span>
      </div>
      <div class="xiaoyuandains" ref="xians">
      </div>
      <div class="row-noerss" ref="co">
          3
          <span class="cor" ref="corl">更换成功</span>
      </div>
    </div>
    <div class="verification" v-if="sende">
      <span>请输入旧手机验证码：</span><input type="text"><el-button type="primary" class="approves">发送验证码</el-button>
    </div>
    <div class="verifications" v-if="sendes">
      <span class="verificationsSpan">请输入新手机号码：</span><input type="text" class="xinshoujihao">
    </div>
    <div class="verifications" v-if="sendes">
      <span class="verificationsSpan">验证码：</span><input type="text"><el-button type="primary" class="approves">发送验证码</el-button>
    </div>
    <div v-if="sendess" class="success">
      <img src="../../../assets/icon-userinfor-success.png" alt="">
      <span>新的绑定手机号为：18745903321</span>
    </div>
     <el-button type="primary" class="approvears" @click="step" v-if="open">下一步</el-button>
     <el-button type="primary" class="approvears" @click="step" v-if="!open">完成</el-button>
  </div>

 <!-- 更换邮箱 -->
  <div class="moderl" v-show="models" @click="windouse">

  </div>
  <div class="replacement" v-show="models">
    <div class="replacement-heder">
      更换绑定邮箱<span class="el-icon-close clickser" @click="windouse"></span>
    </div>
    <div class="Progress">
      <div class="row" ref="rows">

      </div>
      <div class="row-noer">
          1
      <span>验证旧邮箱</span>
      </div>
      <div class="xiaoyuandain" ref="xians">
      </div>
      <div class="row-noers" ref="corlross">
          2
          <span ref="corlrs" class="cor">绑定新邮箱</span>
      </div>
      <div class="xiaoyuandains" ref="xianss">
      </div>
      <div class="row-noerss" ref="cos">
          3
          <span class="cor" ref="corls">更换成功</span>
      </div>
    </div>
    <div class="verification" v-if="sende">
      <span>请输入旧邮箱验证码：</span><input type="text"><el-button type="primary" class="approves">发送验证码</el-button>
    </div>
    <div class="verifications" v-if="sendes">
      <span class="verificationsSpan">请输入新邮箱号码：</span><input type="text" class="xinshoujihao">
    </div>
    <div class="verifications" v-if="sendes">
      <span class="verificationsSpan">验证码：</span><input type="text"><el-button type="primary" class="approves">发送验证码</el-button>
    </div>
    <div v-if="sendess" class="success">
      <img src="../../../assets/icon-userinfor-success.png" alt="">
      <span>新的绑定邮箱号为：18745903321</span>
    </div>
     <el-button type="primary" class="approvears" @click="step" v-if="open">下一步</el-button>
     <el-button type="primary" class="approvears" @click="step" v-if="!open">完成</el-button>
  </div>
</div>

</template>

<script>
import "./modified.css";
import cityLinke from "./city/cityLinkage.vue";
import upladimg from "../../common/upladimg.vue";
import api from "../../common/api";
export default {
  data() {
    return {
      name: "",
      identity: "",
      names: "",
      textares: "",
      radio: "1",
      ProvObj: {},
      dialogImageUrl: "",
      model: false,
      models: false,
      sende: true,
      num: 0,
      sendes: false,
      sendess: false,
      open: true,
      ppsp_logo_url: "",
      data: []
    };
  },
  components: {
    cityLinke,
    upladimg
  },
  methods: {
    getprov: function(data) {
      this.ProvObj = data;
      console.log(this.ProvObj);
    },
    changeipgone: function() {
      this.model = true;
    },
    changeipgones: function() {
      this.models = true;
    },
    windouse: function() {
      this.model = false;
      this.models = false;
      this.sende = true;
      this.sendes = false;
      this.sendess = false;
      this.open = true;
      this.$refs.row.className = "row";
      this.$refs.corlros.className = "row-noers";
      this.$refs.xian.className = "xiaoyuandain";
      this.$refs.corlr.className = "cor";
      // this.$refs.row.className = "row";
      this.$refs.co.className = "row-noerss";
      this.$refs.corl.className = "cor";
      this.$refs.xians.className = "xiaoyuandains";
      this.$refs.rows.className = "row";
      this.$refs.corlross.className = "row-noers";
      this.$refs.xians.className = "xiaoyuandain";
      this.$refs.corlrs.className = "cor";
      // this.$refs.row.className = "row";
      this.$refs.cos.className = "row-noerss";
      this.$refs.corls.className = "cor";
      this.$refs.xianss.className = "xiaoyuandains";
      this.num = 0;
    },
    step: function() {
      this.num++;
      if (this.num == 1) {
        this.$refs.row.className = "row rows";
        this.$refs.corlros.className = "row-noers corlros";
        this.$refs.xian.className = "xiaoyuandain corlro";
        this.$refs.corlr.className = "cor corlr";
        this.$refs.rows.className = "row rows";
        this.$refs.corlross.className = "row-noers corlros";
        this.$refs.xians.className = "xiaoyuandain corlro";
        this.$refs.corlrs.className = "cor corlr";
        this.sendes = true;
        this.sende = false;
        this.open = true;
      }
      if (this.num == 2) {
        this.$refs.corl.className = "cor corlr";
        this.$refs.row.className = "row rowss";
        this.$refs.co.className = "row-noerss corlros";
        this.$refs.xians.className = "xiaoyuandains corlro";
        this.$refs.corls.className = "cor corlr";
        this.$refs.rows.className = "row rowss";
        this.$refs.cos.className = "row-noerss corlros";
        this.$refs.xianss.className = "xiaoyuandains corlro";
        this.sende = false;
        this.sendes = false;
        this.sendess = true;
        this.open = false;
      }
      if (this.num == 3) {
        this.windouse();
      }
      if (this.num == 0) {
        this.sende = true;
        this.open = true;
      }
    },
    modification: function() {
      const id = window.sessionStorage.getItem("id");
      this.$http
        .post(
          api.apihost + "ChangeProfile",
          {
            reg_id: id,
            real_name: this.name,
            sex: this.radio,
            id_card: this.identity,
            reg_Prov: this.ProvObj.prov,
            reg_ciry: this.ProvObj.ciry,
            pic_url_1: this.ppsp_logo_url
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
            this.$message({
              message: "恭喜你!资料修改成功",
              type: "success"
            });
            // location.href = "#/peasant/peasantHome";
            // setTimeout(() => {
            //   location.reload();
            // }, 500);
          } else {
            this.$message.error("资料修改失败");
          }
        });
    },
    srclistchage: function(data) {
      this.data = data;
      // console.log(data.length);
      setTimeout(() => {
        if (this.data.length != 0) {
          this.ppsp_logo_url = this.data[0];
          console.log(this.ppsp_logo_url);
        } else {
          // this.srclistchage();
        }
      }, 500);
    }
  },
  mounted() {}
};
</script>
