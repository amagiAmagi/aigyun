<template>
<div>

  <el-dialog title="新增地块" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="地块名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" style="width: 80%" placeholder="请输入地块名称"></el-input>
      </el-form-item>
      <el-form-item label="地块地址" :label-width="formLabelWidth">
        <v-distpicker @selected="onSelected"></v-distpicker>
      </el-form-item>
      <el-form-item label="详细地址" :label-width="formLabelWidth">
        <el-input v-model="form.site" placeholder="请输入详细地址" style="width: 80%"></el-input>
      </el-form-item>
      <el-form-item label="作业面积" :label-width="formLabelWidth">
        <el-input v-model="form.area" style="width: 80%" placeholder="请输入作业面积"></el-input>
      </el-form-item>
      <el-form-item label="目标作物" :label-width="formLabelWidth">
        <crop></crop>
      </el-form-item>
      <el-form-item label="地块描述和备注" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc" style="width: 80%" placeholder="请输入地块描述和备注"></el-input>
      </el-form-item>
      <el-form-item label="地块图片" :label-width="formLabelWidth">
        <el-upload action="https://jsonplaceholder.typicode.com/posts" list-type="picture-card" :multiple="true" :show-file-list="true"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogFormVisible = false" class="fabu">发布</el-button>
      <el-button @click="reset" id="chongzhi">重置</el-button>
    </div>
  </el-dialog>
  </div>

</template>
<script>
import crop from "./crop.vue";
export default {
  data() {
    return {
      form: {
        name: "",
        site: "",
        area: "",
        crop: "",
        desc: ""
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    reset() {
      this.form = {};
    }
  },
  components: {
    crop
  }
};
</script>
