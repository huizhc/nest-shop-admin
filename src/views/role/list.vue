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
      <el-table-column label="角色名称">
        <template slot-scope="scope">
          {{scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="角色描述">
        <template slot-scope="scope">
          {{scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column label="增加时间">
        <template slot-scope="scope">
          {{$utils.parseTime(scope.row.add_time) }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
            <router-link :to="'auth?id=' + scope.row._id">
          <el-button size="small">
            授权
          </el-button>
            </router-link>
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
import {roleList, roleDelete} from "@/api/api";

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
      roleDelete({ id }).then((res) => {
        this.$message.success("删除成功");
        this.fetchData();
      });
    },
    fetchData() {
      this.listLoading = true;
      roleList().then((res) => {
        this.listLoading = false;
        this.list = res.data;
      });
    },
  },
};
</script>