<template>
<div>
  <top></top>
  <router-view></router-view>
</div>
</template>
<style>

</style>

<script>
import top from "../common/top.vue";
export default {
  components: {
    top
  }
};
</script>
