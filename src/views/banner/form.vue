<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="分类">
        <el-select v-model="form.type" placeholder="请选择">
          <el-option label="网站" :value="1" />
          <el-option label="APP" :value="2" />
          <el-option label="小程序" :value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="跳转地址">
        <el-input v-model="form.link" />
      </el-form-item>
      <el-form-item label="轮播图">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          name="file"
          :on-success="onUploadImgSuccess"
        >
          <img v-if="form.focus_img" :src="form.focus_img" class="banner" />
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.sort" />
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="form.status">
          <el-radio :label="1">显示</el-radio>
          <el-radio :label="0">隐藏</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        <!-- <el-button @click="onCancel">Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { bannerAdd, bannerDetail, bannerUpdate } from "@/api/api";
export default {
  data() {
    return {
      uploadUrl: imageUpload,
      options: [],
      form: {
        id: this.$route.query.id,
        type: "",
        title: "",
        link: "",
        focus_img: "",
        sort: "",
        status: "",
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.id) {
            bannerUpdate(this.form).then((res) => {
              this.$message.success("修改成功");
              this.$router.push("list");
            });
          } else {
            bannerAdd(this.form).then((res) => {
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
      this.form.focus_img = "/" + res.data;
    },
  },
  mounted() {
    if (this.$route.query.id) {
      bannerDetail({ id: this.$route.query.id }).then((res) => {
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

