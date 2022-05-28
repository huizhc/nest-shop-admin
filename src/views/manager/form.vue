<template>

  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" :rules="rules">
      <el-form-item label="管理员账号">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="管理员密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item label="管理员电话">
        <el-input v-model="form.mobile" />
      </el-form-item>
      <el-form-item label="管理员邮箱">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="管理员角色">
        <el-select v-model="form.role_id" placeholder="请选择" clearable filterable>
          <el-option v-for="item in roleOptions"
            :key="item._id"
            :label="item.title"
            :value="item._id">
          </el-option>
        </el-select>
        
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        <!-- <el-button @click="onCancel">Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {roleList, managerAdd, managerDetail, managerUpdate} from '@/api/api'
export default {
  data() {
    return {
      roleOptions: [],
      form: {
        id: this.$route.query.id,
        username: '',
        password: '',
        mobile: '',
        email: '',
        role_id: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: "不能为空",
            trigger: ["blur", "change"],
          },
        ],
        mobile: [
          {
            required: true,
            message: "不能为空",
            trigger: ["blur", "change"],
          },
        ],
        email: [
          {
            required: true,
            message: "不能为空",
            trigger: ["blur", "change"],
          },
        ],
        role_id: [
          {
            required: true,
            message: "不能为空",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.id) {
            managerUpdate(this.form).then((res) => {
              this.$message.success("修改成功");
              this.$router.push('list')
            });
          } else {
            managerAdd(this.form).then((res) => {
              this.$message.success("添加成功");
              this.$router.push('list')
            });
          }
        } else {
          this.$message.warning("请填写内容");
        }
      });
    },
  },
  mounted() {
    roleList().then((res) => {
        this.roleOptions = res.data;
      });
    if (this.$route.query.id) {
      managerDetail({ id: this.$route.query.id }).then((res) => {
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

