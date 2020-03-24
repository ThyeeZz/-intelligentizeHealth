<template>
  <div class="wrap">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="医生姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="ruleForm.gender">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改医生信息</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "deviceUpload",
  data() {
    return {
      ruleForm: {
        name: "",
        phone: "",
        gender: "",
        id: ""
      },
      rules: {
        xx: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.postRequest("api/doctor/update", {
            name: this.ruleForm.name,
            gender: this.ruleForm.gender,
            phone: this.ruleForm.phone,
            id: this.ruleForm.id
          })
            .then(res => {
              this.succeed("医生信息更新成功");
              this.$router.push({ path: "gatewayCheck" });
            })
            .catch(err => {
              console.log(err)
            });
        } else {
          this.failed("请填写有效医生信息");
          return null;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  //   beforeRouteEnter(to, from, next) {
  //     next(console.log(from.params));
  //   }
  created() {
    console.log(this.$route.params);
    this.getRequest("api/doctor/get", this.$route.params).then(res => {
      let resData = res.data.data;
      console.log(resData)
      this.ruleForm.name = resData.name;
      this.ruleForm.gender = resData.gender;
      this.ruleForm.id = resData.id;
      this.ruleForm.phone = resData.phone;
    });
  }
};
</script>
<style lang="scss" scoped>
.wrap {
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

