<template>
<div>
  <top></top>
  <router-view></router-view>
</div>
</template>
<style>
.left {
  width: 312px;
  background-color: #4c5e70;
  padding: 0 10px;
}
</style>

<script>
import top from "../common/top.vue";
export default {
  components: {
    top
  }
};
</script>
