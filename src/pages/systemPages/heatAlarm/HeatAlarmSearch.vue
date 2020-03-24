<template>
  <div>
    <div class="beacon-search-wrap">
      <el-form :model="myForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="病人id">
          <el-input v-model="myForm.pid" placeholder="请输入病人id"></el-input>
        </el-form-item>
        <el-form-item label="报警类型">
          <el-select v-model="myForm.type" placeholder="请选择报警类型...">
            <el-option label="体温报警" value="1"></el-option>
            <el-option label="心率报警" value="2"></el-option>
            <el-option label="血压报警" value="3"></el-option>
            <el-option label="全部类型" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择时间段">
          <el-date-picker
            v-model="value"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="change"
          ></el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">搜索</el-button>
        </el-form-item>
      </el-form>

      <div class="table-wrap">
        <el-table :data="tableData" stripe style="width: 100%" v-loading="loading">
          <el-table-column prop="typeCn" label="报警类型"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="temp" label="体温"></el-table-column>
          <el-table-column prop="hr" label="心率"></el-table-column>
          <el-table-column prop="lbp" label="舒张压"></el-table-column>
          <el-table-column prop="hbp" label="收缩压"></el-table-column>
          <el-table-column prop="clingId" label="地址"></el-table-column>
          <el-table-column prop="timeCn" label="报警时间"></el-table-column>
          <el-table-column prop="gt" label="报警网关地址"></el-table-column>
          <el-table-column prop="mac" label="mac地址"></el-table-column>
        </el-table>
        <div class="pagination-wrap">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageindex"
            :page-sizes="[15, 50, 100, 300]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalcount"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMinuteBeginTimestamp } from "@/lib/utils";
export default {
  name: "heatAlarmSearch",
  data() {
    return {
      myForm: {
        pid: "",
        type: "0",
        start: new Date().getTime(),
        end: new Date().getTime()
      },
      value: [new Date(), new Date()],
      options: [
        {
          label: "未知状态",
          value: "0"
        },
        {
          label: "已录入状态",
          value: "1"
        },
        {
          label: "网关授权运行",
          value: "2"
        },
        {
          label: "丢失连接",
          value: "3"
        },
        {
          label: "出错",
          value: "4"
        },
        {
          label: "锁定",
          value: "5"
        }
      ],
      pageindex: 1,
      pagesize: 15,
      totalcount: 0,
      tableData: [],
      loading: false,
      userList: []
    };
  },
  methods: {
    change() {
      this.myForm.start = Math.round(new Date(this.value[0]).getTime() / 1000);
      this.myForm.end = Math.round(new Date(this.value[1]).getTime() / 1000);
    },
    getData() {
      this.myForm.pid = this.myForm.pid ? this.myForm.pid : 0;
      let requestObj = {
        pagesize: this.pagesize,
        pageindex: this.pageindex
      };
      requestObj = Object.assign(requestObj, this.myForm);
      this.tableData = [];
      this.loading = true;
      this.getRequest("api/alert/pager", requestObj)
        .then(res => {
          this.loading = false;
          let result = res.data.data;
          this.totalcount = result.totalElements;
          for (let item of result.content) {
            this.tableData.push({
              temp: item.temp,
              patientId: item.patientId,
              hbp: item.hbp,
              lbp: item.lbp,
              hr: item.hr,
              alertId: item.alertId,
              clingId: item.clingId,
              timeCn: getMinuteBeginTimestamp(item.time),
              type: item.type,
              typeCn:
                item.type === 1 ? "体温" : item.type === 2 ? "心率" : "血压",
              deviceId: item.deviceId,
              gt: item.gt,
              mac: item.mac,
              name: ""
            });
          }
        }).then(()=>{
          let userList = JSON.parse(window.sessionStorage.getItem("userList"));
          for(let i of userList){
            for(let j of this.tableData){
              if(i.clingId === j.clingId){
                console.log(i.name)
                j.name = i.name
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitForm() {
      this.getData();
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getData()
    },
    handleCurrentChange(val) {
      this.pageindex = val;
      this.getData();
    }
  },
  mounted() {
    // this.getData();
  },

};
</script>
<style lang="scss" scoped>
.beacon-search-wrap /deep/ {
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 8rem;
  .demo-ruleForm {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
  }
  .table-wrap {
    height: 7rem;
    width: 100%;
    .el-table {
      overflow: auto;
      height: 6rem;
    }
    .pagination-wrap {
      text-align: right;
    }
  }
}
</style>