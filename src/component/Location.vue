<template>
  <div class="location">
    <h6>手环：{{ mac }}</h6>
    <div class="location-box" :id="mac">
      <ul class="location-ul">
        <template v-if="deviceLocus.length > 0">
          <li v-for="item in deviceLocus" :key="item.time">
            <span class="address">{{item.beacon}}</span>
            <el-dropdown>
              <img v-if = "item.em === 1" class="location-icon" src="../assets/warning_32.png" alt>
              <img v-else class="location-icon" src="../assets/walk.png" alt>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>步数:{{item.st}}</el-dropdown-item>
                <el-dropdown-item>卡路里:{{item.cl}}</el-dropdown-item>
                <el-dropdown-item>心率:{{item.hr.length > 0 ? item.hr[item.hr.length-1].hr : '--'}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span class="time">{{transformTime(item.time)}}</span>
          </li>
        </template>

        <li v-else>{{loadInfo}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getTime} from '@/lib/utils';
import IScroll from "iscroll";
import { mapState,mapActions } from "vuex";
import { timeStamp, getTodayTimestamp } from "@/lib/utils";
export default {
  name: "Location",
  data() {
    return {
      deviceLocus:[],
      loadInfo:'加载数据中...'
    };
  },
  props: {
    mac: {
      type: String,
      required: true
    }
  },
  computed: {
    //  ...mapState({
    //    deviceLocus : state => state.deviceTrail
    //  })
  },
  created() {
    let that = this;
    let data = {
      GymCode: 5209159,
      mac: that.mac,
      daytime: timeStamp(),
      Lang: "zh-cn"
    };
    this.getDevice(data)
      .then(res => {
        document.body.scrollIntoView();
        this.deviceLocus = res;
        if(!this.deviceLocus){
          this.loadInfo = '没有轨迹数据'
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    deviceLocus() {
      //当位置列表个数发生变化时，重新计算ul宽度，生成IScroll实例
      this.getScroll();
    }
  },
  mounted() {
    // 初始化时计算Ul的宽度，生成IScroll实例
    this.getScroll();
  },
  methods: {
    ...mapActions(["getDevice"]),
    transformTime(time){
     return getTime(time)
    },
    getScroll() {
      var locationBox = document.getElementById(this.mac);
      locationBox.firstChild.style.width = 80 * this.deviceLocus.length + "px";
      var scroll = new IScroll(locationBox, {
        scrollX: true,
        mouseWheel: false,
        click: true
      });
      locationBox = null;
      scroll = null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.location {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: rgba(29, 50, 98, 0.6);
  text-align: left;
  color: #fff;
  border-radius: 10px;
}
.location-box {
  overflow: hidden;
  padding-bottom: 20px;
}
.location-icon {
  width: 35px;
}
.address {
  width: 150%;
  position: absolute;
  left: 40%;
  bottom: 100%;
  transform-origin: left bottom;
  transform: rotate(-35deg);
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.time {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
}
h6 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.location-ul {
  margin-top: 90px;
  list-style-type: none;
  padding: 0;
  font-size: 14px;
  white-space: nowrap;
}
.location-ul>li {
  position: relative;
  display: inline-block;
  width: 80px;
  margin: 0;
  text-align: center;
}
.location-ul>li:first-child::before {
  content: "";
}
.location-ul>li::before {
  position: absolute;
  left: 0;
  top: 24%;
  content: "-----";
}
.location-ul>li:last-child::after {
  content: "";
}
.location-ul>li::after {
  position: absolute;
  right: 0;
  top: 24%;
  content: "-----";
}
</style>
