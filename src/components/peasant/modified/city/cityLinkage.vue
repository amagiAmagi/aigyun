<template>

  <div>
    <select v-model="prov" @change="provs" >
  		<option v-for="(option,index) in arr" :value="option.name" :key="index">
  			{{ option.name }}
  		</option>
    </select>
      &nbsp;省&nbsp;
    <select v-model="city" @change="citys">
  		<option v-for="(option,index) in cityArr" :value="option.name" :key="index">
  			{{ option.name }}
  		</option>
    </select>
     &nbsp;市&nbsp;
    <select v-model="district" v-if="district"  @change="districts" >
  		<option v-for="(option,index) in districtArr" :value="option.name" :key="index">
  			{{ option.name }}
  		</option>
    </select>
    &nbsp;县、区&nbsp;
  </div>

</template>

<style>
select {
  width: 108px;
  height: 34px;
  font-size: 16px;
  border-radius: 5px;
  color: #4b5f6d;
}
</style>
<script>
import arrAll from "../../../common/cityProv.js";
export default {
  data() {
    return {
      arr: arrAll,
      prov: "北京",
      city: "北京",
      district: "",
      cityArr: [],
      districtArr: [],
      ProvObj: {}
    };
  },
  methods: {
    updateCity: function() {
      for (var i in this.arr) {
        var obj = this.arr[i];
        if (obj.name == this.prov) {
          this.cityArr = obj.sub;
          break;
        }
      }
      this.city = this.cityArr[1].name;
    },
    updateDistrict: function() {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.city) {
          this.districtArr = obj.sub;
          break;
        }
      }
      if (
        this.districtArr &&
        this.districtArr.length > 0 &&
        this.districtArr[1].name
      ) {
        this.district = this.districtArr[1].name;
      } else {
        this.district = "";
      }
    },
    provs: function() {
      setTimeout(() => {
        this.ProvObj.prov = this.prov;
        this.ProvObj.city = this.city;
        this.ProvObj.district = this.district;
      }, 1);
      this.SetProv();
    },
    citys: function() {
      setTimeout(() => {
        this.ProvObj.prov = this.prov;
        this.ProvObj.city = this.city;
        this.ProvObj.district = this.district;
      }, 1);
      this.SetProv();
    },
    districts: function() {
      setTimeout(() => {
        this.ProvObj.prov = this.prov;
        this.ProvObj.city = this.city;
        this.ProvObj.district = this.district;
      }, 1);
      this.SetProv();
    },
    SetProv: function() {
      this.$emit("getprov", this.ProvObj);
    }
  },
  beforeMount: function() {
    this.updateCity();
    this.updateDistrict();
  },
  watch: {
    prov: function() {
      this.updateCity();
      this.updateDistrict();
    },
    city: function() {
      this.updateDistrict();
    }
  }
};
</script>
