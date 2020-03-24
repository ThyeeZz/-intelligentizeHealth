<template>
  <div id="index">
    <v-header></v-header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import VHeader from "@/component/VHeader";
export default {
  name: "Index",
  components: {
    VHeader
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../style/minix";
#index {
  height: 100%;
}
.main {
  box-sizing: border-box;
  height: calc(100% - 1.26rem);
}
</style>
