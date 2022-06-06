<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="导航名称">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="导航位置">
        <el-select v-model="form.position" placeholder="请选择">
          <el-option label="顶部" :value="1" />
          <el-option label="中间" :value="2" />
          <el-option label="底部" :value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="关联商品">
        <el-input v-model="form.relation" />
      </el-form-item>
      <el-form-item label="导航链接地址">
        <el-input v-model="form.link" />
      </el-form-item>
      <el-form-item label="新窗口打开">
        <el-select
          v-model="form.is_opennew"
          value-key=""
          placeholder="请选择"
          clearable
          filterable
        >
          <el-option label="否" :value="1"> </el-option>
          <el-option label="是" :value="2"> </el-option>
        </el-select>
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
import { navAdd, navAll, navDetail, navUpdate, navDelete } from "@/api/api";
export default {
  data() {
    return {
      uploadUrl: "http://localhost:3000/admin/focus/imageUpload",
      options: [],
      form: {
        id: this.$route.query.id,
        title: "",
        position: "",
        relation: "",
        link: "",
        is_opennew: "",
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
            navUpdate(this.form).then((res) => {
              this.$message.success("修改成功");
              this.$router.push("list?page=" + this.$route.query.prevPage);
            });
          } else {
            navAdd(this.form).then((res) => {
              this.$message.success("添加成功");
              this.$router.push("list?page=" + this.$route.query.prevPage);
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
      navDetail({ id: this.$route.query.id }).then((res) => {
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

