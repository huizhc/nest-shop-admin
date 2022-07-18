<!--
 * @Author: huizhc 1125133876@qq.com
 * @Date: 2022-05-28 09:17:30
 * @LastEditors: huizhc 1125133876@qq.com
 * @LastEditTime: 2022-05-28 11:18:06
 * @FilePath: \vue-admin-template\src\views\goodsTypeAttribute\form.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="属性名称">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="所属类型">
        <el-select v-model="form.cate_id" placeholder="请选择" clearable filterable>
          <el-option v-for="item in options"
            :key="item._id"
            :label="item.title"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="录入方式">
         <el-radio-group v-model="form.attr_type" @change="change">
           <el-radio
            label="1">
            单行文本框
           </el-radio>
           <el-radio
            label="2">
            多行文本框
           </el-radio>
           <el-radio
            label="3">
            从下面的列表中选择（一行代表一个可选值）
           </el-radio>
         </el-radio-group>
         
      </el-form-item>
      <el-form-item label="可选值列表" size="normal">
        <el-input type="textarea" v-model="form.attr_value" :disabled="disabled" rows="8" size="normal" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        <!-- <el-button @click="onCancel">Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {imageUpload,goodsTypeAll, goodsTypeAttributeAdd,goodsTypeDetail , goodsTypeAttributeAll, goodsTypeAttributeDetail, goodsTypeAttributeUpdate, goodsTypeAttributeDelete } from "@/api/api";
export default {
  data() {
    return {
      uploadUrl: imageUpload,
      options: [],
      form: {
        _id: this.$route.query.id,
        title: "",
        cate_id: this.$route.query.cate_id,
        attr_type: "",
        attr_value: "",
      },
      disabled:true
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form._id) {
            goodsTypeAttributeUpdate(this.form).then((res) => {
              this.$message.success("修改成功");
              this.$router.back()
            });
          } else {
            goodsTypeAttributeAdd(this.form).then((res) => {
              this.$message.success("添加成功");
              this.$router.back()
            });
          }
        } else {
          this.$message.warning("请填写内容");
        }
      });
    },
    change(val) {
      if (val == 3) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    }
  },
  mounted() {
     goodsTypeAll().then((res) => {
       this.options = res.data
      });
      
    if (this.$route.query.id) {
      goodsTypeAttributeDetail({ id: this.$route.query.id }).then((res) => {
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

