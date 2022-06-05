<template>
  <div class="app-container">
    <div class="thead">
    商品名称：<el-input class="w200" v-model="listQuery.keyword" placeholder="请输入" size="normal" clearable @input="fetchData"></el-input>
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

      <el-table-column label="商品名称">
        <template slot-scope="scope">
          {{scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">
          {{scope.row.shop_price }}
        </template>
      </el-table-column>
      <el-table-column label="点击量">
        <template slot-scope="scope">
          {{scope.row.click_count }}
        </template>
      </el-table-column>
      <el-table-column label="上架">
        <template slot-scope="scope">
          {{scope.row.status == 1 ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column label="精品">
        <template slot-scope="scope">
          {{scope.row.is_best == 1 ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column label="新品">
        <template slot-scope="scope">
          {{scope.row.is_new == 1 ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column label="热销">
        <template slot-scope="scope">
          {{scope.row.is_hot == 1 ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column label="推荐排序">
        <template slot-scope="scope">
          {{scope.row.sort }}
        </template>
      </el-table-column>
      <el-table-column label="库存">
        <template slot-scope="scope">
          {{scope.row.goods_number }}
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
import {
  goodsAdd,
goodsList,
goodsDetail,
goodsUpdate,
goodsDelete,
goodsColorAndType,
goodsGoodsTypeAttribute,
} from "@/api/api";

export default {
  data() {
    return {
      listLoading: true,
      list: [],
      listQuery: {
        keyword: '',
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
      goodsDelete({ id }).then((res) => {
        this.$message.success("删除成功");
        this.fetchData();
      });
    },
    fetchData() {
      this.listLoading = true;
      goodsList(this.listQuery).then((res) => {
        this.listLoading = false;
        this.list = res.data.goodsList
        this.totalPages = res.data.totalPages
      });
    },
  },
};
</script>