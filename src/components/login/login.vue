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
        <el-input placeholder="账号/手机号/邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" class="short">
        <el-input type="password" placeholder="密码" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="name" class="short">
        <el-input placeholder="验证码" ref="short"></el-input>
        <p class="pand" v-show="pand">* 验证码不正确</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="shorts"  @click="loginTo">登录</el-button>
      </el-form-item>
      <el-button type="danger" class="forget">忘记密码？</el-button>
      <el-button type="success" class="auth" ref="auth" @click="authTo">{{message}}</el-button>
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
  padding: 59px 0 9px 0;
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
  top: 62px;
  width: 102px;
}
.auth {
  top: 124px;
  font-size: 16px;
}
.zhuce {
  top: 186px;
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
.el-form-item {
  margin-bottom: 8px;
}
</style>

 <script>
// import $ from 'jquery'
export default {
  data() {
    return {
      message: Math.floor(Math.random() * 10000),
      num: 0,
      pand: false
    };
  },
  created() {},
  methods: {
    //获取验证码
    authTo: function() {
      this.message = Math.floor(Math.random() * 10000);
      this.message = this.message < 1000 ? this.message * 10 : this.message;
      this.message = this.message < 1000 ? this.message + "0" : this.message;
      this.$refs.auth.$el.innerText = this.message;
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
      if (val == this.message) {
        this.pand = false;
        console.log(val);
        location.href = "#/business";
      } else {
        this.pand = true;
      }
    }
  }
};
</script>
