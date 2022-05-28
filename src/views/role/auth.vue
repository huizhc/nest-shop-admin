<template>
  <div class="app-container">
    <div class="container-fluid">
      <div class="row">
        <div class="panel panel-default">
          <div class="panel-heading">角色授权</div>
          <div class="panel-body">
            <form @submit.prevent="submit" action="" id="authForm">
              <input type="hidden" :value="role_id" name="role_id" />
              <table class="table table-bordered">
                <tr v-for="(item, index) in list" :key="index">
                  <td
                    align="right"
                    style="
                      background: #d8e2fa;
                      padding-right: 10px;
                      width: 150px;
                    "
                  >
                    <label>
                      <input
                        type="checkbox"
                        class="module_cbo"
                        :value="item._id"
                        :checked="item.checked"
                        name="access_node[]"
                      />&nbsp;&nbsp; {{ item.module_name }}
                    </label>
                  </td>
                  <td v-for="(item1, index1) in item.items" :key="index1">
                    &nbsp;&nbsp;
                    <label>
                      <input
                        type="checkbox"
                        class="action_cbo"
                        :value="item1._id"
                        :checked="item1.checked"
                        name="access_node[]"
                      />
                      &nbsp;&nbsp;{{ item1.action_name }}</label
                    >&nbsp;
                  </td>
                </tr>
              </table>
              <button type="submit" class="btn btn-primary">提交</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { accessAll, roleAuth, roleAuthDetail } from "@/api/api";
export default {
  data() {
    return {
      list: [],
      role_id: this.$route.query.id,
    };
  },
  methods: {
    submit() {
      roleAuth($("#authForm").serialize()).then((res) => {
        this.$message.success("修改成功");
        this.$router.back();
      });
    },
  },
  mounted() {
    roleAuthDetail({id: this.role_id}).then((res) => {
      this.list = res.data
    })
  },
};
</script>

<style>
</style>