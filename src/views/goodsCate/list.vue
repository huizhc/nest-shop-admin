<!--
 * @Author: huizhc 1125133876@qq.com
 * @Date: 2022-05-27 20:39:39
 * @LastEditors: huizhc 1125133876@qq.com
 * @LastEditTime: 2022-05-29 12:56:54
 * @FilePath: \vue-admin-template\src\views\goodsType\list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-container">
    <div class="thead">
    <router-link to="add" class="mlauto">
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
      default-expand-all
      row-key="_id"
      :tree-props="{children: 'items'}">
    >
      <el-table-column label="分类名称">
        <template slot-scope="scope">
          {{scope.row.title }}
        </template>
      </el-table-column>
            <el-table-column label="分类图片">
        <template slot-scope="scope">
          <img :src="scope.row.cate_img" alt="" style="width: 200px; height: auto;" />
        </template>
      </el-table-column>
      <el-table-column label="排序">
        <template slot-scope="scope">
          {{scope.row.sort }}
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{scope.row.status == 1 ? '显示' : '隐藏' }}
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
            <router-link :to="'edit?id=' + scope.row._id">
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
import {goodsTypeAll, goodsTypeDelete} from "@/api/api";
import { goodsCateAdd, goodsCateAll, goodsCateDetail, goodsCateUpdate, goodsCateDelete } from "@/api/api";

export default {
  data() {
    return {
      listLoading: true,
      list: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    onDelete(id) {
      goodsCateDelete({ id }).then((res) => {
        this.$message.success("删除成功");
        this.fetchData();
      });
    },
    fetchData() {
      this.listLoading = true;
      goodsCateAll().then((res) => {
        this.listLoading = false;
        this.list = res.data
      });
    },
  },
};
</script>