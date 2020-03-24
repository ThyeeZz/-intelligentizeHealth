<template>
  <div class="wrap">
    <p class='title'>点击按钮将重启所有网关</p>
    <el-button type="danger" @click="restart" class='myButton'>重启网关</el-button>
  </div>
</template>
<script>
export default {
  name: "gatewayRestart",
  data() {
    return {
      time: null,
      count: 0
    };
  },
  methods: {
    restart() {
      this.$confirm("确定重启所有网关, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
        this.getRequest("api/cling/reboot/gateway").then(res => {
          this.succeed("重启网关成功");
        });
        this.time = new Date().toLocaleString();
        this.count += 1
        window.localStorage.setItem(`第${this.count}次重启`,this.time)
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap{
    position: relative;
    height:8rem;
}
.title{
    font-size: 0.36rem;
    text-align: center;
    margin-top: 1rem;
    font-weight: bold;
}
.myButton{
    font-size: 0.26rem;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
}
</style>
