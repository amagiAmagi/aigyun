<template>

  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="30">
    <bm-driving start="深圳特发信息港A栋" end="深圳龙岗中心城" @searchcomplete="handleSearchComplete" :panel="false" :autoViewport="true"></bm-driving>
    <bml-lushu @stop="reset" :path="path" :icon="icon" :play="play" :rotation="true" :speed="1000">
    </bml-lushu>
    <button @click="show">开始移动</button>
  </baidu-map>

</template>

<script>
import { BmlLushu } from "vue-baidu-map";
export default {
  components: {
    BmlLushu
  },
  data() {
    return {
      play: false,
      path: [],
      icon: {
        url: "http://api.map.baidu.com/library/LuShu/1.2/examples/car.png",
        size: { width: 52, height: 26 },
        opts: { anchor: { width: 27, height: 13 } }
      }
    };
  },
  methods: {
    reset() {
      this.play = false;
    },
    handleSearchComplete(res) {
      this.path = res
        .getPlan(0)
        .getRoute(0)
        .getPath();
    },
    show: function() {
      this.play = true;
      console.log(this.play);
    }
  }
};
</script>
<style>
.map {
  width: 100%;
  height: 800px;
}
</style>
