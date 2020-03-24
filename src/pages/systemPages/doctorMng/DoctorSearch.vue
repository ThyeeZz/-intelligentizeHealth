<template>
  <div>
    <el-container style="width:16.06rem;">
      <el-main>
        <el-form
          ref="form"
          v-model="form"
          label-width="80px"
          width="2rem"
          :rules="rules"
          :inline="true"
          v-on:keyup.enter.native="getData"
        >
          <el-form-item label="姓名" class='margin-bot'>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(form)">搜索</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="tableData" v-loading="loading" stripe>
          <el-table-column prop="index" label="序号" width="100"></el-table-column>
          <el-table-column prop="id" label="ID" width="100"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="gender" label="性别"></el-table-column>
          <el-table-column prop="phone" label="联系电话"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="modify(scope.row)" type="text" size="normal">修改</el-button>
              <el-button @click="del(scope.row)" type="text" size="normal">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <div class="fr">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageindex"
          :page-sizes="[10, 30, 100, 400]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalPage"
        ></el-pagination>
      </div>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "deviceCheck",
  props: [],
  data() {
    return {
      title: "区域管理",
      pagesize: 30,
      pageindex: 1,
      totalPage: 0,
      tableData: [],
      loading: false,
      index: 1,
      form: {
        name: ""
      },
      rules: {
        mapName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.getData();
    },
    modify(row) {
      console.log(row.id)
      this.$router.push({ name: "editDoctor", params: { id: row.id } });
    },
    del(row) {
      this.$confirm("是否确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
        this.delRequest("api/doctor/del", { id: row.id }).then(res => {
          this.succeed("删除成功");
          this.getData();
        });
      }).catch(()=>{
        console.log(err)
      });
    },
    getData() {
      this.tableData = [];
      this.index = 1;
      this.loading = true;
      this.getRequest("api/doctor/pager", {
        pagesize: this.pagesize,
        pageindex: this.pageindex,
        id: this.form.id ? this.form.id : 0,
        name: this.form.name
      })
        .then(res => {
          console.log(res.data);
          this.loading = false;
          let resultData = res.data.data.content;
          this.totalPage = res.data.data.totalElements;
          for (let item of resultData) {
            this.tableData.push({
              index: this.index,
              name: item.name,
              gender: item.gender == 0 ? "女" : "男",
              id: item.id,
              phone: item.phone,
            });
            this.index++;
          }
        })
        .catch(error => {
          this.loading = false;
          this.failed(error);
        });
    },
    handleSizeChange(value) {
      this.pagesize = value;
      this.getData();
    },
    handleCurrentChange(value) {
      this.pageindex = value;
      this.getData();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped lang="scss">
.el-container {
  height: 8rem;
  text-align: left;
  background-color: rgba(244, 248, 252, 1);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.63);
  line-height: 0.7rem;
  color: #666;
  position: relative;
  .fr {
    height: 0.5rem;
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
.el-main {
    width: 100%;
  height: 7.5rem;
  padding: 0;
  overflow: auto;
  .el-form {
    margin-top: 20px;
    margin-right: 20px;
    text-align: left;
  }

  .el-table__row {
    height: 0.46rem;
  }
}

</style>
