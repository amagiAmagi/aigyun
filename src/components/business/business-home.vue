<template>
  <div class="centers">
    <div class="left">
      <day></day>
    </div>
    <div class="conter">
      <div class="teates">
        <div class="name">您好！夏先生</div>
        <p>欢迎登录爱极云，请检查您最新项目和代办事情</p>
      </div>
        <div class="process">

        </div>
    </div>
  </div>
</template>
<style>
.centers {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.left {
  width: 312px;
  background-color: #4c5e70;
  padding: 22px 14px;
  position: fixed;
  top: 70px;
  height: 100%;
}
.conter {
  padding-top: 70px;
  margin-left: 340px;
  padding-left: 14px;
}
.teates {
  height: 70px;
  border-bottom: 2px solid #ccc;
}
.name {
  font-size: 20px;
  margin-top: 20px;
}
.teates p {
  margin: 0;
  font-size: 14px;
  margin-top: 14px;
}
.process {
  width: 850px;
  height: 186px;
  border: 1px solid #e0e7ec;
  border-radius: 10px;
  margin-top: 22px;
  box-shadow: 0 0 2px 2px #ccc;
}
</style>

<script>
import day from "../day/day.vue";
export default {
  components: {
    day
  }
};
</script>
