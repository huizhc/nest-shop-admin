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
    >
      <el-table-column label="管理员账号">
        <template slot-scope="scope">
          {{scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="管理员电话">
        <template slot-scope="scope">
          {{scope.row.mobile }}
        </template>
      </el-table-column>
      <el-table-column label="管理员邮箱">
        <template slot-scope="scope">
          {{scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column label="管理员角色">
        <template slot-scope="scope">
          {{scope.row.role[0].title }}
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
import {managerAll, managerDelete} from "@/api/api";

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
      managerDelete({ id }).then((res) => {
        this.$message.success("删除成功");
        this.fetchData();
      });
    },
    fetchData() {
      this.listLoading = true;
      managerAll().then((res) => {
        this.listLoading = false;
        this.list = res.data;
      });
    },
  },
};
</script>