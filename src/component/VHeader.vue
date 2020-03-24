<template>
  <div id="header">
    <div class="header-company">
      <img src="../../static/hicling.png" alt />
      <span>HiCling智能健康平台</span>
    </div>
    <div class="header-nav">
      <ul>
        <li :class="{active:n == 0}" @click="goto(0)">
          <i class="synthesize"></i>
          <span>机台综合</span>
        </li>
        <li :class="{active:n == 1}" @click="goto(1)">
          <i class="activity"></i>
          <span>实时活动</span>
        </li>
        <li :class="{active:n == 2}" @click="goto(2)">
          <i class="sleep"></i>
          <span>睡眠休息</span>
        </li>
        <li :class="['warnning_wrap',{active:n == 3}]" @click="goto(3)">
          <i class="warning"></i>
          <span>预警实况</span>
          <span class="warnTag" v-if="showWarnningFlag"></span>
        </li>
        <li :class="{active:n == 4}" @click="goto(4)">
          <i class="care"></i>
          <span>照护计划</span>
        </li>
        <li :class="{active:n == 5}" @click="goto(5)">
          <i class="call"></i>
          <span>紧急呼叫</span>
        </li>
        <li :class="{active:n == 6}" @click="goto(6)">
          <i class="system"></i>
          <span>系统管理</span>
        </li>
      </ul>
    </div>
    <div class="header-admin">
      <img src="../assets/img/avatar.png" alt />
      <span>你好，admin</span>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">注销账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "VHeader",
  data() {
    return {
      n: 0,
      pathArr: [
        "synthesize",
        "realtimeActivity",
        "sleepRest",
        "earlyWarning",
        "carePlan",
        "emergencyCall",
        "system"
      ],
      showWarnningFlag: false
    };
  },
  mounted() {
    if(this.$route.name == "deviceCheck"){
      this.n = 6
    }else{
      this.n = this.pathArr.indexOf(this.$route.name);
    }
    // this.timer = setInterval(this.getTodayWarnning.bind(this),60000)
    // setInterval(()=>{
    //   this.n ++
    //   if(this.n == 3)
    //   this.n = 0;
    // },30000)
  },
  methods: {
    goto(n) {
      if (this.n != n) {
        this.n = n;
        let name = this.pathArr[n];
        this.$router.push({ name: name });
      }
    },
    handleCommand(logout) {
      this.delRequest("/api/auth/logout")
        .then(res => {
          this.succeed("注销成功");
          this.$router.push({ name: "login" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTodayWarnning() {
      this.getRequest("api/sos/today").then(res=>{
        if(res.data.data){
          let resualt = res.data.data;
          this.showWarnningFlag = true;
          if(this.timer){
            clearInterval(this.timer);
            this.timer = null
          }
        }
      })
    }
  },
  watch: {
    n: function() {
      this.$router.replace({ name: this.pathArr[this.n] });
    }
  }
};
</script>
<style lang="scss" scoped>
#header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 1.26rem;
  background: rgba(7, 7, 49, 1);
  box-shadow: 9px 0px 24px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #1e94ee;
  box-sizing: border-box;
}
.header-company {
  margin-left: 0.33rem;
  width: 7rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 1rem;
    height: 1rem;
  }
  span {
    margin-left: 0.26rem;
    color: #f5f5f5;
    font-size: 0.5rem;
    letter-spacing: 2px;
  }
}
.header-nav {
  width: 8.9rem;
  height: 100%;
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    > li {
      box-sizing: border-box;
      padding-top: 0.15rem;
      // float: left;
      width: 1.27rem;
      height: 100%;
      font-size: 0.2rem;
      text-align: center;
      color: #46528f;
      cursor: pointer;
      &:hover {
        background-color: #1977f2;
        color: #fff;
        .synthesize {
          background-image: url("../assets/hicling/synthesize_hover.png");
        }
        .activity {
          background-image: url("../assets/hicling/activity_hover.png");
        }
        .sleep {
          background-image: url("../assets/hicling/sleep_hover.png");
        }
        .warning {
          background-image: url("../assets/hicling/warning_hover.png");
        }
        .care {
          background-image: url("../assets/hicling/care_hover.png");
        }
        .call {
          background-image: url("../assets/hicling/call_hover.png");
        }
        .system {
          background-image: url("../assets/hicling/system_hover.png");
        }
      }
    }
    .active {
      background-color: #1977f2;
      color: #fff;
      .synthesize {
        background-image: url("../assets/hicling/synthesize_hover.png");
      }
      .activity {
        background-image: url("../assets/hicling/activity_hover.png");
      }
      .sleep {
        background-image: url("../assets/hicling/sleep_hover.png");
      }
      .warning {
        background-image: url("../assets/hicling/warning_hover.png");
      }
      .care {
        background-image: url("../assets/hicling/care_hover.png");
      }
      .call {
        background-image: url("../assets/hicling/call_hover.png");
      }
      .system {
        background-image: url("../assets/hicling/system_hover.png");
      }
    }
  }
}
.header-admin {
  margin-left: 0.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  img {
    width: 0.74rem;
    height: 0.74rem;
    border-radius: 50%;
  }
  span {
    margin-left: 0.14rem;
    font-size: 0.24rem;
    color: rgba(70, 82, 143, 1);
  }
  .el-dropdown {
    width: 0.4rem;
  }
}
.synthesize {
  margin: 0 auto;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/synthesize.png");
  background-size: contain;
}
.activity {
  margin: 0 auto;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/activity.png");
  background-size: contain;
}
.sleep {
  margin: 0 auto;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/sleep.png");
  background-size: contain;
}
.warning {
  margin: 0 auto;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/warning.png");
  background-size: contain;
}
.care {
  margin: 0 auto;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/care.png");
  background-size: contain;
}
.call {
  margin: 0 auto;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/call.png");
  background-size: contain;
}
.system {
  margin: 0 auto;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/system.png");
  background-size: contain;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 0.2rem;
  color: #fff;
}
.warnning_wrap{
  position: relative;
}
.warnTag{
  position: absolute;
  display: inline-block;
  width: .2rem;
  height: .2rem;
  background-color: #ff0000;
  border-radius: 50%;
  top: .1rem;
  right: .1rem;
  font-size: .16rem;
  line-height: .3rem;
  text-align: center;
  color: #fff;
}
</style>
