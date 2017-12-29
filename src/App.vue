<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "app",
  watch: {
    $route() {
      // alert(this.$route);
      console.log(this.$router.app._route.fullPath);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  color: #4b5f6d;
  overflow: scroll;
  overflow-x: hidden;
}

li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  color: #0094ff;
}
input {
  padding: 0;
}
</style>


