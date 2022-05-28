<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="模块名称">
        <el-input v-model="form.module_name" />
      </el-form-item>
      <el-form-item label="节点类型">
        <el-select v-model="form.type" placeholder="请选择" clearable filterable>
          <el-option
            label="模块"
            :value="1">
          </el-option>
          <el-option
            label="菜单"
            :value="2">
          </el-option>
          <el-option
            label="操作"
            :value="3">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="操作名称">
        <el-input v-model="form.action_name" />
      </el-form-item>
      <el-form-item label="操作地址">
        <el-input v-model="form.url" />
      </el-form-item>
      <el-form-item label="所属模块">
        <el-select v-model="form.module_id" placeholder="请选择" clearable filterable>
          <el-option label="---顶级模块---" value="0"></el-option>
          <el-option v-for="item in options"
            :key="item._id"
            :label="item.module_name"
            :value="item._id">
          </el-option>
        </el-select>
        
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.sort" />
      </el-form-item>
      <el-form-item label="描述">
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
import {accessAccessTop, accessAdd, accessDetail,accessUpdate} from '@/api/api'
export default {
  data() {
    return {
      options: [],
      form: {
        id: this.$route.query.id,
        module_name: '',
        type: '',
        action_name: '',
        url: '',
        module_id: '',
        sort: '',
        description: '',
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.id) {
            accessUpdate(this.form).then((res) => {
              this.$message.success("修改成功");
              this.$router.push('list')
            });
          } else {
            accessAdd(this.form).then((res) => {
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
    accessAccessTop().then((res) => {
        this.options = res.data;
      });
    if (this.$route.query.id) {
      accessDetail({ id: this.$route.query.id }).then((res) => {
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

