<template>
  <div class="container-fluid">
    <div class="row">
      <div class="panel panel-default">
        <div class="panel-heading">增加商品</div>
        <div class="panel-body">
          <div class="table-responsive input-form goods_content">
            
            <form id="goodsForm" @submit.prevent="submit" action="">
              <el-tabs v-model="active" type="card" tab-position="top">
                <el-tab-pane
                  label="基础信息"
                  v-model="form.general"
                  name="general"
                >
                  <ul class="form_input">
                    <li>
                      <span class="form-item-label"> 商品标题:</span>
                      <input
                        type="text"
                        v-model="form.title"
                        name="title"
                        class="input"
                      />
                    </li>
                    <li>
                      <span class="form-item-label"> 附属标题:</span>
                      <input
                        type="text"
                        v-model="form.sub_title"
                        name="sub_title"
                        class="input"
                      />
                    </li>
                    <li>
                      <span class="form-item-label">商品版本:</span>
                      <input
                        type="text"
                        v-model="form.goods_version"
                        name="goods_version"
                        class="input"
                      />
                    </li>
                    <li>
                      <span class="form-item-label">所属分类:</span>

                      <select
                        v-model="form.cate_id"
                        name="cate_id"
                        id="cate_id"
                      >
                        <template v-for="(item, index) in goodsCateOptions">
                          <option :key="index" :value="item._id">
                            {{ item.title }}
                          </option>
                          <option
                            v-for="item1 in item.items"
                            :key="item1._id"
                            :value="item1._id"
                          >
                            -----{{ item1.title }}
                          </option>
                        </template>
                      </select>
                    </li>
                    <li>
                      <span class="form-item-label"> 商品图片:</span>
                      <!-- <input type="file" v-model="form.goods_img" name="goods_img" /> -->
                      <el-upload
                        style="display: inline"
                        class="avatar-uploader"
                        action="http://localhost:3000/admin/focus/imageUpload"
                        :show-file-list="false"
                        name="file"
                        :on-success="
                          (res, file) => {
                            form.goods_img =
                              'http://localhost:3000/' + res.data;
                          }
                        "
                      >
                        <img
                          v-if="form.goods_img"
                          :src="form.goods_img"
                          class="banner"
                        />
                        <i v-else class="el-icon-plus avatar-uploader-icon" />
                      </el-upload>
                    </li>
                    <li>
                      <span class="form-item-label">商品价格:</span>
                      <input
                        type="text"
                        v-model="form.shop_price"
                        name="shop_price"
                      />
                    </li>
                    <li>
                      <span class="form-item-label">商品原价:</span>
                      <input
                        type="text"
                        v-model="form.market_price"
                        name="market_price"
                      />
                    </li>

                    <li>
                      <span class="form-item-label">商品状态:</span>
                      <el-radio-group v-model="form.status">
                        <el-radio :label="1"> 显示 </el-radio>
                        <el-radio :label="0"> 隐藏 </el-radio>
                      </el-radio-group>
                    </li>

                    <li>
                      <span class="form-item-label">加入推荐:</span>　
                      <el-checkbox
                        v-model="form.is_best"
                        :true-label="1"
                        :false-label="0"
                        >精品</el-checkbox
                      >
                      <el-checkbox
                        v-model="form.is_hot"
                        :true-label="1"
                        :false-label="0"
                        >热销</el-checkbox
                      >
                      <el-checkbox
                        v-model="form.is_new"
                        :true-label="1"
                        :false-label="0"
                        >新品</el-checkbox
                      >
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="详细描述" name="detail">
                  <textarea
                    name="goods_content"
                    id="content"
                    cols="100"
                    rows="8"
                    v-model="form.goods_content"
                  ></textarea>
                  <!-- <vue-ueditor-wrap
                    v-model="goods_content"
                    :config="editorConfig"
                  ></vue-ueditor-wrap> -->
                </el-tab-pane>
                <el-tab-pane label="商品属性" name="mix">
                  <ul class="form_input">
                    <li>
                      <span class="form-item-label">商品颜色:</span>
                      <el-checkbox-group
                        style="display: inline"
                        v-model="form.goods_color"
                      >
                        <el-checkbox
                          v-for="item in goodsColorOptions"
                          :key="item._id"
                          :label="item._id"
                        >
                          {{ item.color_name }}
                        </el-checkbox>
                      </el-checkbox-group>

                      <!-- <template v-for="item in goodsColorOptions">
                        <input
                          :key="item._id + 1"
                          type="checkbox"
                          name="goods_color[]"
                          :value="item._id"
                          id="color>"
                        />
                        <label :key="item._id + 2" for="color_black">{{
                          item.color_name
                        }}</label>
                      </template> -->
                    </li>

                    <li>
                      <span class="form-item-label">关联商品:</span>

                      <input
                        type="text"
                        name="relation_goods"
                        v-model="form.relation_goods"
                        class="relation_goods"
                      />
                      <i>填写关联商品的id 多个以逗号隔开 格式：23,24,39</i>
                    </li>

                    <li>
                      <span class="form-item-label">关联赠品:</span>

                      <input
                        type="text"
                        name="goods_gift"
                        v-model="form.goods_gift"
                        class="goods_gift"
                      />
                      <i
                        >可为空 格式：23-2,39-5 说明：例如23-2
                        中的23表示商品id,2表示商品数量</i
                      >
                    </li>
                    <li>
                      <span class="form-item-label">关联配件:</span>

                      <input
                        type="text"
                        name="goods_fitting"
                        v-model="form.goods_fitting"
                        class="goods_fitting"
                      />
                      <i
                        >可为空 格式：23-2,39-5 说明：例如23-2
                        中的23表示商品id,2表示商品数量</i
                      >
                    </li>

                    <li>
                      <span class="form-item-label">更多属性:</span>

                      <input
                        type="text"
                        name="goods_attr"
                        v-model="form.goods_attr"
                        class="goods_attr"
                      />
                      <i> 格式: 颜色:红色,白色,黄色 | 尺寸:41,42,43</i>
                    </li>
                    <li>
                      <span class="form-item-label">Seo关键词:</span>

                      <input
                        type="text"
                        name="goods_keywords"
                        v-model="form.goods_keywords"
                        class="input"
                      />
                    </li>

                    <li>
                      <span class="form-item-label">Seo描述:</span>
                      <textarea
                        name="goods_desc"
                        v-model="form.goods_desc"
                        id="goods_desc"
                        cols="100"
                        rows="2"
                      ></textarea>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane
                  label="规格与包装"
                  name="attribute"
                  v-model="form.attribute"
                >
                  <ul class="form_input">
                    <li>
                      <span class="form-item-label">商品类型:　</span>

                      <select
                        name="goods_type_id"
                        v-model="form.goods_type_id"
                        id="goods_type_id"
                        @change="handleSelectChange"
                      >
                        <option value="0">--请选择商品类型--</option>
                        <option
                          v-for="(item, index) in goodsTypeOptions"
                          :key="index"
                          :value="item._id"
                        >
                          {{ item.title }}
                        </option>
                      </select>
                    </li>
                  </ul>

                  <ul class="form_input" id="goods_type_attribute">
                    <template v-for="(item, idx) in attributeList">
                      <template v-if="item.attr_type == 1">
                        <li :key="idx">
                          <span class="form-item-label">
                            {{ item.title }}
                            : 　</span
                          ><input
                            type="hidden"
                            name="attr_id_list[]"
                            :value="item._id"
                          />
                          <input
                            type="text"
                            name="attr_value_list[]"
                            v-model="item.input"
                          />
                        </li>
                      </template>
                      <template v-else-if="item.attr_type == 2">
                        <li :key="idx">
                          <span class="form-item-label">
                            {{ item.title }}
                            : 　</span
                          >
                          <input
                            type="hidden"
                            name="attr_id_list[]"
                            :value="item._id"
                          />
                          <textarea
                            cols="50"
                            rows="3"
                            name="attr_value_list[]"
                            v-model="item.input"
                          ></textarea>
                        </li>
                      </template>
                      <template v-else>
                        <li :key="idx">
                          <span class="form-item-label">
                            {{ item.title }}
                            : 　</span
                          >
                          <input
                            type="hidden"
                            name="attr_id_list[]"
                            :value="item._id"
                          />

                          <select name="attr_value_list[]" v-model="item.input">
                            <option
                              v-for="(item1, idx1) in item.attr_value.split(
                                '\n'
                              )"
                              :value="item1"
                              :key="idx1"
                            >
                              {{ item1 }}
                            </option>
                          </select>
                        </li>
                      </template>
                    </template>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="商品相册" name="photo" class="photo">
                  <!-- <div class="photoUploader" id="photoUploader"></div> -->
                  <!-- <div class="photoList" id="photoList"></div> -->
                    <div id="goods_image">    
                    <ul id="goods_image_list" class="goods_image_list clear">
                                    <li v-for="(photo, photoIdx) in goodsImage" :key="photo._id">
                                        <img class="pic" :src="photo.img_url" />
                                        <div class="color_list">
                                            <select class="relation_goods_color" @change="changeGoodsImageColor" :goods_image_id="photo._id">
                                                <option value="0">关联颜色</option>
                                                <template v-for="(color, colorIdx) in goodsColor">
                                                  <option :value="color._id" :selected="color.id == photo.color_id">{{color.color_name}}</option>
                                                </template>
                                            </select>                                                        
                                        </div>

                                        <div class="goods_image_delete" @click="removeGoodsImage" :goods_image_id="photo._id"></div>
                                    </li>
                    </ul>
                    </div>
                  <el-upload
                    class="upload-demo"
                    :action="uploadUrl"
                    :on-change="handleChange"
                    :on-remove="handleRemove"
                    :file-list="goods_image_list"
                    list-type="picture-card"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                </el-tab-pane>
              </el-tabs>

              <button type="submit" class="btn btn-success goods_content_btn">
                提交
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  accessAccessTop,
  accessAdd,
  accessDetail,
  accessUpdate,
  goodsAdd,
  goodsDetail,
  goodsUpdate,
  goodsCateAll,
  goodsColorAndType,
  goodsGoodsTypeAttribute,
  goodsChangeGoodsImageColor,
  goodsRemoveGoodsImage,
} from "@/api/api";
import VueUeditorWrap from "vue-ueditor-wrap"; // ES6 Module

export default {
  components: {
    VueUeditorWrap,
  },
  data() {
    return {
      uploadUrl: "http://localhost:3000/admin/focus/imageUpload",
      goods_image_list: [],
      // goods_image_list: [
      //   {
      //     name: "food.jpeg",
      //     url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      //   },
      //   {
      //     name: "food2.jpeg",
      //     url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      //   },
      // ],
      active: "general",
      goodsColorOptions: [],
      goodsTypeOptions: [],
      goodsCateOptions: [],
      editorConfig: {
        // 访问 UEditor 静态资源的根路径，可参考 https://hc199421.gitee.io/vue-ueditor-wrap/#/faq
        UEDITOR_HOME_URL: "/ueditor/",
        // 服务端接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "//localhost:3000/ueditor/ue",
      },
      form: {
        id: this.$route.query.id,
        title: "",
        sub_title: "",
        goods_version: "",
        cate_id: "",
        goods_img: "",
        shop_price: "",
        market_price: "",
        status: "",
        is_best: "",
        is_hot: "",
        is_new: "",
        goods_color: [],
        relation_goods: "",
        goods_gift: "",
        goods_fitting: "",
        goods_attr: "",
        goods_keywords: "",
        goods_desc: "",
        attribute: "",
        goods_type_id: "",
        attr_id_list: [],
        attr_value_list: [],
        goods_content: "",
        goods_image_list: []
      },
      goods_type_attribute: "",
      checkbox: "",
      attributeList: [],
      goodsImage: [],
      goodsColor: []
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.id) {
            accessUpdate(this.form).then((res) => {
              this.$message.success("修改成功");
              this.$router.push("list");
            });
          } else {
            accessAdd(this.form).then((res) => {
              this.$message.success("添加成功");
              this.$router.push("list");
            });
          }
        } else {
          this.$message.warning("请填写内容");
        }
      });
    },
    submit(e) {
      // console.log($("#goodsForm").serialize());
      // attr_id_list
      // attr_value_list
      this.attributeList.forEach((v) => {
        this.form.attr_id_list.push(v._id);
        this.form.attr_value_list.push(v.input);
      });
      this.form.goods_image_list.length = 0
      this.goods_image_list.forEach(v => {
        this.form.goods_image_list.push((v.response && v.response.success) ? "http://localhost:3000/" + v.response.data : v.url)
      })
      if (this.form.id) {
            // accessUpdate(this.form).then((res) => {
            //   this.$message.success("修改成功");
            //   this.$router.push("list");
            // });
          } else {
            goodsAdd(this.form).then((res) => {
              this.$message.success("添加成功");
              this.$router.push("list");
            });
          }
    },

    handleChange(file, fileList) {
      console.log(fileList);
      this.goods_image_list = fileList;
    },
    handleRemove(file, fileList) {
      console.log(fileList);
      this.goods_image_list = fileList;
    },
    handleSelectChange(e) {
      console.log(e.target.value);
      goodsGoodsTypeAttribute({ cate_id: e.target.value }).then((res) => {
        this.attributeList = res.data;
      });
    },
    changeGoodsImageColor (e) {
      console.log(e.target.attributes.goods_image_id);
      // console.log(e);
    },
    removeGoodsImage (e) {
      console.log(e.target.attributes.goods_image_id);
      // console.log(e);
    },
  },
  async mounted() {
         //更新图库对应的颜色
        // $(".relation_goods_color").change(function(){         
        //    var color_id= $(this).val();
        //    var goods_image_id=$(this).attr('goods_image_id');

        //    $.get('/<%=config.adminPath%>/goods/changeGoodsImageColor',{color_id:color_id,goods_image_id:goods_image_id},function(response){
        //      console.log(response);
        //    });
        // })

        // //删除图片信息
        // $(".goods_image_delete").click(function(){ 

        //    var flag=confirm('您确定要删除吗?');
        //     if(flag){
        //         var goods_image_id=$(this).attr('goods_image_id');
        //         var _that=this;

        //         $.get('/<%=config.adminPath%>/goods/removeGoodsImage',{goods_image_id:goods_image_id},function(response){
        //             if(response.success){
        //                 $(_that).parent().remove();
        //             }
        //         });

        //     }
        // })

    // $(function () {
    //   $("#photoUploader").diyUpload({
    //     url: "http://localhost:3000/admin/focus/imageUpload",
    //     success: function (response) {
    //       var photoStr =
    //         '<input type="hidden" name="goods_image_list[]" value=' +
    //         response.data +
    //         " />";

    //       $("#photoList").append(photoStr);
    //     },
    //     error: function (err) {
    //       console.info(err);
    //     },
    //   });
    // });
    goodsCateAll().then((res) => {
      this.goodsCateOptions = res.data;
    });
    await goodsColorAndType().then((res) => {
      this.goodsColorOptions = res.data.goodsColor;
      this.goodsTypeOptions = res.data.goodsType;
    });
    let id
    if (id = this.$route.query.id) {
      goodsDetail({id}).then(res => {
        if (res.data.goods.goods_color) { res.data.goods.goods_color = res.data.goods.goods_color.split(',') }
        this.form = res.data.goods
        this.goodsImage = res.data.goodsImage
        for (let i in this.goodsColorOptions) {
          for (let j in  res.data.goods.goods_color) {
            if (this.goodsColorOptions[i]._id == res.data.goods.goods_color[j]) {
              this.goodsColor.push(this.goodsColorOptions[i])
            }
          }
        }
       
        // this.goodsColor = res.data.goodsColor
      })
    }
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

