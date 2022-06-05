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

      <el-table-column label="模块名称">
        <template slot-scope="scope">
          {{scope.row.module_name }}
        </template>
      </el-table-column>
      <el-table-column label="节点类型">
        <template slot-scope="scope">
          {{scope.row.type == 1 ? '模块' : scope.row.type == 2 ? '菜单' : '操作'}}
        </template>
      </el-table-column>
      <el-table-column label="操作名称">
        <template slot-scope="scope">
          {{scope.row.action_name }}
        </template>
      </el-table-column>
      <el-table-column label="操作地址">
        <template slot-scope="scope">
          {{scope.row.url }}
        </template>
      </el-table-column>
      <el-table-column label="排序">
        <template slot-scope="scope">
          {{scope.row.sort }}
        </template>
      </el-table-column>
      <el-table-column label="描述">
        <template slot-scope="scope">
          {{scope.row.description }}
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
import {accessAll, accessDelete} from "@/api/api";

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
      accessDelete({ id }).then((res) => {
        this.$message.success("删除成功");
        this.fetchData();
      });
    },
    fetchData() {
      this.listLoading = true;
      accessAll().then((res) => {
        this.listLoading = false;
        this.list = res.data
      });
    },
  },
};
</script>