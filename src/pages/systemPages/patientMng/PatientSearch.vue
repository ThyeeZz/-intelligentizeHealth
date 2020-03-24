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
          <el-form-item label="姓名" class="margin-bot">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(form)">搜索</el-button>
            <el-button type="primary" @click="refresh(form)">同步用户信息</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="tableData" v-loading="loading" stripe>
          <el-table-column prop="index" label="序号" width="100"></el-table-column>
          <el-table-column prop="id" label="ID" width="100"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="gender" label="性别"></el-table-column>
          <el-table-column prop="doctorName" label="主治医生"></el-table-column>
          <el-table-column prop="notice" label="通知状态"></el-table-column>
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
import { Message } from 'element-ui';
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
      },
      userList: [],
      healthList: []
    };
  },
  methods: {
    getUsers() {
      this.getRequest("api/cling/user/all")
        .then(res => {
          let resualt = res.data.data;
          this.userList = [];
          for (let item of resualt) {
            this.userList.push({
              clingId: item.clingId,
              career: item.career,
              birthdate: item.birthdate,
              age: 2019 - new Date(item.birthdate).getFullYear(),
              gender: item.gender,
              nickName: item.nickName,
              avatar: item.avatar,
              mac: item.mac,
              name: item.name
            });
          }
        })
        .then(()=>{
          this.getHealthData();
        })
    },
    getHealthData() {
      this.getRequest("/api/cling/health/all/today")
        .then(res => {
          let resualt = res.data.data;
          this.healthList = [];
          for (let item of resualt) {
            this.healthList.push({
              date: item.date,
              deepSleep: item.deepSleep,
              distance: item.distance,
              endSleep: item.endSleep,
              hbp: item.hbp,
              hr: item.hr,
              lastNightSleep: item.lastNightSleep,
              lbp: item.lbp,
              lightSleep: item.lightSleep,
              midSleep: item.midSleep,
              sleepTotal: item.sleepTotal,
              soberTime: item.soberTime,
              sportCal: item.sportCal,
              sportTime: item.sportTime,
              startSleep: item.startSleep,
              steps: item.steps,
              clingId: item.clingId,
              weakTime: item.weakTime
            });
          }
        })
        .then(() => {
          for (let i of this.userList) {
            for (let item of this.healthList) {
              if (i.clingId == item.clingId) {
                i.date = item.date;
                i.deepSleep = item.deepSleep;
                i.distance = item.distance;
                i.endSleep = item.endSleep;
                i.hbp = item.hbp;
                i.hr = item.hr;
                i.lastNightSleep = item.lastNightSleep;
                i.lbp = item.lbp;
                i.lightSleep = item.lightSleep;
                i.midSleep = item.midSleep;
                i.sleepTotal = item.sleepTotal;
                i.soberTime = item.soberTime;
                i.sportCal = item.sportCal;
                i.sportTime = item.sportTime;
                i.startSleep = item.startSleep;
                i.steps = item.steps;
                i.clingId = item.clingId;
                i.weakTime = item.weakTime;
              }
            }
          }
          window.sessionStorage.setItem(
            "userList",
            JSON.stringify(this.userList)
          );
        })
    },
    refresh() {
      this.getRequest("api/cling/refresh/user2", null)
        .then(res => {
          Message.success({
            message: "信息同步成功",
            duration: 3 * 1000
          });
        })
        .then(()=>{
          this.getUsers();
        })
        .catch(err => {
          Message.error({
            message: "信息同步失败，请联系后台",
            duration: 3 * 1000
          });
        });
    },
    submitForm() {
      this.getData();
    },
    modify(row) {
      this.$router.push({ name: "editPatient", params: { id: row.id } });
    },
    del(row) {
      this.$confirm("是否确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.delRequest("api/patient/del", { id: row.id }).then(res => {
            this.succeed("删除成功");
            this.getData();
          });
        })
    },
    getData() {
      this.tableData = [];
      this.index = 1;
      this.loading = true;
      this.getRequest("api/patient/pager", {
        pagesize: this.pagesize,
        pageindex: this.pageindex,
        id: this.form.id ? this.form.id : 0,
        name: this.form.name
      })
        .then(res => {
          this.loading = false;
          let resultData = res.data.data.content;
          this.totalPage = res.data.data.totalElements;
          for (let item of resultData) {
            this.tableData.push({
              index: this.index,
              clingId: item.clingId,
              doctorId: item.doctorId,
              doctorName: item.doctorName,
              gender: item.gender == 0 ? "女" : "男",
              id: item.id,
              name: item.name,
              notice: item.notice == 0 ? "未通知" : "已通知"
            });
            this.index++;
          }
        })
        .catch(error => {
          this.loading = false;
          console.log(error)
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
