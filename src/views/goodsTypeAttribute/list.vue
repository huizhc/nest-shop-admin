<!--
 * @Author: huizhc 1125133876@qq.com
 * @Date: 2022-05-27 20:39:39
 * @LastEditors: huizhc 1125133876@qq.com
 * @LastEditTime: 2022-05-28 11:21:11
 * @FilePath: \vue-admin-template\src\views\goodsType\list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-container">
    <div class="thead">
    <router-link :to="'add?cate_id=' + id" class="mlauto">
       <el-button type="primary">
          添加
        </el-button>
    </router-link>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="属性名称">
        <template slot-scope="scope">
          {{scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="商品类型">
        <template>
          {{goodsTypeTitle}}
        </template>
      </el-table-column>
      <el-table-column label="属性值的录入方式">
        <template slot-scope="scope">
          {{scope.row.attr_type == 1 ? '单行文本框' : scope.row.attr_type == 2? '多行文本框' : 'select下拉框' }}
        </template>
      </el-table-column>
      <el-table-column label="可选值列表">
        <template slot-scope="scope">
          {{scope.row.attr_value }}
        </template>
      </el-table-column>
      <el-table-column label="增加时间">
        <template slot-scope="scope">
          {{$utils.parseTime(scope.row.add_time )}}
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{scope.row.status == 1 ? '启用' : '禁用' }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
            <router-link :to="'edit?id=' + scope.row._id + '&cate_id=' + id">
          <el-button size="small">
            编辑
          </el-button>
            </router-link>
          <el-popconfirm
            confirm-button-text="确定"
            cancel-button-text="不用了"
            title="确定删除吗？"
            @onConfirm="onDelete(scope.row._id)"
          >
            <el-button slot="reference" type="danger" size="small">
              删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {goodsTypeAttributeList, goodsTypeAttributeDelete, goodsTypeAll, goodsTypeDelete} from "@/api/api";

export default {
  data() {
    return {
      goodsTypeTitle: this.$route.query.goodsTypeTitle,
      id: this.$route.query.id,
      listLoading: true,
      list: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    onDelete(id) {
      goodsTypeAttributeDelete({ id }).then((res) => {
        this.$message.success("删除成功");
        this.fetchData();
      });
    },
    fetchData() {
      this.listLoading = true;
      goodsTypeAttributeList({id: this.id}).then((res) => {
        this.listLoading = false;
        this.list = res.data
      });
    },
  },
};
</script>