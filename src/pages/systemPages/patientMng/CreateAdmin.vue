<template>
  <div class="create-user">
    <el-form v-model="userForm" class="create-user-form" ref="ruleForm" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="userForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="userForm.password"></el-input>
      </el-form-item>
      <el-form-item label="用户角色">
        <el-select v-model="userForm.role">
          <el-option label="普通用户" value="1"></el-option>
          <el-option label="管理员" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import md5 from "md5";
export default {
  name: "createUser",
  data() {
    return {
      userForm: {
        username: "",
        password: "",
        ip: "127.0.0.1",
        role: ""
      }
    };
  },
  methods: {
    submitForm() {
      // let str = md5("1234qwer").toUpperCase();
      // console.log(str)
      this.postRequest("user/add", {
        username: this.userForm.username,
        password: md5(this.userForm.password).toUpperCase(),
        ip: this.userForm.ip,
        role: this.userForm.role
      })
        .then(res => {
          this.succeed("创建成功！")
        })
        .catch(err => {
          console.log(err);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.create-user-form /deep/ {
  margin-top: 20px;
  .el-input {
    width: 250px;
  }
}
</style>