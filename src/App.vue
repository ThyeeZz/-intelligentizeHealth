<template>
  <div id="app" class="fillcontain">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    handleReolad(){
      let state = JSON.stringify(this.$store.state);
      window.localStorage.setItem("state",state)
    },
    handleLoad(){
      
      let state = JSON.parse(window.localStorage.getItem("state"));
      this.$store.replaceState(Object.assign({},this.$store.state,state))
    }
  },
  mounted(){
    window.addEventListener("beforeunload",this.handleReolad);
    this.handleLoad();
    
  }
};
</script>

<style lang="scss">
@import "./style/common.scss";
.margin-bot {
  height: 40px;
  .el-form-item__label {
    margin-bottom: 1rem;
  }
}
.colorGreen {
  color: aqua;
}
.colorWhite {
  color: #fff;
}

.el-message {
  .el-message__icon {
    font-size: 16px;
  }
  .el-message__content {
    font-size: 16px;
  }
}
.el-time-panel__footer {
    display: flex;
    justify-content: flex-end;
  }
</style>
