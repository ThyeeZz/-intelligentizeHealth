<template>
  <div class="uploadWrap">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="病人姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="mac地址">
        <el-input v-model.trim="ruleForm.mac"></el-input>
      </el-form-item> -->
      <el-form-item label="cling userid" prop="clingid">
        <el-input v-model.trim="ruleForm.clingid"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="ruleForm.gender">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="主治医生ID" prop="doctorId">
        <el-input v-model="ruleForm.doctorId"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">上传病人信息</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// let isSubmit = (rule, value, callback) => {
//   // if (!reg.test(value)) {
//   //   return callback(new Error("mac格式形如:e6-24-0b-86-2b-73"));
//   // } else {
//   //   callback();
//   // }
//   console.log(value)
//   if(reg1.test(value)){
//     console.log(value)
//     value = value.replace(/:/g,'-').toLowerCase();
//     console.log(value)
//     callback()
//   }
// };
export default {
  name: "deviceUpload",
  data() {
    return {
      ruleForm: {
        name: "",
        // mac: "",
        gender: 1,
        doctorId: "",
        clingid: ""
      },
      rules: {
        clingid: [
          {
            required: true,
            message: "请输入mac地址信息",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let reg = /[0-9a-z]{2}-[0-9a-z]{2}-[0-9a-z]{2}-[0-9a-z]{2}-[0-9a-z]{2}-[0-9a-z]{2}/;
      let reg1 = /[0-9a-zA-Z]{2}:[0-9a-zA-Z]{2}:[0-9a-zA-Z]{2}:[0-9a-zA-Z]{2}:[0-9a-zA-Z]{2}:[0-9a-zA-Z]{2}/;
      let mac = this.ruleForm.mac;
      if (reg1.test(mac)) {
        mac = mac.replace(/:/g, "-").toLowerCase();
      }
      if(reg.test(mac)){
        mac = mac
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.postRequest("api/patient/add2", this.ruleForm)
            .then(res => {
              this.succeed("上传病人信息成功");
              // this.ruleForm = {
              //   name: "",
              //   mac: "",
              //   gender: "",
              //   doctorId: ""
              // };
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.failed("请填写有效病人信息");
          return null;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.uploadWrap {
  margin-top: 0.2rem;
  .el-form {
    .el-form-item {
      .el-input {
        width: 3rem;
      }
      .el-select {
        width: 3rem;
      }
    }
  }
}
</style>