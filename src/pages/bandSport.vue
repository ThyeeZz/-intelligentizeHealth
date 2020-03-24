<template>
  <div class="home">
    <el-table
      :data="deviceInBeacon[currentBeacon]"
      border
      style="width: 100%;margin-top:20px;"
      highlight-current-row
      @current-change="handleCurrentChange"
      :default-sort="{prop: 'st', order: 'descending'}"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="mac" label="手环" :formatter="formatterMac"></el-table-column>
      <el-table-column prop="st" label="步数" sortable sort-by="st"></el-table-column>
      <el-table-column prop="cl" label="卡路里" sortable sort-by="cl"></el-table-column>
      <el-table-column prop="hr" label="心率" sortable sort-by="hr"></el-table-column>
      <el-table-column prop="em" label="报警" sortable>
        <template slot-scope="scope">
          <img v-if="scope.row.em == 1" src="../assets/warning_32.png" alt="报警">
          <span v-else>无</span>
        </template>
      </el-table-column>
      <el-table-column prop="rssi" label="信号"></el-table-column>
      <el-table-column prop="beacon" label="网关" sortable sort-by="beacon"></el-table-column>
      <el-table-column prop="time" label="时间" :formatter="formatterTime" sortable sort-by="time"></el-table-column>
      <el-table-column fixed="right" width="200" label="操作">
        <template slot-scope="scope">
          <el-button @click="lookLocus(scope.row)" type="text" size="small">查看轨迹</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getMinuteBeginTimestamp } from "@/lib/utils";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  components: {},
  data() {
    return {
      currentRow: null
    };
  },
  computed: {
    ...mapState({
      bandInfo: state => state.allDevice,
      currentBeacon: state => state.currentBeacon
    }),
    ...mapGetters(["deviceInBeacon"])
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(["currentBandMac"]),
    lookLocus(row) {
      let mac = [row.mac];
      this.currentBandMac(mac);
      this.$router.push({ name: "lookLocus" });
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    formatterMac(row, column) {
      let bandName = row.mac.substr(3, 2) + row.mac.substr(0, 2);
      return bandName.toUpperCase();
    },
    formatterTime(row, column) {
      return getMinuteBeginTimestamp(row.time);
    }
  }
};
</script>

<style scoped>
.home {
  padding: 0 30px;
  background-color: #090531;
  height: 100%;
  overflow: auto;
}
</style>
