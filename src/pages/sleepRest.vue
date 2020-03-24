<template>
  <div id="sleepRest">
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
              <span>{{member.clingId}}</span>
            </li>
            <li>
              <span>地址</span>
              <span>--</span>
            </li>
            <li>
              <span>今日睡眠</span>
              <span
              
              >{{parseInt(member.sleepTotal/60)?parseInt(member.sleepTotal/60):0}}时{{parseInt(member.sleepTotal%60)?parseInt(member.sleepTotal%60):0}}分</span>
            </li>
            <li>
              <span>呼吸暂停</span>
              <span>--</span>
            </li>
            <li>
              <span>入睡</span>
              <p
                v-if="member.startSleep != 0"
                class="start"
              >入睡:&nbsp;{{new Date(member.startSleep).getHours()?new Date(member.startSleep).getHours():0}}时{{new Date(member.startSleep).getMinutes()?new Date(member.startSleep).getMinutes():0}}分</p>
              <p class="strat" v-else>入睡:00&nbsp;时&nbsp;00&nbsp;分</p>
            </li>
            <li>
              <span>苏醒</span>
              <p
                v-if="member.endSleep != 0"
                class="end"
              >苏醒:&nbsp;{{new Date(member.endSleep).getHours()?new Date(member.endSleep).getHours():0}}时{{new Date(member.endSleep).getMinutes()?new Date(member.endSleep).getMinutes():0}}分</p>
              <p class="end" v-else>苏醒:00&nbsp;时&nbsp;00&nbsp;分</p>
            </li>
          </ul>
          <div class="sleep">
            <div class="userInfo">
              <div class="avatar">
                <img :src="member.avatar" alt />
              </div>
              <div class="information">
                <div class="nameId">
                  <p class="name">
                    <span>姓名:</span>
                    {{member.name}}
                  </p>
                </div>
                <div class="posInfo">
                  <div class="pos">
                    <p class="id">ID:{{member.clingId}}</p>
                    <span class="posIcon"></span>
                    <p
                      :class="member.position ==0?'colorWhite':'colorGreen'"
                    >{{member.position==1?"翰临科技":member.position==2?"深圳远景达":"未知"}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="sleepInfo">
              <div class="sleepTime">
                <div class="slepDuration">
                  <span class="moonIcon"></span>
                  <div class="time">
                    <p class="span">
                      <span class="time_num">{{member.sleepTotal?parseInt(member.sleepTotal/60):0}}</span>
                      <span class="tim_num2">时</span>
                      <span class="time_num">{{member.sleepTotal?parseInt(member.sleepTotal%60):0}}</span>
                      <span class="tim_num2">分</span>
                    </p>
                  </div>
                </div>
                <div class="start_end">
                  <p
                    v-if="member.startSleep != 0"
                    class="start"
                  >入睡:&nbsp;{{new Date(member.startSleep).getHours()?new Date(member.startSleep).getHours():0}}时{{new Date(member.startSleep).getMinutes()?new Date(member.startSleep).getMinutes():0}}分</p>
                  <p class="strat" v-else>入睡:00&nbsp;时&nbsp;00&nbsp;分</p>
                  <p
                    v-if="member.endSleep != 0"
                    class="end"
                  >苏醒:&nbsp;{{new Date(member.endSleep).getHours()?new Date(member.endSleep).getHours():0}}时{{new Date(member.endSleep).getMinutes()?new Date(member.endSleep).getMinutes():0}}分</p>
                  <p class="end" v-else>苏醒:00&nbsp;时&nbsp;00&nbsp;分</p>
                </div>
              </div>
              <div class="sleepQuality">
                <span class="icon"></span>

                <p class="sleep_quality">
                  浅睡:
                  <span>{{member.lightSleep?member.lightSleep:0}}分</span>
                </p>
                <p class="sleep_quality">
                  中睡:
                  <span>{{member.midSleep?member.midSleep:0}}分</span>
                </p>
                <p class="sleep_quality">
                  深睡:
                  <span>{{member.deepSleep?member.deepSleep:0}}分</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secondContent">
        <div class="title-box">
          <p class="flex-center">
            <span class="moon"></span>
            <span>当前社区用户睡眠时长分布</span>
          </p>
        </div>
        <div class="sleep-distribution">
          <ve-histogram
            :data="sleepChartData.chartData"
            :extend="sleepChartData.extend"
            :tooltip-visible="false"
            :grid="sleepChartData.grid"
            :colors="sleepChartData.colors"
            :legend-visible="false"
            height="100%"
          ></ve-histogram>
        </div>
      </div>
      <div class="thirdContent">
        <div class="title-box">
          <p class="flex-center">
            <span class="breathe-small"></span>
            <span>当前社区用户呼吸暂停分布</span>
          </p>
        </div>
        <div class="hr-distribution">
          <ve-histogram
            :data="breathChartData.chartData"
            :extend="sleepChartData.extend"
            :tooltip-visible="false"
            :grid="sleepChartData.grid"
            :colors="sleepChartData.colors"
            :legend-visible="false"
            height="100%"
          ></ve-histogram>
        </div>
      </div>
    </div>
    <div class="main-right">
      <sleep-item
        v-for="(member,index) in userList"
        :member="member"
        class="mb"
        @choose="choose(index)"
        :key="member.userid"
      ></sleep-item>
    </div>
  </div>
</template>
<script>
import { actForSleep } from "@/mixin";
import SleepItem from "@/component/SleepItem";
import { mapMutations } from "vuex"
const arrSort = require("arr-sort");
export default {
  name: "SleepRest",
  components: {
    SleepItem
  },
  mixins: [ actForSleep ],
  data() {
    return {
      inputVal: "",
      sleepChartData: {
        chartData: {
          columns: ["name", "value"],
          rows: [
            { name: "0", value: 0 },
            { name: "4", value: 0 },
            { name: "5", value: 0 },
            { name: "6", value: 0 },
            { name: "7", value: 0 },
            { name: "8", value: 0 },
            { name: "10", value: 0 }
          ]
        },
        colors: ["#a366fe"],
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
      breathChartData: {
        chartData: {
          columns: ["呼吸暂停", "人数"],
          rows: [
            { 呼吸暂停: "4", 人数: 0 },
            { 呼吸暂停: "5", 人数: 0 },
            { 呼吸暂停: "6", 人数: 0 },
            { 呼吸暂停: "7", 人数: 0 },
            { 呼吸暂停: "8", 人数: 0 },
            { 呼吸暂停: "10", 人数: 0 }
          ]
        }
      },
      member: {},
      userList: [],
      websock: null,
      healthList: []
    };
  },

  methods: {
    ...mapMutations(["setBaseInfo"]),
    search() {
      this.userList.map(item => {
        if (item.name == this.inputVal || item.clingId == this.inputVal)
          this.member = item;
      });
    },
    choose(index) {
      this.member = this.userList[index];
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
        { attr: "position", asc: false },
        { attr: "sleepTotal", asc: false }
      ]);
    },
    resetSleepData(arr) {
      this.sleepChartData.chartData.rows = [
        { name: "0", value: 0 },
        { name: "4", value: 0 },
        { name: "5", value: 0 },
        { name: "6", value: 0 },
        { name: "7", value: 0 },
        { name: "8", value: 0 },
        { name: "10", value: 0 }
      ];
      arr.forEach(item => {
        if (item.sleepTotal <= 240) {
          this.sleepChartData.chartData.rows[0].value += 1;
        } else if (item.sleepTotal > 240 && item.sleepTotal <= 300) {
          this.sleepChartData.chartData.rows[1].value += 1;
        } else if (item.sleepTotal > 300 && item.sleepTotal <= 360) {
          this.sleepChartData.chartData.rows[2].value += 1;
        } else if (item.sleepTotal > 360 && item.sleepTotal <= 420) {
          this.sleepChartData.chartData.rows[3].value += 1;
        } else if (item.sleepTotal > 420 && item.sleepTotal <= 480) {
          this.sleepChartData.chartData.rows[4].value += 1;
        } else if (item.sleepTotal > 480 && item.sleepTotal <= 540) {
          this.sleepChartData.chartData.rows[5].value += 1;
        } else if (item.sleepTotal > 540) {
          this.sleepChartData.chartData.rows[6].value += 1;
        }
      });
    },
    closeSocket(){
      if(this.websock){
        this.websock.close();
        this.websock = null;
      }
    }
  },
  mounted() {
    this.setBaseData()
    window.onbeforeunload = e => {
      //监听页面刷新，离开 主动断开socket
      this.closeSocket()
    }
  },
  beforeDestroy() {
    this.closeSocket()
    if (this.timerOne) {
      clearInterval(this.timerOne);
      this.timerOne = null;
    }
    // this.cacheLocation();
  }
};
</script>
<style lang="scss" scoped>
@import "../style/minix.scss";
#sleepRest {
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
    font-size: 0.22rem;
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
    > ul > li {
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
//  睡眠 start
.sleep {
  margin-left: 0.1rem;
  width: 4.44rem;
  height: 2.72rem;
  border-radius: 0.08rem;
  background: rgba(64, 14, 139, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .userInfo {
    width: 95%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    margin: 0.2rem 2.5%;
    .avatar {
      width: 20%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .information {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      font-size: 0.28rem;
      .nameId {
        width: 100%;
        height: 50%;
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .posInfo {
        width: 100%;
        height: 50%;
        .pos {
          display: flex;
          height: 100%;
          justify-content: space-between;
          .posIcon {
            width: 20%;
            background-image: url("../assets/img/location1.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          p {
            width: 70%;
            font-size: 0.24rem;
            margin-right: 5px;
            line-height: 0.4rem;
          }
        }
        .electric {
          display: flex;
          height: 50%;
          .eleIcon {
            width: 20%;
            background-image: url("../assets/img/battery1.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          p {
            width: 70%;
            font-size: 0.24rem;
            margin-left: 5px;
          }
        }
      }
    }
  }
  .sleepInfo {
    width: 100%;
    height: 55%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .sleepTime {
      height: 45%;
      width: 96%;
      background-color: rgb(33, 0, 69);
      display: flex;
      .slepDuration {
        width: 58%;
        display: flex;
        .moonIcon {
          width: 30%;
          background-image: url("../assets/img/moon1.png");
          background-size: 60% 70%;
          background-repeat: no-repeat;
          background-position: center;
        }
        .time {
          width: 70%;
          height: 100%;
          position: relative;
          .span {
            height: 100%;
            width: 100%;
            .time_num2 {
              display: inline-block;
              width: 15%;
              text-align: center;
              display: inline-block;
              height: 100%;
              line-height: 0.7rem;
            }
            .time_num {
              font-size: 0.46rem;
              display: inline-block;
              width: 30%;
              text-align: center;
              display: inline-block;
              height: 100%;
              line-height: 0.7rem;
            }
          }
        }
      }
      .start_end {
        width: 40%;
        p {
          height: 50%;
          width: 100%;
          line-height: 0.35rem;
        }
      }
    }
    .sleepQuality {
      height: 45%;
      width: 96%;
      background-color: rgb(33, 0, 69);
      display: flex;
      justify-content: space-around;
      position: relative;
      .icon {
        width: 15%;
        height: 60%;

        transform: translateY(30%);
        background-image: url("../assets/img/zhexiantu1.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      .sleep_quality {
        color: aqua;
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
}

.bg-blue {
  background: rgba(70, 85, 135, 1);
}
// 睡眠 end

.moon {
  display: inline-block;
  margin-right: 0.12rem;
  width: 0.3rem;
  height: 0.3rem;
  background-image: url("../assets/hicling/moon.png");
  background-size: contain;
}
.breathe-small {
  display: inline-block;
  margin-right: 0.12rem;
  width: 0.3rem;
  height: 0.3rem;
  background-image: url("../assets/hicling/breath-small.png");
  background-size: contain;
}
.sleep-distribution {
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
  margin-left: 0.4rem;
  overflow-y: auto;
  cursor: pointer;
}
.mb {
  margin-bottom: 0.2rem;
}
</style>
