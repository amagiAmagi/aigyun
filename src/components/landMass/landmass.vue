<template>

  <div class="landMass">
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick" v-show="ling">
        <el-tab-pane label="地块一" name="first" v-if="ling">
          <div class="dikuaixinx">
            <img src="../../assets/11.png" alt="">
            <h5>{{plot1.farmland_name}}</h5>
            <div class="mjzw mj">
              <span>面积(亩)</span><br>{{plot1.farmland_ares}}</span>
            </div>
            <div class="mjzw">
              <span>种植作物</span><br>{{plot1.crops_name}}</span>
            </div>
          </div>
        </el-tab-pane>
          <el-tab-pane label="地块二" name="second" v-if="one">
          <div class="dikuaixinx">
            <img src="../../assets/11.png" alt="">
            <h5>{{plot2.farmland_name}}</h5>
            <div class="mjzw mj">
              <span>面积(亩)</span><br>{{plot2.farmland_ares}}</span>
            </div>
            <div class="mjzw">
              <span>种植作物</span><br>{{plot2.crops_name}}</span>
            </div>
          </div>
        </el-tab-pane>
          <el-tab-pane label="地块三" name="third" v-if="two">
          <div class="dikuaixinx">
            <img src="../../assets/11.png" alt="">
            <h5>{{plot3.farmland_name}}</h5>
            <div class="mjzw mj">
              <span>面积(亩)</span><br>{{plot3.farmland_ares}}</span>
            </div>
            <div class="mjzw">
              <span>种植作物</span><br>{{plot3.crops_name}}</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="gkgd" v-show="theer">
      <router-link to="/peasant/peasantSoil">更多>></router-link>
    </div>
    <div class="left-centers" v-show="add">
      <el-button type="text" class="left-center-buttons" @click="adds"><i class="el-icon-circle-plus-outline"></i><br> 新增地块
      </el-button>
    </div>
  </div>

</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      activeName: "first",
      one: true,
      two: true,
      theer: true,
      plotList: [],
      add: true,
      ling: true,
      plot1: [],
      plot2: [],
      plot3: []
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
      const plot = window.localStorage.getItem("peasantList");
      console.log(JSON.parse(plot));
      if (this.plotList == undefined) {
        this.$store.commit("setusepolt", JSON.parse(plot));
        this.getshow();
      }
    },
    getshow: function() {
      this.plotList = this.$store.getters.getPenasntPlot[0];
      if (this.plotList.length < 1) {
        this.ling = false;
      }
      if (this.plotList.length < 2) {
        this.one = false;
      }
      if (this.plotList.length < 3) {
        this.two = false;
      }
      if (this.plotList.length < 4) {
        this.theer = false;
      }
      if (this.plotList.length >= 1) {
        this.plot1 = this.plotList[0];
      }
      if (this.plotList.length >= 2) {
        this.plot2 = this.plotList[1];
      }
      if (this.plotList.length >= 3) {
        this.plot3 = this.plotList[2];
      }
    }
  },
  mounted() {
    // 获取地块信息
    this.plotList = this.$store.getters.getPenasntPlot[0];
    this.getplot();
    this.getshow();
  },
  created() {
    this.plotList = this.$store.getters.getPenasntPlot[0];
    // this.getshow();
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
