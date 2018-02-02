<template>

  <div class="landMass">
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick" v-show="plotList.length">
        <el-tab-pane label="地块一" name="first" v-if="plotList[0]">
          <div class="dikuaixinx">
            <img src="../../assets/11.png" alt="">
            <h5>{{plotList[0].farmland_name}}</h5>
            <div class="mjzw mj">
              <span>面积(亩)</span><br>{{plotList[0].farmland_ares}}</span>
            </div>
            <div class="mjzw">
              <span>种植作物</span><br>{{plotList[0].crops_name}}</span>
            </div>
          </div>
        </el-tab-pane>
          <el-tab-pane label="地块二" name="second" v-if="plotList[1]">
          <div class="dikuaixinx">
            <img src="../../assets/11.png" alt="">
            <h5>{{plotList[1].farmland_name}}</h5>
            <div class="mjzw mj">
              <span>面积(亩)</span><br>{{plotList[1].farmland_ares}}</span>
            </div>
            <div class="mjzw">
              <span>种植作物</span><br>{{plotList[1].crops_name}}</span>
            </div>
          </div>
        </el-tab-pane>
          <el-tab-pane label="地块三" name="third" v-if="plotList[2]">
          <div class="dikuaixinx">
            <img src="../../assets/11.png" alt="">
            <h5>{{plotList[2].farmland_name}}</h5>
            <div class="mjzw mj">
              <span>面积(亩)</span><br>{{plotList[2].farmland_ares}}</span>
            </div>
            <div class="mjzw">
              <span>种植作物</span><br>{{plotList[2].crops_name}}</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="gkgd" v-show="plotList.length >3">
      <router-link to="/peasant/peasantSoil">更多>></router-link>
    </div>
    <div class="left-centers" v-show="plotList.length<1">
      <el-button type="text" class="left-center-buttons" @click="adds"><i class="el-icon-circle-plus-outline"></i><br> 新增地块
      </el-button>
    </div>
  </div>

</template>
<script>
import { mapGetters } from "vuex";
import api from "../common/api";
export default {
  data() {
    return {
      activeName: "first",
      plotList: []
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    adds: function() {
      location.href = "#/peasant/peasantSoil";
    },
    getplot: function() {
      const id = window.sessionStorage.getItem("id");
      this.$http
        .post(
          api.apihost + "GetUserIndexInfo",
          {
            reg_id: id
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
            this.plotList = res.data.attachment.fields;
          }
        });
    }
  },
  mounted() {
    this.getplot();
  }
};
</script>

<style>
.landMass {
  width: 310px;
  height: 240px;
  box-shadow: 0 0 2px 2px #ccc;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  /* margin-top: 20px; */
}
.el-tabs {
  padding: 10px;
}
.gkgd {
  font-size: 14px;
  position: absolute;
  right: 20px;
  top: 20px;
}
.dikuaixinx {
  text-align: center;
  height: 176px;
}
.dikuaixinx h5 {
  margin: 0;
}
.mjzw {
  display: inline-block;
  font-size: 14px;
  width: 80px;
  margin-top: 10px;
}
.mj {
  border-right: 1px solid #ccc;
}
.left-centers {
  width: 176px;
  height: 116px;
  background-color: #fff;
  border-radius: 10px;
  padding: 47px 68px;
}
.left-centers .left-center-buttons {
  width: 176px;
  height: 116px;
  border-radius: 10px;
  background-color: #fff;
  color: #409eff;
  font-size: 30px;
}
.left-center-buttons i {
  font-size: 100px;
}
</style>
