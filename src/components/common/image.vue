<template>
  <div class="upladimg">
    <ul class="imagelist">
      <li class="imagelist-li" v-for="(item,index) in srcList" :key="index"  v-on:mouseover="test(index)" v-on:mouseleave="heedr(index)">
        <img :src="item" alt="">
        <div class="delete" ref="delete"> <span class="el-icon-close deletclose" @click="deletes(index)" ref="close"></span></div>
      </li>
      <div class="img">
      <div class="imagesss">
        <img src="../../assets/colse.png" alt="">
        <span class="imagespan">请上传图片</span>
      </div>
      <input type="file" id="file" name="myfile" @change="UpladFile" multiple class="inpysrt" ref="avatarInput"/>
    </div>
    </ul>
  </div>
</template>
<style>
.imagesss {
  width: 170px;
  height: 170px;
  box-sizing: border-box;
  border: 1px dashed #0094ff;
  position: relative;
}
.imagesss img {
  position: absolute;
  top: 30px;
  left: 50px;
}
.imagespan {
  position: absolute;
  bottom: 8px;
  display: inline-block;
  width: 170px;
  color: #0094ff;
  text-align: center;
}
.imagelist-li .delete .deletclose {
  font-size: 30px;
  color: #0094ff;
  /* opacity: 0; */
  position: absolute;
  right: 4px;
  top: 4px;
}
.close {
  transition: all 0.5s;
  opacity: 1;
}
.delete {
  position: absolute;
  width: 190px;
  background-color: #000;
  opacity: 0.5;
  height: 0;
  top: 0;
  left: 0;
}
.show {
  transition: all 0.5s;
  height: 40px;
}
.inpysrt {
  position: absolute;
  top: 0;
  left: 0;
  width: 190px;
  height: 180px;
  background-color: transparent;
  opacity: 0;
}

.upladimg {
  position: relative;
  width: 610px;
  max-height: 360px;
  padding: 0px 0px 10px 10px;
  /* border: 1px solid #ccc; */
  display: flex;
  flex-wrap: wrap;
}

.img {
  width: 190px;
  height: 180px;
  position: relative;
  float: left;
  margin-top: 10px;
}
.imagelist {
  max-width: 610px;
  max-height: 410px;
  float: left;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  corlr: #fff;
}
::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
.imagelist-li {
  width: 190px;
  height: 180px;
  float: left;
  margin-right: 10px;
  margin-top: 10px;
  position: relative;
}

.imagelist-li img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}
</style>
<script>
import api from "../common/api";
export default {
  data() {
    return {
      srcList: []
    };
  },
  methods: {
    UpladFile: function() {
      var image = new FormData();
      image.append("filename", this.$refs.avatarInput.files[0]);
      this.$http
        .post(api.apihost + "UploadImage", image, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.srcList.push(res.data.attachment.url);
            console.log(this.srcList);
          }
        });
    },
    test: function(index) {
      this.$refs.delete[index].className = "delete show";
      this.$refs.close[index].className = "el-icon-close deletclose close";
    },
    heedr: function(index) {
      this.$refs.delete[index].className = "delete";
      this.$refs.close[index].className = "el-icon-close deletclose";
    },
    deletes: function(index) {
      this.srcList.splice(index, 1);
    }
  }
};
</script>
