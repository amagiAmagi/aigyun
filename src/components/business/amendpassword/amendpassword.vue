<template>
  <div class="amendpassword">
    <div class="amendpassword-center">
      <div class="amendpassword-center-heder">
           修改密码
      </div>
      <div class="amendpasswords">
            <div class="Progress">
             <div class="row" ref="row">

             </div>
             <div class="row-noer">
               1
               <span>验证旧密码</span>
             </div>
             <div class="line" ref="xian">
               <img src="../../../assets/pic_dot.png" alt="" v-if="line">
               <img src="../../../assets/pic_dot_blue.png" v-else alt="">
             </div>
             <div class="row-noers" ref="corlros">
               2
               <span ref="corlr" class="cor">更换新密码</span>
             </div>
             <div class="lines" ref="xians">
               <img src="../../../assets/pic_dot.png" alt="" v-if="lines">
               <img src="../../../assets/pic_dot_blue.png" v-else alt="">
             </div>
             <div class="row-noerss" ref="co">
               3
               <span class="cor" ref="corl">更换成功</span>
             </div>
           </div>
            <div class="verifications verif" v-if="sende">
              <span>请输入您的账号：</span><input type="text" class="xinshoujihao" v-model="inheritAttrsd" >
           </div>
           <div class="verifications verif" v-if="sende">
            <span>请输入您旧密码：</span><input type="password" class="xinshoujihao" v-model="old_password">
            <!-- <span>请输入验证码：</span> <input type="text" v-model="code"> <el-button type="primary" class="approves" @click="getcode">发送验证码</el-button> -->
           </div>
           <div class="verifications verif" v-if="sendes">
             <span class="verificationsSpan">请输入新密码：</span><input type="password" class="xinshoujihao" v-model="new_password">
           </div>
           <div class="verifications verif" v-if="sendes">
             <span class="verificationsSpan">请再次输入密码：</span><input type="password" class="xinshoujihao" v-model="new_password1">
             <!-- <el-button type="primary" class="approves">发送验证码</el-button> -->
           </div>
           <div v-if="sendess" class="success">
             <img src="../../../assets/icon-userinfor-success.png" alt="">
             <span>您的密码更换成功请重新登录</span>
           </div>
           <el-button type="primary" class="approvears" @click="step" v-if="open">下一步</el-button>
           <button v-if="!open" class="approvears backlogin" @click="backbusiness">返回登录 <span style="font-size: 20px">{{number}}</span></button>
      </div>
    </div>
  </div>
</template>

<style>
.amendpassword {
  padding-top: 70px;
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.amendpassword-center {
  width: 960px;
  position: absolute;
  top: 70px;
  right: 0;
  height: 800px;
  /* background-color: red; */
}
.amendpassword-center-heder {
  height: 40px;
  padding-top: 40px;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  border-bottom: 2px solid #ccc;
}
.line {
  position: absolute;
  top: 56px;
  left: 70px;
}
.lines {
  position: absolute;
  top: 56px;
  left: 370px;
}
.backlogin {
  background-color: #0094ff;
  border: 0;
  color: #fff;
  left: 230px;
}
</style>
<script>
import api from "../../common/api";
export default {
  data() {
    return {
      sende: true,
      num: 0,
      sendes: false,
      sendess: false,
      open: true,
      line: true,
      lines: true,
      inheritAttrsd: "",
      old_password: "",
      id: "",
      new_password: "",
      new_password1: "",
      code: "",
      verify_code: "",
      number: 3
    };
  },
  methods: {
    windouse: function() {
      this.sende = true;
      this.sendes = false;
      this.sendess = false;
      this.open = true;
      this.$refs.row.className = "row";
      this.$refs.corlros.className = "row-noers";
      this.$refs.corlr.className = "cor";
      this.$refs.co.className = "row-noerss";
      this.$refs.corl.className = "cor";
      this.num = 0;
    },
    step: function() {
      this.num++;
      if (this.num == 1) {
        this.getuseid();
      }
      if (this.num == 2) {
        if (this.new_password != "") {
          this.getChangePassword();
          setTimeout(() => {
            location.href = "#/login";
          }, 3000);
          setInterval(() => {
            this.number--;
          }, 1000);
        }
      }
    },
    backbusiness: function() {
      location.href = "#/login";
    },
    getuseid: function() {
      if (this.inheritAttrsd.indexOf("@") > 0) {
        this.$http
          .post(
            api.apihost + "GetRegId",
            {
              phone_num: "",
              email_addr: this.inheritAttrsd
              // password: this.old_password
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
              this.id = res.data.attachment.reg_id;
              console.log(this.id);
              this.getshow();
            } else {
              this.$message.error("请先验证账号或邮箱");
              this.num = 0;
            }
          });
      } else {
        this.$http
          .post(
            api.apihost + "GetRegId",
            {
              phone_num: this.inheritAttrsd,
              email_addr: ""
              // password: this.old_password
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
              this.id = res.data.attachment.reg_id;
              console.log(this.id);
              this.getshow();
            } else {
              this.$message.error("请先验证账号或邮箱");
              this.num = 0;
            }
          });
      }
    },
    getshow: function() {
      if (this.id) {
        this.$refs.row.className = "row rows";
        this.$refs.corlros.className = "row-noers corlros";
        this.$refs.corlr.className = "cor corlr";
        this.sendes = true;
        this.sende = false;
        this.open = true;
        this.line = false;
      }
    },
    getChangePassword: function() {
      if (this.new_password == this.new_password1) {
        this.$http
          .post(
            api.apihost + "ChangePassword",
            {
              reg_id: this.id,
              old_password: this.old_password,
              new_password: this.new_password
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
              this.$refs.corl.className = "cor corlr";
              this.$refs.row.className = "row rowss";
              this.$refs.co.className = "row-noerss corlros";
              this.sende = false;
              this.sendes = false;
              this.sendess = true;
              this.open = false;
              this.lines = false;
            } else {
              this.$message.error("密码更换失败");
            }
          });
      } else {
        this.$message.error("前后两次输入的密码不正确");
        this.num = 1;
      }
    }
  }
};
</script>
