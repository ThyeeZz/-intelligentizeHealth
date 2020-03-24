<template>
  <div>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="120px"
      :rules="rule"
      class="demo-ruleForm"
    >
      <el-form-item label="网关地址" prop="mac">
        <el-input v-model="ruleForm.mac"></el-input>
      </el-form-item>

      <el-form-item label="自定义网关名称">
        <el-input v-model="ruleForm.gatewayname"></el-input>
      </el-form-item>

      <el-form-item label="修改网关状态">
        <el-select v-model="ruleForm.runstatus" placeholder="请选择网关状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
let reg = /[0-9a-z]{2}-[0-9a-z]{2}-[0-9a-z]{2}-[0-9a-z]{2}-[0-9a-z]{2}-[0-9a-z]{2}/;
let isSubmit = (rule, value, callback) => {
  if (!reg.test(value)) {
    return callback(new Error("mac格式形如:e6-24-0b-86-2b-73"));
  } else {
    callback();
  }
};
export default {
  name: "beaconUpdate",
  data() {
    return {
      ruleForm: {
        mac: "",
        gatewayname: "",
        runstatus: ""
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
      rule: {
        mac: [{ validator: isSubmit, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let requestObj = {};

          requestObj = {
            mac: this.ruleForm.mac,
            gatewayname: this.ruleForm.gatewayname,
            runstatus: Number(this.ruleForm.runstatus)
          };
          this.postRequest("api/beacon/update", requestObj)
            .then(res => {
              this.succeed("更新信息成功");
            })
            .catch(() => {
              this.failed("更新错误，请稍后重试，或者联系后台！");
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    let parmas = this.$route.query;

    if (JSON.stringify(parmas)!=="{}") {
      this.ruleForm.mac = parmas.mac;
      this.ruleForm.gatewayname = parmas.gatewayname;
      this.ruleForm.runstatus = parmas.runstatus.toString();
    }
  }
};
</script>
<style lang="scss" scoped>
.demo-ruleForm /deep/ {
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
  .el-form-item {
    width: 30%;
  }
}
</style>