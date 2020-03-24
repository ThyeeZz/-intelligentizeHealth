<template>
  <div id="RealtimeActivity">
    <div class="mian-left">
      <div class="firstContent">
        <div class="search">
          <div class="search-box">
            <input
              style="color:#fff"
              type="text"
              placeholder="请输入用户姓名或编码"
              v-model="inputVal"
              @keydown.enter.capture="search"
            />
            <span class="search-icon"></span>
          </div>
        </div>
        <div class="result">
          <ul>
            <li>
              <span>姓名</span>
              <span>{{member.name}}</span>
            </li>
            <li>
              <span>年龄</span>
              <span>{{member.age?member.age:0}}</span>
            </li>
            <li>
              <span>身份证</span>
              <span>--</span>
            </li>
            <li>
              <span>ID</span>
              <span>{{member.deviceId}}</span>
            </li>
            <li>
              <span>地址</span>
              <span>--</span>
            </li>
            <li>
              <span>心率</span>
              <span>{{member.hr}} bpm</span>
            </li>
            <li>
              <span>今日步数</span>
              <span>{{member.steps}}</span>
            </li>
            <li>
              <span>卡路里</span>
              <span>{{member.totalCal}}千卡</span>
            </li>
            <li>
              <span>血压hh</span>
              <span>{{member.hbp}}/{{member.lbp}}mmHg</span>
            </li>
          </ul>
          <!-- 左侧信息展示板 -->
          <div :class="member.bp>limit?'left-showbord bg-red':'left-showbord bg-blue'">
            <div class="showbord-head">
              <div class="avatar">
                <img :src="member.avatar" alt />
              </div>
              <div class="user-info">
                <div class="user-info-top">
                  <div class="name">
                    <span>{{member.name}}</span>
                  </div>
                  <div class="position">
                    <span class="pos-icon"></span>
                    <p>{{member.position==1?"翰临科技":"未知"}}</p>
                  </div>
                </div>
                <div class="user-info-bot">
                  <span
                    class="device-icon bgcb"
                    v-if="member.deviceId=='Band'||member.deviceId=='VOC'"
                  ></span>
                  <span
                    class="device-icon bgca"
                    v-if="member.deviceId=='Aura'||member.deviceId=='Leap'"
                  ></span>
                  <span class="device-icon bgctmo" v-if="member.deviceId=='Thermo'"></span>
                  <p class="device-name">{{member.deviceId}}</p>
                </div>
              </div>
            </div>

            <div class="sport-data">
              <!-- 温度 心率 卡路里 步数  匹配BAND VOC设备展示-->
              <div
                class="sport-data-top-band"
                v-if="member.deviceId=='VOC'||member.deviceId=='Band'"
              >
                <div class="hr">
                  <div class="hr-left">
                    <p class="hr-left-icon"></p>
                    <p class="hr-left-data">{{member.hr}}</p>
                  </div>
                  <div class="hr-right">
                    <p class="hr-right-tag">心率负荷</p>
                    <p
                      class="hr-right-data"
                      v-if="member.hr"
                    >{{member.gender==0?Math.round(member.hr/(226-member.age)*100):Math.round(member.hr/(220-member.age)*100)}}%</p>
                    <p v-else>0%</p>
                  </div>
                </div>
                <div class="band">
                  <div :class="member.bp>limit?'band-left-warn':'band-left'">
                    <p class="band-left-icon"></p>
                    <p class="band-left-data">{{member.bp.toFixed(1)}}</p>
                    <div class="band-left-unit-wrap">
                      <p class="band-left-unit"></p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 温度 卡路里 步数 匹配THERMO设备展示-->
              <div class="sport-data-top-thermo" v-else-if="member.deviceId=='Thermo'">
                <div :class="member.bp>limit?'thermo-left-warn':'thermo-left'">
                  <p class="thermo-left-icon"></p>
                  <p class="thermo-left-data">{{member.bp.toFixed(1)}}</p>
                  <div class="thermo-left-unit-wrap">
                    <p class="thermo-left-unit"></p>
                  </div>
                </div>
                <div class="thermo-right" :style="member.bp>limit?'color:#f14246':'color:#fff'">
                  <span class="tem-right-desc">上次测量</span>
                </div>
              </div>
              <!-- 心率 血压 卡路里 步数 匹配AURA LEAP unknown 展示 -->
              <div class="sport-data-top-aura" v-else>
                <div class="hr">
                  <div class="hr-left">
                    <p class="hr-left-icon"></p>
                    <p class="hr-left-data">{{member.hr}}</p>
                  </div>
                  <div class="hr-right">
                    <p class="hr-right-tag">心率负荷</p>
                    <p
                      class="hr-right-data"
                      v-if="member.hr"
                    >{{member.gender==0?Math.round(member.hr/(226-member.age)*100):Math.round(member.hr/(220-member.age)*100)}}%</p>
                    <p v-else>0%</p>
                  </div>
                </div>
                <div class="bp">
                  <div class="bp-left">
                    <p class="bp-left-icon"></p>
                  </div>
                  <div class="bp-right">
                    <span class="bp-right-tag">上次测量</span>
                    <span class="bp-right-data">{{member.hbp}}/{{member.lbp}}</span>
                  </div>
                </div>
              </div>
              <div class="sport-data-bot">
                <div class="st-cal">
                  <div class="st-cal-left">
                    <p class="st-cal-left-icon"></p>
                    <p class="st-cal-left-data">{{member.totalCal}}</p>
                  </div>
                  <div class="st-cal-right">
                    <p class="st-cal-right-uni">千卡</p>
                  </div>
                </div>
                <div class="st-cal">
                  <div class="st-cal-left">
                    <p class="st-cal-left-icon step-icon"></p>
                    <p class="st-cal-left-data">{{member.steps}}</p>
                  </div>
                  <div class="st-cal-right">
                    <p class="st-cal-right-uni">步</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secondContent">
        <div class="title-box">
          <p class="flex-center">
            <span class="step-small"></span>
            <span>当前社区用户活动步数分布</span>
          </p>
          <p>
            <span style="color:#4BF9FF">步数</span>
          </p>
        </div>
        <div class="step-distribution">
          <ve-histogram
            :data="stepChartData.chartData"
            :extend="stepChartData.extend"
            :tooltip-visible="false"
            :grid="stepChartData.grid"
            :colors="stepChartData.colors"
            :legend-visible="false"
            height="100%"
          ></ve-histogram>
        </div>
      </div>
      <div class="thirdContent">
        <div class="title-box">
          <p class="flex-center">
            <span class="heart-small"></span>
            <span>当前社区用户心率分布</span>
          </p>
          <p>
            <span style="color:#4BF9FF">心率/bpm</span>
          </p>
        </div>
        <div class="hr-distribution">
          <ve-histogram
            :data="hrChartData.chartData"
            :extend="hrChartData.extend"
            :tooltip-visible="false"
            :grid="hrChartData.grid"
            :colors="hrChartData.colors"
            :legend-visible="false"
            height="100%"
          ></ve-histogram>
        </div>
      </div>
    </div>
    <div class="main-right">
      <activity-item-thermo
        v-for="(member,index) in renderList[n]"
        :member="member"
        :index="index"
        :limit="limit"
        class="mb"
        :key="index"
        @choose="choose(index)"
      ></activity-item-thermo>
    </div>
  </div>
</template>
<script>
import ActivityItemThermo from "@/component/ActivityItemThermo";
import { actForActive } from "@/mixin";
import { mapMutations } from "vuex";
const arrSort = require("arr-sort");
export default {
  name: "RealtimeActivity",
  components: {
    ActivityItemThermo
  },
  mixins: [ actForActive ],
  data() {
    return {
      limit: 37.4,
      n: 0,
      renderList: [],
      inputVal: "",
      hrChartData: {
        chartData: {
          columns: ["name", "value"],
          rows: [
            { name: "小于65", value: 0 },
            { name: "70", value: 0 },
            { name: "75", value: 0 },
            { name: "80", value: 0 },
            { name: "85", value: 0 },
            { name: "90", value: 0 },
            { name: "95", value: 0 },
            { name: "100", value: 0 },
            { name: "105", value: 0 },
            { name: "110", value: 0 },
            { name: "115", value: 0 },
            { name: "120", value: 0 },
            { name: "120以上", value: 0 }
          ]
        },
        colors: ["#58DDFF"],
        extend: {
          yAxis: {
            splitNumber: 1,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#465587",
                width: 1,
                type: "dashed"
              }
            },
            axisLabel: {
              color: "#fff"
            }
          },
          xAxis: {
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            }
          },
          series: {
            label: { show: true, position: "top" },
            barWidth: 20,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#84FF84",
                    "#84FF84",
                    "#84FF84",
                    "#58DDFF",
                    "#58DDFF",
                    "#58DDFF",
                    "#FE923F",
                    "#FE923F",
                    "#FE923F",
                    "#FF6A6A",
                    "#FF6A6A ",
                    "#FF6A6A",
                    "#FF6A6A"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        },
        grid: {
          x: 0,
          y: 20,
          y2: 0,
          x2: 0,
          backgroundColor: "#fff",
          y2: 0
        }
      },
      stepChartData: {
        chartData: {
          columns: ["name", "value"],
          rows: [
            { name: "小于1k", value: 0 },
            { name: "1k-3k", value: 0 },
            { name: "3k-5k", value: 0 },
            { name: "5k-7k", value: 0 },
            { name: "7k-9k", value: 0 },
            { name: "9k-12k", value: 0 },
            { name: "12k以上", value: 0 }
          ]
        },
        colors: ["#84FF84"],
        extend: {
          yAxis: {
            splitNumber: 1,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#465587",
                width: 1,
                type: "dashed"
              }
            },
            axisLabel: {
              color: "#fff"
            }
          },
          xAxis: {
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            }
          },
          series: {
            label: { show: true, position: "top" },
            barWidth: 20
          }
        },
        grid: {
          x: 0,
          y: 20,
          y2: 0,
          x2: 0,
          backgroundColor: "#fff",
          y2: 0
        }
      },
      member: {},
      userList: []
    };
  },

  methods: {
    ...mapMutations(["setBaseInfo"]),
    getBp(mac, time, hbp, lbp) {
      //var num=parseInt(96,16)  16进制转10进制
      // var num=item.toString(16); 10进制转16进制
      let bp = ((hbp * 256 + lbp) / 10).toFixed(1);
      bp = bp ? parseFloat(bp) : 0;
      return bp;
    },

    //查询 不完整
    search() {
      this.userList.map(item => {
        if (item.name == this.inputVal || item.deviceId == this.inputVal)
          this.member = item;
      });
    },
    //选择
    choose(index) {
      this.member = this.renderList[this.n][index];
    },
    //缓存位置信息
    cacheLocation() {
      window.sessionStorage.setItem("userList", JSON.stringify(this.userList));
    },
    autoGroup(arr) {
      let targetArr = [];
      let tempArr = [...arr];
      while (tempArr.length > 0) {
        targetArr.push(tempArr.splice(0, 12));
      }
      return targetArr;
    },
    autoPage() {
      this.autoPageTimer = setInterval(() => {
        this.n = this.n < this.renderList.length - 1 ? this.n + 1 : 0;
      }, 15000);
    },
    sortFunc() {
      let time = new Date().getTime();
      for (let i of this.userList) {
        // 0：未知；1：翰临；2：深圳远景达
        i.position = 0;
        if (time - i.time < 300000 && i.gt === "02-02-f0-31-35-a8") {
          i.position = 1;
        } else if (time - i.time < 300000 && i.gt === "02-01-db-00-f3-7c") {
          i.position = 1;
        } else if (time - i.time < 300000 && i.gt === "02-01-7d-16-82-15") {
          i.position = 1;
        } else if (time - i.time < 300000 && i.gt === "02-0f-b0-6d-0a-f3") {
          i.position = 1;
        }
      }
      this.userList = arrSort(this.userList, [
        // { attr: "position", asc: false },
        { attr: "bp", asc: false },
        { attr: "hr", asc: false }
      ]);
      this.renderList = this.autoGroup(this.userList);
    },
    resetHrData(arr) {
      this.hrChartData.chartData.rows = [
        { name: "小于65", value: 0 },
        { name: "70", value: 0 },
        { name: "75", value: 0 },
        { name: "80", value: 0 },
        { name: "85", value: 0 },
        { name: "90", value: 0 },
        { name: "95", value: 0 },
        { name: "100", value: 0 },
        { name: "105", value: 0 },
        { name: "110", value: 0 },
        { name: "115", value: 0 },
        { name: "120", value: 0 },
        { name: "120以上", value: 0 }
      ];
      arr.forEach(item => {
        if (item.hr <= 65) {
          this.hrChartData.chartData.rows[0].value += 1;
        } else if (item.hr > 65 && item.hr <= 70) {
          this.hrChartData.chartData.rows[1].value += 1;
        } else if (item.hr > 70 && item.hr <= 75) {
          this.hrChartData.chartData.rows[2].value += 1;
        } else if (item.hr > 75 && item.hr <= 80) {
          this.hrChartData.chartData.rows[3].value += 1;
        } else if (item.hr > 80 && item.hr <= 85) {
          this.hrChartData.chartData.rows[4].value += 1;
        } else if (item.hr > 85 && item.hr <= 90) {
          this.hrChartData.chartData.rows[5].value += 1;
        } else if (item.hr > 90 && item.hr <= 95) {
          this.hrChartData.chartData.rows[6].value += 1;
        } else if (item.hr > 95 && item.hr <= 100) {
          this.hrChartData.chartData.rows[7].value += 1;
        } else if (item.hr > 100 && item.hr <= 105) {
          this.hrChartData.chartData.rows[8].value += 1;
        } else if (item.hr > 105 && item.hr <= 110) {
          this.hrChartData.chartData.rows[9].value += 1;
        } else if (item.hr > 110 && item.hr <= 115) {
          this.hrChartData.chartData.rows[10].value += 1;
        } else if (item.hr > 115 && item.hr <= 120) {
          this.hrChartData.chartData.rows[11].value += 1;
        } else if (item.hr > 120) {
          this.hrChartData.chartData.rows[12].value += 1;
        }
      });
    },
    resetStData(arr) {
      this.stepChartData.chartData.rows = [
        { name: "小于1k", value: 0 },
        { name: "1k-3k", value: 0 },
        { name: "3k-5k", value: 0 },
        { name: "5k-7k", value: 0 },
        { name: "7k-9k", value: 0 },
        { name: "9k-12k", value: 0 },
        { name: "12k以上", value: 0 }
      ];
      arr.forEach(item => {
        if (item.steps <= 1000) {
          this.stepChartData.chartData.rows[0].value += 1;
        } else if (item.steps > 1000 && item.steps <= 3000) {
          this.stepChartData.chartData.rows[1].value += 1;
        } else if (item.steps > 3000 && item.steps <= 5000) {
          this.stepChartData.chartData.rows[2].value += 1;
        } else if (item.steps > 5000 && item.steps <= 7000) {
          this.stepChartData.chartData.rows[3].value += 1;
        } else if (item.steps > 7000 && item.steps <= 90000) {
          this.stepChartData.chartData.rows[4].value += 1;
        } else if (item.steps > 90000 && item.steps <= 12000) {
          this.stepChartData.chartData.rows[5].value += 1;
        } else if (item.steps > 12000) {
          this.stepChartData.chartData.rows[6].value += 1;
        }
      });
    },
    // 上传警报
    alarmUpload() {
      if (this.uploadTimer) {
        clearInterval(this.uploadTimer);
        this.uploadTimer = null;
      }
      this.uploadTimer = setInterval(() => {
        for (let member of this.userList) {
          let alarmArr = [];
          if (member.bp > 37.4) {
            console.log("体温过高报警啦");
            alarmArr.push({
              patientId: member.patainId,
              clingId: member.clingId,
              mac: member.mac,
              deviceId: member.deviceIdNum,
              gt: member.gt,
              type: 1,
              time: Math.round(new Date() / 1000),
              temp: member.bp,
              hr: member.hr,
              lbp: member.lbp,
              hbp: member.hbp
            });
          }
          if (member.hr > 125) {
            console.log("心率过高报警啦");
            alarmArr.push({
              patientId: member.patainId,
              clingId: member.clingId,
              mac: member.mac,
              deviceId: member.deviceIdNum,
              gt: member.gt,
              type: 2,
              time: Math.round(new Date() / 1000),
              temp: member.bp,
              hr: member.hr,
              lbp: member.lbp,
              hbp: member.hbp
            });
          }
          if (member.hbp > 200) {
            console.log("血压过高报警啦");
            alarmArr.push({
              patientId: member.patainId,
              clingId: member.clingId,
              mac: member.mac,
              deviceId: member.deviceIdNum,
              gt: member.gt,
              type: 3,
              time: Math.round(new Date() / 1000),
              temp: member.bp,
              hr: member.hr,
              lbp: member.lbp,
              hbp: member.hbp
            });
          }

          if (alarmArr.length) {
            this.postRequest("api/alert/addall", alarmArr).then(res => {
              console.log(res.data);
            }).catch(err=>{
              console.log(err)
            })
          }
        }
      }, 600000);
    },
    closeSocket() {
      if(this.socket){
        this.socket.close();
        this.socket = null;
      }
    }
  },
  beforeDestroy() {
    this.closeSocket();
    // 离开时清除自动滚屏和自动报警的定时器
    if (this.autoPageTimer) { 
      clearInterval(this.autoPageTimer);
      this.autoPageTimer = null;
    }
    if (this.uploadTimer) {
        clearInterval(this.uploadTimer);
        this.uploadTimer = null;
      }
    this.cacheLocation();
  },
  mounted() {
    this.setBaseData();
    window.onbeforeunload = e => {
      //监听页面刷新，离开 主动断开socket
      this.closeSocket();
    };
    
  },
};
</script>
<style lang="scss" scoped>
@import "../style/minix.scss";
#RealtimeActivity {
  display: flex;
  padding: 0.23rem 0.2rem 0.26rem;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  font-size: 0.2rem;
  background-image: url("../assets/hicling/bgi-index.png");
  background-size: cover;
  .mian-left {
    width: 7.94rem;
    .secondContent,
    .thirdContent {
      margin-top: 0.2rem;
      padding: 0 0.22rem;
    }
  }
}
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 0.34rem;
  background-color: rgba(70, 85, 135, 1);
  p:first-child {
    position: relative;
    padding-left: 0.14rem;
    padding-right: 0.14rem;
    height: 0.34rem;
    line-height: 0.34rem;
    background: rgba(25, 119, 242, 1);
    color: #fff;
    &:after {
      @include triangle(0.17rem);
    }
  }
  p:last-child {
    padding-right: 0.14rem;
    font-size: 0.16rem;
  }
}
.search-box {
  position: relative;
  width: 4.04rem;
  height: 0.4rem;
  border: 1px solid rgba(25, 119, 242, 1);
  border-radius: 0.3rem;
  margin-bottom: 0.32rem;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    text-align: center;
    color: #465587;
  }
  .search-icon {
    position: absolute;
    top: 0.04rem;
    right: 0.2rem;
    width: 0.32rem;
    height: 0.32rem;
    background-image: url("../assets/hicling/search.png");
    background-size: contain;
    cursor: pointer;
  }
}

.firstContent {
  padding: 0.15rem 0.2rem;
  background: rgba(21, 24, 54, 1);
  border-radius: 0.08rem;
  .result {
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.07rem;
      height: 0.3rem;
      width: 2.95rem;
      &:nth-of-type(2n + 1) {
        background: rgba(36, 39, 91, 1);
      }
      span:first-child {
        color: #33d5ff;
      }
    }
  }
}
// 查询到的会员
.left-showbord {
  margin-left: 0.1rem;
  width: 4.44rem;
  height: 2.72rem;
  border-radius: 0.08rem;
  background: rgba(69, 85, 136, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 0.03rem;
  cursor: pointer;
  background: rgba(69, 85, 136, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .showbord-head {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.1rem 0.1rem;
    margin-bottom: 0.05rem;
    .avatar {
      width: 20%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user-info {
      width: 75%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .user-info-top {
        height: 45%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .name {
          width: 50%;
          height: 100%;
        }
        .position {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          .pos-icon {
            width: 40%;
            height: 100%;
            background: url("../assets/img/location1.png") center center
              no-repeat;
            background-size: contain;
          }
        }
      }
      .user-info-bot {
        height: 45%;
        width: 100%;
        display: flex;
        justify-content: start;
        .device-icon {
          width: 10%;
          height: 100%;
        }
        .bgcb {
          background: url("../assets/img/ClingBand.png") center center no-repeat;
          background-size: contain;
          margin-right: 10px;
        }
        .bgca {
          background: url("../assets/img/ClingAura.png") center center no-repeat;
          background-size: contain;
          margin-right: 10px;
        }
        .bgctmo {
          background: url("../assets/img/ClingThermo.png") center center
            no-repeat;
          background-size: contain;
          margin-right: 10px;
        }
        .device-name {
          font-size: 0.22rem;
        }
      }
    }
  }
  .sport-data {
    width: 100%;
    height: 55%;
    display: flex;
    box-sizing: border-box;
    padding: 0.05rem 0.1rem;
    flex-direction: column;
    justify-content: space-between;
    .sport-data-top-aura {
      height: 47%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .hr {
        width: 48.5%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #000;
        .hr-left {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 0.36rem;
          .hr-left-icon {
            width: 40%;
            height: 80%;
            background: url("../assets/img/hr@x2.png") center center no-repeat;
            background-size: contain;
          }
          .hr-left-data {
            font-size: 0.36rem;
          }
        }
        .hr-right {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 0.2rem;
          box-sizing: border-box;
          padding-right: 0.03rem;
          .hr-right-tag {
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .hr-right-data {
            text-align: center;
          }
        }
      }
      .bp {
        width: 48.5%;
        height: 100%;
        background-color: #000;
        display: flex;
        .bp-left {
          width: 40%;
          height: 100%;
          display: flex;
          align-items: center;
          .bp-left-icon {
            width: 90%;
            height: 90%;
            background: url("../assets/img/bp@x2.png") no-repeat;
            background-size: contain;
            background-position: 50% 50%;
          }
        }
        .bp-right {
          display: flex;
          flex-direction: column;
          width: 60%;
          box-sizing: border-box;
          padding-right: 0.03rem;
          .bp-right-tag {
            text-align: right;
            font-size: 0.22rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .bp-right-data {
            text-align: center;
            font-size: 0.22rem;
          }
        }
      }
    }
    .sport-data-top-thermo {
      height: 47%;
      width: 100%;
      background-color: #000;
      display: flex;
      justify-content: space-between;
      .thermo-left {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        .thermo-left-icon {
          width: 20%;
          height: 80%;
          background: url("../assets/img/temp-normal@x2.png") center center
            no-repeat;
          background-size: contain;
          justify-content: space-around;
        }
        .thermo-left-data {
          width: 35%;
          font-size: 0.28rem;
          margin-right: 10px;
          text-align: left;
        }
        .thermo-left-unit-wrap {
          width: 20%;
          height: 100%;
          display: flex;
          align-items: flex-start;

          .thermo-left-unit {
            margin-top: 0.05rem;
            width: 100%;
            height: 60%;
            background: url("../assets/img/temp-unit.png") center center
              no-repeat;
            background-size: contain;
          }
        }
      }
      .thermo-left-warn {
        color: #f14246;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        .thermo-left-icon {
          width: 20%;
          height: 80%;
          background: url("../assets/img/temp-alarm.png") center center
            no-repeat;
          background-size: contain;
          justify-content: space-around;
        }
        .thermo-left-data {
          width: 35%;
          font-size: 0.32rem;
          margin-right: 10px;
          text-align: left;
        }
        .thermo-left-unit-wrap {
          width: 20%;
          height: 100%;
          display: flex;
          align-items: flex-start;

          .thermo-left-unit {
            margin-top: 0.05rem;
            width: 100%;
            height: 60%;
            background: url("../assets/img/temp-unit-red.png") center center
              no-repeat;
            background-size: contain;
          }
        }
      }
      .thermo-right {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .tem-right-desc {
          margin-top: 0.03rem;
        }
      }
    }
    .sport-data-top-band {
      height: 47%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .hr {
        width: 48.5%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #000;
        .hr-left {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 0.32rem;
          .hr-left-icon {
            width: 40%;
            height: 80%;
            background: url("../assets/img/hr@x2.png") center center no-repeat;
            background-size: contain;
          }
          .hr-left-data {
            font-size: 0.32rem;
          }
        }
        .hr-right {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 0.16rem;
          box-sizing: border-box;
          padding-right: 0.03rem;
          .hr-right-tag {
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .hr-right-data {
            text-align: center;
            font-size: 0.16rem;
          }
        }
      }
      .band {
        width: 48.5%;
        height: 100%;
        background: rgba(0, 0, 0, 1);
        .band-left {
          box-sizing: border-box;
          padding-left: 0.05rem;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          .band-left-icon {
            width: 20%;
            height: 80%;
            background: url("../assets/img/temp-normal@x2.png") center center
              no-repeat;
            background-size: contain;
            justify-content: space-around;
          }
          .band-left-data {
            width: 35%;
            font-size: 0.28rem;
            margin-right: 10px;
            text-align: left;
          }
          .band-left-unit-wrap {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;

            .band-left-unit {
              margin-top: 0.05rem;
              width: 100%;
              height: 60%;
              background: url("../assets/img/temp-unit.png") center center
                no-repeat;
              background-size: contain;
            }
          }
        }
        .band-left-warn {
          color: #f14246;
          box-sizing: border-box;
          padding-left: 0.05rem;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          .band-left-icon {
            width: 20%;
            height: 80%;
            background: url("../assets/img/temp-alarm.png") center center
              no-repeat;
            background-size: contain;
            justify-content: space-around;
          }
          .band-left-data {
            width: 35%;
            font-size: 0.32rem;
            margin-right: 10px;
            text-align: left;
          }
          .band-left-unit-wrap {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;

            .band-left-unit {
              margin-top: 0.05rem;
              width: 100%;
              height: 60%;
              background: url("../assets/img/temp-unit-red.png") center center
                no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
    .sport-data-bot {
      height: 47%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .st-cal {
        background-color: #000;
        width: 48.5%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .st-cal-left {
          width: 70%;
          height: 100%;
          display: flex;
          align-items: center;
          .st-cal-left-icon {
            width: 29%;
            height: 79%;
            background: url("../assets/img/cal.png") center center no-repeat;
            background-size: contain;
          }
          .st-cal-left-data {
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 0.36rem;
          }
          .step-icon {
            background: url("../assets/img/step@x2.png") center center no-repeat;
            background-size: contain;
          }
        }
        .st-cal-right {
          width: 30%;
          height: 100%;
          display: flex;
          box-sizing: border-box;
          padding-right: 0.03rem;
          flex-direction: column-reverse;
          .st-cal-right-uni {
            font-size: 0.22rem;
            text-align: right;
            margin-bottom: 0.03rem;
          }
        }
      }
    }
  }
}
.content {
  box-sizing: border-box;
  position: relative;
  padding: 0.08rem 0.1rem;
  height: 2.35rem;
  border-radius: 0.08rem;
}
.hr-num {
  position: absolute;
  left: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.5rem;
  font-weight: bold;
}

.bp-num {
  position: absolute;
  right: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.4rem;
  font-weight: bold;
  p {
    text-align: right;
    line-height: 0.4rem;
  }
  .slash {
    margin-right: 2px;
    font-size: 0.4rem;
    font-weight: 300;
  }
}
.cal-box {
  position: absolute;
  left: 0.1rem;
  bottom: 0.08rem;
  p {
    display: flex;
    align-items: center;
    font-size: 0.4rem;
  }
}
.step-box {
  position: absolute;
  right: 0.1rem;
  bottom: 0.08rem;
  p {
    display: flex;
    align-items: center;
    font-size: 0.4rem;
  }
}

// 查询到的会员 end

.step-small {
  display: inline-block;
  margin-right: 0.12rem;
  width: 0.3rem;
  height: 0.3rem;
  background-image: url("../assets/hicling/step-white.png");
  background-size: contain;
}
.heart-small {
  display: inline-block;
  margin-right: 0.12rem;
  width: 0.3rem;
  height: 0.3rem;
  background-image: url("../assets/hicling/heart.png");
  background-size: contain;
}
.step-distribution {
  height: 2rem;
  // background-image: url("../assets/hicling/step-bg.png");
}
.hr-distribution {
  height: 2.2rem;
  // background-image: url("../assets/hicling/hr-bg.png");
}
.main-right {
  width: 11rem;
  height: 9rem;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-left: 0.23rem;
  overflow-y: auto;
}
.mb {
  margin-bottom: 0.2rem;
  margin-right: 0.1rem;
}
.bg-red {
  background: #f14246;
}
.bg-blue {
  background: rgba(70, 85, 135, 1);
}
</style>
