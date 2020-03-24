<template>
  <div>
    <el-row style="height: 9rem">
      <el-col :span="4" style="height: 100%">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          unique-opened
          style="height: 100%"
        >
          <el-submenu v-for="(item,index) of routerList" :key="index" :index="item.path">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(item1,index) of item.children" :key="index" :index="item1.path">
                <img :src="item1.imgUrl" alt class="menu_icon" />
                <span slot="title">{{item1.title}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="/index/system/gatewayRestart">
            <i class="el-icon-setting"></i>
            <span slot="title">网关重启</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div class="Dashboard">
          <span>{{onRouter}}</span>
        </div>
        <router-view></router-view>
      </el-col>
    </el-row>
    <el-row class="information">
        <p>Powered By Hicling <span style="font-size: 14px;margin-left: 10px;">version:{{version}}</span></p> 
        
    </el-row>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "sderBar",
  data() {
    return {
      version:'',
      routerList: [
        {
          title: "病人信息管理",
          path: "1",
          iconClass: "el-icon-menu",
          id: 1,
          children: [
            {
              title: "病人信息查看",
              path: "/index/system/patient/search",
              imgUrl: require("../assets/img/check.png")
            },
            {
              title: "病人信息上传",
              path: "/index/system/patient/upload",
              imgUrl: require("../assets/img/upload.png")
            }
          ]
        },
        {
          title: "医生信息管理",
          path: "2",
          iconClass: "el-icon-setting",
          id: 2,
          children: [
            {
              title: "医生信息查看",
              path: "/index/system/doctor/search",
              imgUrl: require("../assets/img/check.png")
            },
            {
              title: "医生信息上传",
              path: "/index/system/doctor/upload",
              imgUrl: require("../assets/img/upload.png")
            }
          ]
        },
        {
          title: "网关管理",
          path: "3",
          iconClass: "el-icon-setting",
          id: 3,
          children: [
            {
              title: "网关查询",
              path: "/index/system/beacon/search",
              imgUrl: require("../assets/img/upload.png")
            },
            {
              title: "网关更新",
              path: "/index/system/beacon/update",
              imgUrl: require("../assets/img/upload.png")
            }
          ]
        },
        {
          title: "体征警报",
          path: "4",
          iconClass: "el-icon-setting",
          id: 4,
          children: [
            {
              title: "历史报警查询",
              path: "/index/system/alarm/search",
              imgUrl: require("../assets/img/upload.png")
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
      return null;
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
      return null;
    }
  },
  mounted() {
    // console.log(this.$route);
  },
  created() {
    axios.get("/static/version.json").then(res => {
      this.version = res.data.version
    });
  },
  computed: {
    defaultActive: function() {
      return this.$route.path;
    },
    onRouter: function() {
      // console.log(this.$route.meta.title);
      return this.$route.meta.title;
      // return null
    }
  }
};
</script>
<style lang="scss" scoped>
.Dashboard {
  // border: 1px solid red;
  height: 1rem;
  width: 100%;
  border-bottom: 1px solid #cfcbcb;
  background-color: #eee8e8;
  box-shadow: 3px 3px 2px #e4e2e2;
  line-height: 1rem;
  font-size: 0.24rem;
  padding: 0 15px;
  span {
    font-size: 0.24rem;

    font-style: italic;
    font-family: Arial, Helvetica;
    color: #424242;
  }
}
.menu_icon {
  width: 0.3rem;
  height: auto;
  margin-right: 5px;
}
.information {
  height: 0.55rem;
  background-color: #070731;
  p {
    height: 100%;
    text-align: center;
    font-size: 0.26rem;
    color: #fff;
    line-height: 0.55rem;
  }
}
.menubar,
.el-menu,
.el-menu-item-group{
  overflow: hidden;
}
.el-menu-item{
  width: 100%;
}
</style>
