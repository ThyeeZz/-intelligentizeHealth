<template>
  <div class="sinUp_wrap">
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      class="demo-dynamic"
      :rules="rules"
    >
      <el-form-item >
        <el-input v-model="dynamicValidateForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item >
        <el-input v-model="dynamicValidateForm.password" type="password" placeholder="请输入用密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import md5 from "md5";
import tokenRequest from "@/lib/tokenRequest";
export default {
  data() {
    return {
      dynamicValidateForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            message: "请输入用户名",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.postRequest('http://ADDRESS:21101/user/add',{
          //   username: this.dynamicValidateForm.username,
          //   password: md5(this.dynamicValidateForm.password)
          // }).then(res=>{
          //   console.log(res)
          // }).catch(err=>{
          //   console.log(err)
          // })

          // tokenRequest("api/auth/token", {
          //   refresh_token: window.sessionStorage.refresh_token,
          //   id: window.sessionStorage.id
          // }).then(res => {
          //   console.log(res);
          // });
          
        } else {
          console.log("error submit!!");
          return null;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.sinUp_wrap {
  border-top: 3px solid #03a9f4;
  box-shadow: 0 0 10px lightgrey;
  width: 4rem;
  padding: 0 0.8rem;
  margin: 0 auto;
  height: 4rem;
  position: relative;
  top: 20%;
  .demo-dynamic {
    margin-top: 0.5rem;
    .el-form-item {
      width: 4rem;
    }
  }
}
</style>

