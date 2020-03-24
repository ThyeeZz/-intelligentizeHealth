<template>
  <div class="beacon-search-wrap">
    <el-form :model="myForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="检索方式">
        <el-select v-model="myForm.type" placeholder="请选择检索方式">
          <el-option label="显示所有网关" value="0"></el-option>
          <el-option label="关键字检索" value="1"></el-option>
          <el-option label="网关名称检索" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="网关地址" v-if="myForm.type==1">
        <el-input v-model="myForm.key" placeholder="请输入网关mac..."></el-input>
      </el-form-item>

      <el-form-item label="网关名称" v-if="myForm.type==2">
        <el-input v-model="myForm.key" placeholder="请输入网关自定义名称..."></el-input>
      </el-form-item>

      <el-form-item label="状态" v-if="myForm.type==2||myForm.type==1">
        <el-select v-model="myForm.status" placeholder="请选择网关状态...">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">搜索</el-button>
      </el-form-item>
    </el-form>

    <div class="table-wrap">
      <el-table :data="tableData" stripe style="width: 100%" v-loading="loading">
        <el-table-column prop="mac" label="网关mac" width="180"></el-table-column>
        <el-table-column prop="gatewayname" label="网关名称" width="180"></el-table-column>
        <el-table-column prop="runstatusCn" label="运行状态"></el-table-column>
        <el-table-column prop="tokentime" label="获取token时间"></el-table-column>
        <el-table-column prop="token" label="token"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="edit(scope)">编辑</el-button>
          </template>
        </el-table-column>
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
</template>
<script>
import { getMinuteBeginTimestamp } from "@/lib/utils"
export default {
  name: "beaconSearch",
  data() {
    return {
      myForm: {
        type: "0",
        key: "",
        status: "0"
      },
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
      loading: false
    };
  },
  methods: {
    getData(type, key, status) {
      let requestObj = {};
      this.tableData = [];
      this.loading = true;
      this.getRequest("api/beacon/pager", {
        pagesize: this.pagesize,
        pageindex: this.pageindex,
        type: this.myForm.type,
        key: this.myForm.key,
        status: this.myForm.status
      })
        .then(res => {
          this.loading = false;
          if (res.data.data) {
            this.totalcount = res.data.data.totalElements;
            let result = res.data.data.content;
            for (let item of result) {
              this.tableData.push({
                runstatus: item.runstatus,
                runstatusCn: this.getStatus(item.runstatus),
                gatewayname: item.gatewayname,
                tokentime: item.tokentime?"--":getMinuteBeginTimestamp(item.tokentime),
                mac: item.mac,
                token: item.token
              });
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getStatus(status) {
      switch (status) {
        case 0:
          return "未知状态";
          break;
        case 1:
          return "已录入状态";
          break;
        case 2:
          return "网关授权运行";
          break;
        case 3:
          return "丢失连接";
          break;
        case 4:
          return "出错";
          break;
        case 5:
          return "锁定";
          break;
        default:
          return;
      }
    },
    edit(scope) {
      this.$router.push({
        path: "/index/system/beaconupdate",
        query: { mac: scope.row.mac, gatewayname: scope.row.gatewayname,runstatus:scope.row.runstatus }
      });
    },
    submitForm() {
      this.getData();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.beacon-search-wrap /deep/ {
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  position: relative;
  .demo-ruleForm {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: 1rem;
    .el-form-item {
      width: 25%;
    }
  }
  .table-wrap {
    height: 7rem;
    .el-table {
      height: 6rem;
      overflow: auto;
    }
    .pagination-wrap {
      text-align: right;
    }
  }
}
</style>