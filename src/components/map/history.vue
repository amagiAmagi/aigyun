<template>
  <div>
<!-- 地图 -->
   <div class="map">
     <!-- 右边的箭头 -->
     <span class="el-icon-caret-right map-cenyer-right" v-show="right" @click="unfold" v-if="false"></span>
    <!-- 左边的内容 -->
     <div class="map-left" ref="map" v-if="false">
       <span class="el-icon-caret-left map-cenyer-left" @click="shrink" v-show="left"></span>
     </div>
     <!-- 地图 -->
     <el-amap vid="amapDemo" :zoom="zoom" :center="center">
        <el-amap-polyline :editable="polyline.editable"  :path="polyline.path" :events="polyline.events"></el-amap-polyline>
     </el-amap>
   </div>
  </div>

</template>

<style>
.map {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  /* background-color: red; */
  position: relative;
  top: 70px;
}
.map-left {
  width: 350px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 1;
}
.map-cenyer-left {
  font-size: 50px;
  position: absolute;
  left: 310px;
  color: #000;
  top: 45%;
  width: 40px;
  height: 40px;
}
.map-cenyer-right {
  font-size: 50px;
  position: absolute;
  left: -12px;
  top: 45%;
  z-index: 1;
  width: 40px;
  height: 40px;
}
.transition {
  width: 0px;
  transition: all 1s;
}
.transitions {
  width: 350px;
  transition: all 1s;
}
</style>
<script>
import api from "../common/api.js";
export default {
  data() {
    return {
      num: "",
      left: true,
      right: false,
      zoom: 30,
      center: [121.5273285, 31.21515044],
      polyline: {
        path: [
          [121.5389385, 31.21515044],
          [121.5389385, 31.29615044],
          [121.5273285, 31.21515044],
          [121.5389385, 31.29615044],
          [121.5273285, 31.21515044],
          [121.5389385, 31.21515044]
        ],
        events: {
          click(e) {
            alert("click polyline");
          },
          end: e => {
            let newPath = e.target
              .getPath()
              .map(point => [point.lng, point.lat]);
            console.log(newPath);
          }
        },
        editable: false
      },
      list: [],
      getfiightpath: {}
    };
  },
  created() {},
  methods: {
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    shrink: function() {
      this.$refs.map.className = "map-left transition";
      this.left = false;
      this.right = true;
    },
    unfold: function() {
      this.$refs.map.className = "map-left transitions";
      this.right = false;
      const _this = this;
      setTimeout(function() {
        _this.left = true;
        console.log(111111111111);
      }, 500);
    },
    changeEditable() {
      this.polyline.editable = !this.polyline.editable;
    },
    getjwd: function() {
      this.$http
        .post(
          api.apihost + "OfflineFlight",
          {
            reg_no: this.getfiightpath.uav_id + "",
            action: 2,
            flight_seq: this.getfiightpath.seq
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          //   for (var i = 1; i < 20; i++ )
          // {
          //   x=res.data.a1+(res.data.a2-res.data.a1)/20*i;
          //   y=res.data.b1+(res.data.b2-res.data.b1)/20*i;
          // }
          // _this.list.push(x,y);
          this.list.push(res.data.attachment.num_fields);
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getgetfiightpath: function() {
      this.getfiightpath = this.$store.getters.getfiightpath;
      console.log(this.getfiightpath);
    }
  },
  mounted() {
    this.getgetfiightpath();
    this.getjwd();
  }
};
</script>
