<template> <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="分类">
        <el-select v-model="form.type" placeholder="请选择">
          <el-option label="网站" value="1" />
          <el-option label="APP" value="2" />
          <el-option label="小程序" value="3" />
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
          <el-radio label="1">显示</el-radio>
          <el-radio label="0">隐藏</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <!-- <el-button @click="onCancel">Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadUrl: 'http://localhost:3000/admin/focus/imageUpload',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    
    onUploadImgSuccess(res, file) {
      this.form.focus_img = 'http://localhost:3000' + res.body;
    },
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

