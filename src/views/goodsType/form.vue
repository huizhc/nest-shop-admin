<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="商品类型名称">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="商品类型描述">
        <el-input type="textarea" rows="8" v-model="form.description" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        <!-- <el-button @click="onCancel">Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { goodsTypeAdd, goodsTypeDetail, goodsTypeUpdate } from "@/api/api";
export default {
  data() {
    return {
      uploadUrl: "http://localhost:3000/admin/focus/imageUpload",
      options: [],
      form: {
        id: this.$route.query.id,
        title: "",
        description: "",
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.id) {
            goodsTypeUpdate(this.form).then((res) => {
              this.$message.success("修改成功");
              this.$router.push("list");
            });
          } else {
            goodsTypeAdd(this.form).then((res) => {
              this.$message.success("添加成功");
              this.$router.push("list");
            });
          }
        } else {
          this.$message.warning("请填写内容");
        }
      });
    },
    onUploadImgSuccess(res, file) {
      this.form.focus_img = "http://localhost:3000/" + res.data;
    },
  },
  mounted() {
    if (this.$route.query.id) {
      goodsTypeDetail({ id: this.$route.query.id }).then((res) => {
        this.form = Object.assign(this.form, res.data);
      });
    }
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

