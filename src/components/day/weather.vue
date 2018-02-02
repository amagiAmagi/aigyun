<template>
   <div class="tianqi">
    <iframe allowtransparency="true" frameborder="0" width="312" :height="height" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=1&z=1&t=0&v=1&d=3&bd=0&k=000000&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=312&h=400&align=center"></iframe>
  </div>
</template>
<style>
.tianqi {
  width: 312px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 30px;
  height: 28%;
}
</style>
<script>
export default {
  data() {
    return {
      height: "100%"
    };
  },
  methods: {
    getweather: function() {
      var xhr = new XMLHttpRequest();
      var url =
        "https://api.seniverse.com/v3/weather/now.json?key=hyzmio7bkkb6bcza&location=深圳&language=zh-Hans&unit=c";
      xhr.open("GET", url);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 || xhr.status == 200) {
          console.log(xhr.responseText);
          console.log("我进来了");
        }
      };
      xhr.send();
      console.log(111111111111111111111111111111111111111111);
    }
  },
  mounted() {
    // this.getweather();
  }
};
</script>
