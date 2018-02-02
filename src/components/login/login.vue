<template>
  <div class="login" ref="div">
    <!--  背景图片  -->
	<div class="bg">
	    <div>
	        <table cellspacing="0" cellpadding="0">
	            <tr>
	                <td>
	                    <img src="../../assets/bg-login.png" alt=""/>
	                </td>
	            </tr>
	        </table>
	    </div>
  </div>
  <!-- content -->
	<div class="wrap">
		<div class="logo">
			<img src="../../assets/logo-login.png" />
		</div>
		<div class="loginto">
      <ul class="loginto-ul">
        <li class="loginto-ul-li">
          <span><img src="../../assets/用户.png" alt=""></span><input type="text" placeholder="邮箱/用户名"  v-model="name">
        </li>
        <li class="loginto-ul-li">
          <span><img src="../../assets/密码.png" alt=""></span><input type="password" placeholder="密码" v-model="pswd">
        </li>
        <li class="loginto-ul-li">
          <span><img src="../../assets/验证码.png" alt=""></span><input type="text" placeholder="验证码" v-model="short"><span class="code" @click="authTo" ref="auth"> {{ map}}</span>
        </li>
        <el-button type="primary" class="loginbutton"  @click="loginTo" :disabled="disavled">登 录</el-button>
        <img src="../../assets/loading.gif" alt="" class="login-loading" v-show="disavled">
      </ul>
			<div class="text">
        <router-link to="/retrieve">找回密码</router-link>
        <!-- <span class="textspan" @click="retrieve">找回密码</span> -->
				<span> | </span>
        <router-link to="/register">注册账号</router-link>
        <!-- <span class="textspan" @click="register">注册账号</span> -->
			</div>
		</div>
	</div>


  </div>
</template>

 <script>
import api from "../common/api.js";
import post from "../../axios/post.js";
import { mapMutations } from "vuex";
import "./login.css";
// import "../../assets/css/font_541692_2jubbhqzsfoxyldi/iconfont.css";
export default {
  data() {
    return {
      map: Math.floor(Math.random() * 10000),
      num: 0,
      pand: false,
      pswd: "",
      name: "",
      loading: false,
      useifon: {},
      dataIfon: [],
      short: "",
      disavled: false
    };
  },
  mounted() {
    this.authTo();
  },
  created() {
    // this.hashchange();
  },
  methods: {
    // register: function() {
    //   location.href = "#/register";
    // },
    // retrieve: function() {
    //   location.href = "#/retrieve";
    // },
    //获取验证码
    authTo: function() {
      this.map = Math.floor(Math.random() * 10000);
      this.map = this.map < 1000 ? this.map * 10 : this.map;
      this.map = this.map < 1000 ? this.map + "0" : this.map;
      if (this.map < 1000) {
        this.map = this.map * 10;
        console.log(11111111111);
        console.log(this.map);
      }
      this.$refs.auth.innerHTML = this.map;
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
      const val = this.short;
      const http = this.$http;
      const _this = this;
      if (val == this.map) {
        this.pand = false;
        this.disavled = true;
        if (this.name.indexOf("@") > 0) {
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
            .then(res => {
              this.disavled = false;
              console.log(res);
              if (res.data.code == 0) {
                window.sessionStorage.setItem("role", res.data.attachment.role);
                window.sessionStorage.setItem("id", res.data.attachment.reg_id);
                if (res.data.attachment.role == 1) {
                  location.href = "#/peasant";
                }
                if (res.data.attachment.role == 2) {
                  // 将值保商id存入到vuex中
                  this.$store.commit("business", res.data.attachment.reg_id);
                  // 将值保商id存入loacl中
                  window.sessionStorage.setItem(
                    "id",
                    res.data.attachment.reg_id
                  );

                  location.href = "#/business";
                }
                if (res.data.attachment.role == 3) {
                  location.href = "#/protect";
                }
              } else {
                this.$message.error("登录失败");
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
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
            .then(res => {
              this.disavled = false;
              console.log(res);
              if (res.data.code == 0) {
                window.sessionStorage.setItem("id", res.data.attachment.reg_id);
                window.sessionStorage.setItem("role", res.data.attachment.role);
                // 将农户id存储在vuex
                this.useifon = {
                  reg_id: res.data.attachment.reg_id
                };
                this.$store.commit("setuseifon", this.useifon);
                // /将id存储在sessionStorage;
                window.sessionStorage.setItem("id", res.data.attachment.reg_id);

                if (res.data.attachment.role == 1) {
                  window.location.href = "#/peasant";
                }
                if (res.data.attachment.role == 2) {
                  console.log(res);
                  location.href = "#/business";
                }
                if (res.data.attachment.role == 3) {
                  console.log(res);
                  location.href = "#/protect";
                }
              } else {
                this.$message.error("登录失败");
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
  Update() {
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
