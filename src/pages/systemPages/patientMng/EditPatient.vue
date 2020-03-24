<template>
  <div class="wrap">
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
      <el-form-item label="clingid" prop="clingid">
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
        <el-button type="primary" @click="submitForm('ruleForm')">修改病人信息</el-button>
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
        clingid: "",
        gender: "",
        doctorId: "",
        id: ""
      },
      rules: {
        clingid: [
          {
            required: true,
            message: "请输入clingid",
            trigger: "blur"
          }
        ]
      },
      clingid: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.clingid == this.ruleForm.clingid) {
            this.postRequest("api/patient/update2", {
              name: this.ruleForm.name,
              doctorId: parseInt(this.ruleForm.doctorId),
              gender: this.ruleForm.gender,
              id: this.ruleForm.id
            })
              .then(res => {
                this.succeed("病人信息更新成功");
                this.$router.push({ path: "deviceCheck" });
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.postRequest("api/patient/update2", {
              name: this.ruleForm.name,
              doctorId: parseInt(this.ruleForm.doctorId),
              clingid: this.ruleForm.clingid,
              gender: this.ruleForm.gender,
              id: this.ruleForm.id
            })
              .then(res => {
                this.succeed("病人信息更新成功");
                this.$router.push({ path: "deviceCheck" });
              })
              .catch(err => {
                console.log(err);
              });
          }
        } else {
          this.failed("请填写有效病人信息");
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
    this.getRequest("api/patient/get", this.$route.params).then(res => {
      
      let resData = res.data.data;
      console.log(resData)
      this.ruleForm.name = resData.name;
      this.ruleForm.doctorId = resData.doctorId;
      this.ruleForm.gender = resData.gender;
      this.ruleForm.id = resData.id;
      this.ruleForm.notice = resData.notice;
      this.ruleForm.clingid = resData.clingId;
      this.clingid = resData.clingId;
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

