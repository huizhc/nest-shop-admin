<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="分类名称">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="上级分类">
        <el-select v-model="form.pid" placeholder="请选择" clearable filterable>
          <el-option label="顶级分类" value="0"> </el-option>
          <el-option
            v-for="item in options"
            :key="item._id"
            :label="item.title"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类图片">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          name="file"
          :on-success="
            (res, file) => {
              form.cate_img = 'http://localhost:3000/' + res.data;
            }
          "
        >
          <img v-if="form.cate_img" :src="form.cate_img" class="banner" />
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="跳转地址">
        <el-input v-model="form.link" />
      </el-form-item>
      <el-form-item label="分类模板">
        <el-input v-model="form.template" />
      </el-form-item>
      <el-form-item label="Seo标题">
        <el-input v-model="form.sub_title" />
      </el-form-item>
      <el-form-item label="Seo关键词">
        <el-input v-model="form.keywords" />
      </el-form-item>
      <el-form-item label="Seo描述">
        <el-input
          type="textarea"
          rows="4"
          cols="84"
          v-model="form.description"
        />
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.sort" />
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="form.status">
          <el-radio :label="1"> 显示 </el-radio>
          <el-radio :label="0"> 隐藏 </el-radio>
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
import { goodsTypeAdd, goodsTypeDetail, goodsTypeUpdate } from "@/api/api";
import {
  goodsCateAdd,
  goodsCateAll,
  goodsCateDetail,
  goodsCateUpdate,
  goodsCateDelete,
  goodsCateGoodsCateTop,
} from "@/api/api";
export default {
  data() {
    return {
      uploadUrl: "http://localhost:3000/admin/focus/imageUpload",
      options: [],
      form: {
        id: this.$route.query.id,
        title: "",
        pid: "",
        cate_img: "",
        link: "",
        template: "",
        sub_title: "",
        keywords: "",
        description: "",
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
            goodsCateUpdate(this.form).then((res) => {
              this.$message.success("修改成功");
              this.$router.push("list");
            });
          } else {
            goodsCateAdd(this.form).then((res) => {
              this.$message.success("添加成功");
              this.$router.push("list");
            });
          }
        } else {
          this.$message.warning("请填写内容");
        }
      });
    },
  },
  mounted() {
    goodsCateGoodsCateTop().then((res) => {
      this.options = res.data;
    });
    if (this.$route.query.id) {
      goodsCateDetail({ id: this.$route.query.id }).then((res) => {
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

