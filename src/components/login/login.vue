<template>
  <div class="login" ref="div">
    <div class="aigyun">
      <img src="../../assets/微信图片_20171124152421.png" alt="">
    </div>
    <div class="loginto">
       <ul ref="ul">
       <li class="dl">
    <el-form status-icon  label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input placeholder="账号/手机号/邮箱" v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" class="short">
        <el-input type="password" placeholder="密码" auto-complete="off" v-model="pswd"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="name" class="short">
        <el-input placeholder="验证码" ref="short"></el-input>
        <p class="pand" v-show="pand">* 验证码不正确</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="shorts"  @click="loginTo" v-loading="loading" >登录</el-button>
      </el-form-item>
      <el-button type="danger" class="forget">忘记密码？</el-button>
      <el-button type="success" class="auth" ref="auth" @click="authTo">{{map}}</el-button>
      <el-button type="info" plain class="zhuce" @click="register">注册账号</el-button>
    </el-form>
   </li>
   <li class="dl">
   <img src="../../assets/二维码.png"  alt="">
   </li>
   </ul>
   <div class="mark" @click="cut">
      <img src="../../assets/角标.png" alt="">
    </div>
    </div>

  </div>
</template>

<style>
.login {
  width: 100%;
  height: 100%;
  /* margin: 0 auto; */
  position: relative;
  overflow: hidden;
  /* margin-top: 100px; */
  background: url("../../assets/9527.png") repeat;
  background-size: 100%;
}
.aigyun {
  position: absolute;
  top: 50%;
  margin-top: -180px;
  right: 55%;
}
.loginto {
  width: 480px;
  /* height: 282px; */
  overflow: hidden;
  position: relative;
  top: 50%;
  left: 50%;
  /* margin-left: -210px; */
  margin-top: -200px;
  padding: 59px 0 0px 0;
  background-color: #fff;
  border-radius: 10px;
}
.pand {
  margin: 0;
  height: 10px;
  line-height: 16px;
  color: red;
  font-size: 10px;
  position: absolute;
  top: 40px;
}
ul {
  width: 840px;
  height: 282px;
  padding: 0;
  margin: 0;
}
.dl {
  width: 420px;
  height: 282px;
  float: left;
  position: relative;
}
.dl img {
  margin-left: 76px;
}
.el-form {
  width: 410px;
  /* padding: 0 10px; */
}
.short {
  width: 280px;
}
.forget,
.auth,
.zhuce {
  position: absolute;
  right: 10px;
  top: 58px;
  width: 102px;
}
.auth {
  top: 116px;
  font-size: 16px;
}
.zhuce {
  top: 174px;
}
.shorts {
  width: 180px;
}
.el-input__inner {
  margin-right: 10px;
}
.mark {
  width: 50px;
  height: 50px;
  position: absolute;
  top: -1px;
  right: -2px;
}
.el-form .el-form-item {
  margin-bottom: 8px;
}
.el-form-item {
  margin-bottom: 8px;
}
.el-form-item__content {
  margin-bottom: 10px;
}
</style>

 <script>
// import $ from 'jquery'
import api from "../common/api.js";
import post from "../../axios/post.js";
export default {
  data() {
    return {
      map: Math.floor(Math.random() * 10000),
      num: 0,
      pand: false,
      pswd: "",
      name: "",
      loading: false
    };
  },
  created() {
    this.hashchange();
  },
  methods: {
    //获取验证码
    authTo: function() {
      this.map = Math.floor(Math.random() * 10000);
      this.map = this.map < 1000 ? this.map * 10 : this.map;
      this.map = this.map < 1000 ? this.map + "0" : this.map;
      this.$refs.auth.$el.innerText = this.map;
    },
    //注册
    register: function() {
      location.href = "#/register";
    },
    cut: function() {
      this.num++;
      if (this.num % 2 != 0) {
        this.$refs.ul.style = "transform:translateX(-420px)";
      } else {
        this.$refs.ul.style = "transform:translateX(0px)";
        this.authTo();
      }
    },
    loginTo: function() {
      var val = this.$refs.short.$el.childNodes[1].value;
      if (val == this.map) {
        this.pand = false;
        this.loading = true;
        if (this.name.indexOf("@") > 0) {
          this.loading = false;
          this.$http
            .post(
              api.apihost + "Login",
              {
                phone_num: "",
                email_addr: this.name,
                password: this.pswd
              },
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(function(res) {
              console.log(res.data);
              if (res.data.code == 0) {
                if (res.data.attachment.role == 1) {
                  location.href = "#/peasant";
                }
                if (res.data.attachment.role == 2) {
                  location.href = "/business";
                }
                if (res.data.attachment.role == 3) {
                  location.href = "#/protect";
                }
              } else {
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          this.loading = false;
          var string1 = this.name.replace(/\s/g, "");
          this.$http
            .post(
              api.apihost + "Login",
              {
                phone_num: string1,
                email_addr: "",
                password: this.pswd
              },
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(function(res) {
              console.log(res.data);

              console.log(window.history.go);
              if (res.data.code == 0) {
                if (res.data.attachment.role == 1) {
                  location.href = "#/peasant";
                }
                if (res.data.attachment.role == 2) {
                  location.href = "/business";
                }
                if (res.data.attachment.role == 3) {
                  location.href = "#/protect";
                }
              } else {
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      } else {
        this.pand = true;
        this.loading = false;
      }
    },
    downkey: function() {
      var str = "@";
      this.getadd();
      if (this.name.indexOf(str) > 0) {
        this.Trim(this.name, "g");
      } else {
        if (parseInt(this.name[0]) != 1) {
          this.Trim(this.name, "g");
        }
      }
    },
    Trim: function(str, is_global) {
      var result;
      result = str.replace(/(^\s+)|(\s+$)/g, "");
      if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
      }
      this.name = result;
      return this.name;
    },
    getadd: function() {
      if (this.name.length == 3 || this.name.length == 8) {
        this.name += " ";
      }
    },
    hashchange: function() {
      window.history.pushState("forward", null, "");
      window.history.forward(1);
    }
  },
  beforeUpdate() {
    if (/^1[3|4|5|8|9|7]/.test(this.name)) {
      this.downkey();
    }
    if (/[a-zA-Z]/.test(this.name)) {
      this.Trim(this.name, "g");
    }
    if (this.name.length > 13) {
      this.Trim(this.name, "g");
    }
  }
};
</script>
