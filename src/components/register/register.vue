<template>
    <div class="register">
      <div class="reg">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
              <el-form-item label="选择注册类型" prop="resource" >
                   <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="值保商">
                          <img src="../../assets/11.png" align="absmiddle" alt="">
                        </el-radio>
                        <el-radio label="农户">
                          <img src="../../assets/22.png" align="absmiddle" alt="">
                        </el-radio>
                        <el-radio label="供应商">
                          <img src="../../assets/33.png" align="absmiddle" alt="">
                        </el-radio>
                    </el-radio-group>
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

   <el-form-item label="验证码" prop="name" class="short">
        <el-input placeholder="验证码" ref="short"></el-input>
                <el-button type="success" class="auth" ref="auth" >获取验证码</el-button>
      </el-form-item>
        <el-form-item>
           <el-button type="primary" class="shorts">注册账号</el-button>
           <el-button type="info" plain class="zhuce" @click="login">返回登录</el-button>
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
.short {
  width: 360px;
}
.names {
  width: 480px;
}
.auth {
  position: absolute;
  right: -120px;
  top: 0;
}
.shorts {
  width: 250px;
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
        checkPass: ""
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
    }
  }
};
</script>
