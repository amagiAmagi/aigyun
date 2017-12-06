<template>
    <div class="register">
      <div class="reg">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
              <el-form-item prop="resource">
                <!-- <div class="tatelt">
                  请选择注册类型
                </div> -->
                <span v-show="ruleForm.role" class="role">*&nbsp;请选择注册类型</span>
                  <ul class="audio">
                    <li class="audio-n" @click="bdtwo1" ref="list1">
                      <!-- <img src="../../assets/11.png" alt=""> -->
                     <i class="el-icon-goods"></i>  农户
                    </li>
                     <!-- <li class="audio-n" @click="bdtwo2" ref="list2">
                     <i class="el-icon-goods"></i>  值保队员
                    </li> -->
                     <li class="audio-n" @click="bdtwo3" ref="list3">
                      <!-- <img src="../../assets/33.png" alt=""> -->
                     <i class="el-icon-goods"></i> 值保商
                    </li>
                  </ul>
              </el-form-item>
               <el-form-item label="用户名" class="names">
                   <el-input  placeholder="手机号/邮箱" v-model="ruleForm.name"></el-input>
              </el-form-item>

               <el-form-item label="密码" prop="pass" class="names">
    <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass" class="names">
    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
  </el-form-item>
   <el-form-item label="验证码" prop="name" class="shortt">
        <el-input placeholder="验证码" ref="short"></el-input>
                <el-button type="success" class="auths" ref="auth"  @click="yanzheng">获取验证码</el-button>
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
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  padding: 50px 0;
  height: 360px;
  top: 50%;
  margin-top: -245px;
  left: 50%;
  margin-left: -270px;
  border-radius: 10px;
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
  width: 400px;
  height: 40px;
  padding: 0;
  border-bottom: 2px solid #0094ff;
  margin-left: -20px;
}
.audio-n {
  float: left;
  width: 200px;
  height: 40px;
  box-sizing: border-box;
  text-align: center;
}
.tatelt {
  width: 110px;
  position: absolute;
  left: -100px;
  top: 20px;
}
.active {
  background-color: #0094ff;
}
.zhuces {
  width: 110px;
  position: absolute;
}

.el-form .el-form-item {
  margin-bottom: 8px;
}
.el-form-item__content {
  margin-bottom: 10px;
}
.role {
  position: absolute;
  left: -70px;
  top: -30px;
  color: #f40;
}
</style>

<script>
import { Message } from "element-ui";
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
        id: 0,
        name: "",
        role: false
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
      this.$refs.list3.className = "audio-n";
      this.ruleForm.id = 1;
      this.ruleForm.role = false;
    },
    bdtwo3: function() {
      this.$refs.list3.className = "audio-n active";
      this.$refs.list1.className = "audio-n";
      this.ruleForm.id = 3;
      this.ruleForm.role = false;
    },
    enroll: function() {
      if (this.ruleForm.id == 0) {
        this.ruleForm.role = true;
      } else {
        this.ruleForm.role = false;
        if (this.ruleForm.name.indexOf("@") > 0) {
          if (this.ruleForm.pass == this.ruleForm.checkPass) {
            this.$http
              .post(
                "http://10.10.3.32:8080/AigyunWeb/SignUp",
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
              .then(function(res) {
                if (res.data.code == 0) {
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
                "http://10.10.3.32:8080/AigyunWeb/SignUp",
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
              .then(function(res) {
                if (res.data.code == 0) {
                } else {
                }
              })
              .catch(function(err) {
                console.log(err);
              });
          }
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
              "http://10.10.3.32:8080/AigyunWeb/SendVerifyCode",
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
              if (res.data.code == 0) {
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
              "http://10.10.3.32:8080/AigyunWeb/SendVerifyCode",
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
              if (res.data.code == 0) {
              } else {
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      }
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
