<template>
  <div id="synthesize">
    <div class="main-left">
      <div class="community">
        <div class="community-title">
          <span class="location"></span>
          <span class="address">上海市浦东新区锦绣东路2777弄</span>
        </div>
        <ul class="community-info">
          <li>
            <span>公司名称</span>
            <span>上海翰临电子科技有限公司</span>
          </li>
          <li>
            <span>附近医院</span>
            <span>--</span>
          </li>
          <li>
            <span>活跃人数</span>
            <span>{{activeNum}}人</span>
          </li>
          <li>
            <span>总人数</span>
            <span>{{userLenth}}人</span>
          </li>
          <!-- <li>
            <span>社区照护人员</span>
            <span>21人</span>
          </li>
          <li>
            <span>紧急救护车辆</span>
            <span>4辆</span>
          </li>
          <li>
            <span>家庭医生</span>
            <span>58人</span>
          </li>
          <li>
            <span>外籍医师</span>
            <span>8人</span>
          </li>-->
        </ul>
      </div>
      <div class="device">
        <h3>生命体征监测设备分布</h3>
        <ul>
          <li>
            <span class="watch"></span>
            <div class="device-percent">
              <span>健康智能手表</span>
              <v-progress color="#37F8FF" :height="0.24" :percentage="userList.length==0?0:100"></v-progress>
            </div>
            <span class="device-number">
              <i>{{userList.length}}</i>
              <i>支</i>
            </span>
          </li>
          <li>
            <span class="sleepDevice"></span>
            <div class="device-percent">
              <span>雷达呼吸综合征睡眠监测仪</span>
              <v-progress color="#65FFA8" :height="0.24" :percentage="0"></v-progress>
            </div>
            <span class="device-number" style="color:#65FFA8">
              <i>0</i>
              <i>台</i>
            </span>
          </li>
          <li>
            <span class="LifeMonitor"></span>
            <div class="device-percent">
              <span>生命体征监测贴片</span>
              <v-progress color="#F28A5C" :height="0.24" :percentage="0"></v-progress>
            </div>
            <span class="device-number" style="color:#F28A5C">
              <i>0</i>
              <i>片</i>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-center">
      <div class="main-center-map">
        <!-- 高德地图组件 -->
        <el-amap
          ref="map"
          vid="amapDemo"
          :amap-manager="amapManager"
          :center="center"
          :zoom="zoom"
          :events="events"
          class="amap-demo"
        >
          <el-amap-marker ref="marker" vid="component-marker" :position="componentMarker.position">
            <div class="markerP">
              <span>{{activeNum}}</span>
              <span>人</span>
            </div>
          </el-amap-marker>
          <el-amap-marker
            ref="marker2"
            vid="component-marker2"
            :position="componentMarker2.position"
            :offset="offset"
          ></el-amap-marker>
        </el-amap>
      </div>
      <div class="main-center-bigData">
        <h3>日均平台大数据</h3>
        <div class="dayData">
          <div class="data-box">
            <h6>活动步数</h6>
            <div class="data-item">
              <span class="step"></span>
              <span class="data" style="color:#93FF6D">
                <i>{{stepAvag}}</i>
                <i class="small">步</i>
              </span>
            </div>
          </div>
          <div class="data-box">
            <h6>平台预警次数</h6>
            <div class="data-item">
              <span class="warning-red"></span>
              <span class="data" style="color:#FC397B">
                <i>0</i>
                <i class="small">次</i>
              </span>
            </div>
          </div>
          <div class="data-box">
            <h6>睡眠时长</h6>
            <div class="data-item">
              <span class="sleep-red"></span>
              <span class="data" style="color:#E156F1">
                <i>{{sleepTimeAvagHour}}</i>
                <i class="small">小时</i>
                <i>{{sleepTimeAvagMinute}}</i>
                <i class="small">分钟</i>
              </span>
            </div>
          </div>
          <div class="data-box">
            <h6>医院问诊次数</h6>
            <div class="data-item">
              <span class="hospital"></span>
              <span class="data" style="color:#53EDFF">
                <i>--</i>
                <i class="small">次</i>
              </span>
            </div>
          </div>
          <div class="data-box">
            <h6>护理次数</h6>
            <div class="data-item">
              <span class="care-orange"></span>
              <span class="data" style="color:#FF7D27">
                <i>--</i>
                <i class="small">次</i>
              </span>
            </div>
          </div>
          <div class="data-box">
            <h6>线上咨询次数</h6>
            <div class="data-item">
              <span class="consult"></span>
              <span class="data" style="color:#FFBF2A">
                <i>--</i>
                <i class="small">次</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-right">
      <h3>社区用户基本信息</h3>
      <div class="basic-information">
        <div class="basic-information-title">
          <p>性别统计</p>
        </div>
        <div class="basic-information-content">
          <div class="first-info">
            <div class="first-info-left">
              <span class="male"></span>
              <span class="small">男性</span>
            </div>
            <div class="first-info-right">
              <span class="small">女性</span>
              <span class="female"></span>
            </div>
          </div>
          <div class="second-info">
            <span>{{malPercent?malPercent+"%":'0%'}}</span>
            <span>{{falPercent?falPercent+"%":'0%'}}</span>
          </div>
          <div class="third-info">
            <span :style="{width:`calc(${malPercent}% - 0.15rem)`}"></span>
            <span :style="{width:`calc(${falPercent}% - 0.15rem)`}"></span>
          </div>
        </div>
      </div>
      <div class="basic-information">
        <div class="basic-information-title">
          <p>年龄</p>
        </div>
        <div class="basic-information-content" style="height:2.25rem;margin-top:10px">
          <ve-histogram
            class="canvas2"
            :data="chartData"
            :extend="extend"
            :tooltip-visible="false"
            :grid="grid"
            :colors="colors"
            :legend-visible="false"
            height="103%"
          ></ve-histogram>
        </div>
      </div>
      <div class="basic-information">
        <div class="basic-information-title">
          <p>职业</p>
        </div>
        <div class="basic-information-content">
          <ul>
            <li class="profession-list">
              <span>健康/医疗</span>
              <div class="profession-persent">
                <v-progress color="#58DDFF" :height="0.10" :percentage="0"></v-progress>
              </div>
              <span>0%</span>
            </li>
            <li class="profession-list">
              <span>咨询/管理</span>
              <div class="profession-persent">
                <v-progress color="#58DDFF" :height="0.10" :percentage="0"></v-progress>
              </div>
              <span>0%</span>
            </li>
            <li class="profession-list">
              <span>咨询/管理</span>
              <div class="profession-persent">
                <v-progress color="#58DDFF" :height="0.10" :percentage="0"></v-progress>
              </div>
              <span>0%</span>
            </li>
            <li class="profession-list">
              <span>计算机/工程</span>
              <div class="profession-persent">
                <v-progress color="#58DDFF" :height="0.10" :percentage="0"></v-progress>
              </div>
              <span>0%</span>
            </li>
            <li class="profession-list">
              <span>咨询/管理</span>
              <div class="profession-persent">
                <v-progress color="#58DDFF" :height="0.10" :percentage="0"></v-progress>
              </div>
              <span>0%</span>
            </li>
            <li class="profession-list">
              <span>广告/市场媒体</span>
              <div class="profession-persent">
                <v-progress color="#58DDFF" :height="0.10" :percentage="0"></v-progress>
              </div>
              <span>0%</span>
            </li>
            <li class="profession-list">
              <span>金融/投资</span>
              <div class="profession-persent">
                <v-progress color="#58DDFF" :height="0.10" :percentage="0"></v-progress>
              </div>
              <span>0%</span>
            </li>
            <li class="profession-list">
              <span>服务业</span>
              <div class="profession-persent">
                <v-progress color="#58DDFF" :height="0.10" :percentage="0"></v-progress>
              </div>
              <span>0%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueAMap from "vue-amap";
import VProgress from "@/component/VProgress";
import { AMapManager } from "vue-amap";
import VBeacon from "@/pages/beacon";
import { mapMutations } from "vuex";
import { actForHome } from "@/mixin"
VueAMap.initAMapApiLoader({
  key: "ba2052b8c450a515a9b4764b9e12b0f4",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});
let amapManager = new AMapManager();
export default {
  name: "Synthesize",
  components: {
    VProgress,
    VBeacon
  },
  mixins: [ actForHome ],
  data() {
    // 年龄图表配置参数
    this.colors = ["#58DDFF"];
    this.extend = {
      yAxis: {
        show: true,
        max: 0,
        splitLine: {
          show: true,
          lineStyle: {
            color: "transparent",
            width: 2,
            type: "dashed"
          }
        }
      },
      xAxis: {
        axisLabel: {
          interval: 0,
          rotate: 40,
          textStyle: {
            color: "#fff",
            fontSize: "12px"
          }
        }
      },
      series: {
        label: { show: true, position: "top" },
        barWidth: 16
      }
    };
    this.grid = {
      x: 0,
      y: 10,
      y2: 0,
      x2: 0,
      backgroundColor: "#fff"
    };
    return {
      // 高德地图组件属性数据
      totalPerson: 0,
      offset: [-28, -22],
      amapManager,
      zoom: 18,
      center: [121.62181, 31.24258],
      events: {
        init: o => {
          // console.log(o.getCenter());
          // console.log(this.$refs.map.$$getInstance());
          o.getCity(result => {
            // console.log(result);
            return null;
          });
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          alert("map clicked");
        }
      },
      plugin: [
        {
          pName: "MapType",
          defaultType: 0,
          events: {
            init: o => {
              // console.log(o);
              // console.log(this.$refs.marker.$$getOffset());
            }
          }
        }
      ],
      componentMarker: {
        position: [121.62181, 31.24258]
      },
      componentMarker2: {
        position: [121.62181, 31.24258]
      },
      chartData: {
        columns: ["key", "value"],
        rows: [
          { key: "低于18", value: 0 },
          { key: "19-25", value: 0 },
          { key: "26-35", value: 0 },
          { key: "36-45", value: 0 },
          { key: "51-60", value: 0 },
          { key: "61-70", value: 0 },
          { key: "70以上", value: 0 }
        ]
      },
      userList: [],
      healthList: [],
      malNum: 0,
      falNum: 0,
      stepNum: 0,
      stepAvag: 0,
      sleepTime: 0,
      activeNum: 0,
      sleepCount: 0,
      malPercent: 0,
      falPercent: 0
    };
  },

  methods: {
    ...mapMutations(["setBaseInfo"]),
    resetAgeData(arr) {
      this.chartData.rows = [
        { key: "低于18", value: 0 },
        { key: "19-25", value: 0 },
        { key: "26-35", value: 0 },
        { key: "36-45", value: 0 },
        { key: "51-60", value: 0 },
        { key: "61-70", value: 0 },
        { key: "70以上", value: 0 }
      ];
      arr.forEach(item => {
        if (item.age <= 18) {
          this.chartData.rows[0].value += 1;
        } else if (item.age > 18 && item.age <= 25) {
          this.chartData.rows[1].value += 1;
        } else if (item.age > 25 && item.age <= 35) {
          this.chartData.rows[2].value += 1;
        } else if (item.age > 35 && item.age <= 45) {
          this.chartData.rows[3].value += 1;
        } else if (item.age > 45 && item.age <= 55) {
          this.chartData.rows[4].value += 1;
        } else if (item.age > 55 && item.age <= 60) {
          this.chartData.rows[5].value += 1;
        } else if (item.age > 60 && item.age <= 65) {
          this.chartData.rows[6].value += 1;
        } else if (item.age > 65 && item.age <= 70) {
          this.chartData.rows[7].value += 1;
        } else if (item.age > 70) {
          this.chartData.rows[8].value += 1;
        }
      });
    },
    // 判断用户是否为活跃用户，离场 3000ms 后判定为非活跃
    isActive(time){
      let timeStamp = new Date();
      if(timeStamp - time < 3000){
        return true
      }else{
        return false
      }
    },
    
    stepNumAvag() {
      this.stepNum = 0;
      for (let i of this.userList) {
        if (i.st !== undefined && i.st > i.steps) {
          i.st = i.st;
        } else {
          i.st = i.steps;
        }
        this.stepNum += i.st;
        this.stepAvag = Math.round(this.stepNum / this.userList.length);
        // console.log(this.stepNum,this.userList.length)
      }
    },
    closeSocket(){
      if (this.websock) {
        this.websock.close();
      }
      this.websock = null;
    }
  },
  mounted() {
    this.setBaseData();
    window.onbeforeunload = e => {
      //监听页面刷新，离开 主动断开socket
      this.closeSocket()
    };
  },
  beforeDestroy() {
    this.closeSocket();
    window.sessionStorage.setItem("activeNum", this.activeNum);
  },
  created() {
    if (window.sessionStorage.activeNum) {
      this.activeNum = window.sessionStorage.activeNum;
    }
  },
  computed: {
    sleepTimeAvagHour() {
      let avaMinutes = Math.round(this.sleepTime / this.sleepCount);
      if (avaMinutes) {
        let hour =
          Math.floor(avaMinutes / 60) < 10
            ? "0" + Math.floor(avaMinutes / 60)
            : Math.floor(avaMinutes / 60);
        return hour;
      } else {
        return 0;
      }
    },
    sleepTimeAvagMinute() {
      let avaMinutes = Math.round(this.sleepTime / this.sleepCount);
      if (avaMinutes) {
        let minute =
          avaMinutes % 60 < 10 ? "0" + (avaMinutes % 60) : avaMinutes % 60;
        return minute;
      } else {
        return 0;
      }
    },
    userLenth() {
      return this.userList.length;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../style/minix.scss";
#synthesize {
  display: flex;
  padding: 0.23rem 0.2rem 0.23rem;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  font-size: 0.2rem;
  background-image: url("../assets/hicling/bgi-index2.jpg");
  background-size: cover;
}
.main-left {
  width: 5.8rem;
}
.community {
  box-sizing: border-box;
  padding: 0.1rem 0.2rem 0;
  width: 100%;
  height: 5.2rem;
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
  border-radius: 8px;
  .address {
  }
}
.community-title {
  display: flex;
  align-items: center;
  height: 0.5rem;
  .address {
    padding-left: 0.3rem;
    width: calc(100% - 0.5rem);
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.26rem;
    color: #fff;
    border-bottom: 1px solid rgba(52, 135, 245, 0.6);
  }
}
.community-info {
  margin-top: 0.3rem;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.4rem;
    font-size: 0.2rem;
    &:nth-child(2n + 1) {
      background: rgba(70, 85, 135, 1);
    }
    span:first-child {
      margin-left: 0.1rem;
      color: #33d5ff;
    }
    span:last-child {
      margin-right: 0.1rem;
      color: #fff;
    }
  }
}
.location {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-image: url("../assets/hicling/location.png");
  background-size: contain;
}
.device {
  margin-top: 0.32rem;
  h3 {
    height: 0.34rem;
    line-height: 0.34rem;
    background: rgba(25, 119, 242, 1);
    text-align: center;
    font-size: 0.22rem;
    color: #fff;
  }
  ul > li {
    display: flex;
    align-items: flex-end;
    height: 0.7rem;
    border-bottom: 1px solid #465587;
    padding-bottom: 0.09rem;
    padding-top: 0.15rem;
  }
  .device-percent {
    margin-left: 0.4rem;
    width: 3.23rem;
    font-size: 0.4rem;
    span {
      font-size: 0.2rem;
      color: #fff;
    }
  }
  .device-number {
    margin-left: 0.2rem;
    font-size: 0.35rem;
    color: #37f8ff;
    font-weight: bold;
    i:first-child {
      font-size: 0.4rem;
    }
    i:last-child {
      font-size: 0.2rem;
    }
  }
}

.watch {
  display: inline-block;
  width: 0.9rem;
  height: 0.7rem;
  background-image: url("../assets/hicling/watch.png");
  background-size: contain;
}
.sleepDevice {
  display: inline-block;
  width: 0.9rem;
  height: 0.7rem;
  background-image: url("../assets/hicling/sleepDevice.png");
  background-size: contain;
}
.LifeMonitor {
  display: inline-block;
  width: 0.9rem;
  height: 0.7rem;
  background-image: url("../assets/hicling/LifeMonitor.png");
  background-size: contain;
}
.main-center {
  width: 8.14rem;
  margin-left: 0.28rem;
}
.main-center-map {
  width: 8.14rem;
  height: 4.63rem;
}
.main-center-bigData {
  margin-top: 0.2rem;
  h3 {
    height: 0.34rem;
    line-height: 0.34rem;
    background: rgba(25, 119, 242, 1);
    text-align: center;
    font-size: 0.22rem;
    color: #fff;
  }
  .dayData {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.data-box {
  box-sizing: border-box;
  margin-top: 0.2rem;
  padding: 0.1rem 0.16rem;
  width: 4rem;
  height: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  h6 {
    font-size: 0.2rem;
    color: #fff;
  }
  .data-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
.data {
  font-size: 0.5rem;
  font-weight: bold;
}
.small {
  font-size: 0.2rem;
}
.step {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/step.png");
  background-size: contain;
}
.warning-red {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/warning-red.png");
  background-size: contain;
}
.sleep-red {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/sleep-red.png");
  background-size: contain;
}
.care-orange {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/care-orange.png");
  background-size: contain;
}
.consult {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/consult.png");
  background-size: contain;
}
.hospital {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../assets/hicling/hospital.png");
  background-size: contain;
}
.male {
  display: inline-block;
  width: 0.55rem;
  height: 0.49rem;
  background-image: url("../assets/hicling/male.png");
  background-size: cover;
}
.female {
  display: inline-block;
  width: 0.55rem;
  height: 0.49rem;
  background-image: url("../assets/hicling/female.png");
  background-size: cover;
}
.main-right {
  width: 4.2rem;
  margin-left: 0.28rem;
  h3 {
    height: 0.34rem;
    line-height: 0.34rem;
    background: rgba(25, 119, 242, 1);
    text-align: center;
    font-size: 0.22rem;
    color: #fff;
  }
}
.basic-information {
  margin-top: 0.2rem;
}
.basic-information-title {
  position: relative;
  height: 0.34rem;
  background: rgba(70, 85, 135, 1);
  p {
    position: relative;
    width: 1.2rem;
    padding-left: 0.14rem;
    height: 0.34rem;
    line-height: 0.34rem;
    background: rgba(25, 119, 242, 1);
    font-size: 0.22rem;
    color: #fff;
    &:after {
      @include triangle(0.17rem);
    }
  }
}
.basic-information-content {
  box-sizing: border-box;
  padding: 0.18rem 0.14rem;
  margin-top: 0.07rem;
  background: rgba(255, 255, 255, 0.11);
  .first-info {
    display: flex;
    justify-content: space-between;
    color: #fff;
    .first-info-left,
    .first-info-right {
      display: flex;
      align-items: flex-end;
    }
  }
  .second-info {
    display: flex;
    justify-content: space-between;
    span:first-child {
      color: #6065ee;
      font-size: 0.7rem;
      font-weight: bold;
    }
    span:last-child {
      color: #fc397b;
      font-size: 0.7rem;
      font-weight: bold;
    }
  }
  .third-info {
    display: flex;
    justify-content: space-between;
    span:first-child {
      position: relative;
      display: block;
      height: 0.24rem;
      background-color: #6065ee;
      border-top-left-radius: 0.12rem;
      border-bottom-left-radius: 0.12rem;
      &:after {
        position: absolute;
        right: -0.24rem;
        top: 0;
        content: "";
        border-top: solid 0.12rem #6065ee;
        border-left: solid 0.12rem #6065ee;
        border-bottom: solid 0.12rem transparent;
        border-right: solid 0.12rem transparent;
      }
    }
    span:last-child {
      position: relative;
      display: block;
      height: 0.24rem;
      background-color: #fc397b;
      border-top-right-radius: 0.12rem;
      border-bottom-right-radius: 0.12rem;
      &:after {
        position: absolute;
        left: -0.24rem;
        top: 0;
        content: "";
        border-top: solid 0.12rem transparent;
        border-left: solid 0.12rem transparent;
        border-bottom: solid 0.12rem #fc397b;
        border-right: solid 0.12rem #fc397b;
      }
    }
  }
}
.profession-list {
  display: flex;
  align-items: center;
  span:first-of-type {
    width: 1.26rem;
    margin-right: 0.15rem;
    font-size: 0.18rem;
  }
  span:last-of-type {
    color: #58ddff;
    margin-left: 0.15rem;
  }
  .profession-persent {
    width: 1.43rem;
  }
}
.markerP {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: rgba(25, 119, 242, 0.8);
  color: #eee;
  span:first-child {
    font-size: 0.4rem;
    font-weight: bold;
  }
}
.canvas2 {
  .canvas {
    vertical-align: bottom;
    z-index: 10000;
  }
}
</style>
