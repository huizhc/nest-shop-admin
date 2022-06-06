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
      <el-table-column label="分类名称">
        <template slot-scope="scope">
          {{scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="关联商品">
        <template slot-scope="scope">
          {{scope.row.relation }}
        </template>
      </el-table-column>
      <el-table-column label="跳转地址">
        <template slot-scope="scope">
          {{scope.row.link }}
        </template>
      </el-table-column>
      <el-table-column label="位置">
        <template slot-scope="scope">
          {{scope.row.position == 1 ? '顶部' : scope.row.position == 2 ? '中间' : '底部' }}
        </template>
      </el-table-column>
      <el-table-column label="排序">
        <template slot-scope="scope">
          {{scope.row.sort }}
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{scope.row.status == 1 ? '显示' : '隐藏'  }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
            <router-link :to="'edit?id=' + scope.row._id + '&prevPage=' + listQuery.page">
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
        <div class="paginationWrap">
    <el-pagination
    v-if="totalPages"
    layout="prev, pager, next"
    :current-page.sync="listQuery.page"
    @current-change="fetchData"
    :page-count="totalPages">
  </el-pagination>
    </div>

  </div>
</template>

<script>
import {navAdd,
navList,
navDetail,
navUpdate,
navDelete} from "@/api/api";

export default {
  data() {
    return {
      listLoading: true,
      list: [],
      listQuery: {
        page: 1
      },
      totalPages: 0
    };
  },
  mounted() {
    let page
    if (page = this.$route.query.page) {
      this.listQuery.page = page * 1
    }
    this.fetchData();
  },
  methods: {
    onDelete(id) {
      navDelete({ id }).then((res) => {
        this.$message.success("删除成功");
        this.fetchData();
      });
    },
    fetchData() {
      this.listLoading = true;
      navList(this.listQuery).then((res) => {
        this.listLoading = false;
        this.list = res.data.list
        this.totalPages = res.data.totalPages
      });
    },
  },
};
</script>