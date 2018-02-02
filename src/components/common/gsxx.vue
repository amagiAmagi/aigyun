<template>
  <div class="gsxx">
    <div class="gsxx-top">
      {{ppsp_name}}
    </div>
    <div class="gsxx-center">
      <span>{{team_name}}</span>
      <span>{{real_name}}</span>
    </div>
  </div>
</template>

<style>
.gsxx {
  width: 292px;
  height: 140px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
}
.gsxx-top {
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 700;
}
.gsxx-center span {
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 700;
}
</style>
<script>
import api from "../common/api";
export default {
  data() {
    return {
      id: "",
      real_name: "",
      ppsp_name: "",
      team_name: ""
    };
  },
  methods: {
    getuseid: function() {
      this.id = window.sessionStorage.getItem("id");
    },
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
          console.log(res);
          if (res.data.code == 0) {
            this.team_name = res.data.attachment.team_name;
            this.ppsp_name = res.data.attachment.ppsp_name;
            this.real_name = res.data.attachment.real_name;
          }
        });
    }
  },
  mounted() {
    this.getuseid();
    this.getuseifon();
  }
};
</script>
