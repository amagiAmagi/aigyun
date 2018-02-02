<template>
  <div class="teates">
        <div class="name">您好！{{name}}</div>
        <p>欢迎登录爱极云，请检查您最新项目和代办事情</p>
      </div>
</template>
<style>
.teates {
  height: 70px;
  border-bottom: 2px solid #ccc;
}
.name {
  font-size: 20px;
  margin-top: 20px;
  font-weight: 700;
}
.teates p {
  margin: 0;
  font-size: 14px;
  margin-top: 14px;
}
</style>
<script>
import api from "../common/api";
export default {
  data() {
    return {
      id: "",
      name: ""
    };
  },
  methods: {
    getuseifon: function() {
      this.$http
        .post(
          api.apihost + "GetUserIndexInfo",
          {
            reg_id: this.id
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 0) {
            this.name = res.data.attachment.real_name;
          }
        });
    },
    getuseid: function() {
      this.id = window.sessionStorage.getItem("id");
    }
  },
  mounted() {
    this.getuseid();
    this.getuseifon();
  }
};
</script>
