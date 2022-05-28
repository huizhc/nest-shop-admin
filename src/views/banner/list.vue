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
      <el-table-column label="名称">
        <template slot-scope="scope">
          {{scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="分类">
        <template slot-scope="scope">
          {{scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.focus_img" alt="" style="width: 200px; height: auto;" />
        </template>
      </el-table-column>
      <el-table-column label="跳转地址">
        <template slot-scope="scope">
          {{scope.row.link }}
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
import {bannerList, bannerDelete} from "@/api/api";

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
      bannerDelete({ id }).then((res) => {
        this.$message.success("删除成功");
        this.fetchData();
      });
    },
    fetchData() {
      this.listLoading = true;
      bannerList().then((res) => {
        this.listLoading = false;
        this.list = res.data
      });
    },
  },
};
</script>