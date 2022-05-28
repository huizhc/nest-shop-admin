<template>

  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="角色名称">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input v-model="form.description" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        <!-- <el-button @click="onCancel">Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {roleAdd, roleDetail, roleUpdate} from '@/api/api'
export default {
  data() {
    return {
      form: {
        id: this.$route.query.id,
        title: '',
        description: '',
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.id) {
            roleUpdate(this.form).then((res) => {
              this.$message.success("修改成功");
              this.$router.back();
            });
          } else {
            roleAdd(this.form).then((res) => {
              this.$message.success("添加成功");
              this.$router.back();
            });
          }
        } else {
          this.$message.warning("请填写内容");
        }
      });
    },
  },
  mounted() {
    if (this.$route.query.id) {
      roleDetail({ id: this.$route.query.id }).then((res) => {
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

