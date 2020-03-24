<template>
  <div class="uploadWrap">
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
        <el-button type="primary" @click="submitForm('ruleForm')">上传医生信息</el-button>
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
        gender: 0,
        phone: ""
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
          this.postRequest("api/doctor/add", {
            name: this.ruleForm.name,
            phone: parseInt(this.ruleForm.phone),
            gender: this.ruleForm.gender
          })
            .then(res => {
              this.succeed("上传医生信息成功");
              this.ruleForm = {
                name: "",
                gender: 0,
                phone: ""
              };
            })
            .catch(err => {
              console.log(err)
            });
        } else {
          this.failed("请填写有效医师信息");
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