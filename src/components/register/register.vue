<template>

  <div class="register">
    <div class="bg">
      <div>
        <table cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <img src="../../assets/bg-login.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="wrap">
      <div class="logo">
        <img src="../../assets/logo-login.png" />
      </div>
      <div class="signup">
        <div class="title">
          <span class="t01 action" ref="t01" @click="t01">农户</span>
          <span class="t01" ref="t02" @click="t02">植保商</span>
        </div>
        <ul class="signup-ul">
          <li class="signup-ul-li">
            <label for="username">用户名：</label>
            <input type="text" id="username" placeholder="邮箱／手机号" v-model="ruleForm.name">
          </li>
          <li class="signup-ul-li">
            <label for="password">密码：</label>
            <input type="password" id="password" placeholder="请输入密码" v-model="ruleForm.pass">
          </li>
          <li class="signup-ul-li">
            <label for="passwordagain">确认密码：</label>
            <input type="password" id="passwordagain" placeholder="请再次输入密码" v-model="ruleForm.checkPass">
          </li>
          <li class="signup-ul-li">
            <label for="discode">验证码：</label>
            <input type="text" id="discode" placeholder="验证码" ref="short" v-model="ruleForm.verify">
            <span class="code" ref="auth" @click="yanzheng">发送验证码</span>
          </li>
          <li class="signup-ul-li">
            <el-button type="primary" class="signupbutton" @click="enroll">注册账号</el-button>
            <el-button class="signupbutton" @click="login">返回登录</el-button>
          </li>
        </ul>
      </div>
    </div>

  </div>


</template>

<script>
// import { Message } from "element-ui";
import "./register.css";
import api from "../common/api.js";
export default {
  data() {
    return {
      ruleForm: {
        resource: "",
        pass: "",
        checkPass: "",
        id: 1,
        name: "",
        role: false,
        verify: "",
        yanz: ""
      }
      // rules: {
      //   pass: [{ validator: validatePass, trigger: "blur" }],
      //   checkPass: [{ validator: validatePass2, trigger: "blur" }]
      // }
    };
  },
  methods: {
    login: function() {
      location.href = "#/login";
    },
    enroll: function() {
      if (this.ruleForm.name.indexOf("@") > 0) {
        if (this.ruleForm.pass == this.ruleForm.checkPass) {
          this.$http
            .post(
              api.apihost + "SignUp",
              {
                role: this.ruleForm.id,
                phone_num: "",
                email_addr: this.ruleForm.name,
                password: this.ruleForm.pass
              },
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(fres => {
              console.log(res);
              if (res.data.code == 0) {
                this.$message({
                  message: "恭喜你,注册成功",
                  type: "success"
                });
              } else {
                this.$message.error("注册失败");
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      } else {
        if (this.ruleForm.pass == this.ruleForm.checkPass) {
          var string1 = this.ruleForm.name.replace(/\s/g, "");
          this.$http
            .post(
              api.apihost + "SignUp",
              {
                role: this.ruleForm.id,
                phone_num: string1,
                password: this.ruleForm.pass,
                email_addr: ""
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
                  message: "恭喜你，注册成功",
                  type: "success"
                });
              } else {
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      }
    },
    downkey: function() {
      var str = "@";
      this.getadd();
      if (this.ruleForm.name.indexOf(str) > 0) {
        this.Trim(this.ruleForm.name, "g");
      } else {
        if (parseInt(this.ruleForm.name[0]) != 1) {
          this.Trim(this.ruleForm.name, "g");
        }
      }
    },
    Trim: function(str, is_global) {
      var result;
      result = str.replace(/(^\s+)|(\s+$)/g, "");
      if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
      }
      this.ruleForm.name = result;
      return this.ruleForm.name;
    },
    getadd: function() {
      if (this.ruleForm.name.length == 3 || this.ruleForm.name.length == 8) {
        this.ruleForm.name += " ";
      }
    },
    yanzheng: function() {
      // SendVerifyCode
      if (this.ruleForm.name.indexOf("@") > 0) {
        if (this.ruleForm.pass == this.ruleForm.checkPass) {
          this.$http
            .post(
              api.apihost + "SendVerifyCode",
              {
                phone_num: "",
                email_addr: this.ruleForm.name,
                type: 0
              },
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(function(res) {
              console.log(res);
              if (res.data.code == 0) {
                this.ruleForm.yanz = res.data.attachment.verify_code;
              } else {
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      } else {
        if (this.ruleForm.pass == this.ruleForm.checkPass) {
          var string1 = this.ruleForm.name.replace(/\s/g, "");
          this.$http
            .post(
              api.apihost + "SendVerifyCode",
              {
                phone_num: string1,
                type: 0,
                email_addr: ""
              },
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(function(res) {
              console.log(res);
              if (res.data.code == 0) {
                this.ruleForm.yanz = res.data.attachment.verify_code;
              } else {
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      }
    },
    t01: function() {
      this.$refs.t01.className = "t01 action";
      this.$refs.t02.className = "t01";
      this.ruleForm.id = 1;
    },
    t02: function() {
      this.$refs.t02.className = "t01 action";
      this.$refs.t01.className = "t01";
      this.ruleForm.id = 2;
    }
  },
  beforeUpdate() {
    if (/^1[3|4|5|8|9|7]/.test(this.ruleForm.name)) {
      this.downkey();
    }
    if (/[a-zA-Z]/.test(this.ruleForm.name)) {
      this.Trim(this.ruleForm.name, "g");
    }
    if (this.ruleForm.name.length > 13) {
      this.Trim(this.ruleForm.name, "g");
    }
  }
};
</script>
