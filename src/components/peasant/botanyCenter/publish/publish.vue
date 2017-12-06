<template>
  <div>
    <div class="left"></div>
    <div class="publish">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="农户姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="农户电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="作物类型" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="防治" name="type"></el-checkbox>
      <el-checkbox label="杀虫灭菌" name="type"></el-checkbox>
      <el-checkbox label="施肥" name="type"></el-checkbox>
      <el-checkbox label="授粉" name="type"></el-checkbox>
      <el-checkbox label="脱叶" name="type"></el-checkbox>
      <el-checkbox label="消杀灭菌" name="type"></el-checkbox>
      <el-checkbox label="消杀灭菌" name="type"></el-checkbox>
      <el-checkbox label="其他" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="农作物" prop="type2">
    <el-checkbox-group v-model="ruleForm.type2">
      <el-checkbox label="水稻" name="type"></el-checkbox>
      <el-checkbox label="小麦" name="type"></el-checkbox>
      <el-checkbox label="玉米" name="type"></el-checkbox>
      <el-checkbox label="柑橘" name="type"></el-checkbox>
    </el-checkbox-group>
    <span class="ck">查看更多</span>
  </el-form-item>
  <el-form-item>
    <el-select v-model="value" placeholder="请选择" class="selsct" @change="provinceChange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
     </el-select>
                <el-select placeholder="请选择" filterable class="selsct">
                    <el-optionv-for="item in cityOptions" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
  </el-form-item>
    <el-form-item label="作业时间" required>
    <el-col :span="6">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="作物地址" required><VDistpicker></VDistpicker></el-form-item>
   <el-form-item label="详细地址" prop="site">
    <el-input v-model="ruleForm.site"></el-input>
  </el-form-item>
  <el-form-item label="作业面积" prop="area">
    <el-input v-model="ruleForm.area"></el-input>
  </el-form-item>
  <el-form-item label="发布价格" prop="price">
    <el-input v-model="ruleForm.price"></el-input>
  </el-form-item>
  <el-form-item label="作业说明" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc" style="width: 592px"></el-input>
  </el-form-item>
   <el-form-item label="值保队选择">
   <el-button type="primary">选择值保队</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  <!-- 版权号 -->
    <div style="height: 70px;line-height: 70px;text-align: center;font-size: 14px">
        Copyright@深圳高科新农技术有限公司 保留所有权利 粤ICP备66668888号
    </div>
    </div>
  </div>
</template>

<style>
.left {
  width: 312px;
  background-color: #4c5e70;
  padding: 22px 14px;
  position: fixed;
  top: 70px;
  height: 100%;
}
.zwzl {
  height: 45px;
  margin-bottom: 22px;
  margin-left: 50px;
  display: none;
}
.zwzl select {
  height: 45px;
  width: 100px;
  font-size: 14px;
}
.publish {
  width: 850px;
  padding-top: 20px;
  position: relative;
  height: 900px;
  left: 354px;
  top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px #ccc;
}
.el-input {
  width: 376px;
}
.ck {
  position: absolute;
  width: 60px;
  height: 30px;
  right: 350px;
  top: 0;
  color: #0094ff;
}
/* .selsct input {
  width: 160px;
}
.el-input__suffix {
  right: 230px;
}

.el-select-dropdown {
  min-width: 160px;
} */
</style>
<script>
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        date: "",
        type: [],
        type2: [],
        desc: "",
        phone: "",
        area: "",
        price: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入电话号码或手机号码", trigger: "blur" },
          { min: 7, max: 11, message: "长度在 7 到 11 个字符", trigger: "blur" }
        ],
        site: [{ required: true, message: "请输入您的详细地址", trigger: "blur" }],
        area: [{ required: true, message: "请输入您需要作业的面积", trigger: "blur" }],
        price: [{ required: true, message: "请输入价格", trigger: "blur" }],
        date: [
          { type: "date", required: true, message: "请选择日期", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个作物类型",
            trigger: "change"
          }
        ],
        type2: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个农作物",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写作业说明", trigger: "blur" }]
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      cityOptions: ""
    };
  },
  methods: {
    // ck: function() {
    //   console.log(1111111);
    //   console.log(this.$refs);
    // },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    provinceChange(val) {}
  },
  components: { VDistpicker },
  created() {}
};
</script>
