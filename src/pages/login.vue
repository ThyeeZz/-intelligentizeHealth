<template>
  <div id="login" class="fillcontain">
    <div class="header">
      <img :src="logoUrl" alt class="logo" />
      <span class="name">{{name}}</span>
    </div>
    <div class="main clear">
      <div class="main-left">
        <h1>{{title}}</h1>
        <div class="des" v-html="des"></div>
      </div>
      <div class="main-right">
        <div class="login-title">登&nbsp;&nbsp;&nbsp;&nbsp;陆</div>
        <div class="login-box" @keydown.enter.capture="onLogin">
          <div class="input-contol clear">
            <label class="userImg"></label>
            <input type="text" class="input" v-model="username" />
          </div>
          <div class="input-contol clear">
            <label class="pwdImg"></label>
            <input type="password" class="input" v-model="password" />
          </div>
        </div>
        <div class="button_wrap">
          <el-button type="primary" @click="onLogin">立即登陆</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex"
import axios from "axios";
import md5 from "md5";
export default {
  name: "Login",
  data() {
    return {
      /*
      admin
      super
      administrator
      supervisor
      webadmin
      superadmin
      */
      username: "",
      password: "",
      logoUrl: "../../static/hicling.png",
      name: "HiCling健康",
      title: "生命体征健康平台",
      des:
        "<p>翰临科技Cling智能体征健康平台以精准健康数据为核心，</p><p>与互联网医院平台整合，</p><p>拥有全球健康系统的人工智能数字健康管理平台，</p><p>以“了解自己，改变自己”，为理念，</p><p>以提供远程无线监护为主，</p><p>致力为各类人群提供全面的健身，</p><p>健康及医疗照护保障</p><p>>>......"
    };
  },
  methods: {
    ...mapActions(["login","getUsers"]),
    
    onLogin() {
      // this.postRequest("api/auth/login", {
        // username: this.username,
        // password: md5(this.password).toUpperCase()
      // }).then(res => {
      //   window.sessionStorage.setItem(
      //     "access_token",
      //     res.data.data.access_token
      //   );
      //   window.sessionStorage.setItem(
      //     "refresh_token",
      //     res.data.data.refresh_token
      //   );
      //   window.sessionStorage.setItem("id", res.data.data.id);
      //   this.succeed("登陆成功");
      //   this.getRequest("api/cling/refresh/user", null).then(res => {
      //     return null;
      //   });
      //   this.$router.push({ name: "synthesize" });
      // });
      let loginInfo = {
        username: this.username,
        password: md5(this.password).toUpperCase()
      }
      this.login(loginInfo)
    }
  },
  computed: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
#login {
  background-image: url("../assets/hicling/bgi-login.png");
  background-size: contain;
}
.header {
  padding-top: 0.55rem;
  padding-left: 0.4rem;
  height: 0.68rem;
  .logo {
    float: left;
    width: 0.74rem;
    height: 0.68rem;
  }
  .name {
    float: left;
    height: 0.68rem;
    line-height: 0.68rem;
    margin-left: 0.34rem;
    font-size: 0.4rem;
    font-weight: 600;
    color: #fff;
  }
}
.main {
  margin: 1.57rem 0.96rem 0;
}
.main-left {
  float: left;
  width: 10.77rem;
  padding-left: 0.96rem;
  h1 {
    margin-bottom: 0.48rem;
    color: #fff;
    font-size: 0.74rem;
  }
  .des {
    color: #fff;
    font-size: 0.28rem;
  }
}
.main-right {
  float: right;
  box-sizing: border-box;
  padding: 0 0.22rem;
  width: 4.47rem;
  height: 5.22rem;
  background: rgba(9, 5, 51, 1);
  box-shadow: 0px 3px 10px rgba(44, 226, 255, 0.14);
  opacity: 0.8;
  border-radius: 20px;
  color: #fff;
  .login-title {
    margin-top: 0.32rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.43rem;
    font-weight: 400;
    text-align: center;
    border-bottom: 1px solid #1977f2;
  }
  .login-box {
    margin-top: 0.4rem;
  }
  .input-contol {
    margin-bottom: 0.15rem;
    margin-left: 0.2rem;
    .userImg {
      float: left;
      width: 0.6rem;
      height: 0.6rem;
      background-image: url("../assets/hicling/user.png");
      background-size: contain;
    }
    .pwdImg {
      float: left;
      width: 0.6rem;
      height: 0.6rem;

      background-image: url("../assets/hicling/pwd.png");
      background-size: contain;
    }
    .input {
      float: left;
      margin-left: 0.1rem;
      padding-left: 5px;
      height: 0.5rem;
      width: 2.6rem;
      background-color: transparent;
      border-bottom: 1px solid #465587;
      caret-color: #fff;
      color: #fff;
      font-size: 0.22rem;
      line-height: 0.3rem;
    }
    &:hover {
      .userImg {
        background-image: url("../assets/hicling/user_hover.png");
      }
      .pwdImg {
        background-image: url("../assets/hicling/pwd_hover.png");
      }
      .input {
        border-bottom: 1px solid #1977f2;
      }
    }
  }
}
.btn-login {
  margin-top: 0.9rem;
  width: 100%;
  height: 0.6rem;
  background: linear-gradient(
    349deg,
    rgba(25, 119, 242, 1) 0%,
    rgba(44, 142, 255, 1) 100%
  );
  box-shadow: 0px 13px 6px rgba(2, 9, 33, 0.3);
  border-radius: 8px;
  font-size: 0.3rem;
  font-weight: 400;
  color: #fff;
  letter-spacing: 5px;
  cursor: pointer;
}
.button_wrap {
  margin-top: 0.9rem;
  display: flex;
  justify-content: space-around;
  .el-button {
    width: 80%;
    font-size: 0.26rem;
    letter-spacing: 0.1rem;
  }
}
</style>
