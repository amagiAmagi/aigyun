<template>
    <div class="register">
      <div class="reg">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
              <el-form-item prop="resource">
                <div class="tatelt">
                  请选择注册类型
                </div>
                  <ul class="audio">
                    <li class="audio-n" @click="bdtwo1" ref="list1">
                      <img src="../../assets/11.png" alt="">
                    </li>
                     <li class="audio-n" @click="bdtwo2" ref="list2">
                      <img src="../../assets/22.png" alt="">
                    </li>
                     <li class="audio-n" @click="bdtwo3" ref="list3">
                      <img src="../../assets/33.png" alt="">
                    </li>
                  </ul>
              </el-form-item>
               <el-form-item label="用户名" class="names">
                   <el-input  placeholder="手机号/邮箱"></el-input>
              </el-form-item>

               <el-form-item label="密码" prop="pass" class="names">
    <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass" class="names">
    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
  </el-form-item>

   <el-form-item label="验证码" prop="name" class="shortt">
        <el-input placeholder="验证码" ref="short"></el-input>
                <el-button type="success" class="auths" ref="auth" >获取验证码</el-button>
      </el-form-item>
        <el-form-item>
           <el-button type="primary" class="shortss" @click="enroll">注册账号</el-button>
           <el-button type="info" plain class="zhuces" @click="login">返回登录</el-button>
        </el-form-item>

        </el-form>
      </div>
    </div>

</template>

<style>
.register {
  width: 100%;
  height: 100%;
  background: url("../../assets/back.jpg") no-repeat;
  background-size: 100%;
  position: relative;
}
.reg {
  width: 540px;
  background-color: #fff;
  position: absolute;
  padding: 50px 0;
  height: 390px;
  top: 50%;
  margin-top: -245px;
  left: 50%;
  margin-left: -270px;
}
.shortt {
  width: 360px;
}
.names {
  width: 480px;
}
.auths {
  position: absolute;
  right: -120px;
  top: 0;
}
.shortss {
  width: 250px;
}
.el-form .demo-ruleform {
  width: 100%;
}
.el-radio + .el-radio {
  margin-left: 10px;
}
.audio {
  margin: 0;
  width: 370px;
  height: 80px;
  padding: 0;
}
.audio-n {
  float: left;
  width: 80px;
  height: 80px;
  margin-right: 30px;
  margin-left: 12px;
  box-sizing: border-box;
}
.audio-n img {
  margin: 0;
}
.tatelt {
  width: 110px;
  position: absolute;
  left: -100px;
  top: 20px;
}
.active {
  border: 1px solid#000;
  background-color: #0094ff;
}
.zhuces {
  width: 100px;
  position: absolute;
}
</style>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        resource: "",
        pass: "",
        checkPass: "",
        id: 0
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    login: function() {
      location.href = "#/login";
    },
    bdtwo1: function() {
      this.$refs.list1.className = "audio-n active";
      this.$refs.list2.className = "audio-n";
      this.$refs.list3.className = "audio-n";
      this.ruleForm.id = 1;
    },
    bdtwo2: function() {
      this.$refs.list2.className = "audio-n active";
      this.$refs.list1.className = "audio-n";
      this.$refs.list3.className = "audio-n";
      this.ruleForm.id = 2;
    },
    bdtwo3: function() {
      this.$refs.list3.className = "audio-n active";
      this.$refs.list2.className = "audio-n";
      this.$refs.list1.className = "audio-n";
      this.ruleForm.id = 3;
    },
    enroll: function() {
      console.log(this.ruleForm.id);
    }
  }
};
</script>
