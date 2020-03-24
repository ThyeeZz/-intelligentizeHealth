<template>
  <div class="band">
     <el-row>
       <el-col :span="12">
            <el-button type="primary" @click="back">返回上一页</el-button>
       </el-col>
     </el-row>
    <v-location v-for="item in deviceMac" :mac="item" :key="item"/>
  </div>
</template>

<script>
import VLocation from "@/component/Location";
import {mapState} from 'vuex'
export default {
  name: "LookLocus",
  components: {
    VLocation
  },
  data() {
    return {
    };
  },
  computed: {
      ...mapState({
          deviceMac:state => state.currentBandMac
      })
  },
  created() {},
  mounted() {

     console.log(this.deviceMac);
  },
  methods: {
    back(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.band{
  padding: 0 20px;
  background-color: #090531;
  min-height: 100%;
  overflow: auto;
}
</style>
