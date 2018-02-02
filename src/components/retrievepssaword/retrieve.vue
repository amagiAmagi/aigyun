<template>
  <div class="retrieve">
    <div class="topheder">
      <div class="topheder-center">
        <img src="../../assets/log-login-log.png" alt="">
        <span class="ForgotPassword">找回密码</span>
        <span class="retiess"><router-link to="/register">注册</router-link></span>
        <span class="reties">|</span>
        <span class="retie"><router-link to="/login">登录</router-link></span>
      </div>
    </div>
    <div class="retrievepassword">
       <div class="retrievepassword-center">
         <div class="retrievepassword-center-heder">
           找回密码
         </div>

         <div class="replacements">

           <div class="Progress">
             <div class="row" ref="row">

             </div>
             <div class="row-noer">
               1
               <span>验证旧密码</span>
             </div>
             <div class="line" ref="xian">
               <img src="../../assets/pic_dot.png" alt="" v-if="line">
               <img src="../../assets/pic_dot_blue.png" v-else alt="">
             </div>
             <div class="row-noers" ref="corlros">
               2
               <span ref="corlr" class="cor">更换新密码</span>
             </div>
             <div class="lines" ref="xians">
               <img src="../../assets/pic_dot.png" alt="" v-if="lines">
               <img src="../../assets/pic_dot_blue.png" v-else alt="">
             </div>
             <div class="row-noerss" ref="co">
               3
               <span class="cor" ref="corl">更换成功</span>
             </div>
           </div>

            <div class="verifications verif" v-if="sende">
              <span>请输入您账号：</span><input type="text" class="xinshoujihao" v-model="inheritAttrsd">
           </div>

           <div class="verifications verif" v-if="sende">
            <span>请输入验证码：</span> <input type="text" v-model="code"> <el-button type="primary" class="approves" @click="getcode">发送验证码</el-button>
           </div>
           <div class="verifications verif" v-if="sendes">
             <span class="verificationsSpan">请输入新密码：</span><input type="password" class="xinshoujihao" v-model="new_password">
           </div>
           <div class="verifications verif" v-if="sendes">
             <span class="verificationsSpan">请再次输入密码：</span><input type="password" class="xinshoujihao" v-model="new_password1">
             <!-- <el-button type="primary" class="approves">发送验证码</el-button> -->
           </div>
           <div v-if="sendess" class="success">
             <img src="../../assets/icon-userinfor-success.png" alt="">
             <span>您的密码找回成功请返回登录</span>
           </div>
           <el-button type="primary" class="approvears" @click="step" v-if="open">下一步</el-button>
           <button v-if="!open" class="approvears backlogin" @click="backlogin">返回登录</button>
         </div>
       </div>


    </div>
  </div>
</template>
<style>
.retrieve {
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
.topheder {
  width: 100%;
  height: 70px;
  background-color: #d5dde4;
}
.topheder-center {
  width: 1200px;
  height: 70px;
  margin: 0 auto;
  position: relative;
  line-height: 70px;
}
.topheder-center img {
  position: absolute;
  top: 10px;
}
.topheder-center span {
  display: inline-block;
  color: #4c5e70;
  height: 70px;
  line-height: 70px;
}
.ForgotPassword {
  font-size: 30px;
  color: #4c5e70;
  height: 70px;
  line-height: 70px;
  margin-left: 240px;
}
.retie,
.reties,
.retiess {
  position: absolute;
  right: 0;
  font-size: 18px;
  cursor: pointer;
}
.retiess a {
  color: #4c5e70;
}
.retie a {
  color: #4c5e70;
}
.reties {
  right: 50px;
}
.retiess {
  right: 80px;
}
.retrievepassword {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 100%;
}
.retrievepassword-center {
  width: 960px;
  position: absolute;
  /* height: 800px;
  background-color: red; */
  right: 0;
}
.retrievepassword-center-heder {
  height: 40px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid #ccc;
  padding-top: 40px;
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
.verif {
  width: 500px;
}
.backlogin {
  background-color: #0094ff;
  border: 0;
  color: #fff;
  left: 230px;
}
</style>

<script>
import api from "../common/api";
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
      verify_code: ""
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
        if (this.code == this.verify_code) {
          this.getuseid();
        } else {
          this.$message.error("请输入您正确的验证码");
        }
      }
      if (this.num == 2) {
        this.getChangePassword();
        setTimeout(() => {
          location.href = "#/login";
        }, 3000);
      }
    },
    backlogin: function() {
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
    },
    getcode: function() {
      if (this.inheritAttrsd.indexOf("@") > 0) {
        this.$http
          .post(
            api.apihost + "SendVerifyCode",
            {
              phone_num: "",
              email_addr: this.inheritAttrsd,
              type: 1
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
              this.verify_code = res.data.attachment.verify_code;
              console.log(this.verify_code);
              this.$message({
                message: "验证码已发送",
                type: "success"
              });
            } else {
              this.$message.error("验证码获取失败");
              this.num = 0;
            }
          });
      } else {
        this.$http
          .post(
            api.apihost + "SendVerifyCode",
            {
              phone_num: this.inheritAttrsd,
              email_addr: "",
              type: 1
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
              this.verify_code = res.data.attachment.verify_code;
              console.log(this.verify_code);
              this.$message({
                message: "验证码已发送",
                type: "success"
              });
            } else {
              this.$message.error("验证码获取失败");
              this.num = 0;
            }
          });
      }
    }
  }
};
</script>
